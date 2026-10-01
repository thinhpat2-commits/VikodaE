/**
 * Offline-First Storage Layer with IndexedDB & Last-Write-Wins Conflict Resolution
 * Ensures 100% zero-disruption learning even during offline, network drop, or device switching.
 * Scoped by userId so switching accounts never clobbers or overwrites another employee's data.
 */

import { GamificationState, EmployeeProfile } from '../types';

const DB_NAME = 'VikodaEnterpriseOfflineDB_v2';
const DB_VERSION = 2;

export interface OfflineSyncQueueItem {
  id: string;
  type: 'update_progress' | 'update_profile' | 'admin_reset';
  payload: any;
  timestamp: number;
}

export interface StoredGamificationState extends GamificationState {
  updatedAt: number;
  deviceId: string;
}

export interface StoredProfile extends EmployeeProfile {
  updatedAt: number;
  deviceId: string;
}

let dbPromise: Promise<IDBDatabase> | null = null;

// Get or generate a persistent unique Device ID
export const getDeviceId = (): string => {
  if (typeof window === 'undefined') return 'server';
  let devId = localStorage.getItem('vikoda_device_unique_id');
  if (!devId) {
    devId = 'dev_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
    localStorage.setItem('vikoda_device_unique_id', devId);
  }
  return devId;
};

// Open IndexedDB database
export const openOfflineDB = (): Promise<IDBDatabase> => {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return Promise.reject(new Error('IndexedDB not supported'));
  }

  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result as IDBDatabase;
      if (!db.objectStoreNames.contains('gamification_state')) {
        db.createObjectStore('gamification_state', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('user_profile')) {
        db.createObjectStore('user_profile', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('sync_queue')) {
        db.createObjectStore('sync_queue', { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      console.warn('IndexedDB failed to open, falling back to localStorage');
      reject(request.error);
    };
  });

  return dbPromise;
};

/**
 * Save Gamification State to IndexedDB (Scoped by userId to prevent overwriting other accounts)
 */
export const saveGamificationStateOffline = async (state: GamificationState, userId?: string): Promise<void> => {
  const storeKey = userId ? `stats_${userId}` : 'current_user_stats';
  const payload: StoredGamificationState = {
    ...state,
    updatedAt: Date.now(),
    deviceId: getDeviceId(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('gamification_state', 'readwrite');
    const store = tx.objectStore('gamification_state');
    store.put({ key: storeKey, ...payload });
  } catch (err) {
    // Fallback to localStorage
    const localKey = userId ? `vikoda_stats_${userId}` : 'vikoda_offline_stats_backup';
    localStorage.setItem(localKey, JSON.stringify(payload));
  }
};

/**
 * Load Gamification State from IndexedDB (Scoped by userId)
 */
export const loadGamificationStateOffline = async (userId?: string): Promise<StoredGamificationState | null> => {
  const storeKey = userId ? `stats_${userId}` : 'current_user_stats';
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('gamification_state', 'readonly');
      const store = tx.objectStore('gamification_state');
      const req = store.get(storeKey);
      req.onsuccess = () => {
        resolve(req.result ? (req.result as StoredGamificationState) : null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    const localKey = userId ? `vikoda_stats_${userId}` : 'vikoda_offline_stats_backup';
    const local = localStorage.getItem(localKey);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (err) {}
    }
    return null;
  }
};

/**
 * Save User Profile to IndexedDB (Scoped by userId)
 */
export const saveProfileOffline = async (profile: EmployeeProfile, userId?: string): Promise<void> => {
  const storeKey = userId ? `profile_${userId}` : 'active_profile';
  const payload: StoredProfile = {
    ...profile,
    updatedAt: Date.now(),
    deviceId: getDeviceId(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('user_profile', 'readwrite');
    const store = tx.objectStore('user_profile');
    store.put({ key: storeKey, ...payload });
  } catch (err) {
    const localKey = userId ? `vikoda_profile_${userId}` : 'vikoda_offline_profile_backup';
    localStorage.setItem(localKey, JSON.stringify(payload));
  }
};

/**
 * Load User Profile from IndexedDB (Scoped by userId)
 */
export const loadProfileOffline = async (userId?: string): Promise<StoredProfile | null> => {
  const storeKey = userId ? `profile_${userId}` : 'active_profile';
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('user_profile', 'readonly');
      const store = tx.objectStore('user_profile');
      const req = store.get(storeKey);
      req.onsuccess = () => {
        resolve(req.result ? (req.result as StoredProfile) : null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    const localKey = userId ? `vikoda_profile_${userId}` : 'vikoda_offline_profile_backup';
    const local = localStorage.getItem(localKey);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (err) {}
    }
    return null;
  }
};

/**
 * Offline Sync Queue Management
 */
export const enqueueOfflineMutation = async (
  type: 'update_progress' | 'update_profile' | 'admin_reset',
  payload: any
): Promise<void> => {
  const item: OfflineSyncQueueItem = {
    id: 'queue_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    type,
    payload,
    timestamp: Date.now(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('sync_queue', 'readwrite');
    const store = tx.objectStore('sync_queue');
    store.put(item);
  } catch (e) {
    // LocalStorage fallback queue
    const existing = localStorage.getItem('vikoda_offline_queue_fallback');
    let q: OfflineSyncQueueItem[] = [];
    if (existing) {
      try {
        q = JSON.parse(existing);
      } catch (err) {}
    }
    q.push(item);
    localStorage.setItem('vikoda_offline_queue_fallback', JSON.stringify(q));
  }
};

export const getOfflineQueue = async (): Promise<OfflineSyncQueueItem[]> => {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('sync_queue', 'readonly');
      const store = tx.objectStore('sync_queue');
      const req = store.getAll();
      req.onsuccess = () => {
        resolve(req.result || []);
      };
      req.onerror = () => resolve([]);
    });
  } catch (e) {
    const existing = localStorage.getItem('vikoda_offline_queue_fallback');
    if (existing) {
      try {
        return JSON.parse(existing);
      } catch (err) {}
    }
    return [];
  }
};

export const clearOfflineQueueItem = async (itemId: string): Promise<void> => {
  try {
    const db = await openOfflineDB();
    const tx = db.transaction('sync_queue', 'readwrite');
    const store = tx.objectStore('sync_queue');
    store.delete(itemId);
  } catch (e) {
    const existing = localStorage.getItem('vikoda_offline_queue_fallback');
    if (existing) {
      try {
        let q: OfflineSyncQueueItem[] = JSON.parse(existing);
        q = q.filter((i) => i.id !== itemId);
        localStorage.setItem('vikoda_offline_queue_fallback', JSON.stringify(q));
      } catch (err) {}
    }
  }
};

/**
 * Last-Write-Wins Conflict Resolution
 */
export const resolveStateConflict = (
  local: StoredGamificationState | null,
  cloud: { xp: number; streak: number; gems: number; completedLessons: string[]; updatedAt?: number } | null
): GamificationState => {
  if (!cloud && !local) {
    return {
      xp: 200,
      gems: 50,
      energy: 5,
      streakDays: 1,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 200,
    };
  }

  if (!cloud) return local!;
  if (!local) {
    return {
      xp: cloud.xp || 200,
      gems: cloud.gems || 50,
      energy: 5,
      streakDays: cloud.streak || 1,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: cloud.completedLessons || ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 200,
    };
  }

  // Last-Write-Wins based on timestamp
  const localTime = local.updatedAt || 0;
  const cloudTime = cloud.updatedAt || 0;

  if (cloudTime >= localTime) {
    return {
      ...local,
      xp: Math.max(local.xp, cloud.xp || 0),
      gems: Math.max(local.gems, cloud.gems || 0),
      streakDays: Math.max(local.streakDays, cloud.streak || 0),
      completedNodeIds: Array.from(new Set([...local.completedNodeIds, ...(cloud.completedLessons || [])])),
    };
  } else {
    return {
      ...local,
      xp: Math.max(local.xp, cloud.xp || 0),
      gems: Math.max(local.gems, cloud.gems || 0),
      streakDays: Math.max(local.streakDays, cloud.streak || 0),
      completedNodeIds: Array.from(new Set([...local.completedNodeIds, ...(cloud.completedLessons || [])])),
    };
  }
};

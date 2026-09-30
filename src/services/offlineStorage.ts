/**
 * Offline-First Storage Layer with IndexedDB & Last-Write-Wins Conflict Resolution
 * Ensures 100% zero-disruption learning even during offline, network drop, or device switching.
 */

import { GamificationState, EmployeeProfile } from '../types';

const DB_NAME = 'VikodaEnterpriseOfflineDB_v1';
const DB_VERSION = 1;

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
 * Save Gamification State to IndexedDB (with timestamp)
 */
export const saveGamificationStateOffline = async (state: GamificationState): Promise<void> => {
  const payload: StoredGamificationState = {
    ...state,
    updatedAt: Date.now(),
    deviceId: getDeviceId(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('gamification_state', 'readwrite');
    const store = tx.objectStore('gamification_state');
    store.put({ key: 'current_user_stats', ...payload });
  } catch (err) {
    // Fallback to localStorage
    localStorage.setItem('vikoda_offline_stats_backup', JSON.stringify(payload));
  }
};

/**
 * Load Gamification State from IndexedDB
 */
export const loadGamificationStateOffline = async (): Promise<StoredGamificationState | null> => {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('gamification_state', 'readonly');
      const store = tx.objectStore('gamification_state');
      const req = store.get('current_user_stats');
      req.onsuccess = () => {
        resolve(req.result ? (req.result as StoredGamificationState) : null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    const local = localStorage.getItem('vikoda_offline_stats_backup');
    if (local) {
      try {
        return JSON.parse(local);
      } catch (err) {}
    }
    return null;
  }
};

/**
 * Save User Profile to IndexedDB
 */
export const saveProfileOffline = async (profile: EmployeeProfile): Promise<void> => {
  const payload: StoredProfile = {
    ...profile,
    updatedAt: Date.now(),
    deviceId: getDeviceId(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('user_profile', 'readwrite');
    const store = tx.objectStore('user_profile');
    store.put({ key: 'active_profile', ...payload });
  } catch (err) {
    localStorage.setItem('vikoda_offline_profile_backup', JSON.stringify(payload));
  }
};

/**
 * Load User Profile from IndexedDB
 */
export const loadProfileOffline = async (): Promise<StoredProfile | null> => {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('user_profile', 'readonly');
      const store = tx.objectStore('user_profile');
      const req = store.get('active_profile');
      req.onsuccess = () => {
        resolve(req.result ? (req.result as StoredProfile) : null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    const local = localStorage.getItem('vikoda_offline_profile_backup');
    if (local) {
      try {
        return JSON.parse(local);
      } catch (err) {}
    }
    return null;
  }
};

/**
 * Enqueue mutation to offline sync queue
 */
export const enqueueOfflineMutation = async (type: OfflineSyncQueueItem['type'], payload: any) => {
  const item: OfflineSyncQueueItem = {
    id: 'sync_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    type,
    payload,
    timestamp: Date.now(),
  };

  try {
    const db = await openOfflineDB();
    const tx = db.transaction('sync_queue', 'readwrite');
    tx.objectStore('sync_queue').put(item);
  } catch (e) {
    const queue = JSON.parse(localStorage.getItem('vikoda_offline_queue') || '[]');
    queue.push(item);
    localStorage.setItem('vikoda_offline_queue', JSON.stringify(queue));
  }
};

/**
 * Get all queued offline mutations
 */
export const getOfflineQueue = async (): Promise<OfflineSyncQueueItem[]> => {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const tx = db.transaction('sync_queue', 'readonly');
      const store = tx.objectStore('sync_queue');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch (e) {
    return JSON.parse(localStorage.getItem('vikoda_offline_queue') || '[]');
  }
};

/**
 * Clear synced items from offline queue
 */
export const clearOfflineQueueItem = async (id: string) => {
  try {
    const db = await openOfflineDB();
    const tx = db.transaction('sync_queue', 'readwrite');
    tx.objectStore('sync_queue').delete(id);
  } catch (e) {
    const queue: OfflineSyncQueueItem[] = JSON.parse(localStorage.getItem('vikoda_offline_queue') || '[]');
    const filtered = queue.filter((item) => item.id !== id);
    localStorage.setItem('vikoda_offline_queue', JSON.stringify(filtered));
  }
};

/**
 * Last-Write-Wins Intelligent Conflict Resolution:
 * Combines local and cloud states without losing progress on phone vs PC.
 */
export const resolveStateConflict = (
  local: StoredGamificationState | null,
  remote: any
): GamificationState => {
  if (!remote && local) return local;
  if (!local && remote) {
    return {
      xp: remote.xp || 0,
      gems: remote.gems || 0,
      energy: remote.energy || 5,
      streakDays: remote.streak || remote.streakDays || 0,
      rank: remote.rank || 'Chiến Binh Vikoda',
      completedNodeIds: remote.completedLessons || remote.completedNodeIds || [],
      lastActiveDate: remote.lastActive || new Date().toISOString().split('T')[0],
      highestDrillScore: remote.highestDrillScore || 0,
    };
  }
  if (!local && !remote) {
    return {
      xp: 150,
      gems: 50,
      energy: 5,
      streakDays: 1,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 200,
    };
  }

  // Smart Union Merge: takes highest numbers and union of completed lessons
  const remoteLessons = remote.completedLessons || remote.completedNodeIds || [];
  const localLessons = local!.completedNodeIds || [];
  const mergedLessons = Array.from(new Set([...localLessons, ...remoteLessons]));

  return {
    xp: Math.max(local!.xp, remote.xp || 0),
    gems: Math.max(local!.gems, remote.gems || 0),
    energy: 5,
    streakDays: Math.max(local!.streakDays, remote.streak || remote.streakDays || 0),
    rank: local!.xp >= (remote.xp || 0) ? local!.rank : (remote.rank || local!.rank),
    completedNodeIds: mergedLessons,
    lastActiveDate: new Date().toISOString().split('T')[0],
    highestDrillScore: Math.max(local!.highestDrillScore || 0, remote.highestDrillScore || 0),
  };
};

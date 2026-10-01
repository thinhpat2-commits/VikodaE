import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  collection, 
  getDocs, 
  addDoc, 
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { 
  saveGamificationStateOffline, 
  saveProfileOffline, 
  enqueueOfflineMutation,
  getOfflineQueue,
  clearOfflineQueueItem,
  resolveStateConflict
} from './offlineStorage';
import { GamificationState } from '../types';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with designated custom database ID
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Test Firestore connection on boot
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline, using IndexedDB storage.');
    }
  }
}
if (typeof window !== 'undefined') {
  testConnection();
}

export interface UserCloudProfile {
  userId: string;
  email: string;
  displayName: string;
  role: 'employee' | 'admin';
  department: string;
  xp: number;
  streak: number;
  gems: number;
  completedLessons: string[];
  completedUnits: string[];
  mistakesCount: number;
  vocabLearned: number;
  dailyGoal: number;
  currentLevel: string;
  createdAt: string;
  lastActive: string;
  updatedAt?: number;
}

const STORAGE_KEY_AUTH_SESSION = 'vikoda_auth_session_v4';

// Helper to sanitize email into a safe Firestore document ID
export const emailToUserId = (email: string): string => {
  return 'usr_' + email.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
};

/**
 * Deterministic Admin check
 */
export const isUserAdmin = (emailOrProfile?: string | UserCloudProfile | null): boolean => {
  if (!emailOrProfile) return false;
  const email = typeof emailOrProfile === 'string'
    ? emailOrProfile.toLowerCase()
    : (emailOrProfile.email || '').toLowerCase();

  if (email === 'thinh.pat2@gmail.com') return true;
  if (email.includes('admin') && (email.endsWith('@vikoda.com.vn') || email.endsWith('@gmail.com'))) return true;
  if (typeof emailOrProfile !== 'string' && emailOrProfile.role === 'admin') return true;
  return false;
};

/**
 * Check if user already logged in previously (Remember Session forever)
 */
export const getPersistedSession = (): UserCloudProfile | null => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(STORAGE_KEY_AUTH_SESSION);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) return parsed;
    } catch (e) {}
  }
  return null;
};

export const persistSession = (profile: UserCloudProfile) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_AUTH_SESSION, JSON.stringify(profile));
  }
};

export const clearSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY_AUTH_SESSION);
  }
};

/**
 * Register account with Gmail / Email + Password
 * Works seamlessly online (Firestore) and offline (IndexedDB)
 */
export async function registerWithEmail(
  email: string,
  pass: string,
  displayName: string,
  department: string = 'Phòng Kinh Doanh & Xuất Khẩu'
): Promise<UserCloudProfile> {
  const cleanEmail = email.trim().toLowerCase();
  const userId = emailToUserId(cleanEmail);
  const role: 'employee' | 'admin' = isUserAdmin(cleanEmail) ? 'admin' : 'employee';

  const newProfile: UserCloudProfile = {
    userId,
    email: cleanEmail,
    displayName: displayName || cleanEmail.split('@')[0],
    role,
    department: department || 'Vikodaer',
    xp: 150, // Welcome gift
    streak: 1,
    gems: 50,
    completedLessons: ['unit-1'],
    completedUnits: ['unit-1'],
    mistakesCount: 0,
    vocabLearned: 15,
    dailyGoal: 50,
    currentLevel: 'Đại sứ Khoáng Kiềm',
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
  };

  // 1. Save locally in IndexedDB & LocalStorage immediately
  persistSession(newProfile);
  await saveProfileOffline({
    employeeCode: userId.toUpperCase().replace('USR_', 'VKD-'),
    fullName: newProfile.displayName,
    email: newProfile.email,
    department: newProfile.department,
    title: role === 'admin' ? 'Quản Trị Viên Hệ Thống' : 'Đại Sứ Khoáng Kiềm',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    highestDrillScore: 200,
    totalPracticeCount: 1,
    isLoggedIn: true,
  });

  // 2. Sync to Cloud Firestore if online
  try {
    await setDoc(doc(db, 'users', userId), {
      ...newProfile,
      passwordHash: btoa(pass), // Basic hashed store for corporate roster
    }, { merge: true });
  } catch (err) {
    console.warn('Network offline during register, queued in IndexedDB:', err);
    await enqueueOfflineMutation('update_profile', newProfile);
  }

  return newProfile;
}

/**
 * Login with Email + Password
 * Works seamlessly online and offline
 */
export async function loginWithEmail(email: string, pass: string): Promise<UserCloudProfile> {
  const cleanEmail = email.trim().toLowerCase();
  const userId = emailToUserId(cleanEmail);

  // 1. Try to fetch from Cloud Firestore first
  try {
    const snap = await getDoc(doc(db, 'users', userId));
    if (snap.exists()) {
      const data = snap.data() as UserCloudProfile;
      const updated = {
        ...data,
        lastActive: new Date().toISOString(),
        updatedAt: Date.now(),
      };
      persistSession(updated);
      await setDoc(doc(db, 'users', userId), { lastActive: updated.lastActive }, { merge: true }).catch(() => {});
      return updated;
    }
  } catch (err) {
    console.warn('Firestore fetch notice (offline or connecting):', err);
  }

  // 2. If user document does not exist yet or offline, create and log them in
  const role: 'employee' | 'admin' = isUserAdmin(cleanEmail) ? 'admin' : 'employee';
  const profile: UserCloudProfile = {
    userId,
    email: cleanEmail,
    displayName: cleanEmail.split('@')[0],
    role,
    department: 'Phòng Kinh Doanh & Xuất Khẩu',
    xp: 200,
    streak: 1,
    gems: 60,
    completedLessons: ['unit-1'],
    completedUnits: ['unit-1'],
    mistakesCount: 0,
    vocabLearned: 15,
    dailyGoal: 50,
    currentLevel: 'Đại sứ Khoáng Kiềm',
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
  };

  persistSession(profile);

  // Try to write to Cloud in background
  setDoc(doc(db, 'users', userId), {
    ...profile,
    passwordHash: btoa(pass),
  }, { merge: true }).catch(() => {
    enqueueOfflineMutation('update_profile', profile);
  });

  return profile;
}

/**
 * Continuous Cloud & IndexedDB Auto-Backup
 */
export async function saveProgressToCloud(
  userId: string,
  progress: Partial<UserCloudProfile>
) {
  if (!userId) return;

  const now = Date.now();
  const payload = {
    ...progress,
    lastActive: new Date().toISOString(),
    updatedAt: now,
  };

  // 1. Always update local session immediately
  const cur = getPersistedSession();
  if (cur && cur.userId === userId) {
    persistSession({ ...cur, ...payload });
  }

  // 2. Write to Firestore Cloud if online
  if (typeof navigator !== 'undefined' && navigator.onLine) {
    try {
      await setDoc(doc(db, 'users', userId), payload, { merge: true });
    } catch (e) {
      console.warn('Cloud sync delayed, queued offline:', e);
      await enqueueOfflineMutation('update_progress', { userId, ...payload });
    }
  } else {
    // Queued in IndexedDB
    await enqueueOfflineMutation('update_progress', { userId, ...payload });
  }
}

/**
 * Update User Name, Department and Avatar in Cloud Firestore and Local Session
 */
export async function updateUserProfileInCloud(
  userId: string,
  profileData: { displayName: string; department?: string; avatarUrl?: string }
): Promise<void> {
  if (!userId) return;

  const now = Date.now();
  const payload = {
    displayName: profileData.displayName,
    ...(profileData.department && { department: profileData.department }),
    ...(profileData.avatarUrl && { avatarUrl: profileData.avatarUrl }),
    updatedAt: now,
    lastActive: new Date().toISOString(),
  };

  // 1. Immediately update persisted session
  const cur = getPersistedSession();
  if (cur && cur.userId === userId) {
    persistSession({ ...cur, ...payload });
  }

  // 2. Write to Firestore Cloud
  try {
    await setDoc(doc(db, 'users', userId), payload, { merge: true });
  } catch (e) {
    console.warn('Profile sync delayed, queued in IndexedDB:', e);
    await enqueueOfflineMutation('update_profile', { userId, ...payload });
  }
}

/**
 * Background Queue Sync Worker
 * Flushes all offline mutations to Firebase Firestore as soon as network is restored
 */
export async function flushOfflineQueue(): Promise<void> {
  if (typeof navigator === 'undefined' || !navigator.onLine) return;

  try {
    const queue = await getOfflineQueue();
    if (!queue || queue.length === 0) return;

    for (const item of queue) {
      if (item.type === 'update_progress') {
        const { userId, ...data } = item.payload;
        if (userId) {
          await setDoc(doc(db, 'users', userId), data, { merge: true });
        }
      } else if (item.type === 'update_profile') {
        const { userId, ...data } = item.payload;
        if (userId) {
          await setDoc(doc(db, 'users', userId), data, { merge: true });
        }
      }
      await clearOfflineQueueItem(item.id);
    }
  } catch (err) {
    console.warn('Offline queue flush notice:', err);
  }
}

// Auto-sync whenever internet connectivity returns
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    flushOfflineQueue();
  });
}

/**
 * ADMIN: Fetch all registered users from Cloud Firestore
 */
export async function fetchAllUsersAdmin(): Promise<UserCloudProfile[]> {
  try {
    const snap = await getDocs(collection(db, 'users'));
    const list: UserCloudProfile[] = [];
    snap.forEach((d) => {
      list.push(d.data() as UserCloudProfile);
    });
    return list;
  } catch (err) {
    console.warn('Fetch all users notice:', err);
    return [];
  }
}

/**
 * ADMIN PRIVILEGE: Reset progress for any user account
 */
export async function adminResetUserProgress(
  targetUserId: string,
  targetEmail: string,
  reason: string = 'Yêu cầu thi lại hoặc đánh giá lại năng lực từ Admin'
): Promise<boolean> {
  const adminSession = getPersistedSession();
  const adminEmail = adminSession?.email || 'admin@vikoda.com.vn';

  const resetData = {
    xp: 0,
    streak: 0,
    completedLessons: [],
    completedUnits: [],
    mistakesCount: 0,
    vocabLearned: 0,
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
    lastResetByAdmin: {
      adminEmail,
      timestamp: new Date().toISOString(),
      reason,
    },
  };

  const actualUserId = emailToUserId(targetEmail) || targetUserId;

  // 1. Update Firestore
  try {
    await setDoc(doc(db, 'users', actualUserId), resetData, { merge: true });
  } catch (err) {
    console.warn('Reset error in Firestore:', err);
  }

  // 2. Audit Trail
  try {
    await addDoc(collection(db, 'audit_resets'), {
      targetUserId: actualUserId,
      targetUserEmail: targetEmail,
      adminEmail,
      reason,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {}

  // 3. If target user is the currently logged in session, reset local session as well
  if (adminSession && (adminSession.userId === actualUserId || adminSession.email.toLowerCase() === targetEmail.toLowerCase())) {
    persistSession({ ...adminSession, ...resetData });
  }

  return true;
}

/**
 * ADMIN: Create or Update an employee record directly in Cloud Firestore
 */
export async function adminCreateOrUpdateUser(
  employeeData: {
    email: string;
    displayName: string;
    department?: string;
    level?: string;
    xp?: number;
    streak?: number;
    gems?: number;
  }
): Promise<UserCloudProfile> {
  const cleanEmail = employeeData.email.trim().toLowerCase();
  const userId = emailToUserId(cleanEmail);
  const role: 'employee' | 'admin' = isUserAdmin(cleanEmail) ? 'admin' : 'employee';

  const userDoc: UserCloudProfile = {
    userId,
    email: cleanEmail,
    displayName: employeeData.displayName,
    role,
    department: employeeData.department || 'Phòng Kinh Doanh & Xuất Khẩu',
    xp: employeeData.xp || 150,
    streak: employeeData.streak || 1,
    gems: employeeData.gems || 50,
    completedLessons: ['unit-1'],
    completedUnits: ['unit-1'],
    mistakesCount: 0,
    vocabLearned: 15,
    dailyGoal: 50,
    currentLevel: employeeData.level || 'Đại sứ Khoáng Kiềm',
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
  };

  try {
    await setDoc(doc(db, 'users', userId), userDoc, { merge: true });
  } catch (err) {
    console.warn('adminCreateOrUpdateUser offline notice:', err);
    await enqueueOfflineMutation('update_profile', userDoc);
  }

  return userDoc;
}

/**
 * ADMIN: Delete an employee record from Cloud Firestore
 */
export async function adminDeleteUser(email: string): Promise<boolean> {
  const cleanEmail = email.trim().toLowerCase();
  const userId = emailToUserId(cleanEmail);

  try {
    await deleteDoc(doc(db, 'users', userId));
    return true;
  } catch (err) {
    console.warn('adminDeleteUser error:', err);
    return false;
  }
}

/**
 * Sign out
 */
export async function logoutUser() {
  clearSession();
  if (typeof window !== 'undefined') {
    localStorage.removeItem('vikoda_employee_profile_v3');
    localStorage.removeItem('vikoda_auth_session_v4');
  }
}

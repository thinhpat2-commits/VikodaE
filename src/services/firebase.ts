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
  loadProfileOffline,
  loadGamificationStateOffline,
  enqueueOfflineMutation,
  getOfflineQueue,
  clearOfflineQueueItem,
  resolveStateConflict,
  resetOfflineUserData
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
  avatarUrl?: string;
  xp: number;
  streak: number;
  gems: number;
  completedLessons: string[];
  completedUnits: string[];
  unitStars?: Record<string, number>;
  mistakesCount: number;
  vocabLearned: number;
  dailyGoal: number;
  currentLevel: string;
  highestDrillScore?: number;
  createdAt: string;
  lastActive: string;
  updatedAt?: number;
  mistakesVault?: any[];
  placementTest?: any;
  studyPlanner?: any;
  arenaStats?: any;
  lastResetByAdmin?: {
    adminEmail: string;
    timestamp: string;
    reason: string;
  };
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
    ? emailOrProfile.toLowerCase().trim()
    : (emailOrProfile.email || '').toLowerCase().trim();

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
    
    // Store user-scoped cached profile
    localStorage.setItem(`vikoda_profile_${profile.userId}`, JSON.stringify({
      employeeCode: profile.userId.toUpperCase().replace('USR_', 'VKD-'),
      fullName: profile.displayName,
      email: profile.email,
      department: profile.department,
      title: profile.role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
      avatarUrl: profile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highestDrillScore: profile.highestDrillScore || 200,
      totalPracticeCount: 1,
      isLoggedIn: true,
      isAdmin: isUserAdmin(profile.email),
    }));

    // Store user-scoped cached stats
    localStorage.setItem(`vikoda_stats_${profile.userId}`, JSON.stringify({
      xp: profile.xp,
      gems: profile.gems,
      energy: 5,
      streakDays: profile.streak,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: profile.completedLessons || ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: profile.highestDrillScore || 200,
      updatedAt: Date.now(),
    }));
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
    department: department || 'Phòng Kinh Doanh & Xuất Khẩu',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    xp: 200, // Welcome gift
    streak: 1,
    gems: 50,
    completedLessons: ['unit-1'],
    completedUnits: ['unit-1'],
    mistakesCount: 0,
    vocabLearned: 15,
    dailyGoal: 50,
    currentLevel: 'Đại sứ Khoáng Kiềm',
    highestDrillScore: 200,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
  };

  // 1. Save locally in IndexedDB & LocalStorage scoped to this userId
  persistSession(newProfile);
  await saveProfileOffline({
    employeeCode: userId.toUpperCase().replace('USR_', 'VKD-'),
    fullName: newProfile.displayName,
    email: newProfile.email,
    department: newProfile.department,
    title: role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
    avatarUrl: newProfile.avatarUrl!,
    highestDrillScore: 200,
    totalPracticeCount: 1,
    isLoggedIn: true,
    isAdmin: role === 'admin',
  }, userId);

  await saveGamificationStateOffline({
    xp: newProfile.xp,
    gems: newProfile.gems,
    energy: 5,
    streakDays: newProfile.streak,
    rank: 'Chiến Binh Vikoda',
    completedNodeIds: newProfile.completedLessons,
    lastActiveDate: new Date().toISOString().split('T')[0],
    highestDrillScore: 200,
  }, userId);

  // 2. Sync to Cloud Firestore immediately
  try {
    await setDoc(doc(db, 'users', userId), {
      ...newProfile,
      passwordHash: btoa(pass),
    }, { merge: true });
  } catch (err) {
    console.warn('Network offline during register, queued in IndexedDB:', err);
    await enqueueOfflineMutation('update_profile', newProfile);
  }

  return newProfile;
}

/**
 * Login with Email + Password
 * Works seamlessly online and offline without overwriting another employee's session
 */
export async function loginWithEmail(email: string, pass: string): Promise<UserCloudProfile> {
  const cleanEmail = email.trim().toLowerCase();
  const userId = emailToUserId(cleanEmail);

  // 1. Try to fetch from Cloud Firestore first
  try {
    const snap = await getDoc(doc(db, 'users', userId));
    if (snap.exists()) {
      const data = snap.data() as UserCloudProfile;
      const updated: UserCloudProfile = {
        ...data,
        email: cleanEmail,
        userId,
        role: isUserAdmin(cleanEmail) ? 'admin' : (data.role || 'employee'),
        lastActive: new Date().toISOString(),
        updatedAt: Date.now(),
      };
      persistSession(updated);
      await setDoc(doc(db, 'users', userId), { lastActive: updated.lastActive, role: updated.role }, { merge: true }).catch(() => {});
      return updated;
    }
  } catch (err) {
    console.warn('Firestore fetch notice (offline or connecting):', err);
  }

  // 2. Check user-scoped local offline storage
  const offlineProfile = await loadProfileOffline(userId);
  const offlineStats = await loadGamificationStateOffline(userId);
  if (offlineProfile) {
    const role: 'employee' | 'admin' = isUserAdmin(cleanEmail) ? 'admin' : 'employee';
    const profile: UserCloudProfile = {
      userId,
      email: cleanEmail,
      displayName: offlineProfile.fullName || cleanEmail.split('@')[0],
      role,
      department: offlineProfile.department || 'Phòng Kinh Doanh & Xuất Khẩu',
      avatarUrl: offlineProfile.avatarUrl,
      xp: offlineStats?.xp || 200,
      streak: offlineStats?.streakDays || 1,
      gems: offlineStats?.gems || 50,
      completedLessons: offlineStats?.completedNodeIds || ['unit-1'],
      completedUnits: offlineStats?.completedNodeIds || ['unit-1'],
      mistakesCount: 0,
      vocabLearned: 15,
      dailyGoal: 50,
      currentLevel: 'Đại sứ Khoáng Kiềm',
      highestDrillScore: offlineStats?.highestDrillScore || 200,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      updatedAt: Date.now(),
    };
    persistSession(profile);
    setDoc(doc(db, 'users', userId), { ...profile, passwordHash: btoa(pass) }, { merge: true }).catch(() => {});
    return profile;
  }

  // 3. Brand new account on first login
  const role: 'employee' | 'admin' = isUserAdmin(cleanEmail) ? 'admin' : 'employee';
  const profile: UserCloudProfile = {
    userId,
    email: cleanEmail,
    displayName: cleanEmail.split('@')[0],
    role,
    department: 'Phòng Kinh Doanh & Xuất Khẩu',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    xp: 200,
    streak: 1,
    gems: 50,
    completedLessons: ['unit-1'],
    completedUnits: ['unit-1'],
    mistakesCount: 0,
    vocabLearned: 15,
    dailyGoal: 50,
    currentLevel: 'Đại sứ Khoáng Kiềm',
    highestDrillScore: 200,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    updatedAt: Date.now(),
  };

  persistSession(profile);

  // Write to Firestore in background
  setDoc(doc(db, 'users', userId), {
    ...profile,
    passwordHash: btoa(pass),
  }, { merge: true }).catch(() => {
    enqueueOfflineMutation('update_profile', profile);
  });

  return profile;
}

/**
 * Continuous Cloud & IndexedDB Auto-Backup (Scoped by userId)
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

  // 1. Always update local session immediately if matching current user
  const cur = getPersistedSession();
  if (cur && cur.userId === userId) {
    const merged = { ...cur, ...payload };
    persistSession(merged);
  }

  // 2. Also save to user-scoped offline storage
  if (progress.xp !== undefined || progress.streak !== undefined || progress.gems !== undefined || progress.completedLessons !== undefined) {
    saveGamificationStateOffline({
      xp: progress.xp || 200,
      gems: progress.gems || 50,
      energy: 5,
      streakDays: progress.streak || 1,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: progress.completedLessons || ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 200,
    }, userId);
  }

  // 3. Write to Firestore Cloud
  if (typeof navigator !== 'undefined' && navigator.onLine) {
    try {
      await setDoc(doc(db, 'users', userId), payload, { merge: true });
    } catch (e) {
      console.warn('Cloud sync delayed, queued offline:', e);
      await enqueueOfflineMutation('update_progress', { userId, ...payload });
    }
  } else {
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
 * ADMIN & LEADERBOARD: Fetch all registered users from Cloud Firestore
 */
export async function fetchAllUsersAdmin(): Promise<UserCloudProfile[]> {
  try {
    const snap = await getDocs(collection(db, 'users'));
    const list: UserCloudProfile[] = [];
    snap.forEach((d) => {
      const data = d.data() as UserCloudProfile;
      if (data && data.email) {
        list.push(data);
      }
    });

    // Ensure current active user is always represented
    const currentSession = getPersistedSession();
    if (currentSession && currentSession.email) {
      const idx = list.findIndex(u => u.email.toLowerCase() === currentSession.email.toLowerCase());
      if (idx === -1) {
        list.push(currentSession);
        setDoc(doc(db, 'users', currentSession.userId), currentSession, { merge: true }).catch(() => {});
      } else {
        // Sync current session values if not reset
        const isResetSession = currentSession.xp === 0 && currentSession.streak === 0;
        list[idx] = {
          ...list[idx],
          xp: isResetSession ? 0 : (list[idx].xp ?? currentSession.xp ?? 0),
          streak: isResetSession ? 0 : (list[idx].streak ?? currentSession.streak ?? 0),
          gems: isResetSession ? 0 : (list[idx].gems ?? currentSession.gems ?? 0),
          displayName: currentSession.displayName || list[idx].displayName,
        };
      }
    }

    return list;
  } catch (err) {
    console.warn('Fetch all users notice:', err);
    const currentSession = getPersistedSession();
    return currentSession ? [currentSession] : [];
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
  const adminEmail = adminSession?.email || 'thinh.pat2@gmail.com';
  const now = Date.now() + 86400000;

  const resetData = {
    xp: 0,
    streak: 0,
    gems: 0,
    completedLessons: [],
    completedUnits: [],
    mistakesCount: 0,
    vocabLearned: 0,
    highestDrillScore: 0,
    lastActive: 'Vừa reset bởi Admin',
    updatedAt: now,
    lastResetByAdmin: {
      adminEmail,
      timestamp: new Date().toISOString(),
      reason,
    },
  };

  const actualUserId = targetUserId || emailToUserId(targetEmail);

  // 1. Update Firestore
  try {
    await setDoc(doc(db, 'users', actualUserId), resetData, { merge: true });
  } catch (err) {
    console.warn('Reset error in Firestore:', err);
  }

  // 2. Audit Trail in Firestore
  try {
    await addDoc(collection(db, 'audit_resets'), {
      targetUserId: actualUserId,
      targetUserEmail: targetEmail,
      adminEmail,
      reason,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {}

  // 3. Clear IndexedDB completely for this user
  await resetOfflineUserData(actualUserId);

  // 4. Clear and reset all local storage keys so F5 cannot restore old state
  if (typeof window !== 'undefined') {
    localStorage.removeItem(`vikoda_stats_${actualUserId}`);
    localStorage.removeItem(`vikoda_stats_${emailToUserId(targetEmail)}`);
    localStorage.removeItem(`vikoda_profile_${actualUserId}`);
    localStorage.removeItem(`vikoda_profile_${emailToUserId(targetEmail)}`);

    // If this target user is currently logged in, update active session & stats
    if (adminSession && (adminSession.userId === actualUserId || adminSession.email.toLowerCase() === targetEmail.toLowerCase())) {
      persistSession({ ...adminSession, ...resetData });
      
      const freshZeroStats = {
        xp: 0,
        gems: 0,
        energy: 5,
        streakDays: 0,
        rank: 'Tân Binh Đảnh Thạnh',
        completedNodeIds: [],
        lastActiveDate: new Date().toISOString().split('T')[0],
        highestDrillScore: 0,
        practiceStats: {
          totalPracticeCount: 0,
          repetitionCount: 0,
          speakingExercisesCompleted: 0,
          listeningExercisesCompleted: 0,
          perfectThreeStarUnits: 0,
          totalDrillsCompleted: 0,
          totalVoiceSessions: 0,
          lastPracticeTimestamp: now,
        },
        updatedAt: now,
      };

      localStorage.setItem('vikoda_gamification_state_v3', JSON.stringify(freshZeroStats));
      localStorage.setItem('vikoda_user_stats', JSON.stringify(freshZeroStats));
      localStorage.setItem(`vikoda_stats_${actualUserId}`, JSON.stringify(freshZeroStats));
    }

    // Also update corporate employees list in localStorage
    const savedEmployees = localStorage.getItem('vikoda_corporate_employees_v2');
    if (savedEmployees) {
      try {
        const empList = JSON.parse(savedEmployees);
        const updatedList = empList.map((emp: any) =>
          emp.id === actualUserId || emp.email.toLowerCase().trim() === targetEmail.toLowerCase().trim()
            ? { ...emp, xp: 0, streak: 0, completedUnits: 0, highestScore: 0, lastActive: 'Vừa reset bởi Admin' }
            : emp
        );
        localStorage.setItem('vikoda_corporate_employees_v2', JSON.stringify(updatedList));
      } catch (e) {}
    }
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
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    xp: employeeData.xp || 200,
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
 * Sign out (Safely clears active session without wiping other employees' stored data)
 */
export async function logoutUser() {
  clearSession();
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { VikodaHeader } from './components/VikodaHeader';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DuolingoHome } from './components/DuolingoHome';
import { VikodaVoiceCoach } from './components/VikodaVoiceCoach';
import { VikodaPitchDeck } from './components/VikodaPitchDeck';
import { BuyerObjectionsBattle } from './components/BuyerObjectionsBattle';
import { ExportEmailStudio } from './components/ExportEmailStudio';
import { AIAssistantModal } from './components/AIAssistantModal';
import { EmployeeProfileModal } from './components/EmployeeProfileModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { EndlessDrillArena } from './components/EndlessDrillArena';
import { PitchSimulatorModal } from './components/PitchSimulatorModal';
import { PreMeetingToolkitModal } from './components/PreMeetingToolkitModal';
import { HandsFreeCommuteModal } from './components/HandsFreeCommuteModal';
import { PocketSearchModal } from './components/PocketSearchModal';
import { VikodaExecutivePortfolioModal } from './components/VikodaExecutivePortfolioModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { AuthModal } from './components/AuthModal';
import { PvPArenaModal } from './components/PvPArenaModal';
import { DailyQuickReviewModal } from './components/DailyQuickReviewModal';
import { PlacementTestModal, PlacementTestResult } from './components/PlacementTestModal';
import { PersonalCoachModal } from './components/PersonalCoachModal';
import { PracticeHub } from './components/PracticeHub';
import { useDeviceDetect } from './hooks/useDeviceDetect';
import { LaptopSidebarNav } from './components/laptop/LaptopSidebarNav';
import { LaptopRightPanel } from './components/laptop/LaptopRightPanel';
import { GamificationState, EmployeeProfile, MistakeVaultItem, PvPArenaStats, StudyPlannerSettings } from './types';
import { CourseLevel } from './data/curriculumData';
import { playSound } from './services/soundEffects';
import { 
  getPersistedSession, 
  persistSession,
  saveProgressToCloud, 
  updateUserProfileInCloud,
  logoutUser, 
  isUserAdmin, 
  emailToUserId,
  UserCloudProfile,
  db 
} from './services/firebase';
import { 
  saveGamificationStateOffline, 
  loadGamificationStateOffline, 
  saveProfileOffline, 
  resolveStateConflict 
} from './services/offlineStorage';
import { doc, getDoc } from 'firebase/firestore';

const STORAGE_KEY_VIKODA_STATS = 'vikoda_gamification_state_v3';
const STORAGE_KEY_LEVEL = 'vikoda_selected_level_v3';
const STORAGE_KEY_PROFILE = 'vikoda_employee_profile_v3';

export default function App() {
  const { isLaptop, deviceType } = useDeviceDetect();
  const [activeTab, setActiveTab] = useState<string>('path');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('A1');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent Session & Cloud Sync States
  const [currentUserProfile, setCurrentUserProfile] = useState<UserCloudProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isCloudSynced, setIsCloudSynced] = useState<boolean>(false);

  // Modals for requested features
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [profileModalTab, setProfileModalTab] = useState<'card' | 'proficiency'>('card');
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [isEndlessDrillOpen, setIsEndlessDrillOpen] = useState<boolean>(false);
  const [isPitchSimulatorOpen, setIsPitchSimulatorOpen] = useState<boolean>(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState<boolean>(false);
  const [isCommuteModalOpen, setIsCommuteModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState<boolean>(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState<boolean>(false);
  const [isPvPArenaOpen, setIsPvPArenaOpen] = useState<boolean>(false);
  const [isDailyReviewOpen, setIsDailyReviewOpen] = useState<boolean>(false);
  const [isPlacementTestOpen, setIsPlacementTestOpen] = useState<boolean>(false);
  const [isCoachOpen, setIsCoachOpen] = useState<boolean>(false);

  // Employee Profile State (Restored strictly from current active user session)
  const [profile, setProfile] = useState<EmployeeProfile>(() => {
    if (typeof window !== 'undefined') {
      const session = getPersistedSession();
      if (session) {
        const savedScoped = localStorage.getItem(`vikoda_profile_${session.userId}`);
        if (savedScoped) {
          try {
            const parsed = JSON.parse(savedScoped);
            if (parsed && parsed.email) return parsed;
          } catch (e) {}
        }
        return {
          employeeCode: session.userId.toUpperCase().replace('USR_', 'VKD-'),
          fullName: session.displayName || 'Nhân Viên Vikoda',
          email: session.email,
          department: session.department || 'Phòng Kinh Doanh & Xuất Khẩu',
          title: session.role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
          avatarUrl: session.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          highestDrillScore: session.highestDrillScore || 200,
          totalPracticeCount: 1,
          isLoggedIn: true,
          isAdmin: isUserAdmin(session.email),
        };
      }
    }
    return {
      employeeCode: 'VKD-GUEST',
      fullName: '',
      email: '',
      department: '',
      title: '',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highestDrillScore: 0,
      totalPracticeCount: 0,
      isLoggedIn: false,
      isAdmin: false
    };
  });

  // Gamification state: XP, Gems, Energy, Streak, Completed Nodes, Highest Drill Score
  const [gamificationState, setGamificationState] = useState<GamificationState>(() => {
    if (typeof window !== 'undefined') {
      const session = getPersistedSession();
      if (session) {
        const savedScopedStats = localStorage.getItem(`vikoda_stats_${session.userId}`);
        if (savedScopedStats) {
          try {
            return JSON.parse(savedScopedStats);
          } catch (e) {}
        }
        return {
          xp: session.xp || 200,
          gems: session.gems || 50,
          energy: 5,
          streakDays: session.streak || 1,
          rank: 'Chiến Binh Vikoda',
          completedNodeIds: session.completedLessons && session.completedLessons.length > 0 ? session.completedLessons : ['unit-1'],
          lastActiveDate: new Date().toISOString().split('T')[0],
          highestDrillScore: session.highestDrillScore || 200
        };
      }
    }
    return {
      xp: 0,
      gems: 0,
      energy: 5,
      streakDays: 0,
      rank: 'Tân Binh Đảnh Thạnh',
      completedNodeIds: [],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 0
    };
  });

  // 1. Check persistent remembered session on boot (Log in ONCE, device auto-remembers)
  useEffect(() => {
    const session = getPersistedSession();
    if (session) {
      setCurrentUserProfile(session);
      setIsAuthModalOpen(false);
      setIsCloudSynced(true);

      const userProfile: EmployeeProfile = {
        employeeCode: session.userId.toUpperCase().replace('USR_', 'VKD-'),
        fullName: session.displayName || 'Nhân Viên Vikoda',
        email: session.email,
        department: session.department || 'Phòng Kinh Doanh & Xuất Khẩu',
        title: session.role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
        avatarUrl: session.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        highestDrillScore: session.highestDrillScore || 200,
        totalPracticeCount: 1,
        isLoggedIn: true,
        isAdmin: isUserAdmin(session.email),
      };
      setProfile(userProfile);

      // Restore user-scoped stats from IndexedDB/localStorage
      loadGamificationStateOffline(session.userId).then((offlineStats) => {
        if (offlineStats) {
          setGamificationState((prev) => ({
            ...prev,
            xp: offlineStats.xp,
            gems: offlineStats.gems,
            streakDays: offlineStats.streakDays,
            completedNodeIds: offlineStats.completedNodeIds,
            highestDrillScore: offlineStats.highestDrillScore || prev.highestDrillScore,
          }));
        }
      });

      // Background Cloud Last-Write-Wins Merge with Firestore
      getDoc(doc(db, 'users', session.userId))
        .then((snap) => {
          if (snap.exists()) {
            const remote = snap.data() as UserCloudProfile;
            if (remote.displayName) {
              setProfile((prev) => ({
                ...prev,
                fullName: remote.displayName,
                department: remote.department || prev.department,
              }));
            }
            setGamificationState((local) => {
              const merged = resolveStateConflict(local as any, remote);
              saveGamificationStateOffline(merged, session.userId);
              return merged;
            });
          }
        })
        .catch((err) => {
          console.warn('Background sync notice:', err);
        });
    } else {
      // First time opening app: require login
      setIsAuthModalOpen(true);
    }
  }, []);

  const saveGamificationState = (newState: GamificationState) => {
    setGamificationState(newState);

    if (currentUserProfile) {
      saveGamificationStateOffline(newState, currentUserProfile.userId);
      saveProgressToCloud(currentUserProfile.userId, {
        xp: newState.xp,
        streak: newState.streakDays,
        gems: newState.gems,
        completedLessons: newState.completedNodeIds,
      });
      setIsCloudSynced(true);
    }
  };

  const handleAuthSuccess = (cloudProfile: UserCloudProfile) => {
    setCurrentUserProfile(cloudProfile);
    setIsAuthModalOpen(false);
    setIsCloudSynced(true);

    const userProfile: EmployeeProfile = {
      employeeCode: cloudProfile.userId.toUpperCase().replace('USR_', 'VKD-'),
      fullName: cloudProfile.displayName,
      email: cloudProfile.email,
      department: cloudProfile.department || 'Phòng Kinh Doanh & Xuất Khẩu',
      title: cloudProfile.role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
      avatarUrl: cloudProfile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highestDrillScore: cloudProfile.highestDrillScore || 200,
      totalPracticeCount: 1,
      isLoggedIn: true,
      isAdmin: isUserAdmin(cloudProfile.email),
    };
    setProfile(userProfile);
    saveProfileOffline(userProfile, cloudProfile.userId);

    const userStats: GamificationState = {
      xp: cloudProfile.xp || 200,
      gems: cloudProfile.gems || 50,
      energy: 5,
      streakDays: cloudProfile.streak || 1,
      rank: 'Chiến Binh Vikoda',
      completedNodeIds: cloudProfile.completedLessons && cloudProfile.completedLessons.length > 0
        ? cloudProfile.completedLessons
        : ['unit-1'],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: cloudProfile.highestDrillScore || 200,
    };
    setGamificationState(userStats);
    saveGamificationStateOffline(userStats, cloudProfile.userId);

    showToast(`Chào mừng ${cloudProfile.displayName}! Máy đã ghi nhớ tài khoản ☁️`);
  };

  const handleLogout = async () => {
    playSound('click');
    await logoutUser();
    setCurrentUserProfile(null);
    setIsProfileModalOpen(false);

    // Completely wipe in-memory state so subsequent logins are 100% clean
    setProfile({
      employeeCode: 'VKD-GUEST',
      fullName: '',
      email: '',
      department: '',
      title: '',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highestDrillScore: 0,
      totalPracticeCount: 0,
      isLoggedIn: false,
      isAdmin: false,
    });

    setGamificationState({
      xp: 0,
      gems: 0,
      energy: 5,
      streakDays: 0,
      rank: 'Tân Binh Đảnh Thạnh',
      completedNodeIds: [],
      lastActiveDate: new Date().toISOString().split('T')[0],
      highestDrillScore: 0,
    });

    setIsAuthModalOpen(true);
    showToast('Đã đăng xuất tài khoản an toàn.');
  };

  const handleSaveProfile = async (updated: EmployeeProfile) => {
    setProfile(updated);
    if (!currentUserProfile) return;

    const userId = currentUserProfile.userId;
    await saveProfileOffline(updated, userId);

    const updatedSession: UserCloudProfile = {
      ...currentUserProfile,
      displayName: updated.fullName,
      department: updated.department,
      avatarUrl: updated.avatarUrl,
      updatedAt: Date.now(),
    };

    setCurrentUserProfile(updatedSession);
    persistSession(updatedSession);

    await updateUserProfileInCloud(userId, {
      displayName: updated.fullName,
      department: updated.department,
      avatarUrl: updated.avatarUrl,
    });

    showToast(`Đã đồng bộ mây: ${updated.fullName} ☁️`);
  };

  const handleLevelSelect = (lvl: CourseLevel) => {
    setSelectedLevel(lvl);
    localStorage.setItem(STORAGE_KEY_LEVEL, lvl);
    showToast(`Đã chuyển sang cấp độ: ${lvl}`);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCompleteUnit = (unitId: string, xpGain: number, gemGain: number, starsEarned: number = 3) => {
    const isNew = !gamificationState.completedNodeIds.includes(unitId);
    const updatedNodes = isNew
      ? [...gamificationState.completedNodeIds, unitId]
      : gamificationState.completedNodeIds;

    const newXp = gamificationState.xp + xpGain;
    const newGems = gamificationState.gems + gemGain;

    const updatedUnitStars = {
      ...(gamificationState.unitStars || {}),
      [unitId]: Math.max(gamificationState.unitStars?.[unitId] || 0, starsEarned),
    };

    let newRank = gamificationState.rank;
    if (updatedNodes.length >= 8) {
      newRank = 'Đại Sứ Toàn Cầu';
    } else if (updatedNodes.length >= 4) {
      newRank = 'Chiến Binh Vikoda';
    }

    const updatedState: GamificationState = {
      ...gamificationState,
      xp: newXp,
      gems: newGems,
      rank: newRank,
      completedNodeIds: updatedNodes,
      unitStars: updatedUnitStars,
    };

    saveGamificationState(updatedState);
    if (starsEarned === 3) {
      showToast(`+${xpGain} XP • +${gemGain} 💎 Hoàn hảo 3/3 sao! 🌟`);
    } else {
      showToast(`+${xpGain} XP • +${gemGain} 💎 Đạt ${starsEarned}/3 sao. Luyện lại để lấy 3 sao nhé! ⭐`);
    }
  };

  const handleAwardXpAndGems = (xpGain: number, gemGain: number) => {
    const updatedState: GamificationState = {
      ...gamificationState,
      xp: gamificationState.xp + xpGain,
      gems: gamificationState.gems + gemGain,
    };
    saveGamificationState(updatedState);
    showToast(`+${xpGain} XP • +${gemGain} 💎 Phát âm rất chuẩn!`);
  };

  const handleFinishDrill = (score: number, xpGain: number, gemGain: number) => {
    const isNewBest = score > (gamificationState.highestDrillScore || 0);
    const updatedBest = Math.max(score, gamificationState.highestDrillScore || 0);

    const updatedState: GamificationState = {
      ...gamificationState,
      xp: gamificationState.xp + xpGain,
      gems: gamificationState.gems + gemGain,
      highestDrillScore: updatedBest,
    };
    saveGamificationState(updatedState);

    const updatedProf: EmployeeProfile = {
      ...profile,
      highestDrillScore: updatedBest,
      totalPracticeCount: (profile.totalPracticeCount || 0) + 1,
    };
    setProfile(updatedProf);
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(updatedProf));

    if (isNewBest) {
      showToast(`🎉 Kỷ lục mới: ${score} điểm! Đã lưu vào BXH!`);
    } else {
      showToast(`+${xpGain} XP • +${gemGain} 💎 Hoàn thành bài luyện tập!`);
    }
  };

  const handleRecordMistake = (mistakeData: {
    questionId: string;
    promptEn: string;
    promptVi: string;
    correctSentence: string;
    wrongChoiceGiven: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    category: string;
  }) => {
    setGamificationState((prev) => {
      const existingVault = prev.mistakesVault || [];
      const existingIdx = existingVault.findIndex((m) => m.questionId === mistakeData.questionId);
      let updatedVault: MistakeVaultItem[];
      if (existingIdx >= 0) {
        updatedVault = existingVault.map((item, idx) =>
          idx === existingIdx
            ? {
                ...item,
                failedCount: item.failedCount + 1,
                mastered: false,
                addedAt: Date.now(),
              }
            : item
        );
      } else {
        const newItem: MistakeVaultItem = {
          id: `mis_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          ...mistakeData,
          failedCount: 1,
          mastered: false,
          addedAt: Date.now(),
        };
        updatedVault = [newItem, ...existingVault];
      }
      const nextState: GamificationState = { ...prev, mistakesVault: updatedVault };
      saveGamificationState(nextState);
      return nextState;
    });
  };

  const handleMasterMistake = (mistakeId: string) => {
    setGamificationState((prev) => {
      const existingVault = prev.mistakesVault || [];
      const updatedVault = existingVault.map((m) =>
        m.id === mistakeId ? { ...m, mastered: true } : m
      );
      const nextState: GamificationState = { ...prev, mistakesVault: updatedVault };
      saveGamificationState(nextState);
      return nextState;
    });
    showToast('✨ Tuyệt vời! Bạn đã chinh phục được câu bẫy này!');
  };

  const handleUpdateArenaStats = (newStats: PvPArenaStats, xpGain: number, gemsGain: number) => {
    const updatedState: GamificationState = {
      ...gamificationState,
      xp: gamificationState.xp + xpGain,
      gems: gamificationState.gems + gemsGain,
      arenaStats: newStats,
    };
    saveGamificationState(updatedState);
    showToast(`⚔️ Đấu Trường: +${xpGain} XP · +${gemsGain} 💎 · Hạng Elo: ${newStats.eloRating}`);
  };

  const handleSavePlanner = (planner: StudyPlannerSettings) => {
    const updatedState: GamificationState = {
      ...gamificationState,
      studyPlanner: planner,
    };
    saveGamificationState(updatedState);
    showToast(`📅 Đã lưu lịch học & mục tiêu ${planner.targetLevel} thành công!`);
  };

  const handleSavePlacementResult = (result: PlacementTestResult) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vikoda_placement_test_completed_v3', 'true');
    }
    setSelectedLevel(result.recommendedLevel);
    localStorage.setItem(STORAGE_KEY_LEVEL, result.recommendedLevel);
    const updatedState: GamificationState = {
      ...gamificationState,
      xp: gamificationState.xp + 50,
      gems: gamificationState.gems + 20,
      placementTest: result,
    };
    saveGamificationState(updatedState);
    setIsPlacementTestOpen(false);
    showToast(`🎯 Hoàn thành Đánh Giá 4 Kỹ Năng! Xếp lớp: ${result.recommendedLevel}`);
  };

  const renderTabContent = () => (
    <>
      {/* TAB 1: DUOLINGO PATH (Interactive Units) */}
      {activeTab === 'path' && (
        <DuolingoHome
          selectedLevel={selectedLevel}
          setSelectedLevel={handleLevelSelect}
          completedUnitIds={gamificationState.completedNodeIds}
          onCompleteUnit={handleCompleteUnit}
          speechRate={speechRate}
          onGoToVoiceCoach={() => {
            playSound('click');
            setActiveTab('speaking');
          }}
          onGoToPitchDeck={() => {
            playSound('click');
            setActiveTab('pitch');
          }}
          onGoToBattle={() => {
            playSound('click');
            setActiveTab('battle');
          }}
          onOpenEndlessDrill={() => {
            playSound('click');
            setIsEndlessDrillOpen(true);
          }}
          onOpenLeaderboard={() => {
            playSound('click');
            setIsLeaderboardOpen(true);
          }}
          highestDrillScore={profile.highestDrillScore || gamificationState.highestDrillScore || 0}
          onRecordMistake={handleRecordMistake}
          onOpenPvPArena={() => {
            playSound('click');
            setIsPvPArenaOpen(true);
          }}
          onOpenDailyReview={() => {
            playSound('click');
            setIsDailyReviewOpen(true);
          }}
          onOpenCoach={() => {
            playSound('click');
            setIsCoachOpen(true);
          }}
          streakDays={gamificationState.streakDays}
          unitStars={gamificationState.unitStars}
          onOpenPlacementTest={() => {
            playSound('click');
            setIsPlacementTestOpen(true);
          }}
          placementTestResult={gamificationState.placementTest || currentUserProfile?.placementTest}
          onOpenProfile={() => {
            playSound('click');
            setProfileModalTab('proficiency');
            setIsProfileModalOpen(true);
          }}
        />
      )}

      {/* TAB 2: PRACTICE HUB (Unified Hub for all drills & simulators) */}
      {activeTab === 'practice' && (
        <PracticeHub
          stats={gamificationState}
          profile={profile}
          onOpenPvPArena={() => {
            playSound('click');
            setIsPvPArenaOpen(true);
          }}
          onOpenDailyReview={() => {
            playSound('click');
            setIsDailyReviewOpen(true);
          }}
          onOpenEndlessDrill={() => {
            playSound('click');
            setIsEndlessDrillOpen(true);
          }}
          onGoToVoiceCoach={() => {
            playSound('click');
            setActiveTab('speaking');
          }}
          onGoToPitchDeck={() => {
            playSound('click');
            setActiveTab('pitch');
          }}
          onGoToBuyerBattle={() => {
            playSound('click');
            setActiveTab('battle');
          }}
          onGoToEmailStudio={() => {
            playSound('click');
            setActiveTab('email');
          }}
          onOpenSOS={() => {
            playSound('click');
            setIsSOSModalOpen(true);
          }}
          onOpenCommute={() => {
            playSound('click');
            setIsCommuteModalOpen(true);
          }}
          onOpenSearch={() => {
            playSound('click');
            setIsSearchModalOpen(true);
          }}
          onOpenPlacementTest={() => {
            playSound('click');
            setIsPlacementTestOpen(true);
          }}
          onOpenProfile={() => {
            playSound('click');
            setProfileModalTab('proficiency');
            setIsProfileModalOpen(true);
          }}
        />
      )}

      {/* SUB-TAB: VIKOVOICE AI (Pronunciation Coach) */}
      {activeTab === 'speaking' && (
        <VikodaVoiceCoach
          speechRate={speechRate}
          onAwardXpAndGems={handleAwardXpAndGems}
          selectedLevel={selectedLevel}
        />
      )}

      {/* TAB 3: VIKODA PITCH DECK & SIMULATOR */}
      {activeTab === 'pitch' && (
        <VikodaPitchDeck 
          speechRate={speechRate} 
          onOpenPitchSimulator={() => {
            playSound('click');
            setIsPitchSimulatorOpen(true);
          }}
        />
      )}

      {/* TAB 4: BUYER OBJECTIONS BATTLE (Đấu Trí Đối Tác) */}
      {activeTab === 'battle' && (
        <BuyerObjectionsBattle
          speechRate={speechRate}
          onAwardXpAndGems={handleAwardXpAndGems}
        />
      )}

      {/* TAB 5: EMAIL STUDIO (Mẫu Thư Xuất Khẩu & Công Sở) */}
      {activeTab === 'email' && (
        <ExportEmailStudio speechRate={speechRate} />
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
      
      {isLaptop ? (
        /* ================= LAPTOP / DESKTOP EXECUTIVE WORKSPACE (3-COLUMN) ================= */
        <div className="flex-1 flex w-full justify-between items-start">
          {/* 1. Left Fixed Sidebar */}
          <LaptopSidebarNav
            activeTab={activeTab}
            setActiveTab={(t) => {
              playSound('click');
              setActiveTab(t);
            }}
            selectedLevel={selectedLevel}
            setSelectedLevel={handleLevelSelect}
            profile={profile}
            stats={gamificationState}
            onOpenProfile={() => {
              playSound('click');
              setIsProfileModalOpen(true);
            }}
            onOpenLeaderboard={() => {
              playSound('click');
              setIsLeaderboardOpen(true);
            }}
            onOpenAi={() => {
              playSound('click');
              setIsAiModalOpen(true);
            }}
            onOpenAdmin={() => {
              playSound('click');
              setIsAdminPortalOpen(true);
            }}
            onOpenCoach={() => {
              playSound('click');
              setIsCoachOpen(true);
            }}
            onLogout={handleLogout}
            isCloudSynced={isCloudSynced}
          />

          {/* 2. Center Spacious Main Canvas */}
          <main className="flex-1 max-w-2xl px-6 py-6 pb-20 mx-auto w-full">
            {renderTabContent()}
          </main>

          {/* 3. Right Executive Widget Panel */}
          <LaptopRightPanel
            stats={gamificationState}
            profile={profile}
            onOpenArena={() => {
              playSound('click');
              setIsEndlessDrillOpen(true);
            }}
            onOpenPvPArena={() => {
              playSound('click');
              setIsPvPArenaOpen(true);
            }}
            onOpenDailyReview={() => {
              playSound('click');
              setIsDailyReviewOpen(true);
            }}
            onOpenCoach={() => {
              playSound('click');
              setIsCoachOpen(true);
            }}
            onOpenPlacementTest={() => {
              playSound('click');
              setIsPlacementTestOpen(true);
            }}
            onOpenProfile={() => {
              playSound('click');
              setProfileModalTab('proficiency');
              setIsProfileModalOpen(true);
            }}
            onOpenSOS={() => {
              playSound('click');
              setIsSOSModalOpen(true);
            }}
            onOpenCommute={() => {
              playSound('click');
              setIsCommuteModalOpen(true);
            }}
            onOpenSearch={() => {
              playSound('click');
              setIsSearchModalOpen(true);
            }}
            onOpenPortfolio={() => {
              playSound('click');
              setIsPortfolioModalOpen(true);
            }}
            onOpenLeaderboard={() => {
              playSound('click');
              setIsLeaderboardOpen(true);
            }}
          />
        </div>
      ) : (
        /* ================= MOBILE / COMPACT SCREEN LAYOUT ================= */
        <>
          {/* Mobile Modern Header */}
          <VikodaHeader
            stats={gamificationState}
            selectedLevel={selectedLevel}
            setSelectedLevel={handleLevelSelect}
            speechRate={speechRate}
            setSpeechRate={setSpeechRate}
            onOpenAi={() => {
              playSound('click');
              setIsAiModalOpen(true);
            }}
            profile={profile}
            onOpenProfile={() => {
              playSound('click');
              setProfileModalTab('card');
              setIsProfileModalOpen(true);
            }}
            onOpenProficiency={() => {
              playSound('click');
              setProfileModalTab('proficiency');
              setIsProfileModalOpen(true);
            }}
            onOpenLeaderboard={() => {
              playSound('click');
              setIsLeaderboardOpen(true);
            }}
            onGoHome={() => {
              playSound('click');
              setActiveTab('path');
              setIsEndlessDrillOpen(false);
              setIsPitchSimulatorOpen(false);
            }}
            onOpenSOS={() => {
              playSound('click');
              setIsSOSModalOpen(true);
            }}
            onOpenCommute={() => {
              playSound('click');
              setIsCommuteModalOpen(true);
            }}
            onOpenSearch={() => {
              playSound('click');
              setIsSearchModalOpen(true);
            }}
            onOpenPortfolio={() => {
              playSound('click');
              setIsPortfolioModalOpen(true);
            }}
            onOpenAdmin={() => {
              playSound('click');
              setIsAdminPortalOpen(true);
            }}
            onOpenPvPArena={() => {
              playSound('click');
              setIsPvPArenaOpen(true);
            }}
            onOpenDailyReview={() => {
              playSound('click');
              setIsDailyReviewOpen(true);
            }}
            onOpenCoach={() => {
              playSound('click');
              setIsCoachOpen(true);
            }}
            onOpenPlacementTest={() => {
              playSound('click');
              setIsPlacementTestOpen(true);
            }}
            isCloudSynced={isCloudSynced}
            onLogout={handleLogout}
          />

          {/* Main Mobile Screen Content */}
          <main className="flex-1 max-w-xl w-full mx-auto px-3 sm:px-4 pt-3 sm:pt-4 pb-28 sm:pb-32">
            {renderTabContent()}
          </main>

          {/* Mobile Bottom Navigation Bar */}
          <MobileBottomNav
            activeTab={activeTab}
            setActiveTab={(t) => {
              playSound('click');
              setActiveTab(t);
            }}
            onOpenPvPArena={() => {
              playSound('click');
              setIsPvPArenaOpen(true);
            }}
            onOpenLeaderboard={() => {
              playSound('click');
              setIsLeaderboardOpen(true);
            }}
            onOpenProfile={() => {
              playSound('click');
              setIsProfileModalOpen(true);
            }}
          />
        </>
      )}

      {/* AI Assistant Modal (Boardroom Translator) */}
      <AIAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        speechRate={speechRate}
      />

      {/* Employee Profile & Global Proficiency Benchmark Modal */}
      <EmployeeProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        stats={gamificationState}
        initialTab={profileModalTab}
        onLogout={handleLogout}
        onOpenPlacementTest={() => {
          setIsProfileModalOpen(false);
          setIsPlacementTestOpen(true);
        }}
      />

      {/* Leaderboard (BXH) Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        currentUser={profile}
        stats={gamificationState}
        onStartDrill={() => {
          setIsEndlessDrillOpen(true);
        }}
      />

      {/* Endless Drill Arena */}
      {isEndlessDrillOpen && (
        <EndlessDrillArena
          onClose={() => setIsEndlessDrillOpen(false)}
          onFinishDrill={handleFinishDrill}
          bestScore={profile.highestDrillScore || gamificationState.highestDrillScore || 0}
          speechRate={speechRate}
        />
      )}

      {/* Interactive Pitch Simulator Modal */}
      <PitchSimulatorModal
        isOpen={isPitchSimulatorOpen}
        onClose={() => setIsPitchSimulatorOpen(false)}
        speechRate={speechRate}
        onAwardXpAndGems={handleAwardXpAndGems}
      />

      {/* Pre-Meeting 60s Emergency SOS Toolkit Modal */}
      <PreMeetingToolkitModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        speechRate={speechRate}
      />

      {/* Hands-Free Commute Audio Shadowing Modal */}
      <HandsFreeCommuteModal
        isOpen={isCommuteModalOpen}
        onClose={() => setIsCommuteModalOpen(false)}
        selectedLevel={selectedLevel}
        speechRate={speechRate}
      />

      {/* Pocket Instant Search Modal */}
      <PocketSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        speechRate={speechRate}
      />

      {/* Vikoda Executive Audio Portfolio & CEO Certificate Modal */}
      <VikodaExecutivePortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={() => setIsPortfolioModalOpen(false)}
        profile={profile}
        stats={gamificationState}
        speechRate={speechRate}
      />

      {/* Executive HR & Training Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
        currentUserProfile={profile}
        currentUserStats={gamificationState}
        onResetUserProgress={(targetEmail) => {
          if (targetEmail.toLowerCase() === profile.email.toLowerCase() || (currentUserProfile && targetEmail.toLowerCase() === currentUserProfile.email?.toLowerCase())) {
            const resetStats: GamificationState = {
              xp: 0,
              gems: 0,
              energy: 5,
              streakDays: 0,
              rank: 'Chiến Binh Vikoda',
              completedNodeIds: [],
              lastActiveDate: new Date().toISOString().split('T')[0],
              highestDrillScore: 0,
            };
            setGamificationState(resetStats);
            localStorage.setItem(STORAGE_KEY_VIKODA_STATS, JSON.stringify(resetStats));
            showToast('⚠️ Admin đã reset toàn bộ tiến độ của tài khoản này về 0 để thi lại.');
          } else {
            showToast(`✅ Đã reset toàn bộ tiến độ của tài khoản ${targetEmail} về 0.`);
          }
        }}
      />

      {/* 1v1 Real PvP Arena Modal */}
      {isPvPArenaOpen && (
        <PvPArenaModal
          isOpen={isPvPArenaOpen}
          onClose={() => setIsPvPArenaOpen(false)}
          currentUserProfile={profile}
          arenaStats={gamificationState.arenaStats || {
            eloRating: 1200,
            rankTitle: 'Đấu Sĩ Vikoda',
            matchesPlayed: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            currentWinStreak: 0,
            highestStreak: 0,
          }}
          onUpdateArenaStats={handleUpdateArenaStats}
          onRecordMistake={handleRecordMistake}
          speechRate={speechRate}
        />
      )}

      {/* Daily Quick Review (Mistakes Vault) 3-Minute Modal */}
      {isDailyReviewOpen && (
        <DailyQuickReviewModal
          isOpen={isDailyReviewOpen}
          onClose={() => setIsDailyReviewOpen(false)}
          mistakesVault={gamificationState.mistakesVault || []}
          onMasterMistake={handleMasterMistake}
          onAwardReviewXp={(xp, gems) => {
            handleAwardXpAndGems(xp, gems);
          }}
          speechRate={speechRate}
        />
      )}

      {/* 4-Skills Placement Test Diagnostic Modal */}
      {isPlacementTestOpen && (
        <PlacementTestModal
          isOpen={isPlacementTestOpen}
          onClose={() => setIsPlacementTestOpen(false)}
          onSaveResult={handleSavePlacementResult}
          speechRate={speechRate}
        />
      )}

      {/* AI Personal Coach & Study Planner Modal */}
      {isCoachOpen && (
        <PersonalCoachModal
          isOpen={isCoachOpen}
          onClose={() => setIsCoachOpen(false)}
          currentUserProfile={profile}
          gamificationState={gamificationState}
          selectedLevel={selectedLevel}
          onSavePlanner={handleSavePlanner}
          onJumpToUnit={(unitId) => {
            setIsCoachOpen(false);
            setActiveTab('path');
          }}
          onOpenArena={() => {
            setIsCoachOpen(false);
            setIsPvPArenaOpen(true);
          }}
          onOpenDailyReview={() => {
            setIsCoachOpen(false);
            setIsDailyReviewOpen(true);
          }}
        />
      )}

      {/* Mandatory Corporate Auth Modal on First Open */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onSuccess={handleAuthSuccess}
      />

      {/* Floating Gamified Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2 bg-slate-900/95 text-white px-4 py-2 rounded-full shadow-xl border border-sky-400/40 text-xs font-bold animate-bounce whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

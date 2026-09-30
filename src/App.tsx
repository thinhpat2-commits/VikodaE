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
import { GamificationState, EmployeeProfile } from './types';
import { CourseLevel } from './data/curriculumData';
import { playSound } from './services/soundEffects';

const STORAGE_KEY_VIKODA_STATS = 'vikoda_gamification_state_v3';
const STORAGE_KEY_LEVEL = 'vikoda_selected_level_v3';
const STORAGE_KEY_PROFILE = 'vikoda_employee_profile_v3';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('path');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('A1');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals for requested features
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [isEndlessDrillOpen, setIsEndlessDrillOpen] = useState<boolean>(false);
  const [isPitchSimulatorOpen, setIsPitchSimulatorOpen] = useState<boolean>(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState<boolean>(false);
  const [isCommuteModalOpen, setIsCommuteModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState<boolean>(false);

  // Employee Profile State (Login by Employee Code & Email with custom Avatar)
  const [profile, setProfile] = useState<EmployeeProfile>({
    employeeCode: 'VKD-1957',
    fullName: 'Trần Văn Minh',
    email: 'minh.sales@vikoda.com.vn',
    department: 'Phòng Kinh Doanh & Xuất Khẩu',
    title: 'Chuyên Viên Kinh Doanh Quốc Tế',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    highestDrillScore: 560,
    totalPracticeCount: 8,
    isLoggedIn: true
  });

  // Gamification state: XP, Gems, Energy, Streak, Completed Nodes, Highest Drill Score
  const [gamificationState, setGamificationState] = useState<GamificationState>({
    xp: 240,
    gems: 65,
    energy: 5,
    streakDays: 6,
    rank: 'Chiến Binh Vikoda',
    completedNodeIds: ['unit-1', 'unit-2'],
    lastActiveDate: new Date().toISOString().split('T')[0],
    highestDrillScore: 560
  });

  // Load state from localStorage
  useEffect(() => {
    try {
      const savedStats = localStorage.getItem(STORAGE_KEY_VIKODA_STATS);
      if (savedStats) {
        setGamificationState(JSON.parse(savedStats));
      }
      const savedLevel = localStorage.getItem(STORAGE_KEY_LEVEL);
      if (savedLevel) {
        setSelectedLevel(savedLevel as CourseLevel);
      }
      const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      }
    } catch (e) {
      console.warn('Error loading gamification state', e);
    }
  }, []);

  const saveGamificationState = (newState: GamificationState) => {
    setGamificationState(newState);
    localStorage.setItem(STORAGE_KEY_VIKODA_STATS, JSON.stringify(newState));
  };

  const handleSaveProfile = (updated: EmployeeProfile) => {
    setProfile(updated);
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(updated));
    showToast(`Đã cập nhật hồ sơ: ${updated.fullName} (${updated.employeeCode})`);
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

  const handleCompleteUnit = (unitId: string, xpGain: number, gemGain: number) => {
    const isNew = !gamificationState.completedNodeIds.includes(unitId);
    const updatedNodes = isNew
      ? [...gamificationState.completedNodeIds, unitId]
      : gamificationState.completedNodeIds;

    const newXp = gamificationState.xp + xpGain;
    const newGems = gamificationState.gems + gemGain;

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
    };

    saveGamificationState(updatedState);
    showToast(`+${xpGain} XP • +${gemGain} 💎 Hoàn thành xuất sắc bài học!`);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-blue-50/40 text-slate-900 flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* Vikoda Modern Header (Brand Logo, Level Switcher, Streak, Gems, AI, Profile) */}
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
      />

      {/* Main Screen Content */}
      <main className="flex-1 max-w-xl w-full mx-auto px-3 sm:px-4 pt-3 sm:pt-4 pb-28 sm:pb-32">
        
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
          />
        )}

        {/* TAB 2: VIKOVOICE AI (Pronunciation Coach) */}
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

      </main>

      {/* Mobile-First Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={(t) => {
          playSound('click');
          setActiveTab(t);
        }}
      />

      {/* AI Assistant Modal (Boardroom Translator) */}
      <AIAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        speechRate={speechRate}
      />

      {/* Employee Profile Modal */}
      <EmployeeProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        stats={gamificationState}
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

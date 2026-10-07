import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Compass, 
  Target, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Award, 
  ChevronRight, 
  BookOpen, 
  Swords, 
  Zap,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { EmployeeProfile, GamificationState, StudyPlannerSettings } from '../types';
import { CourseLevel, VIKODA_CURRICULUM } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';

interface PersonalCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserProfile: EmployeeProfile;
  gamificationState: GamificationState;
  selectedLevel: CourseLevel;
  onSavePlanner: (planner: StudyPlannerSettings) => void;
  onJumpToUnit: (unitId: string) => void;
  onOpenArena: () => void;
  onOpenDailyReview: () => void;
}

export const PersonalCoachModal: React.FC<PersonalCoachModalProps> = ({
  isOpen,
  onClose,
  currentUserProfile,
  gamificationState,
  selectedLevel,
  onSavePlanner,
  onJumpToUnit,
  onOpenArena,
  onOpenDailyReview
}) => {
  const [activeTab, setActiveTab] = useState<'daily_coach' | 'study_planner'>('daily_coach');

  // Study planner local form state
  const currentPlanner: StudyPlannerSettings = gamificationState.studyPlanner || {
    dailyGoalMinutes: 15,
    activeDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    targetLevel: 'B2-C1',
    targetGoalDays: 90,
    weeklyTargetLessons: 5
  };

  const [dailyMinutes, setDailyMinutes] = useState<number>(currentPlanner.dailyGoalMinutes);
  const [selectedDays, setSelectedDays] = useState<string[]>(currentPlanner.activeDays);
  const [targetLevel, setTargetLevel] = useState<CourseLevel>(currentPlanner.targetLevel as CourseLevel);

  if (!isOpen) return null;

  // Identify next recommended unit in the current level
  const levelUnits = VIKODA_CURRICULUM.filter(u => u.level === selectedLevel);
  const nextUnit = levelUnits.find(u => !gamificationState.completedNodeIds.includes(u.id)) || levelUnits[0];

  const handleToggleDay = (day: string) => {
    playSound('click');
    if (selectedDays.includes(day)) {
      if (selectedDays.length > 1) {
        setSelectedDays(selectedDays.filter(d => d !== day));
      }
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSavePlannerSettings = () => {
    playSound('success');
    const updated: StudyPlannerSettings = {
      dailyGoalMinutes: dailyMinutes,
      activeDays: selectedDays,
      targetLevel: targetLevel,
      targetGoalDays: 90,
      weeklyTargetLessons: selectedDays.length
    };
    onSavePlanner(updated);
    setActiveTab('daily_coach');
  };

  const DAYS_OF_WEEK = [
    { key: 'Mon', label: 'T2' },
    { key: 'Tue', label: 'T3' },
    { key: 'Wed', label: 'T4' },
    { key: 'Thu', label: 'T5' },
    { key: 'Fri', label: 'T6' },
    { key: 'Sat', label: 'T7' },
    { key: 'Sun', label: 'CN' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#005A9C] via-[#0072CE] to-sky-600 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-xs">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black tracking-tight">AI Personal Learning Coach</h2>
              <p className="text-xs text-sky-100 font-medium">
                Định hướng mục tiêu & Lộ trình đào tạo cá nhân hóa theo chuẩn Cambridge
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Tabs */}
            <div className="bg-white/20 p-1 rounded-2xl flex items-center space-x-1">
              <button
                onClick={() => {
                  playSound('click');
                  setActiveTab('daily_coach');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'daily_coach' ? 'bg-white text-[#005A9C] shadow-xs' : 'text-white hover:bg-white/10'
                }`}
              >
                Kế Hoạch Hôm Nay
              </button>
              <button
                onClick={() => {
                  playSound('click');
                  setActiveTab('study_planner');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'study_planner' ? 'bg-white text-[#005A9C] shadow-xs' : 'text-white hover:bg-white/10'
                }`}
              >
                Cài Đặt Mục Tiêu
              </button>
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TAB 1: DAILY COACH PRESCRIPTION */}
        {activeTab === 'daily_coach' && (
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Executive AI Coach Greeting & Motivation */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-[#003B70] to-[#005A9C] text-white border border-sky-300/30 shadow-lg relative overflow-hidden">
              <div className="relative shrink-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-300 p-0.5 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-slate-900 overflow-hidden flex flex-col items-center justify-center relative">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80" 
                      alt="AI Executive Coach"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" title="Online Sẵn Sàng" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-sky-500/30 text-sky-200 border border-sky-400/40 rounded-full text-xs font-black uppercase tracking-wider">
                    Dr. Katherine Vance • Cố Vấn Cao Cấp
                  </span>
                  <span className="text-[10px] font-black text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-md border border-amber-400/30">
                    Cambridge B2B Standard
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Chào {currentUserProfile.fullName}!
                </h3>
                <p className="text-sm md:text-base text-sky-100 leading-relaxed font-medium">
                  "Với chiến lược chuẩn mực, chỉ cần bạn duy trì đều đặn <span className="font-bold text-amber-300">{dailyMinutes} phút</span> mỗi ngày, phản xạ đàm phán quốc tế sẽ hình thành tự nhiên và vững chắc."
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                  <span className="text-xs font-bold text-slate-800 bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 flex items-center space-x-1.5 shadow-xs">
                    <Flame className="w-4 h-4 text-amber-500" />
                    <span>Chuỗi: {gamificationState.streakDays} ngày liên tiếp</span>
                  </span>
                  <span className="text-xs font-bold text-slate-800 bg-white/95 px-3 py-1.5 rounded-xl border border-white/40 flex items-center space-x-1.5 shadow-xs">
                    <Award className="w-4 h-4 text-[#0070D1]" />
                    <span>Mục tiêu tuần: {selectedDays.length} ngày</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Daily Prescription Steps (No more confusion!) */}
            <div className="space-y-4">
              <h4 className="text-base md:text-lg font-black text-slate-900 flex items-center space-x-2">
                <Target className="w-5 h-5 text-[#0072CE]" />
                <span>3 Bước Luyện Tập Đề Xuất Hôm Nay:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Step 1: Main Unit */}
                <div className="p-5 rounded-2xl border-2 border-sky-300 bg-white hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-xl bg-sky-100 text-[#0072CE] font-black text-xs flex items-center justify-center">
                        1
                      </span>
                      <span className="text-[11px] font-extrabold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                        7 Phút • Lộ Trình
                      </span>
                    </div>
                    <h5 className="font-black text-base text-slate-900 line-clamp-2">
                      {nextUnit.title}
                    </h5>
                    <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                      {nextUnit.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      playSound('click');
                      onClose();
                      onJumpToUnit(nextUnit.id);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#0072CE] hover:bg-[#005A9C] text-white font-black text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Vào Học Ngay</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Step 2: 1v1 PvP Arena */}
                <div className="p-5 rounded-2xl border-2 border-rose-300 bg-white hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-600 font-black text-xs flex items-center justify-center">
                        2
                      </span>
                      <span className="text-[11px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                        5 Phút • Đối Kháng
                      </span>
                    </div>
                    <h5 className="font-black text-base text-slate-900">
                      Đấu Trường 1v1 PvP
                    </h5>
                    <p className="text-xs text-slate-500 font-medium">
                      Thách đấu 1 đồng nghiệp kiểm tra phản xạ kiến thức khoáng kiềm & bán hàng.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      playSound('click');
                      onClose();
                      onOpenArena();
                    }}
                    className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <Swords className="w-4 h-4" />
                    <span>Vào Đấu Trường</span>
                  </button>
                </div>

                {/* Step 3: Mistakes Review */}
                <div className="p-5 rounded-2xl border-2 border-amber-300 bg-white hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center">
                        3
                      </span>
                      <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        3 Phút • Sửa Lỗi
                      </span>
                    </div>
                    <h5 className="font-black text-base text-slate-900">
                      Ôn Tập Câu Hay Sai
                    </h5>
                    <p className="text-xs text-slate-500 font-medium">
                      Sửa dứt điểm các lỗi giao tiếp và từ vựng người Việt hay mắc phải.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      playSound('click');
                      onClose();
                      onOpenDailyReview();
                    }}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Ôn Nhanh 3 Phút</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: SMART STUDY PLANNER */}
        {activeTab === 'study_planner' && (
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
            
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                Thiết Lập Kế Hoạch & Mục Tiêu Học Tập
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Tự động hóa thói quen học tiếng Anh theo quỹ thời gian công việc của bạn
              </p>
            </div>

            {/* Daily Minutes Selection */}
            <div className="space-y-3">
              <label className="text-sm font-extrabold text-slate-800 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0072CE]" />
                <span>Mục tiêu thời gian mỗi ngày:</span>
              </label>
              
              <div className="grid grid-cols-3 gap-3">
                {[10, 15, 25].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => {
                      playSound('click');
                      setDailyMinutes(mins);
                    }}
                    className={`p-4 rounded-2xl border-2 font-black transition-all cursor-pointer text-center ${
                      dailyMinutes === mins 
                        ? 'border-[#0072CE] bg-sky-50/80 text-[#005A9C] shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xl md:text-2xl">{mins} Phút</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">
                      {mins === 10 ? 'Khởi động nhẹ' : mins === 15 ? 'Chuẩn Chiến Binh' : 'Bứt phá C-Suite'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Days of Week */}
            <div className="space-y-3">
              <label className="text-sm font-extrabold text-slate-800 flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#0072CE]" />
                <span>Ngày học trong tuần (Chọn ít nhất 1 ngày):</span>
              </label>

              <div className="flex flex-wrap gap-2.5">
                {DAYS_OF_WEEK.map((day) => {
                  const isChecked = selectedDays.includes(day.key);
                  return (
                    <button
                      key={day.key}
                      onClick={() => handleToggleDay(day.key)}
                      className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center transition-all cursor-pointer border-2 ${
                        isChecked 
                          ? 'border-[#0072CE] bg-[#0072CE] text-white shadow-xs' 
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {day.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Level */}
            <div className="space-y-3">
              <label className="text-sm font-extrabold text-slate-800 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-[#0072CE]" />
                <span>Cấp độ mục tiêu hướng tới:</span>
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(['A1', 'A2-B1', 'B2-C1', 'C2'] as CourseLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      playSound('click');
                      setTargetLevel(lvl);
                    }}
                    className={`p-3.5 rounded-2xl border-2 font-black transition-all cursor-pointer text-center text-sm ${
                      targetLevel === lvl
                        ? 'border-[#0072CE] bg-sky-50 text-[#005A9C] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div>{lvl}</div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {lvl === 'A1' ? 'Tân Binh' : lvl === 'A2-B1' ? 'Đại Sứ' : lvl === 'B2-C1' ? 'Thủ Lĩnh' : 'Tinh Hoa'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-2">
              <button
                onClick={handleSavePlannerSettings}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#005A9C] to-[#0072CE] text-white font-black text-base shadow-lg hover:shadow-xl transition-all cursor-pointer active:translate-y-0.5"
              >
                Lưu Kế Hoạch Học Tập & Kích Hoạt Huấn Luyện Viên
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

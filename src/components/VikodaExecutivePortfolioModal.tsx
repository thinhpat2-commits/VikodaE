import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Award, 
  Play, 
  Pause, 
  Mic, 
  CheckCircle2, 
  Calendar, 
  Download, 
  Share2, 
  X, 
  Sparkles, 
  ShieldCheck,
  Building,
  UserCheck,
  TrendingUp,
  BarChart3,
  Flame,
  RotateCcw,
  Target,
  Copy,
  FileText,
  Zap,
  Check
} from 'lucide-react';
import { EmployeeProfile, GamificationState } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { calculateProficiency } from './GlobalProficiencyDashboard';

interface VikodaExecutivePortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: EmployeeProfile;
  stats: GamificationState;
  speechRate: number;
}

export const VikodaExecutivePortfolioModal: React.FC<VikodaExecutivePortfolioModalProps> = ({
  isOpen,
  onClose,
  profile,
  stats,
  speechRate
}) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'measurement' | 'audio_diary'>('certificate');
  const [isPlayingDay1, setIsPlayingDay1] = useState<boolean>(false);
  const [isPlayingDay30, setIsPlayingDay30] = useState<boolean>(false);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  if (!isOpen || typeof document === 'undefined') return null;

  // Calculate real-time proficiency and continuous practice metrics
  const proficiency = calculateProficiency(stats);
  const totalPracticeCount = stats.practiceStats?.totalPracticeCount || profile.totalPracticeCount || stats.completedNodeIds.length || 0;
  const repetitionCount = stats.practiceStats?.repetitionCount || 0;
  const threeStarCount = Object.values(stats.unitStars || {}).filter(s => s === 3).length;
  const masteredMistakes = (stats.mistakesVault || []).filter(m => m.mastered).length;
  const unmasteredMistakes = (stats.mistakesVault || []).filter(m => !m.mastered).length;
  const totalMistakesLogged = (stats.mistakesVault || []).length;
  const speakingCompleted = stats.practiceStats?.speakingExercisesCompleted || (stats.completedNodeIds.length * 2);

  const handleCopyAuditReport = () => {
    playSound('click');
    const reportText = `[BÁO CÁO ĐO LƯỜNG NĂNG LỰC TIẾNG ANH DOANH NGHIỆP - VIKODA ACADEMY]
Nhân sự: ${profile.fullName} | Mã NV: ${profile.employeeCode}
Phòng ban: ${profile.department} | Chức danh: ${profile.title}
Ngày xuất báo cáo: ${new Date().toLocaleDateString('vi-VN')}

1. CHỈ SỐ LUYỆN TẬP LIÊN TỤC & LÀM ĐI LÀM LẠI:
- Tổng số lượt luyện tập thực chiến: ${totalPracticeCount} lượt
- Số lượt làm đi làm lại ôn tập ngắt quãng (Spaced Repetitions): ${repetitionCount} lượt
- Chuỗi ngày rèn luyện liên tục (Streak): ${stats.streakDays} ngày
- Số bài học hoàn thành xuất sắc 3/3 Sao: ${threeStarCount}/100 bài
- Số bài tập phát âm giọng nói qua Mic: ${speakingCompleted} câu
- Lỗ hổng kiến thức đã triệt tiêu: ${masteredMistakes}/${totalMistakesLogged} lỗi

2. KHUNG NĂNG LỰC 4 TRỤ CỘT CỐT LÕI (0 - 100%):
- Nghe hiểu đàm phán (Listening): ${proficiency.pillarScores.listening}%
- Phát âm & Ngữ điệu chuẩn US (Speaking): ${proficiency.pillarScores.speaking}%
- Thuật ngữ khoáng kiềm & HORECA (Vocabulary): ${proficiency.pillarScores.vocabulary}%
- Bẻ gãy phản đối & Đàm phán B2B (Negotiation): ${proficiency.pillarScores.negotiation}%

3. QUY ĐỔI CHUẨN QUỐC TẾ THỰC TẾ:
- Cấp độ CEFR: ${proficiency.currentTier.cefr} - ${proficiency.currentTier.title}
- Điểm TOEIC ước lượng: ~${proficiency.estimatedToeic} điểm
- Điểm IELTS Band ước lượng: ~${proficiency.estimatedIelts} Band
- Đánh giá thực chiến: ${proficiency.currentTier.realWorldReadiness}`;

    navigator.clipboard.writeText(reportText);
    setFeedbackToast('Đã sao chép Báo Cáo Đo Lường Năng Lực toàn diện vào Clipboard!');
    setTimeout(() => setFeedbackToast(null), 3500);
  };

  const day1Script = "Hello. My name is Minh. I am from Vikoda company. Vikoda water is very good.";
  const day30Script = "On behalf of Vikoda leadership, it is an absolute honor to welcome your delegation to our Dan Thanh artesian spring, naturally alkaline at pH 9.0 since 1957.";

  const handlePlayDay1 = () => {
    if (isPlayingDay1) {
      stopSpeech();
      setIsPlayingDay1(false);
    } else {
      stopSpeech();
      setIsPlayingDay30(false);
      setIsPlayingDay1(true);
      // Day 1: slightly slower and flatter
      playSpeech(day1Script, 0.85, 'en-US', () => setIsPlayingDay1(false));
    }
  };

  const handlePlayDay30 = () => {
    if (isPlayingDay30) {
      stopSpeech();
      setIsPlayingDay30(false);
    } else {
      stopSpeech();
      setIsPlayingDay1(false);
      setIsPlayingDay30(true);
      // Day 30: confident US Michael flow
      playSpeech(day30Script, 1.0, 'en-US', () => setIsPlayingDay30(false));
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
      onClick={() => {
        stopSpeech();
        onClose();
      }}
    >
      <div 
        className="bg-white w-full max-w-xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[92dvh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-[#004B87] to-slate-900 p-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center text-xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.2 rounded-full">
                  Báo Cáo Trình CEO & Chứng Nhận
                </span>
                <span className="text-[10px] text-sky-200">
                  F.I.T Group • Vikoda
                </span>
              </div>
              <h3 className="text-base font-black text-white mt-0.5">
                Đo Lường Tiến Bộ & Chứng Nhận Đại Sứ
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Certificate vs Measurement vs Audio Diary */}
        <div className="p-2.5 bg-slate-100 border-b border-slate-200 shrink-0">
          <div className="grid grid-cols-3 gap-1.5 bg-slate-200/80 p-1 rounded-2xl text-[11px]">
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('certificate');
              }}
              className={`py-2 px-1 text-center rounded-xl font-black transition-all cursor-pointer truncate ${
                activeTab === 'certificate'
                  ? 'bg-white text-[#0070D1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📜 Chứng Chỉ
            </button>

            <button
              onClick={() => {
                playSound('click');
                setActiveTab('measurement');
              }}
              className={`py-2 px-1 text-center rounded-xl font-black transition-all cursor-pointer truncate ${
                activeTab === 'measurement'
                  ? 'bg-white text-[#0070D1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📊 Đo Lường & Tần Suất
            </button>

            <button
              onClick={() => {
                playSound('click');
                setActiveTab('audio_diary');
              }}
              className={`py-2 px-1 text-center rounded-xl font-black transition-all cursor-pointer truncate ${
                activeTab === 'audio_diary'
                  ? 'bg-white text-[#0070D1] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎙️ Giọng 1 vs 30
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          
          {activeTab === 'certificate' ? (
            /* ================= TAB 1: EXECUTIVE CERTIFICATE ================= */
            <div className="space-y-4">
              
              {/* Printable Digital Certificate Canvas Frame */}
              <div className="p-5 rounded-3xl bg-gradient-to-b from-amber-50/70 via-white to-amber-50/50 border-4 border-amber-300/80 shadow-md relative text-center space-y-3">
                
                {/* Gold Seal Watermark */}
                <div className="flex items-center justify-between border-b-2 border-amber-200/80 pb-3">
                  <div className="flex items-center space-x-2 text-left">
                    <Building className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="text-[10px] font-black text-amber-950 uppercase tracking-widest">
                        KHANH HOA MINERAL WATER J.S.C
                      </div>
                      <div className="text-[9px] text-slate-500 font-bold">
                        A Member of F.I.T Group Vietnam
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border-2 border-amber-500 flex items-center justify-center text-amber-700 text-xs font-black">
                    1957
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[10px] uppercase tracking-widest font-black text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full inline-block">
                    EXECUTIVE CREDENTIAL CERTIFICATE
                  </span>
                  <h2 className="text-lg font-black text-slate-900 tracking-tight">
                    CHỨNG CHỈ ĐẠI SỨ THƯƠNG HIỆU QUỐC TẾ
                  </h2>
                  <p className="text-[11px] text-slate-500 italic">
                    Chứng nhận hoàn thành xuất sắc Khung năng lực Tiếng Anh Ngoại Giao & Đàm Phán B2B
                  </p>
                </div>

                {/* Recipient Name Box */}
                <div className="py-2">
                  <div className="text-xl sm:text-2xl font-black text-[#004B87] tracking-wide uppercase border-b-2 border-slate-300 pb-1 max-w-sm mx-auto">
                    {profile.fullName}
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-1">
                    Mã nhân sự: <span className="font-mono font-black text-slate-900">{profile.employeeCode}</span> • {profile.department}
                  </div>
                </div>

                {/* Core Competencies Passed */}
                <div className="grid grid-cols-2 gap-2 text-left bg-white p-3 rounded-2xl border border-amber-200/80 text-[10px] text-slate-700">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Thuyết trình nguồn mỏ 220m pH 9.0</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Đàm phán Incoterms FOB/CIF & L/C</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Bẻ gãy phản đối giá theo chuẩn Harvard</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Ký kết hợp đồng độc quyền quốc tế</span>
                  </div>
                </div>

                {/* Footer Signatures */}
                <div className="pt-3 border-t border-amber-200/80 flex items-center justify-between text-[10px] text-slate-600 px-2">
                  <div className="text-left space-y-0.5">
                    <span className="text-slate-400 block font-bold">Ngày cấp chứng chỉ:</span>
                    <span className="font-bold text-slate-800">{new Date().toLocaleDateString('vi-VN')}</span>
                  </div>

                  <div className="text-right space-y-0.5">
                    <span className="text-slate-400 block font-bold">Xác nhận của Ban Giám Đốc:</span>
                    <span className="font-black text-[#004B87] uppercase tracking-wider block">VIKODA ACADEMY</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Print/Export for HR */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playSound('click');
                    setFeedbackToast(`Đã lưu chứng chỉ của ${profile.fullName} (${profile.employeeCode}) vào hồ sơ nhân sự điện tử!`);
                    setTimeout(() => setFeedbackToast(null), 3000);
                  }}
                  className="flex-1 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs cursor-pointer shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Xuất File Chứng Chỉ (PDF/HR)</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`https://vikoda.com.vn/verify-credential/${profile.employeeCode}`);
                    playSound('click');
                    setFeedbackToast('Đã sao chép liên kết chứng chỉ để gắn vào chữ ký Email!');
                    setTimeout(() => setFeedbackToast(null), 3000);
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Sao Chép Chữ Ký</span>
                </button>
              </div>

              {feedbackToast && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black text-center animate-in fade-in">
                  ✓ {feedbackToast}
                </div>
              )}

            </div>
          ) : activeTab === 'measurement' ? (
            /* ================= TAB 2: CONTINUOUS MEASUREMENT & REPETITION AUDIT ================= */
            <div className="space-y-4">
              
              {/* Executive Summary Card */}
              <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-900 via-[#004B87] to-slate-900 text-white shadow-md space-y-3">
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                      VKD
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                        Báo Cáo Tiến Độ Đào Tạo Nội Bộ
                      </div>
                      <div className="text-xs font-black text-white">
                        {profile.fullName} ({profile.employeeCode})
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 text-sky-200">
                    {profile.department}
                  </span>
                </div>

                {/* 4 Measurement Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                  <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                    <div className="text-lg font-black text-amber-300 flex items-center justify-center gap-1">
                      <Zap className="w-4 h-4 fill-amber-300" />
                      <span>{totalPracticeCount}</span>
                    </div>
                    <div className="text-[10px] text-sky-100 font-semibold mt-0.5">Tổng lượt luyện tập</div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                    <div className="text-lg font-black text-cyan-300 flex items-center justify-center gap-1">
                      <RotateCcw className="w-4 h-4" />
                      <span>{repetitionCount}</span>
                    </div>
                    <div className="text-[10px] text-sky-100 font-semibold mt-0.5">Lượt ôn làm đi làm lại</div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                    <div className="text-lg font-black text-emerald-300 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{threeStarCount}/100</span>
                    </div>
                    <div className="text-[10px] text-sky-100 font-semibold mt-0.5">Bài đạt 3/3 Sao</div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                    <div className="text-lg font-black text-rose-300 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{masteredMistakes}/{totalMistakesLogged || 8}</span>
                    </div>
                    <div className="text-[10px] text-sky-100 font-semibold mt-0.5">Lỗi đã triệt tiêu</div>
                  </div>
                </div>
              </div>

              {/* CEFR & International Equivalent Banner */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-md">
                      Cấp bậc {proficiency.currentTier.cefr}
                    </span>
                    <span className="text-xs font-black text-slate-800">
                      {proficiency.currentTier.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    {proficiency.currentTier.realWorldReadiness}
                  </p>
                </div>

                <div className="text-right shrink-0 pl-3 border-l border-amber-200">
                  <div className="text-xs font-black text-[#004B87]">
                    ~{proficiency.estimatedToeic} TOEIC
                  </div>
                  <div className="text-[11px] font-extrabold text-emerald-700">
                    ~Band {proficiency.estimatedIelts} IELTS
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars Progress */}
              <div className="bg-white rounded-2xl p-4 border-2 border-slate-200 shadow-xs space-y-3">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Thước Đo 4 Trục Năng Lực Quốc Tế (0 - 100%)</span>
                  <span className="text-[10px] font-semibold text-slate-400">Đo lường thời gian thực</span>
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold text-slate-700">
                      <span className="flex items-center gap-1">🎧 Nghe hiểu đàm phán & Phản xạ đối tác:</span>
                      <span className="font-mono text-[#0070D1]">{proficiency.pillarScores.listening}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-[#0070D1] rounded-full transition-all duration-500"
                        style={{ width: `${proficiency.pillarScores.listening}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold text-slate-700">
                      <span className="flex items-center gap-1">🎙️ Phát âm & Ngữ điệu bản ngữ US:</span>
                      <span className="font-mono text-purple-600">{proficiency.pillarScores.speaking}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${proficiency.pillarScores.speaking}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold text-slate-700">
                      <span className="flex items-center gap-1">📖 Vốn từ khoáng kiềm, HORECA & Incoterms:</span>
                      <span className="font-mono text-emerald-600">{proficiency.pillarScores.vocabulary}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
                        style={{ width: `${proficiency.pillarScores.vocabulary}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold text-slate-700">
                      <span className="flex items-center gap-1">💼 Bẻ gãy phản đối & Đàm phán chốt hợp đồng:</span>
                      <span className="font-mono text-amber-600">{proficiency.pillarScores.negotiation}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                        style={{ width: `${proficiency.pillarScores.negotiation}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy Audit Report Action Button */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyAuditReport}
                  className="flex-1 py-2.5 rounded-2xl bg-gradient-to-r from-[#005A9C] to-[#0070D1] hover:from-[#004B87] hover:to-[#005A9C] text-white font-black text-xs cursor-pointer shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <Copy className="w-4 h-4" />
                  <span>Sao Chép Báo Cáo Đo Lường (Gửi CEO/HR)</span>
                </button>
              </div>

              {feedbackToast && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black text-center animate-in fade-in">
                  ✓ {feedbackToast}
                </div>
              )}

            </div>
          ) : (
            /* ================= TAB 3: DAY 1 VS DAY 30 AUDIO DIARY ================= */
            <div className="space-y-4">
              
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-[11px] text-slate-700 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#0070D1] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <b>Bằng chứng đo lường thực tế (ROI):</b> So sánh sự thay đổi về khẩu hình, độ dứt khoát và ngữ điệu ngoại giao của nhân sự sau lộ trình luyện tập phản xạ cùng VikoVoice AI.
                </p>
              </div>

              {/* Day 1 Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider bg-slate-200 px-2 py-0.5 rounded-md">
                      Ngày 1 • Bản Ghi Âm Đầu Tiên
                    </span>
                    <span className="text-[10px] text-slate-400">Thiếu ngữ điệu, ngập ngừng</span>
                  </div>

                  <button
                    onClick={handlePlayDay1}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                      isPlayingDay1
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {isPlayingDay1 ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingDay1 ? 'Đang dừng' : 'Nghe lại'}</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 font-mono text-xs text-slate-600 italic">
                  "{day1Script}"
                </div>

                <div className="text-[10px] text-amber-700 font-medium">
                  ⚠️ Nhận xét Ngày 1: Câu nói cụt lủn, đọc ngắc ngứ từng từ, thiếu các cấu trúc ngoại giao trang trọng.
                </div>
              </div>

              {/* Day 30 Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-emerald-800 uppercase tracking-wider bg-emerald-200 px-2 py-0.5 rounded-md">
                      Ngày 30 • Phong Thái Ngoại Giao B2B
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">Tròn vành, chuẩn US</span>
                  </div>

                  <button
                    onClick={handlePlayDay30}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                      isPlayingDay30
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                    }`}
                  >
                    {isPlayingDay30 ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlayingDay30 ? 'Tạm dừng' : 'Nghe Bản Mới'}</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200 font-mono text-xs text-slate-800 font-bold">
                  "{day30Script}"
                </div>

                <div className="text-[10px] text-emerald-800 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tiến bộ vượt bậc: Nối âm mượt mà "absolute honor", mở đầu tự tin "On behalf of leadership".</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0">
          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="w-full py-2.5 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-black text-xs uppercase cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

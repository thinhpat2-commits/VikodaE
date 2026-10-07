import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Upload, 
  Check, 
  Sparkles, 
  Flame, 
  Gem, 
  QrCode, 
  ShieldCheck, 
  LogOut,
  Trophy,
  Edit3,
  Award,
  Globe,
  UserCheck
} from 'lucide-react';
import { EmployeeProfile, GamificationState } from '../types';
import { CompanyEmblem, VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { GlobalProficiencyDashboard, calculateProficiency } from './GlobalProficiencyDashboard';

interface EmployeeProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: EmployeeProfile;
  onSaveProfile: (updated: EmployeeProfile) => void;
  stats: GamificationState;
  onLogout?: () => void;
  onOpenPlacementTest?: () => void;
  onOpenAdmin?: () => void;
  initialTab?: 'card' | 'proficiency';
}

const PRESET_AVATARS = [
  { id: 'ceo', label: 'CEO Executive', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { id: 'sales_lead', label: 'Sales Director', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { id: 'export_mgr', label: 'Export Manager', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
  { id: 'qa_engineer', label: 'QA / Lab Lead', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { id: 'brand_ambassador', label: 'Brand Ambassador', url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80' },
  { id: 'plant_ops', label: 'Plant Engineer', url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80' },
];

export const EmployeeProfileModal: React.FC<EmployeeProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  stats,
  onLogout,
  onOpenPlacementTest,
  onOpenAdmin,
  initialTab,
}) => {
  const [activeTab, setActiveTab] = useState<'card' | 'proficiency'>(initialTab || 'card');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);
  const [employeeCode, setEmployeeCode] = useState(profile.employeeCode || 'VKD-1957');
  const [fullName, setFullName] = useState(profile.fullName || 'Trần Văn Minh');
  const [department, setDepartment] = useState(profile.department || 'Phòng Kinh Doanh & Xuất Khẩu');
  const [title, setTitle] = useState(profile.title || 'Chuyên Viên Kinh Doanh Quốc Tế');
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl || PRESET_AVATARS[1].url);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { currentTier } = calculateProficiency(stats);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('Vui lòng chọn ảnh nhỏ hơn 2MB.');
        setTimeout(() => setErrorMsg(null), 3000);
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarUrl(event.target.result as string);
          playSound('success');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!employeeCode.trim() || !fullName.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ Mã Nhân Viên và Họ Tên!');
      setTimeout(() => setErrorMsg(null), 3000);
      return;
    }
    const updated: EmployeeProfile = {
      ...profile,
      employeeCode: employeeCode.trim().toUpperCase(),
      fullName: fullName.trim(),
      department: department.trim(),
      title: title.trim(),
      avatarUrl,
      isLoggedIn: true
    };
    onSaveProfile(updated);
    setIsEditing(false);
    playSound('success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md sm:max-w-lg w-full border border-sky-100 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Compact Header Bar */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0072CE] to-[#0284C7] px-4 py-3 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <CompanyEmblem className="w-6 h-6" />
            <h3 className="text-xs sm:text-sm font-black tracking-tight">Hồ Sơ & Thẻ Nhân Viên Vikoda</h3>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 shrink-0 gap-2">
          <button
            type="button"
            onClick={() => {
              playSound('click');
              setActiveTab('card');
            }}
            className={`pb-2.5 px-3 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'card'
                ? 'border-[#0070D1] text-[#0070D1]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Thẻ Nhân Viên</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playSound('click');
              setActiveTab('proficiency');
            }}
            className={`pb-2.5 px-3 text-xs font-black border-b-2 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'proficiency'
                ? 'border-[#0070D1] text-[#0070D1]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Thước Đo Quốc Tế (TOEIC / IELTS)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-3.5 overflow-y-auto">
          {activeTab === 'proficiency' ? (
            <GlobalProficiencyDashboard
              stats={stats}
              profile={profile}
              onOpenPlacementTest={onOpenPlacementTest}
              onNavigateToStudy={() => onClose()}
            />
          ) : (
            <>
          
          {/* DIGITAL BADGE CARD */}
          <div className="relative rounded-2xl p-4 text-white overflow-hidden shadow-md border border-sky-300/40 bg-gradient-to-br from-[#005A9C] via-[#0072CE] to-[#0369A1]">
            <div className="absolute -right-4 -bottom-4 opacity-15 pointer-events-none scale-110">
              <VikoMascot size="lg" mood="proud" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="relative shrink-0">
                  <img
                    src={avatarUrl}
                    alt={fullName}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md bg-white"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-cyan-400 text-slate-900 tracking-wider">
                      {employeeCode}
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-white/20 text-white border border-white/20">
                      {currentTier.cefr} • {currentTier.readinessBadge}
                    </span>
                  </div>
                  <h4 className="text-sm font-black tracking-tight text-white mt-1 truncate">
                    {fullName}
                  </h4>
                  <p className="text-[11px] text-sky-100 font-semibold truncate">{title}</p>
                  <p className="text-[10px] text-sky-200/90 truncate">{department}</p>
                  <div className="mt-1 flex items-center gap-1 text-[9px] text-cyan-200 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                    <span className="truncate">Thực chiến: {currentTier.readinessBadge} ({currentTier.readinessSub})</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="w-8 h-8 bg-white/15 backdrop-blur-md rounded-lg p-1 border border-white/30 flex items-center justify-center text-white ml-auto">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-[8px] text-sky-200 block mt-1 font-mono font-bold">VKD-ID</span>
              </div>
            </div>

            {/* 4 Core Performance Stats */}
            <div className="mt-3 pt-2.5 border-t border-white/20 grid grid-cols-4 gap-1.5 text-center">
              <div className="bg-white/10 rounded-xl py-1">
                <div className="text-xs font-black text-amber-300 flex items-center justify-center space-x-0.5">
                  <Flame className="w-3 h-3 fill-amber-300" />
                  <span>{stats.streakDays}</span>
                </div>
                <div className="text-[8px] text-sky-100">Chuỗi ngày</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1">
                <div className="text-xs font-black text-white flex items-center justify-center space-x-0.5">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  <span>{stats.xp}</span>
                </div>
                <div className="text-[8px] text-sky-100">Tổng XP</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1">
                <div className="text-xs font-black text-purple-200 flex items-center justify-center space-x-0.5">
                  <Gem className="w-3 h-3 fill-purple-300" />
                  <span>{stats.gems}</span>
                </div>
                <div className="text-[8px] text-sky-100">Ngọc</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1">
                <div className="text-xs font-black text-emerald-300 flex items-center justify-center space-x-0.5">
                  <Trophy className="w-3 h-3" />
                  <span>{stats.arenaStats?.eloRating || 1200}</span>
                </div>
                <div className="text-[8px] text-sky-100">Elo 1v1</div>
              </div>
            </div>
          </div>

          {/* EDIT FORM (Collapsible, only shows when tapped) */}
          {isEditing ? (
            <form onSubmit={handleSave} className="bg-slate-50 rounded-2xl p-3 border border-slate-200 space-y-2.5 animate-in fade-in duration-100 text-xs">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="font-black text-slate-800 flex items-center gap-1">
                  <Edit3 className="w-3.5 h-3.5 text-[#0070D1]" />
                  <span>Chỉnh sửa thông tin cá nhân</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-[10px] text-slate-400 font-bold hover:text-slate-600 cursor-pointer"
                >
                  Hủy
                </button>
              </div>

              {errorMsg && (
                <div className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold">
                  {errorMsg}
                </div>
              )}

              {/* Avatar Selector */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-600 block">Chọn Avatar:</span>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {PRESET_AVATARS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => {
                        setAvatarUrl(p.url);
                        playSound('click');
                      }}
                      className={`relative w-9 h-9 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        avatarUrl === p.url ? 'border-sky-500 scale-105 shadow-xs' : 'border-transparent opacity-75'
                      }`}
                    >
                      <img src={p.url} alt="" className="w-full h-full object-cover" />
                      {avatarUrl === p.url && (
                        <div className="absolute inset-0 bg-sky-500/20 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </div>
                      )}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-9 h-9 rounded-xl border border-dashed border-slate-300 bg-white flex items-center justify-center text-slate-400 hover:text-sky-600 shrink-0 cursor-pointer"
                    title="Tải ảnh từ máy"
                  >
                    <Upload className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Name & Code */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Họ & Tên</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Mã NV</label>
                  <input
                    type="text"
                    value={employeeCode}
                    onChange={(e) => setEmployeeCode(e.target.value)}
                    className="w-full p-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase font-mono"
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Phòng Ban</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full p-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs shadow-xs cursor-pointer"
              >
                Lưu Thay Đổi
              </button>
            </form>
          ) : (
            /* ACTION BUTTONS (Clean, no endless scrolling) */
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  playSound('click');
                  setIsEditing(true);
                }}
                className="py-2.5 px-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Chỉnh sửa thẻ</span>
              </button>

              {onLogout && (
                <button
                  onClick={() => {
                    playSound('click');
                    onLogout();
                  }}
                  className="py-2.5 px-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng xuất</span>
                </button>
              )}

              {onOpenAdmin && (
                <button
                  onClick={() => {
                    playSound('click');
                    onClose();
                    onOpenAdmin();
                  }}
                  className="col-span-2 py-2.5 px-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-900 border border-amber-300 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98 shadow-2xs"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Cổng Quản Trị Hệ Thống (HR Admin)</span>
                </button>
              )}
            </div>
          )}

            </>
          )}

        </div>

      </div>
    </div>
  );
};

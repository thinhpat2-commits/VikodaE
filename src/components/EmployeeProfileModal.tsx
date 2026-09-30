import React, { useState, useRef } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Briefcase, 
  Award, 
  Upload, 
  Camera, 
  Check, 
  Sparkles, 
  Flame, 
  Gem, 
  FileText, 
  QrCode, 
  ShieldCheck, 
  LogOut,
  Trophy,
  Share2,
  Download
} from 'lucide-react';
import { EmployeeProfile, GamificationState } from '../types';
import { CompanyEmblem, VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';

interface EmployeeProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: EmployeeProfile;
  onSaveProfile: (updated: EmployeeProfile) => void;
  stats: GamificationState;
  onLogout?: () => void;
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
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(!profile.isLoggedIn);
  const [employeeCode, setEmployeeCode] = useState(profile.employeeCode || 'VKD-1957');
  const [fullName, setFullName] = useState(profile.fullName || 'Trần Văn Minh');
  const [email, setEmail] = useState(profile.email || 'minh.sales@vikoda.com.vn');
  const [department, setDepartment] = useState(profile.department || 'Phòng Kinh Doanh & Xuất Khẩu');
  const [title, setTitle] = useState(profile.title || 'Chuyên Viên Kinh Doanh Quốc Tế');
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl || PRESET_AVATARS[1].url);
  const [showCertificate, setShowCertificate] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('Vui lòng chọn ảnh nhỏ hơn 2MB để lưu trữ tối ưu.');
        setTimeout(() => setErrorMsg(null), 3500);
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
      setTimeout(() => setErrorMsg(null), 3500);
      return;
    }
    const updated: EmployeeProfile = {
      ...profile,
      employeeCode: employeeCode.trim().toUpperCase(),
      fullName: fullName.trim(),
      email: email.trim(),
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
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-sky-100 shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0072CE] to-[#0284C7] p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CompanyEmblem className="w-8 h-8" />
            <div>
              <h3 className="text-sm font-extrabold tracking-tight">Hồ Sơ Nhân Viên Vikoda</h3>
              <p className="text-[10px] text-sky-100 font-medium">Hệ thống ghi nhận thành tích & chứng chỉ số</p>
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* DIGITAL ID CARD (Thẻ Nhân Viên Điện Tử) */}
          <div className="relative rounded-2xl p-4 text-white overflow-hidden shadow-lg border border-sky-300/40 bg-gradient-to-br from-[#005A9C] via-[#0072CE] to-[#0369A1]">
            {/* Watermark Logo */}
            <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none scale-125">
              <VikoMascot size="lg" mood="proud" />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={avatarUrl}
                    alt={fullName}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white/80 shadow-md bg-white"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white" title="Trạng thái: Đang hoạt động" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-400 text-slate-900 tracking-wider">
                      {employeeCode}
                    </span>
                    <span className="text-[10px] font-bold text-sky-200">
                      pH 9.0 Certified
                    </span>
                  </div>
                  <h4 className="text-base font-black tracking-tight text-white mt-0.5">
                    {fullName}
                  </h4>
                  <p className="text-xs text-sky-100 font-semibold">{title}</p>
                  <p className="text-[10px] text-sky-200/90">{department}</p>
                </div>
              </div>

              {/* QR Code / Chip Badge */}
              <div className="text-right">
                <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl p-1 border border-white/30 flex items-center justify-center text-white ml-auto">
                  <QrCode className="w-7 h-7" />
                </div>
                <span className="text-[9px] text-sky-200 block mt-1 font-mono font-bold">VKD-SECURE</span>
              </div>
            </div>

            {/* Performance Stats on Card */}
            <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-4 gap-2 text-center">
              <div className="bg-white/10 rounded-xl py-1.5">
                <div className="text-xs font-black text-amber-300 flex items-center justify-center space-x-0.5">
                  <Flame className="w-3 h-3 fill-amber-300" />
                  <span>{stats.streakDays}</span>
                </div>
                <div className="text-[9px] text-sky-100">Ngày học</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1.5">
                <div className="text-xs font-black text-white flex items-center justify-center space-x-0.5">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  <span>{stats.xp}</span>
                </div>
                <div className="text-[9px] text-sky-100">Tổng XP</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1.5">
                <div className="text-xs font-black text-purple-200 flex items-center justify-center space-x-0.5">
                  <Gem className="w-3 h-3 fill-purple-300" />
                  <span>{stats.gems}</span>
                </div>
                <div className="text-[9px] text-sky-100">Ngọc khoáng</div>
              </div>
              <div className="bg-white/10 rounded-xl py-1.5">
                <div className="text-xs font-black text-emerald-300 flex items-center justify-center space-x-0.5">
                  <Trophy className="w-3 h-3" />
                  <span>{profile.highestDrillScore || stats.highestDrillScore || 0}</span>
                </div>
                <div className="text-[9px] text-sky-100">Điểm kỷ lục</div>
              </div>
            </div>
          </div>

          {/* Quick Action Toggle: Edit Profile vs View Certificate */}
          <div className="flex space-x-2">
            <button
              onClick={() => {
                playSound('click');
                setIsEditing(!isEditing);
              }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                isEditing
                  ? 'bg-sky-50 text-[#0066CC] border-sky-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isEditing ? 'Đóng chế độ chỉnh sửa' : '✏️ Cập nhật thông tin & Đổi Avatar'}
            </button>
            <button
              onClick={() => {
                playSound('celebrate');
                setShowCertificate(!showCertificate);
              }}
              className="py-2 px-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs hover:opacity-95 transition-all flex items-center space-x-1"
            >
              <Award className="w-4 h-4" />
              <span>Chứng chỉ số</span>
            </button>
          </div>

          {/* EDIT FORM (Hidden by default once logged in) */}
          {isEditing && (
            <form onSubmit={handleSave} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-4 animate-fade-in">
              <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Thông tin xác thực nhân viên</span>
              </h5>

              {/* Avatar Selector & Upload */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Ảnh đại diện (Avatar)
                </label>
                <div className="flex items-center space-x-3">
                  <img
                    src={avatarUrl}
                    alt="Current"
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-400 shadow-sm bg-white"
                  />
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center space-x-1.5 shadow-2xs"
                    >
                      <Upload className="w-3.5 h-3.5 text-sky-600" />
                      <span>Tải ảnh từ máy / điện thoại</span>
                    </button>
                    <p className="text-[10px] text-slate-400 mt-1">Hỗ trợ JPG, PNG dưới 2MB</p>
                  </div>
                </div>

                {/* Preset Avatars Grid */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">Hoặc chọn avatar chức danh có sẵn:</span>
                  <div className="grid grid-cols-6 gap-2">
                    {PRESET_AVATARS.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => {
                          setAvatarUrl(p.url);
                          playSound('click');
                        }}
                        className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                          avatarUrl === p.url ? 'border-sky-500 scale-105 shadow-sm' : 'border-transparent opacity-75 hover:opacity-100'
                        }`}
                        title={p.label}
                      >
                        <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                        {avatarUrl === p.url && (
                          <div className="absolute inset-0 bg-sky-500/20 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Mã nhân viên (Staff ID) *
                  </label>
                  <input
                    type="text"
                    value={employeeCode}
                    onChange={(e) => setEmployeeCode(e.target.value)}
                    placeholder="VD: VKD-1957"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-bold focus:outline-sky-500 focus:border-sky-500 uppercase"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="VD: Trần Văn Minh"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-bold focus:outline-sky-500 focus:border-sky-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Gmail / Email công ty
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="minh@gmail.com"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-sky-500 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Phòng ban
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-medium focus:outline-sky-500 focus:border-sky-500"
                  >
                    <option value="Phòng Kinh Doanh & Xuất Khẩu">Kinh Doanh & Xuất Khẩu</option>
                    <option value="Kênh Khách Sạn Cao Cấp HORECA">Kênh HORECA 5 Sao</option>
                    <option value="Ban Giám Đốc / CEO Office">Ban Giám Đốc / CEO Office</option>
                    <option value="Sản Xuất Mỏ Đảnh Thạnh">Sản Xuất Mỏ Đảnh Thạnh</option>
                    <option value="Quản Lý Chất Lượng QA/QC">Quản Lý Chất Lượng QA/QC</option>
                    <option value="Marketing & Thương Hiệu">Marketing & Thương Hiệu</option>
                    <option value="Nhân Sự & Đào Tạo">Nhân Sự & Đào Tạo</option>
                  </select>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold text-center animate-in fade-in">
                  ⚠️ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0072CE] hover:bg-[#005A9C] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
              >
                💾 Lưu Hồ Sơ & Đồng Bộ Thành Tích
              </button>

              {onLogout && (
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    onLogout();
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-300 hover:border-rose-300 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng Xuất Tài Khoản Cloud</span>
                </button>
              )}
            </form>
          )}

          {/* CERTIFICATE PREVIEW (Chứng Chỉ Đại Sứ Thương Hiệu) */}
          {showCertificate && (
            <div className="bg-amber-50/70 border-2 border-amber-300 rounded-3xl p-5 text-center relative overflow-hidden shadow-inner">
              <div className="w-12 h-12 mx-auto mb-2">
                <CompanyEmblem className="w-full h-full" />
              </div>
              <span className="text-[10px] font-black uppercase text-amber-800 tracking-widest block">
                Khánh Hòa Mineral Water JSC • Since 1957
              </span>
              <h3 className="text-base font-black text-slate-900 mt-1">
                CHỨNG NHẬN ĐẠI SỨ THƯƠNG HIỆU VIKODA
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Chứng nhận trao tặng cho:
              </p>
              <div className="text-lg font-black text-[#005A9C] border-b-2 border-amber-400 inline-block px-4 py-1 my-2">
                {fullName}
              </div>
              <p className="text-[11px] text-slate-600 font-medium max-w-sm mx-auto">
                Đã hoàn thành xuất sắc các học phần Tiếng Anh Doanh Nghiệp Quốc Tế, thành thạo bộ tiêu chuẩn 5 Yếu Tố Nước Khoáng Kiềm pH 9.0 và văn hóa tiếp đón đối tác toàn cầu.
              </p>

              <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center justify-between text-[10px] text-slate-500 font-bold px-4">
                <span>Mã NV: {employeeCode}</span>
                <span>Cấp độ: {stats.rank}</span>
                <span>Ngày cấp: {new Date().toLocaleDateString('vi-VN')}</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

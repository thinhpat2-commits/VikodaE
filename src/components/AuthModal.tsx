import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  Building2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  CheckCircle2, 
  Cloud,
  ArrowRight,
  Zap
} from 'lucide-react';
import { 
  loginWithEmail, 
  registerWithEmail, 
  UserCloudProfile 
} from '../services/firebase';
import { playSound } from '../services/soundEffects';

interface AuthModalProps {
  isOpen: boolean;
  onSuccess: (profile: UserCloudProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onSuccess }) => {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [department, setDepartment] = useState('Phòng Kinh Doanh & Xuất Khẩu');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    playSound('click');

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ email và mật khẩu');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Mật khẩu cần tối thiểu 6 ký tự để đảm bảo bảo mật');
      return;
    }

    setLoading(true);
    try {
      if (isLoginTab) {
        const profile = await loginWithEmail(email, password);
        playSound('success');
        onSuccess(profile);
      } else {
        if (!displayName.trim()) {
          setErrorMsg('Vui lòng nhập họ và tên của bạn');
          setLoading(false);
          return;
        }
        const newProfile = await registerWithEmail(email, password, displayName, department);
        playSound('success');
        onSuccess(newProfile);
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setErrorMsg('Đăng nhập không thành công. Vui lòng kiểm tra lại kết nối.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoAdmin = async () => {
    playSound('click');
    setLoading(true);
    try {
      const p = await loginWithEmail('thinh.pat2@gmail.com', 'Vikoda@1957');
      playSound('success');
      onSuccess(p);
    } catch (e) {
      setErrorMsg('Lỗi đăng nhập tài khoản');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLearner = async () => {
    playSound('click');
    setLoading(true);
    try {
      const p = await loginWithEmail('vikodaer@vikoda.com.vn', 'Vikoda@1957');
      playSound('success');
      onSuccess(p);
    } catch (e) {
      setErrorMsg('Lỗi đăng nhập tài khoản');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-200"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
    >
      <div 
        className="bg-white w-full max-w-[430px] rounded-3xl border-2 border-slate-200 border-b-6 border-b-sky-600 shadow-2xl overflow-hidden flex flex-col max-h-[95dvh] animate-in zoom-in-95 duration-150"
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#004B87] to-[#0070D1] p-5 text-white text-center relative shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white mb-2 shadow-inner">
            <ShieldCheck className="w-6 h-6 text-sky-300" />
          </div>

          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <span className="text-[10px] font-black uppercase tracking-widest bg-sky-400 text-slate-950 px-2 py-0.5 rounded-full">
              VIKODA SECURE CLOUD
            </span>
            <span className="text-[10px] font-bold text-sky-200 flex items-center gap-0.5">
              <Cloud className="w-3 h-3 text-sky-300" />
              <span>Tự động sao lưu</span>
            </span>
          </div>

          <h2 className="text-lg font-black text-white leading-tight">
            Vikoda English Pro
          </h2>
          <p className="text-[11px] text-sky-100 font-medium">
            Đăng nhập để bảo vệ chuỗi ngày học & đồng bộ dữ liệu đám mây
          </p>
        </div>

        {/* Tab Selection */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              playSound('click');
              setIsLoginTab(true);
              setErrorMsg(null);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              isLoginTab
                ? 'bg-white text-[#0070D1] shadow-xs border border-slate-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Đăng Nhập
          </button>

          <button
            type="button"
            onClick={() => {
              playSound('click');
              setIsLoginTab(false);
              setErrorMsg(null);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              !isLoginTab
                ? 'bg-white text-[#0070D1] shadow-xs border border-slate-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Đăng Ký Mới
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold animate-in fade-in flex items-start gap-2">
              <span className="text-sm">⚠️</span>
              <span className="leading-snug">{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {!isLoginTab && (
              <>
                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
                    Họ và Tên Vikodaer
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="VD: Trần Văn Minh"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 font-semibold text-xs text-slate-900 focus:outline-none focus:border-[#0070D1] focus:ring-1 focus:ring-[#0070D1] bg-slate-50/50"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
                    Phòng Ban Công Tác
                  </label>
                  <div className="relative">
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 font-semibold text-xs text-slate-900 focus:outline-none focus:border-[#0070D1] bg-slate-50/50 cursor-pointer"
                    >
                      <option value="Phòng Kinh Doanh & Xuất Khẩu">Phòng Kinh Doanh & Xuất Khẩu</option>
                      <option value="Phòng Marketing & Phát Triển Thương Hiệu">Phòng Marketing & Thương Hiệu</option>
                      <option value="Nhà Máy Nước Khoáng Đảnh Thạnh">Nhà Máy Khoáng Đảnh Thạnh</option>
                      <option value="Ban Giám Đốc & Quản Lý">Ban Giám Đốc & Quản Lý</option>
                      <option value="Phòng Nhân Sự & Đào Tạo">Phòng Nhân Sự & Đào Tạo</option>
                      <option value="Phòng Tài Chính - Kế Toán">Phòng Tài Chính - Kế Toán</option>
                      <option value="Phòng Quản Lý Chất Lượng QA/QC">Phòng QA/QC & Thí Nghiệm</option>
                      <option value="Phòng Chuỗi Cung Ứng & Logistics">Phòng Chuỗi Cung Ứng & Logistics</option>
                    </select>
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
                Địa Chỉ Email (Gmail / Công Ty)
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="VD: yourname@gmail.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 font-semibold text-xs text-slate-900 focus:outline-none focus:border-[#0070D1] focus:ring-1 focus:ring-[#0070D1] bg-slate-50/50"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1">
                Mật Khẩu Bảo Mật
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập tối thiểu 6 ký tự..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 font-semibold text-xs text-slate-900 focus:outline-none focus:border-[#0070D1] focus:ring-1 focus:ring-[#0070D1] bg-slate-50/50"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0070D1] to-[#009FE3] hover:from-[#005bb5] hover:to-[#0070D1] text-white font-black text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isLoginTab ? 'Đăng Nhập Ngay' : 'Hoàn Tất Đăng Ký Tài Khoản'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Shortcuts for Quick Testing */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block text-center">
              Lối Tắt Đăng Nhập Nhanh (Trải Nghiệm & Kiểm Thử)
            </span>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleQuickDemoAdmin}
                className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-1 text-[11px] font-black text-amber-900 leading-tight">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Quyền Admin</span>
                </div>
                <div className="text-[9px] text-amber-700 truncate font-mono mt-0.5">
                  thinh.pat2@gmail.com
                </div>
              </button>

              <button
                type="button"
                onClick={handleQuickDemoLearner}
                className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-1 text-[11px] font-black text-sky-900 leading-tight">
                  <Zap className="w-3.5 h-3.5 text-sky-600" />
                  <span>Học Viên Vikoda</span>
                </div>
                <div className="text-[9px] text-sky-700 truncate font-mono mt-0.5">
                  vikodaer@vikoda.com.vn
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Security Badges */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-medium shrink-0">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Mã hóa AES-256</span>
          </span>
          <span className="flex items-center gap-1">
            <Cloud className="w-3 h-3 text-[#0070D1]" />
            <span>Cloud Firestore Sync</span>
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Play, 
  Mail, 
  Mic, 
  MessageSquare, 
  BookOpen, 
  AlertTriangle,
  Award,
  Zap,
  Clock,
  TrendingUp
} from 'lucide-react';
import { UserStats, UserLevel } from '../types';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
  userStats: UserStats;
  userLevel: UserLevel;
  onOpenAiModal: () => void;
  onCompleteMicroTask: (taskIndex: number) => void;
  dailyTasksStatus: boolean[];
}

export const Dashboard: React.FC<DashboardProps> = ({
  setActiveTab,
  userStats,
  userLevel,
  onOpenAiModal,
  onCompleteMicroTask,
  dailyTasksStatus
}) => {
  const dailyTasks = [
    {
      title: 'Học 1 mẫu email xin lùi deadline khéo léo',
      tag: 'Email Studio',
      duration: '2 phút',
      tab: 'email',
      icon: Mail,
      completed: dailyTasksStatus[0]
    },
    {
      title: 'Luyện phát âm câu ngắt lời lịch sự trong Zoom',
      tag: 'Họp Hành',
      duration: '1.5 phút',
      tab: 'meeting',
      icon: Mic,
      completed: dailyTasksStatus[1]
    },
    {
      title: 'Phân biệt "Discuss" và "Discuss about"',
      tag: 'Sửa Lỗi',
      duration: '1.5 phút',
      tab: 'mistakes',
      icon: AlertTriangle,
      completed: dailyTasksStatus[2]
    }
  ];

  const completedCount = dailyTasksStatus.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / dailyTasks.length) * 100);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Banner with Executive Gradient */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border border-slate-700/60 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>Tiếng Anh Thực Chiến Không Sách Vở Cho Người Đi Làm</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Nâng tầm giao tiếp công sở, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              tự tin làm việc với sếp & đối tác toàn cầu
            </span>
          </h1>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Học đúng những gì người đi làm cần: viết email mượt mà không bị "ngô nghê", ngắt lời lịch thiệp trong cuộc họp, deal lương sắc bén và đàm phán dự án chuẩn phong cách quốc tế.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('email')}
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <span>Vào Email Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAiModal}
              className="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium px-4 py-2.5 rounded-xl border border-slate-600 transition-all text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dịch sang Tiếng Anh phòng họp</span>
            </button>

            <div className="flex items-center space-x-2 text-xs text-slate-400 ml-auto sm:ml-0 pt-2 sm:pt-0">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Chỉ 5 - 10 phút/ngày</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Proficiency Benchmark (CEFR / TOEIC / IELTS) Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border-2 border-indigo-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#005A9C] to-[#009FE3] border border-sky-300/40 flex flex-col items-center justify-center text-white shrink-0 shadow-md">
              <span className="text-xl font-black">{userLevel || 'A1'}</span>
              <span className="text-[9px] font-black uppercase text-sky-200">CEFR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Thước Đo Năng Lực Toàn Cầu
                </span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold">
                  {userLevel === 'A1' ? 'Tân Binh Văn Phòng' : userLevel === 'A2' ? 'Tiếp Thị Viên Tự Tin' : userLevel === 'B1' ? 'Đại Sứ Kinh Doanh' : userLevel === 'B2' ? 'Chuyên Gia Đàm Phán' : 'Lãnh Đạo Ngoại Giao'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-sm font-bold text-white">
                <span>Ước lượng: <strong className="text-amber-300 font-black">{userLevel === 'A1' ? 'TOEIC 320 - 400' : userLevel === 'A2' ? 'TOEIC 450 - 550' : userLevel === 'B1' ? 'TOEIC 600 - 700' : userLevel === 'B2' ? 'TOEIC 750 - 850' : 'TOEIC 880 - 990'}</strong></span>
                <span className="text-slate-500">•</span>
                <span><strong className="text-emerald-300 font-black">{userLevel === 'A1' ? 'IELTS 3.5' : userLevel === 'A2' ? 'IELTS 4.5' : userLevel === 'B1' ? 'IELTS 5.5' : userLevel === 'B2' ? 'IELTS 6.5' : 'IELTS 7.5+'}</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('path')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wide flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Lộ Trình Nâng Hạng</span>
            </button>
          </div>
        </div>
      </div>

      {/* Daily Routine: 3 Micro-tasks for Busy Professionals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Micro-tasks */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Nhiệm Vụ 5 Phút Hôm Nay</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  {completedCount}/{dailyTasks.length} hoàn thành
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Mỗi ngày một ít, duy trì phản xạ tiếng Anh tự nhiên trong công việc</p>
            </div>

            {/* Progress bar circular or bar */}
            <div className="text-right">
              <span className="text-sm font-bold text-amber-400">{progressPercent}%</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full mb-5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Task list */}
          <div className="space-y-3">
            {dailyTasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    task.completed
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-300'
                      : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/60 text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() => onCompleteMicroTask(index)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      title={task.completed ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500 hover:text-amber-400" />
                      )}
                    </button>
                    <div>
                      <p className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                        <span className="text-amber-400/90 font-medium">{task.tag}</span>
                        <span>•</span>
                        <span>{task.duration}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab(task.tab)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-700/50 hover:bg-amber-500 hover:text-slate-950 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    <span>Luyện ngay</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Quick Stats & Level Insight */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center space-x-2 mb-3">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Chỉ Số Kỹ Năng</span>
            </h3>

            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                  <span>Trình độ hiện tại:</span>
                  <span className="font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {userLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {userLevel === 'A1' && 'Tập trung: Giao tiếp văn phòng cơ bản, chào hỏi, tiếp khách, mời nước khoáng.'}
                  {(userLevel === 'A2' || userLevel === 'A2-B1') && 'Tập trung: Tiếng Anh đa phòng ban, ngày phép, email nội bộ.'}
                  {(userLevel === 'B1' || userLevel === 'B2') && 'Tập trung: Đại sứ Vikoda, dẫn tour mỏ khoáng Đảnh Thạnh, bán hàng HORECA.'}
                  {(userLevel === 'C1-C2' || userLevel === 'B2-C1' || userLevel === 'C2') && 'Tập trung: Đàm phán quốc tế, Incoterms 2020, FDA, ESG và Pitch Deck C-Suite.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/40 text-center">
                  <div className="text-xl font-bold text-white">{userStats.totalPhrasesLearned}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Cụm từ đã lưu</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/40 text-center">
                  <div className="text-xl font-bold text-emerald-400">{userStats.scenariosCompleted}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Tình huống đã giải quyết</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
            <button
              onClick={() => setActiveTab('mistakes')}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-colors"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Kiểm tra 8 bẫy lỗi người Việt hay mắc</span>
            </button>
          </div>
        </div>

      </div>

      {/* 4 Emergency Workplace Scenarios (Tình huống cấp bách thường gặp) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Tình Huống Cấp Bách Trong Công Việc</h2>
            <p className="text-xs text-slate-400">Chọn tình huống bạn đang cần xử lý ngay bây giờ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div 
            onClick={() => setActiveTab('email')}
            className="group cursor-pointer p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all shadow-lg hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
              Xin Hoãn Deadline
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Cách viết email xin lùi ngày bàn giao chuyên nghiệp kèm kế hoạch khắc phục.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-blue-400 group-hover:text-amber-400">
              <span>Xem mẫu email</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setActiveTab('meeting')}
            className="group cursor-pointer p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all shadow-lg hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
              Ngắt Lời & Câu Giờ Trong Họp
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Bị hỏi bất ngờ hoặc muốn chen ý kiến mà không làm phật lòng sếp Tây.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-emerald-400 group-hover:text-amber-400">
              <span>Mở bộ câu nói</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setActiveTab('roleplay')}
            className="group cursor-pointer p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all shadow-lg hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
              Deal Lương & Thăng Chức
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Mô phỏng cuộc đối thoại 1-on-1 với Giám đốc: dẫn chứng số liệu và xử lý từ chối.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-purple-400 group-hover:text-amber-400">
              <span>Vào đóng vai</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => setActiveTab('vocab')}
            className="group cursor-pointer p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 transition-all shadow-lg hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
              Tiếng Lóng Văn Phòng Cần Biết
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Hiểu ngay: Bandwidth, Circle back, Bottleneck, Ballpark figure, Touch base...
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-amber-400">
              <span>Khám phá từ vựng</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

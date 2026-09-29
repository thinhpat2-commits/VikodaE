import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Volume2, 
  Sparkles, 
  Send, 
  Info, 
  Sliders, 
  Lightbulb,
  FileText,
  Wand2,
  RefreshCw
} from 'lucide-react';
import { EMAIL_TEMPLATES } from '../data/emailTemplates';
import { EmailTemplate } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { polishWorkEmail, PolishedEmailResult } from '../services/geminiService';

interface EmailStudioProps {
  speechRate: number;
}

export const EmailStudio: React.FC<EmailStudioProps> = ({ speechRate }) => {
  const [activeSubTab, setActiveSubTab] = useState<'templates' | 'ai-polisher'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate>(EMAIL_TEMPLATES[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  // Dynamic variable values for template
  const [templateVariables, setTemplateVariables] = useState<Record<string, string>>({
    ProjectName: 'E-commerce Checkout Migration',
    ManagerName: 'David',
    'ManagerName/ClientName': 'Alex',
    ClientName: 'Mr. Henderson',
    RecipientName: 'Jessica',
    CompletedPortion: 'the database schema and API endpoints',
    'SpecificBlocker/TechnicalRequirement': 'third-party payment gateway tokenization',
    ProposedNewDate: 'next Wednesday, October 15th',
    Task1: 'Finalize sandbox testing',
    Date1: 'Monday 2 PM',
    Task2: 'Run security and load tests',
    Date2: 'Tuesday 5 PM',
    TargetDate: 'Thursday 3 PM',
    DocumentName: 'Q4 Budget Proposal & Contract Terms',
    MeetingTopic: 'Sprint 24 Planning & Architecture',
    MeetingDate: 'October 12th',
    KeyDecision1: 'Approved migration to microservices',
    KeyDecision2: 'Postponed dark mode to Phase 2',
    Person1: 'Minh',
    DueDate1: 'Friday EOD',
    NextMeetingDate: 'next Monday 9:30 AM',
    YourName: 'Minh Nguyen',
    YourTitle: 'Senior Software Engineer'
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // AI Polisher states
  const [aiDraftInput, setAiDraftInput] = useState<string>(
    'Tôi muốn xin lùi deadline dự án sang thứ 5 tuần sau vì bên khách hàng chưa gửi API key, tôi và team đã làm xong 80% rồi.'
  );
  const [aiTone, setAiTone] = useState<'formal' | 'collaborative' | 'concise'>('collaborative');
  const [aiRecipient, setAiRecipient] = useState<string>('Direct Manager / Team Lead');
  const [isPolishing, setIsPolishing] = useState<boolean>(false);
  const [polishedResult, setPolishedResult] = useState<PolishedEmailResult | null>(null);

  // Filter templates
  const filteredTemplates = categoryFilter === 'all'
    ? EMAIL_TEMPLATES
    : EMAIL_TEMPLATES.filter((t) => t.category === categoryFilter);

  // Replace placeholders with variable values
  const getRenderedContent = () => {
    let subject = selectedTemplate.subject;
    let body = selectedTemplate.body;

    selectedTemplate.variables.forEach((variable) => {
      const val = templateVariables[variable] || `[${variable}]`;
      const regex = new RegExp(`\\[${variable}\\]`, 'g');
      subject = subject.replace(regex, val);
      body = body.replace(regex, val);
    });

    return { subject, body };
  };

  const { subject: renderedSubject, body: renderedBody } = getRenderedContent();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudio = (text: string) => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(text, speechRate, 'en-US', () => setIsPlayingAudio(false));
    }
  };

  const handleGeneratePolishedEmail = async () => {
    if (!aiDraftInput.trim()) return;
    setIsPolishing(true);
    try {
      const result = await polishWorkEmail(aiDraftInput, aiTone, aiRecipient);
      setPolishedResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsPolishing(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header & Sub-tab switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center space-x-2">
            <span>Email & Workplace Messaging Studio</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Kho mẫu thư công sở chuẩn mực quốc tế & công cụ AI tinh chỉnh giọng văn chuyên nghiệp.
          </p>
        </div>

        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveSubTab('templates')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSubTab === 'templates'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Kho Mẫu Email Có Sẵn ({EMAIL_TEMPLATES.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('ai-polisher')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSubTab === 'ai-polisher'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>AI Chuốt Giọng Văn</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: TEMPLATES */}
      {activeSubTab === 'templates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Template Selector & Filters (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Category Filter Badges */}
            <div className="flex flex-wrap gap-1.5 pb-2">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'deadline', label: 'Lùi Deadline' },
                { id: 'followup', label: 'Nhắc khéo' },
                { id: 'meeting', label: 'Biên bản họp' },
                { id: 'decline', label: 'Từ chối' },
                { id: 'escalation', label: 'Báo sự cố' },
                { id: 'request', label: 'Đề xuất lương' },
                { id: 'greeting', label: 'Nghỉ phép OOO' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                    categoryFilter === cat.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Template List Cards */}
            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredTemplates.map((template) => {
                const isSelected = selectedTemplate.id === template.id;
                return (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-800/90 border-amber-500/70 shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        template.formality === 'formal'
                          ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {template.formality === 'formal' ? 'Executive Formal' : 'Semi-Formal'}
                      </span>
                    </div>

                    <h4 className={`text-sm font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                      {template.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {template.vietnameseContext}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Editor & Preview (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Quick Interactive Variables Form */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-2">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>Điền Thông Tin Của Bạn Để Tự Động Thay Vào Mẫu:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {selectedTemplate.variables.slice(0, 6).map((variable) => (
                  <div key={variable} className="space-y-1">
                    <label className="text-[11px] text-slate-400 block truncate">[{variable}]</label>
                    <input
                      type="text"
                      value={templateVariables[variable] || ''}
                      onChange={(e) =>
                        setTemplateVariables({ ...templateVariables, [variable]: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder={`Nhập ${variable}...`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Email Preview Container */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Header Bar */}
              <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Subject:</span>
                  <span className="font-mono text-amber-300 select-all font-medium">{renderedSubject}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePlayAudio(`${renderedSubject}. ${renderedBody}`)}
                    className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      isPlayingAudio
                        ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                        : 'bg-slate-850 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Dừng đọc' : 'Nghe giọng bản xứ'}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(`Subject: ${renderedSubject}\n\n${renderedBody}`)}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Đã sao chép!' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 font-sans text-sm text-slate-200 whitespace-pre-wrap leading-relaxed select-text bg-slate-950/40 min-h-[220px]">
                {renderedBody}
              </div>

              {/* Footer: Key Phrases & Pro Culture Tip */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 space-y-3">
                <div>
                  <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>Cụm Từ Doanh Nghiệp Đắt Giá Trong Mẫu Này:</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTemplate.keyPhrases.map((kp, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-xs font-semibold text-emerald-300 block">{kp.phrase}</span>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">{kp.explanation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 mr-1">Pro Tip Văn Hóa:</span>
                    <span>{selectedTemplate.proTip}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SUB-TAB 2: AI POLISHER */}
      {activeSubTab === 'ai-polisher' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Input Form (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  1. Ý Tưởng Thô Hoặc Tiếng Việt Bạn Muốn Viết:
                </label>
                <textarea
                  rows={6}
                  value={aiDraftInput}
                  onChange={(e) => setAiDraftInput(e.target.value)}
                  placeholder="Ví dụ: Báo cáo với sếp rằng dự án đã hoàn thành 90%, còn khâu test bảo mật sẽ xong vào chiều mai..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Target Tone Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Chọn Giọng Điệu Doanh Nghiệp (Tone):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'formal', label: 'Executive', desc: 'Sếp / Đối tác VIP' },
                    { id: 'collaborative', label: 'Team', desc: 'Đồng nghiệp / Sync' },
                    { id: 'concise', label: 'Concise', desc: 'Slack / Teams' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setAiTone(t.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        aiTone === t.id
                          ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-semibold">{t.label}</div>
                      <div className={`text-[10px] mt-0.5 ${aiTone === t.id ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                        {t.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipient */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  3. Đối Tượng Người Nhận:
                </label>
                <input
                  type="text"
                  value={aiRecipient}
                  onChange={(e) => setAiRecipient(e.target.value)}
                  placeholder="Ví dụ: Foreign Client, VP of Engineering, HR Manager..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Action Button */}
              <button
                disabled={isPolishing || !aiDraftInput.trim()}
                onClick={handleGeneratePolishedEmail}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isPolishing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang chuốt câu từ chuẩn Silicon Valley...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Chuốt Email Ngay Lập Tức</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: AI Polished Output (7 cols) */}
          <div className="lg:col-span-7">
            {polishedResult ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4">
                {/* Header */}
                <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
                  <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Đã Hoàn Thiện Chuẩn Corporate ({polishedResult.tone})</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePlayAudio(`${polishedResult.subject}. ${polishedResult.polishedBody}`)}
                      className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs border ${
                        isPlayingAudio ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-200 border-slate-700'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlayingAudio ? 'Dừng' : 'Nghe'}</span>
                    </button>

                    <button
                      onClick={() => handleCopy(`Subject: ${polishedResult.subject}\n\n${polishedResult.polishedBody}`)}
                      className="flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
                    </button>
                  </div>
                </div>

                {/* Email Subject & Body */}
                <div className="px-5 space-y-3">
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                    <span className="text-slate-400 font-semibold mr-2">Subject:</span>
                    <span className="text-amber-300 font-medium select-all">{polishedResult.subject}</span>
                  </div>

                  <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 font-sans text-sm text-slate-200 whitespace-pre-wrap leading-relaxed select-text min-h-[200px]">
                    {polishedResult.polishedBody}
                  </div>
                </div>

                {/* Idioms and Etiquette */}
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 space-y-3">
                  {polishedResult.keyBusinessPhrases && polishedResult.keyBusinessPhrases.length > 0 && (
                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                        Thuật Ngữ Được Áp Dụng:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {polishedResult.keyBusinessPhrases.map((item, i) => (
                          <div key={i} className="p-2 bg-slate-950 rounded border border-slate-800 text-xs">
                            <span className="font-semibold text-emerald-400 block">{item.phrase}</span>
                            <span className="text-[11px] text-slate-400">{item.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {polishedResult.etiquetteTip && (
                    <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200">
                      <span className="font-bold text-indigo-300 mr-1">💡 Lời khuyên văn hóa:</span>
                      {polishedResult.etiquetteTip}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-500 space-y-3">
                <Wand2 className="w-10 h-10 mx-auto text-slate-600" />
                <h4 className="text-base font-bold text-slate-300">Chưa có bản chuốt</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Nhập ý tưởng hoặc câu tiếng Việt ở cột bên trái và bấm "Chuốt Email Ngay Lập Tức" để nhận phiên bản tiếng Anh chuyên nghiệp.
                </p>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Volume2, 
  Send, 
  Sparkles, 
  FileText,
  Sliders,
  Lightbulb
} from 'lucide-react';
import { VIKODA_EXPORT_TEMPLATES } from '../data/vikodaData';
import { EMAIL_TEMPLATES } from '../data/emailTemplates';
import { EmailTemplate } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface ExportEmailStudioProps {
  speechRate: number;
}

export const ExportEmailStudio: React.FC<ExportEmailStudioProps> = ({ speechRate }) => {
  // Combine export templates with workplace ones
  const allTemplates: EmailTemplate[] = [
    ...VIKODA_EXPORT_TEMPLATES,
    EMAIL_TEMPLATES[0], // deadline delay
    EMAIL_TEMPLATES[1], // gentle nudge
    EMAIL_TEMPLATES[2], // meeting recap
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate>(allTemplates[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Dynamic variables
  const [variables, setVariables] = useState<Record<string, string>>({
    PartnerName: 'Mr. Tanaka',
    YourName: 'Minh Nguyen',
    PartnerCompany: 'IMAI Global Beverage Ltd.',
    'Country/City': 'Tokyo, Japan',
    YourPhone: '+84 908 123 456',
    DirectorName: 'Mr. Michael Brown',
    HotelName: 'Sheraton Nha Trang Hotel & Spa',
    'ManagerName/ClientName': 'Alex',
    ProjectName: 'Q4 Export Compliance Documentation',
    CompletedPortion: 'the FDA nutrition label verification',
    'SpecificBlocker/TechnicalRequirement': 'third-party lab mineral testing certification',
    ProposedNewDate: 'next Wednesday',
  });

  const getRendered = () => {
    let subject = selectedTemplate.subject;
    let body = selectedTemplate.body;

    selectedTemplate.variables.forEach((v) => {
      const val = variables[v] || `[${v}]`;
      const regex = new RegExp(`\\[${v}\\]`, 'g');
      subject = subject.replace(regex, val);
      body = body.replace(regex, val);
    });

    return { subject, body };
  };

  const { subject, body } = getRendered();

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayAudio = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(`${subject}. ${body}`, speechRate, 'en-US', () => setIsPlayingAudio(false));
    }
  };

  return (
    <div className="space-y-5 pb-24 max-w-xl mx-auto">
      
      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
          Email Studio
        </span>
        <h2 className="text-xl font-extrabold text-slate-900 mt-1">
          Mẫu Thư Xuất Khẩu & Công Sở
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Viết email chuẩn quốc tế chỉ trong 10 giây: chọn mẫu, điền tên và sao chép.
        </p>
      </div>

      {/* Template Selector: Stepper + Quick Dropdown (No clunky horizontal scrolling) */}
      <div className="bg-white rounded-3xl border border-sky-100 p-3.5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between gap-2">
          {/* Previous Template Button */}
          <button
            onClick={() => {
              const currentIdx = allTemplates.findIndex((t) => t.id === selectedTemplate.id);
              const prevIdx = currentIdx > 0 ? currentIdx - 1 : allTemplates.length - 1;
              setSelectedTemplate(allTemplates[prevIdx]);
              playSound('click');
            }}
            className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0066CC] font-extrabold text-xs flex items-center gap-1 border border-sky-200/80 transition-all active:scale-95 cursor-pointer shrink-0"
            title="Mẫu thư trước"
          >
            <span>◀</span>
            <span className="hidden sm:inline">Trước</span>
          </button>

          {/* Current Template Indicator */}
          <div className="text-center flex-1 min-w-0 px-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-600 block">
              Mẫu {allTemplates.findIndex((t) => t.id === selectedTemplate.id) + 1} / {allTemplates.length}
            </span>
            <div className="text-xs font-black text-slate-800 truncate">
              {selectedTemplate.title.split('(')[0]}
            </div>
          </div>

          {/* Next Template Button */}
          <button
            onClick={() => {
              const currentIdx = allTemplates.findIndex((t) => t.id === selectedTemplate.id);
              const nextIdx = currentIdx < allTemplates.length - 1 ? currentIdx + 1 : 0;
              setSelectedTemplate(allTemplates[nextIdx]);
              playSound('click');
            }}
            className="px-3 py-1.5 rounded-xl bg-[#0066CC] hover:bg-[#0052a3] text-white font-extrabold text-xs flex items-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
            title="Mẫu thư kế tiếp"
          >
            <span className="hidden sm:inline">Kế tiếp</span>
            <span>▶</span>
          </button>
        </div>

        {/* Direct Dropdown Selector: Instant 1-tap choice */}
        <div>
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1">
            Chọn nhanh mẫu thư theo tình huống:
          </label>
          <select
            value={selectedTemplate.id}
            onChange={(e) => {
              const found = allTemplates.find((t) => t.id === e.target.value);
              if (found) {
                setSelectedTemplate(found);
                playSound('click');
              }
            }}
            className="w-full px-3 py-2 text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            {allTemplates.map((tpl, idx) => (
              <option key={tpl.id} value={tpl.id}>
                {idx + 1}. {tpl.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Context Badge */}
      <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-slate-600">
        <strong className="text-[#0066CC] font-bold">Mục đích: </strong>
        <span>{selectedTemplate.vietnameseContext}</span>
      </div>

      {/* Quick Field Customizer (Gọn gàng ít chữ) */}
      <div className="bg-white rounded-2xl border border-sky-100 p-3.5 space-y-2">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700">
          <Sliders className="w-3.5 h-3.5 text-[#0066CC]" />
          <span>Điền Nhanh Thông Tin Vào Thư:</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {selectedTemplate.variables.slice(0, 4).map((v) => (
            <div key={v} className="space-y-0.5">
              <label className="text-[10px] text-slate-400 font-semibold truncate block">[{v}]</label>
              <input
                type="text"
                value={variables[v] || ''}
                onChange={(e) => setVariables({ ...variables, [v]: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-xs text-slate-800 focus:outline-none focus:border-[#0066CC]"
                placeholder={v}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rendered Email Card */}
      <div className="bg-white rounded-3xl border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden">
        
        {/* Email Header Bar */}
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between gap-2">
          <div className="text-xs text-slate-800 truncate flex-1">
            <span className="font-bold text-slate-400 mr-1.5">Subject:</span>
            <span className="font-semibold text-slate-900 select-all">{subject}</span>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={handlePlayAudio}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                isPlayingAudio ? 'bg-[#0066CC] text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Volume2 className="w-3 h-3" />
              <span>{isPlayingAudio ? 'Dừng' : 'Nghe'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-[#0066CC] hover:bg-[#0052CC] text-white shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
            </button>
          </div>
        </div>

        {/* Email Body */}
        <div className="p-5 font-sans text-xs sm:text-sm text-slate-700 whitespace-pre-wrap leading-relaxed select-text min-h-[180px] bg-white">
          {body}
        </div>

        {/* Phrases highlight */}
        <div className="p-3.5 bg-sky-50/50 border-t border-sky-100 space-y-2">
          <div className="flex items-center space-x-1 text-[11px] font-extrabold text-[#0066CC]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cụm Từ Đắt Giá Trong Mẫu Này:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {selectedTemplate.keyPhrases.map((kp, idx) => (
              <div key={idx} className="p-2 bg-white rounded-xl border border-sky-100 text-[11px]">
                <strong className="text-cyan-900 block">{kp.phrase}</strong>
                <span className="text-slate-500">{kp.explanation}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Zap, 
  Volume2, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Send,
  HelpCircle
} from 'lucide-react';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface PreMeetingToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
}

interface SOSSituation {
  id: string;
  category: string;
  icon: string;
  title: string;
  context: string;
  countdownHint: string;
  keyPhrases: {
    en: string;
    vi: string;
    phonetics: string;
    stressNote: string;
  }[];
  proTip: string;
}

const SOS_SITUATIONS: SOSSituation[] = [
  {
    id: 'sos-1',
    category: 'TIẾP ĐÓN & SMALL TALK',
    icon: '🤝',
    title: 'Sảnh Đón Khách VIP & Bắt Chuyện Tự Nhiên',
    context: 'Dành cho 60s trước khi bắt tay khách quốc tế vừa bước xuống taxi vào sảnh Vikoda.',
    countdownHint: 'Bắt tay chắc chắn, mắt nhìn thẳng, nói với nụ cười nồng hậu',
    keyPhrases: [
      {
        en: 'Good morning Mr. Henderson! On behalf of Vikoda leadership, it is an absolute pleasure to welcome you to our Dan Thanh pristine spring.',
        vi: 'Chào buổi sáng ngài Henderson! Thay mặt ban lãnh đạo Vikoda, thật là vinh hạnh tuyệt đối được đón tiếp ngài đến với nguồn khoáng Đảnh Thạnh nguyên bản của chúng tôi.',
        phonetics: '/gʊd ˈmɔːrnɪŋ... ɒn bɪˈhæf əv vɪˈkoʊdə ˈliːdərʃɪp, ɪt ɪz ən ˈæbsəluːt ˈplɛʒər tuː ˈwɛlkəm juː.../',
        stressNote: 'Nhấn mạnh chữ "absolute pleasure" và "pristine spring" với ngữ điệu ấm, đĩnh đạc.'
      },
      {
        en: 'How was your flight into Cam Ranh? Did you manage to get some rest?',
        vi: 'Chuyến bay của ngài đến Cam Ranh có thuận lợi không? Ngài có tranh thủ nghỉ ngơi được chút nào không ạ?',
        phonetics: '/haʊ wɒz jɔːr flaɪt ˈɪntuː kɑːm rɑːn? dɪd juː ˈmænɪdʒ tuː gɛt sʌm rɛst?/',
        stressNote: 'Lên giọng nhẹ ở cuối câu hỏi quan tâm "get some rest?".'
      },
      {
        en: 'Please allow me to offer you a chilled glass of Vikoda natural alkaline mineral water to rehydrate.',
        vi: 'Xin phép được mời ngài một ly Vikoda khoáng kiềm mát lạnh để thanh lọc và bù nước sau hành trình dài.',
        phonetics: '/pliːz əˈlaʊ miː tuː ˈɒfər juː ə ʧɪld glæs əv vɪˈkoʊdə... tuː ˌriːhaɪˈdreɪt/',
        stressNote: 'Đưa ly nước bằng hai tay, hướng tay mời khách tiến vào phòng khách VIP.'
      }
    ],
    proTip: 'Đừng vội nói về hợp đồng ngay sảnh! 2 phút đầu tiên chỉ nên hỏi han chuyến bay, thời tiết Nha Trang và mời ly nước khoáng mát lạnh.'
  },
  {
    id: 'sos-2',
    category: 'BẺ GÃY PHẢN ĐỐI GIÁ',
    icon: '🛡️',
    title: 'Khách Chê Giá Đắt & So Sánh Nước Lọc Khác',
    context: 'Dành cho khoảnh khắc Buyer nhíu mày nói: "Your price is 15% higher than competitors".',
    countdownHint: 'Giữ ánh mắt điềm tĩnh, không vội giảm giá, áp dụng 3F: Feel - Felt - Found',
    keyPhrases: [
      {
        en: 'I completely understand how you feel about the initial quotation; many regional distributors felt the same at first...',
        vi: 'Tôi hoàn toàn thấu hiểu cảm giác của ngài về mức báo giá ban đầu; nhiều nhà phân phối khu vực lúc đầu cũng có băn khoăn như vậy...',
        phonetics: '/aɪ kəmˈpliːtli ˌʌndərˈstænd haʊ juː fiːl... ˈmɛni ˈriːdʒənl dɪˈstrɪbjətərz fɛlt ðə seɪm æt fɜːrst.../',
        stressNote: 'Hạ giọng đồng cảm ở "feel" và "felt" để giảm căng thẳng trên bàn đàm phán.'
      },
      {
        en: '...however, they found that Vikoda’s authentic natural pH 9.0 delivers significantly higher customer retention and superior retail margins.',
        vi: '...tuy nhiên, sau đó họ nhận thấy tính kiềm tự nhiên pH 9.0 độc bản của Vikoda mang lại tỷ lệ khách mua lại cao vượt trội và biên lợi nhuận bán lẻ tốt hơn nhiều.',
        phonetics: '/...haʊˈɛvər, ðeɪ faʊnd ðæt vɪˈkoʊdəz ɔːˈθɛntɪk ˈnætʃrəl piː-eɪtʃ naɪn pɔɪnt oʊ dɪˈlɪvərz ˈhaɪər rɪˈtɛnʃn.../',
        stressNote: 'Chuyển sang giọng kiên định, dứt khoát ở "found" và "higher retention".'
      },
      {
        en: 'We do not sell artificial electrolyzed tap water; Vikoda is 100% natural artesian mineral water bottled directly at source.',
        vi: 'Chúng tôi không bán nước máy điện phân nhân tạo; Vikoda là nước khoáng ngầm tự nhiên 100% đóng chai trực tiếp tại nguồn.',
        phonetics: '/wiː duː nɒt sɛl ˌɑːrtɪˈfɪʃl... vɪˈkoʊdə ɪz wʌn ˈhʌndrəd pərˈsɛnt ˈnætʃrəl ɑːrˈtiːʒən ˈmɪnərəl ˈwɔːtər.../',
        stressNote: 'Nhấn mạnh sự tương phản giữa "artificial" (nhân tạo) và "artesian directly at source".'
      }
    ],
    proTip: 'Đừng bao giờ nói "You are wrong" hoặc vội vã giảm giá ngay. Chuyển trọng tâm từ "Chi phí mua hàng (Cost)" sang "Tỷ lệ khách quay lại mua (Customer Retention)".'
  },
  {
    id: 'sos-3',
    category: 'BẢO CHỨNG KHOA HỌC PH 9.0',
    icon: '💎',
    title: 'Chứng Minh Độ Bền pH 9.0 & Nguồn Đảnh Thạnh 1957',
    context: 'Khi đối tác kỹ thuật hoặc bác sĩ dinh dưỡng hỏi: "Độ kiềm 9.0 có bền không hay bay hơi như nước ion kiềm máy?".',
    countdownHint: 'Nêu bật 4 con số bảo chứng: 220m, 72°C, 35ha, và 3 năm hạn sử dụng',
    keyPhrases: [
      {
        en: 'Unlike artificially ionized water whose pH degrades within hours, Vikoda preserves its natural pH 9.0 up to 3 years bottled and 7 full days after opening.',
        vi: 'Khác với nước ion kiềm nhân tạo bị giảm độ pH chỉ sau vài giờ, Vikoda giữ trọn độ kiềm tự nhiên pH 9.0 lên tới 3 năm trong chai và 7 ngày sau khi mở nắp.',
        phonetics: '/ʌnˈlaɪk ˌɑːrtɪˈfɪʃəli ˈaɪənaɪzd ˈwɔːtər... vɪˈkoʊdə prɪˈzɜːrvz ɪts ˈnætʃrəl piː-eɪtʃ naɪn pɔɪnt oʊ ʌp tuː θriː jɪərz.../',
        stressNote: 'Nhấn mạnh "3 years bottled" và "7 full days after opening" - con số then chốt đập tan nghi ngờ.'
      },
      {
        en: 'Extracted from a 220-meter deep artesian aquifer untouched by surface runoff, bottled at a natural spring temperature of 72 degrees Celsius.',
        vi: 'Được khai thác từ mạch ngầm phun tự nhiên sâu 220m hoàn toàn cách ly khỏi nước mưa bề mặt, đóng chai ở nhiệt độ tại vòi 72 độ C.',
        phonetics: '/ɪkˈstræktɪd frəm ə tuː ˈhʌndrəd ˈtwɛnti ˈmiːtər diːp... æt ə ˈnætʃrəl sprɪŋ ˈtɛmprətʃər əv ˈsɛvnti-tuː dɪˈgriːz ˈsɛlsiəs/',
        stressNote: 'Phát âm rõ ràng các mốc số liệu: "220-meter deep" và "72 degrees Celsius".'
      },
      {
        en: 'Our 35-hectare virgin biosphere sanctuary acts as an impermeable sanitary barrier preserving ancient mineral purity.',
        vi: 'Vành đai sinh thái nguyên sinh rộng 35ha đóng vai trò như bức tường vệ sinh bất khả xâm phạm bảo vệ độ thuần khiết khoáng chất ngàn năm.',
        phonetics: '/aʊər ˈθɜːrti-faɪv ˈhɛktɛər ˈvɜːrdʒɪn ˌbaɪoʊˈsfɪər ˈsæŋktʃuəri... ˈsænɪtəri ˈbæriər.../',
        stressNote: 'Cụm từ "sanitary barrier" chứng minh tiêu chuẩn vệ sinh an toàn tuyệt đối với đối tác quốc tế.'
      }
    ],
    proTip: 'Nước kiềm máy điện phân không dám cam kết hạn sử dụng pH 3 năm. Đây là "Át chủ bài" khẳng định tính kiềm địa chất tự nhiên của Vikoda!'
  },
  {
    id: 'sos-4',
    category: 'NGOẠI THƯƠNG & HỢP ĐỒNG',
    icon: '🚢',
    title: 'Chốt Điều Khoản Incoterms FOB/CIF & Thanh Toán L/C',
    context: 'Khi bước vào giai đoạn thương thảo hợp đồng xuất khẩu container đi Nhật Bản, Hoa Kỳ, Châu Âu.',
    countdownHint: 'Khẳng định điều khoản thanh toán Irrevocable L/C at sight & Giám định SGS',
    keyPhrases: [
      {
        en: 'Our standard export quotation is FOB Quy Nhon or Cat Lai port, but we readily provide competitive CIF Tokyo or Rotterdam terms upon request.',
        vi: 'Báo giá xuất khẩu tiêu chuẩn của chúng tôi là FOB cảng Quy Nhơn hoặc Cát Lái, nhưng chúng tôi sẵn sàng cung cấp giá CIF Tokyo hoặc Rotterdam cạnh tranh nhất theo yêu cầu.',
        phonetics: '/aʊər ˈstændərd ˈɛkspɔːrt kwoʊˈteɪʃn ɪz ɛf-oʊ-biː... bʌt wiː ˈrɛdɪli prəˈvaɪd kəmˈpɛtətɪv siː-aɪ-ɛf.../',
        stressNote: 'Đọc rõ các mã Incoterms: "F-O-B" và "C-I-F".'
      },
      {
        en: 'Payment is secured via an Irrevocable Letter of Credit at sight, confirmed by a top-tier international commercial bank.',
        vi: 'Phương thức thanh toán được đảm bảo thông qua Thư tín dụng không thể hủy ngang trả ngay (L/C at sight), được xác nhận bởi ngân hàng thương mại quốc tế hạng nhất.',
        phonetics: '/ˈpeɪmənt ɪz sɪˈkjʊərd ˈvaɪə ən ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt.../',
        stressNote: 'Phát âm chuẩn từ ngoại thương "irrevocable" /ɪˈrɛvəkəbl/ (nhấn âm 2).'
      },
      {
        en: 'Every consignment includes an independent SGS Certificate of Mineral Analysis certifying zero heavy metals and pristine mineral stability.',
        vi: 'Mỗi lô hàng xuất khẩu đều kèm theo Chứng thư Kiểm nghiệm Khoáng sản độc lập từ SGS chứng nhận không kim loại nặng và độ ổn định khoáng chất hoàn hảo.',
        phonetics: '/ˈɛvri kənˈsaɪnmənt ɪnˈkluːdz ən ˌɪndɪˈpɛndənt ɛs-dʒiː-ɛs sərˈtɪfɪkət.../',
        stressNote: 'Nhắc đến SGS là chìa khóa thông quan và xây dựng lòng tin tuyệt đối.'
      }
    ],
    proTip: 'Đừng ngại nhắc đến L/C trả ngay. Các nhà nhập khẩu uy tín luôn đánh giá cao doanh nghiệp tuân thủ nghiêm ngặt chuẩn mực thanh toán quốc tế.'
  }
];

export const PreMeetingToolkitModal: React.FC<PreMeetingToolkitModalProps> = ({
  isOpen,
  onClose,
  speechRate
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('sos-1');
  const [playingPhraseIdx, setPlayingPhraseIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen || typeof document === 'undefined') return null;

  const currentSituation = SOS_SITUATIONS.find((s) => s.id === activeTabId) || SOS_SITUATIONS[0];

  const handlePlay = (text: string, idx: number) => {
    if (playingPhraseIdx === idx) {
      stopSpeech();
      setPlayingPhraseIdx(null);
    } else {
      setPlayingPhraseIdx(idx);
      playSpeech(text, speechRate * 0.95, 'en-US', () => {
        setPlayingPhraseIdx(null);
      });
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    playSound('click');
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150"
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
        className="bg-white w-full max-w-lg rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[92dvh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Executive SOS Badge */}
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-[#0070D1] p-4 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-xl shrink-0 animate-pulse">
                ⚡
              </div>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] uppercase tracking-wider font-black bg-white/25 px-2 py-0.5 rounded-full">
                    Cứu Nguy Trước Giờ G (Pre-Meeting 60s)
                  </span>
                  <span className="text-[10px] font-bold text-amber-100">
                    Bản Quyền Vikoda
                  </span>
                </div>
                <h3 className="text-base font-black text-white leading-tight mt-0.5">
                  Cẩm Nang Nhẩm Nhanh 1 Phút Trước Khi Họp
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                stopSpeech();
                playSound('click');
                onClose();
              }}
              className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Emergency Situation Tabs: Responsive Grid (No horizontal drag) */}
        <div className="p-3 bg-slate-100/90 border-b border-slate-200 shrink-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {SOS_SITUATIONS.map((sit) => {
              const isSelected = sit.id === activeTabId;
              return (
                <button
                  key={sit.id}
                  onClick={() => {
                    stopSpeech();
                    playSound('click');
                    setActiveTabId(sit.id);
                    setPlayingPhraseIdx(null);
                  }}
                  className={`p-2 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white text-[#0070D1] shadow-xs ring-2 ring-[#009FE3] font-black'
                      : 'bg-white/60 hover:bg-white text-slate-600 font-bold'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-base">{sit.icon}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#009FE3] animate-ping" />
                    )}
                  </div>
                  <span className="text-[10px] leading-tight line-clamp-1 mt-1 font-extrabold">
                    {sit.title.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          
          {/* Situation Briefing Banner */}
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-1">
            <div className="flex items-center space-x-2 text-amber-900 font-black text-xs">
              <span>{currentSituation.icon}</span>
              <span>{currentSituation.title}</span>
            </div>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              {currentSituation.context}
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-[10px] font-black text-amber-800">
              <Clock className="w-3 h-3 text-amber-600" />
              <span>Tâm thế 60s: {currentSituation.countdownHint}</span>
            </div>
          </div>

          {/* 3 Core Emergency Phrases */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
              3 Câu Thần Chú Bắt Buộc Nhớ Kỹ:
            </span>

            {currentSituation.keyPhrases.map((phrase, pIdx) => {
              const isPlaying = playingPhraseIdx === pIdx;
              const isCopied = copiedIdx === pIdx;

              return (
                <div 
                  key={pIdx}
                  className="p-3.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-300 transition-all space-y-2 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#009FE3] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                          {pIdx + 1}
                        </span>
                        <p className="text-xs font-black text-slate-900 leading-snug">
                          {phrase.en}
                        </p>
                      </div>

                      <p className="text-[11px] text-slate-500 font-medium pl-7 leading-relaxed">
                        {phrase.vi}
                      </p>
                    </div>

                    {/* Action buttons (Play & Copy) */}
                    <div className="flex items-center space-x-1 shrink-0 pt-0.5">
                      <button
                        onClick={() => handlePlay(phrase.en, pIdx)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer ${
                          isPlaying
                            ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                            : 'bg-sky-50 hover:bg-sky-100 text-[#0070D1] border-sky-200'
                        }`}
                        title="Nghe phát âm chuẩn giọng US Michael"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleCopy(phrase.en, pIdx)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors cursor-pointer"
                        title="Sao chép câu tiếng Anh"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Phonetics & Stress Note */}
                  <div className="pl-7 pt-1 border-t border-slate-100 flex flex-col gap-0.5 text-[10px]">
                    <span className="font-mono text-slate-400">
                      {phrase.phonetics}
                    </span>
                    <span className="text-[#0070D1] font-bold">
                      💡 Mẹo phát âm: {phrase.stressNote}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Executive Boardroom Tip */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 text-[11px] text-slate-700 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-black text-[#0070D1] uppercase tracking-wide text-[10px] block">
                Bí Quyết Thực Chiến Từ Giám Đốc Kinh Doanh:
              </span>
              <p className="leading-relaxed">
                {currentSituation.proTip}
              </p>
            </div>
          </div>

        </div>

        {/* Footer: Close button */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0">
          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="w-full py-2.5 rounded-2xl btn-duo-green text-white font-black text-xs uppercase cursor-pointer transition-all active:scale-[0.99] shadow-sm"
          >
            Đã Sẵn Sàng • Tự Tin Bước Vào Cuộc Họp
          </button>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

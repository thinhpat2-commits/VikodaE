import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Settings2,
  X
} from 'lucide-react';
import { CourseLevel } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { playSound } from '../services/soundEffects';
import { LiveCircularMicButton } from './LiveCircularMicButton';
import { InteractiveSentenceViewer } from './InteractiveSentenceViewer';
import { 
  playSpeech, 
  stopSpeech, 
  evaluatePronunciationDetails, 
  DetailedSpeechEvaluation,
  isSpeechRecognitionSupported,
  startSpeechRecognition,
  finishSpeechRecognition,
  stopSpeechRecognition,
  VOICE_OPTIONS,
  getSelectedVoiceId,
  subscribeVoiceChange,
  VoiceOptionId,
  triggerHaptic
} from '../services/speechService';

interface VoicePracticeItem {
  id: string;
  level: CourseLevel;
  title: string;
  english: string;
  phonetics: string;
  vietnamese: string;
  proTip: string;
}

const VOICE_PRACTICE_ITEMS: VoicePracticeItem[] = [
  // LEVEL A1: 10 ITEMS (Giao tiếp cơ bản & Nhập môn văn phòng)
  {
    id: 'vp-1',
    level: 'A1',
    title: 'Chào hỏi lịch thiệp tại văn phòng',
    english: 'Good morning! Welcome to Vikoda.',
    phonetics: '/gʊd ˈmɔːrnɪŋ! ˈwɛlkəm tuː vɪˈkoʊdə/',
    vietnamese: 'Chào buổi sáng! Chào mừng quý khách đến với Vikoda.',
    proTip: 'Nói với giọng ấm áp, thân thiện và tươi cười khi mở lời chào.'
  },
  {
    id: 'vp-2',
    level: 'A1',
    title: 'Mời nước khoáng kiềm mát lạnh',
    english: 'Would you like a cold bottle of Vikoda?',
    phonetics: '/wʊd juː laɪk ə koʊld ˈbɒtl əv vɪˈkoʊdə/',
    vietnamese: 'Xin mời anh/chị dùng một chai nước Vikoda mát lạnh.',
    proTip: 'Lên giọng nhẹ ở cuối câu hỏi lịch sự: "Vikoda?".'
  },
  {
    id: 'vp-3',
    level: 'A1',
    title: 'Khẳng định 100% khoáng thiên nhiên',
    english: 'It is one hundred percent natural mineral water.',
    phonetics: '/ɪt ɪz wʌn ˈhʌndrəd pərˈsɛnt ˈnætʃrəl ˈmɪnərəl ˈwɔːtər/',
    vietnamese: 'Đây là nước khoáng thiên nhiên 100%.',
    proTip: 'Nhấn mạnh cụm "natural mineral water" để phân biệt với nước lọc thông thường.'
  },
  {
    id: 'vp-4',
    level: 'A1',
    title: 'Trao danh thiếp chuyên nghiệp',
    english: 'Here is my business card, please feel free to reach out.',
    phonetics: '/hɪər ɪz maɪ ˈbɪznəs kɑːrd, pliːz fiːl friː tuː riːtʃ aʊt/',
    vietnamese: 'Đây là danh thiếp của tôi, xin vui lòng liên hệ bất cứ lúc nào.',
    proTip: 'Cầm danh thiếp bằng hai tay, hướng chữ về phía khách và mỉm cười.'
  },
  {
    id: 'vp-5',
    level: 'A1',
    title: 'Di sản lâu đời từ 1957',
    english: 'Vikoda has been nourishing Vietnamese families since 1957.',
    phonetics: '/vɪˈkoʊdə hæz biːn ˈnɜːrɪʃɪŋ ˌvjɛtnəˈmiːz ˈfæmɪliz sɪns ˈnaɪnˈtiːn ˈfɪfti ˈsɛvən/',
    vietnamese: 'Vikoda đã đồng hành chăm sóc sức khỏe gia đình Việt từ năm 1957.',
    proTip: 'Phát âm rõ năm "nineteen fifty-seven" để nhấn mạnh di sản gần 70 năm.'
  },
  {
    id: 'vp-6',
    level: 'A1',
    title: 'Mô tả hương vị ngọt thanh thanh khiết',
    english: 'Our natural alkaline water has a refreshing, smooth taste.',
    phonetics: '/aʊər ˈnætʃrəl ˈælkəlaɪn ˈwɔːtər hæz ə rɪˈfrɛʃɪŋ, smuːð teɪst/',
    vietnamese: 'Nước khoáng kiềm thiên nhiên của chúng tôi có vị ngọt thanh mát, êm dịu.',
    proTip: 'Âm đuôi "smooth" /smuːð/ phát âm mềm mại để gợi cảm giác êm dịu của nước.'
  },
  {
    id: 'vp-7',
    level: 'A1',
    title: 'Mời ly nước khoáng có ga',
    english: 'Let me pour you a fresh glass of sparkling mineral water.',
    phonetics: '/lɛt miː pɔːr juː ə frɛʃ ɡlæs əv ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər/',
    vietnamese: 'Để tôi rót mời anh/chị một ly nước khoáng có ga tươi mát.',
    proTip: 'Nhấn mạnh từ "sparkling" (có ga tự nhiên sảng khoái).'
  },
  {
    id: 'vp-8',
    level: 'A1',
    title: 'Chào đón phái đoàn tại gian hàng triển lãm',
    english: 'We are glad to welcome your delegation to our exhibition booth.',
    phonetics: '/wiː ɑːr ɡlæd tuː ˈwɛlkəm jʊər ˌdɛlɪˈɡeɪʃn tuː aʊər ˌɛksɪˈbɪʃn buːθ/',
    vietnamese: 'Chúng tôi rất vinh hạnh được đón tiếp phái đoàn quý vị tại gian hàng triển lãm.',
    proTip: 'Phát âm rõ "delegation" (phái đoàn) và "exhibition booth" (gian hàng).'
  },
  {
    id: 'vp-9',
    level: 'A1',
    title: 'Lịch sự xin đối tác nói chậm lại',
    english: 'Could you speak a little slower, please?',
    phonetics: '/kʊd juː spiːk ə ˈlɪtl ˈsloʊər, pliːz/',
    vietnamese: 'Anh/chị có thể vui lòng nói chậm lại một chút được không?',
    proTip: 'Giữ thái độ lịch thiệp và bình tĩnh; khách nước ngoài sẽ rất vui vẻ hỗ trợ bạn.'
  },
  {
    id: 'vp-10',
    level: 'A1',
    title: 'Cảm ơn và hẹn kết nối hợp tác',
    english: 'Thank you very much for your time and interest in Vikoda.',
    phonetics: '/θæŋk juː ˈvɛri mʌtʃ fɔːr jʊər taɪm ænd ˈɪntrəst ɪn vɪˈkoʊdə/',
    vietnamese: 'Chân thành cảm ơn thời gian và sự quan tâm của quý đối tác dành cho Vikoda.',
    proTip: 'Cúi đầu nhẹ 15 độ và bắt tay ấm áp khi tiễn đối tác rời bàn đàm phán.'
  },

  // LEVEL A2: 10 ITEMS (Khoa học nguồn khoáng Đảnh Thạnh & Dinh dưỡng)
  {
    id: 'vp-11',
    level: 'A2',
    title: 'Độ sâu mỏ 220 mét',
    english: 'We bottle directly at the Danh Thanh spring at a depth of 220 meters.',
    phonetics: '/wiː ˈbɒtl dəˈrɛktli æt ðə dɑːɲ tʰaɪɲ sprɪŋ æt ə dɛpθ əv tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz/',
    vietnamese: 'Chúng tôi đóng chai trực tiếp tại nguồn mỏ Đảnh Thạnh ở độ sâu 220 mét.',
    proTip: 'Phát âm rõ âm đuôi /θ/ của từ "depth" (độ sâu).'
  },
  {
    id: 'vp-12',
    level: 'A2',
    title: 'Nhiệt độ 72°C tại vòi phun',
    english: 'The spring water emerges naturally at a temperature of 72 degrees Celsius.',
    phonetics: '/ðə sprɪŋ ˈwɔːtər ɪˈmɜːrdʒɪz ˈnætʃrəli æt ə ˈtɛmprətʃər əv ˈsɛvnti-tuː dɪˈɡriːz ˈsɛlsiəs/',
    vietnamese: 'Nguồn nước khoáng lộ thiên tự nhiên ở nhiệt độ 72 độ C.',
    proTip: 'Nhấn mạnh "emerges naturally" (phun trào tự nhiên) và "72 degrees Celsius".'
  },
  {
    id: 'vp-13',
    level: 'A2',
    title: 'Cơ chế kiềm tự nhiên pH 9.0',
    english: 'Our natural pH of 9.0 helps neutralize excess stomach acid.',
    phonetics: '/aʊər ˈnætʃrəl piː-eɪtʃ əv naɪn hɛlps ˈnjuːtrəlaɪz ɪkˈsɛs ˈstʌmək ˈæsɪd/',
    vietnamese: 'Độ pH 9.0 tự nhiên giúp trung hòa axit dư thừa trong dạ dày.',
    proTip: 'Nhấn mạnh từ "neutralize" (trung hòa).'
  },
  {
    id: 'vp-14',
    level: 'A2',
    title: 'Vành đai sinh thái xanh 35 hecta',
    english: 'The source is strictly protected by a 35-hectare ecological green belt.',
    phonetics: '/ðə sɔːrs ɪz ˈstrɪktli prəˈtɛktɪd baɪ ə ˈθɜːrti-faɪv ˈhɛktɛər ˌiːkəˈlɒdʒɪkl ɡriːn bɛlt/',
    vietnamese: 'Nguồn nước được bảo vệ nghiêm ngặt bởi vành đai sinh thái xanh 35 hecta.',
    proTip: 'Cụm "ecological green belt" chứng minh độ tinh khiết tuyệt đối không ô nhiễm.'
  },
  {
    id: 'vp-15',
    level: 'A2',
    title: 'So sánh khoáng tự nhiên vs nước cất RO',
    english: 'Unlike RO purified water which strips away electrolytes, Vikoda preserves essential natural minerals.',
    phonetics: '/ʌnˈlaɪk ɑːr-oʊ ˈpjʊrɪfaɪd ˈwɔːtər wɪtʃ strɪps əˈweɪ ɪˈlɛktrəlaɪts, vɪˈkoʊdə prɪˈzɜːrvz ɪˈsɛnʃl ˈnætʃrəl ˈmɪnərəlz/',
    vietnamese: 'Khác với nước tinh khiết RO bị lọc cạn điện giải, Vikoda giữ trọn vẹn vi khoáng tự nhiên thiết yếu.',
    proTip: 'Tương phản giữa "strips away" (tước bỏ) và "preserves" (bảo tồn nguyên vẹn).'
  },
  {
    id: 'vp-16',
    level: 'A2',
    title: 'Axit Metasilicic & Muối Bicarbonate',
    english: 'Vikoda is rich in natural Metasilicic acid and Bicarbonate for optimal digestion and cellular hydration.',
    phonetics: '/vɪˈkoʊdə ɪz rɪtʃ ɪn ˈnætʃrəl ˌmɛtəsɪˈlɪsɪk ˈæsɪd ænd baɪˈkɑːrbənət fɔːr ˈɒptɪml daɪˈdʒɛstʃən ænd ˈsɛljələr haɪˈdreɪʃn/',
    vietnamese: 'Vikoda giàu axit Metasilicic và Bicarbonate tự nhiên giúp tối ưu tiêu hóa và cấp nước tế bào.',
    proTip: 'Phát âm khoa học "Metasilicic acid" và "Bicarbonate" sẽ làm khách nể phục kiến thức chuyên môn.'
  },
  {
    id: 'vp-17',
    level: 'A2',
    title: 'Dây chuyền tự động chuẩn HACCP',
    english: 'Our automated bottling lines meet the highest international HACCP standards.',
    phonetics: '/aʊər ˈɔːtəmeɪtɪd ˈbɒtlɪŋ laɪnz miːt ðə ˈhaɪɪst ˌɪntərˈnæʃnəl ˈhæsæp ˈstændərdz/',
    vietnamese: 'Dây chuyền chiết rót tự động của chúng tôi đáp ứng chuẩn quốc tế HACCP khắt khe nhất.',
    proTip: 'HACCP phát âm là /ˈhæsæp/ — chứng chỉ vàng về an toàn vệ sinh thực phẩm.'
  },
  {
    id: 'vp-18',
    level: 'A2',
    title: 'Hỗ trợ trào ngược và cân bằng cơ thể',
    english: 'Regular intake of natural alkaline water supports metabolic balance and acid reflux relief.',
    phonetics: '/ˈrɛɡjələr ˈɪnteɪk əv ˈnætʃrəl ˈælkəlaɪn ˈwɔːtər səˈpɔːrts ˌmɛtəˈbɒlɪk ˈbæləns ænd ˈæsɪd ˈriːflʌks rɪˈliːf/',
    vietnamese: 'Uống nước khoáng kiềm tự nhiên hàng ngày hỗ trợ cân bằng trao đổi chất và giảm trào ngược dạ dày.',
    proTip: 'Nhấn mạnh "acid reflux relief" (giảm chứng trào ngược axit).'
  },
  {
    id: 'vp-19',
    level: 'A2',
    title: 'Nước khoáng có ga vị trái cây',
    english: 'We offer an array of refreshing fruit flavors crafted with genuine mineral water.',
    phonetics: '/wiː ˈɒfər ən əˈreɪ əv rɪˈfrɛʃɪŋ fruːt ˈfleɪvərz ˈkræftɪd wɪð ˈdʒɛnjuɪn ˈmɪnərəl ˈwɔːtər/',
    vietnamese: 'Chúng tôi cung cấp bộ sưu tập hương vị trái cây sảng khoái trên nền nước khoáng tự nhiên nguyên bản.',
    proTip: 'Từ "genuine" /ˈdʒɛnjuɪn/ nghĩa là nguyên chất, chuẩn thật, tạo uy tín.'
  },
  {
    id: 'vp-20',
    level: 'A2',
    title: 'Mời đoàn khách đi tour thăm mỏ Khánh Hòa',
    english: 'We would be honored to host you for a VIP tour of our pristine spring in Khanh Hoa.',
    phonetics: '/wiː wʊd biː ˈɒnərd tuː hoʊst juː fɔːr ə viː-aɪ-piː tʊər əv aʊər ˈprɪstiːn sprɪŋ ɪn kɑːɲ hwɑː/',
    vietnamese: 'Chúng tôi rất vinh dự được đón tiếp quý đối tác tham quan VIP mỏ khoáng nguyên sinh tại Khánh Hòa.',
    proTip: 'Từ "pristine" /ˈprɪstiːn/ nghĩa là nguyên sơ, tinh khiết không tì vết.'
  },

  // LEVEL B1: 10 ITEMS (Đại sứ thương hiệu & Thuyết trình sản phẩm HORECA)
  {
    id: 'vp-21',
    level: 'B1',
    title: 'Phản bác kiềm nhân tạo không ổn định',
    english: 'Unlike artificial alkaline water, Vikoda preserves natural minerals without chemical additives.',
    phonetics: '/ʌnˈlaɪk ˌɑːrtɪˈfɪʃl ˈælkəlaɪn ˈwɔːtər, vɪˈkoʊdə prɪˈzɜːrvz ˈnætʃrəl ˈmɪnərəlz wɪˈðaʊt ˈkɛmɪkl ˈædɪtɪvz/',
    vietnamese: 'Khác với nước kiềm nhân tạo, Vikoda giữ trọn khoáng chất tự nhiên không hóa chất phụ gia.',
    proTip: 'Nhấn mạnh sự tương phản: "Unlike artificial... Vikoda preserves natural minerals".'
  },
  {
    id: 'vp-22',
    level: 'B1',
    title: 'Kiềm liên kết khoáng bền vững 3 năm',
    english: 'Vikoda is not an electrolyte machine creation; its alkalinity is naturally mineral-bonded from Mother Earth.',
    phonetics: '/vɪˈkoʊdə ɪz nɒt ən ɪˈlɛktrəlaɪt məˈʃiːn kriˈeɪʃn; ɪts ˌælkəˈlɪnəti ɪz ˈnætʃrəli ˈmɪnərəl-ˈbɒndɪd frəm ˈmʌðər ɜːrθ/',
    vietnamese: 'Vikoda không phải sản phẩm từ máy điện phân; độ kiềm được liên kết khoáng chất tự nhiên từ lòng đất mẹ.',
    proTip: 'Dùng cụm "naturally mineral-bonded" để chứng minh độ bền pH không bao giờ bị mất sau 48h.'
  },
  {
    id: 'vp-23',
    level: 'B1',
    title: 'Giải tỏa lo lắng về sỏi thận (TDS cân bằng)',
    english: 'Our light and balanced TDS ensures daily hydration without any risk of kidney stones.',
    phonetics: '/aʊər laɪt ænd ˈbælənst tiː-diː-ɛs ɪnˈʃʊrz ˈdeɪli haɪˈdreɪʃn wɪˈðaʊt ˈɛni rɪsk əv ˈkɪdni stoʊnz/',
    vietnamese: 'Chỉ số TDS thanh nhẹ, cân bằng đảm bảo bù nước hàng ngày mà hoàn toàn không lo lắng nguy cơ sỏi thận.',
    proTip: 'Giải thích khoáng chất Vikoda ở dạng ion hòa tan hoàn toàn, đào thải tự nhiên qua thận.'
  },
  {
    id: 'vp-24',
    level: 'B1',
    title: 'Chai thủy tinh cao cấp chuẩn 5 sao',
    english: 'Our luxury glass bottles eliminate single-use plastics and elevate the 5-star dining experience.',
    phonetics: '/aʊər ˈlʌkʃəri ɡlæs ˈbɒtlz ɪˈlɪmɪneɪt ˈsɪŋɡl-juːs ˈplæstɪks ænd ˈɛlɪveɪt ðə faɪv-stɑːr ˈdaɪnɪŋ ɪkˈspɪəriəns/',
    vietnamese: 'Dòng chai thủy tinh cao cấp loại bỏ hoàn toàn rác thải nhựa một lần và nâng tầm trải nghiệm ẩm thực 5 sao.',
    proTip: 'Từ "elevate" mang nghĩa nâng tầm đẳng cấp, rất thuyết phục với F&B Director.'
  },
  {
    id: 'vp-25',
    level: 'B1',
    title: 'Lợi thế ESG: Giảm 85% phát thải Scope 3',
    english: 'Switching from imported European water to Vikoda glass bottles reduces your scope-three carbon emissions by 85%.',
    phonetics: '/ˈswɪtʃɪŋ frəm ɪmˈpɔːrtɪd ˌjʊərəˈpiːən ˈwɔːtər tuː vɪˈkoʊdə ɡlæs ˈbɒtlz rɪˈdjuːsɪz jʊər skoʊp-θriː ˈkɑːrbən ɪˈmɪʃnz baɪ ˈeɪti-faɪv pərˈsɛnt/',
    vietnamese: 'Chuyển đổi từ nước nhập khẩu Châu Âu sang chai thủy tinh Vikoda giúp giảm 85% phát thải carbon phạm vi ba của khách sạn.',
    proTip: 'Thuật ngữ "scope-three carbon emissions" là tiêu chí KPI cốt lõi của các tập đoàn khách sạn Marriott, Accor.'
  },
  {
    id: 'vp-26',
    level: 'B1',
    title: 'Điều kiện thương mại quốc tế FOB & CIF',
    english: 'We provide full FOB and CIF trade terms with prompt shipping from Cat Lai and Hai Phong ports.',
    phonetics: '/wiː prəˈvaɪd fʊl ɛf-oʊ-biː ænd siː-aɪ-ɛf treɪd tɜːrmz wɪð prɒmpt ˈʃɪpɪŋ frəm kæt laɪ ænd haɪ fɒŋ pɔːrts/',
    vietnamese: 'Chúng tôi cung cấp đầy đủ điều kiện thương mại FOB và CIF với lịch tàu nhanh chóng từ cảng Cát Lái và Hải Phong.',
    proTip: 'Phát âm rõ ràng các Incoterms: "FOB" (Free On Board) và "CIF" (Cost, Insurance and Freight).'
  },
  {
    id: 'vp-27',
    level: 'B1',
    title: 'Quy cách MOQ container 20 feet',
    english: 'Our minimum order quantity is one 20-foot container, with flexible palletized configuration.',
    phonetics: '/aʊər ˈmɪnɪməm ˈɔːrdər ˈkwɒntəti ɪz wʌn ˈtwɛnti-fʊt kənˈteɪnər, wɪð ˈflɛksəbl ˈpælətaɪzd kənˌfɪɡjʊˈreɪʃn/',
    vietnamese: 'Số lượng đặt hàng tối thiểu là một container 20 feet, đóng pallet linh hoạt và an toàn.',
    proTip: 'Nhấn mạnh từ "palletized" (được đóng kiện pallet tiêu chuẩn hàng hải quốc tế).'
  },
  {
    id: 'vp-28',
    level: 'B1',
    title: 'Hồ sơ pháp lý: ISO 22000, US FDA & Halal',
    english: 'Our products are backed by ISO 22000, US FDA facility registration, and international Halal certification.',
    phonetics: '/aʊər ˈprɒdʌkts ɑːr bækt baɪ aɪ-ɛs-oʊ ˈtwɛnti-tuː ˈθaʊznd, juː-ɛs ɛf-diː-eɪ fəˈsɪləti ˌrɛdʒɪˈstreɪʃn, ænd ˌɪntərˈnæʃnəl həˈlɑːl ˌsɜːrtɪfɪˈkeɪʃn/',
    vietnamese: 'Sản phẩm của chúng tôi được chứng nhận bởi ISO 22000, đăng ký cơ sở FDA Hoa Kỳ và chứng chỉ Halal quốc tế.',
    proTip: 'Đưa ra các chứng chỉ quốc tế này giúp mở toang cánh cửa vào các thị trường khó tính Mỹ, Trung Đông.'
  },
  {
    id: 'vp-29',
    level: 'B1',
    title: 'Thanh toán L/C không hủy ngang trả ngay',
    english: 'We welcome irrevocable letters of credit at sight issued by top-tier international commercial banks.',
    phonetics: '/wiː ˈwɛlkəm ɪˈrɛvəkəbl ˈlɛtərz əv ˈkrɛdɪt æt saɪt ˈɪʃuːd baɪ tɒp-tɪər ˌɪntərˈnæʃnəl kəˈmɜːrʃl bæŋks/',
    vietnamese: 'Chúng tôi chấp nhận thư tín dụng không hủy ngang trả ngay được phát hành bởi các ngân hàng thương mại quốc tế hàng đầu.',
    proTip: 'Dùng cụm chuẩn ngoại thương: "irrevocable L/C at sight".'
  },
  {
    id: 'vp-30',
    level: 'B1',
    title: 'Năng lực OEM & Bệ phóng Tập đoàn F.I.T.',
    english: 'As part of F.I.T. Group, Vikoda possesses the financial resilience and manufacturing capacity for large-scale OEM partnerships.',
    phonetics: '/æz pɑːrt əv ɛf-aɪ-tiː ɡruːp, vɪˈkoʊdə pəˈzɛsɪz ðə faɪˈnænʃl rɪˈzɪliəns ænd ˌmænjuˈfæktʃərɪŋ kəˈpæsəti fɔːr lɑːrdʒ-skeɪl oʊ-iː-ɛm ˈpɑːrtnərʃɪps/',
    vietnamese: 'Thuộc tập đoàn F.I.T., Vikoda sở hữu tiềm lực tài chính vững mạnh và công suất sản xuất quy mô lớn cho các hợp đồng OEM quốc tế.',
    proTip: 'Khẳng định uy tín tập đoàn niêm yết tạo niềm tin tuyệt đối cho các tập đoàn bán lẻ đa quốc gia.'
  },

  // LEVEL B2: 10 ITEMS (Đàm phán thương mại B2B, Hợp đồng xuất khẩu & Xử lý phản hồi)
  {
    id: 'vp-31',
    level: 'B2',
    title: 'Đàm phán công bằng (Level Playing Field)',
    english: 'We want to ensure a level playing field for all regional distributors.',
    phonetics: '/wiː wɒnt tuː ɪnˈʃʊər ə ˈlɛvl ˈpleɪɪŋ fiːld fɔːr ɔːl ˈriːdʒənl dɪˈstrɪbjətərz/',
    vietnamese: 'Chúng tôi muốn đảm bảo một sân chơi cạnh tranh công bằng cho tất cả các nhà phân phối vùng.',
    proTip: 'Nhấn mạnh cụm "level playing field" với ngữ điệu đĩnh đạc của một CEO.'
  },
  {
    id: 'vp-32',
    level: 'B2',
    title: 'Ưu đãi thúc đẩy chốt hợp đồng (Sweeten the Deal)',
    english: 'To sweeten the deal, we will subsidize your premier shelf display costs.',
    phonetics: '/tuː ˈswiːtn ðə diːl, wiː wɪl ˈsʌbsɪdaɪz jɔːr ˈprɛmiər ʃɛlf dɪˈspleɪ kɒsts/',
    vietnamese: 'Để thêm phần ưu đãi chốt deal, chúng tôi sẽ hỗ trợ kinh phí trưng bày tại các vị trí kệ hàng đắc địa nhất.',
    proTip: 'Phát âm "sweeten" gọn gàng nuốt âm T nhẹ (/ˈswiːtn/).'
  },
  {
    id: 'vp-33',
    level: 'B2',
    title: 'Công thức phản hồi Harvard Feel-Felt-Found',
    english: 'I understand how you feel, other buyers felt the same, but they found that Vikoda drove higher retention.',
    phonetics: '/aɪ ˌʌndərˈstænd haʊ juː fiːl, ˈʌðər ˈbaɪərz fɛlt ðə seɪm, bʌt ðeɪ faʊnd ðæt vɪˈkoʊdə droʊv ˈhaɪər rɪˈtɛnʃn/',
    vietnamese: 'Tôi hoàn toàn thấu hiểu cảm giác của ngài, nhiều đối tác ban đầu cũng nghĩ như vậy, nhưng sau đó họ nhận thấy Vikoda mang lại tỷ lệ khách quay lại mua cao hơn hẳn.',
    proTip: 'Chuyển ngữ điệu từ đồng cảm nhẹ nhàng (Feel) sang tự tin dứt khoát (Found).'
  },
  {
    id: 'vp-34',
    level: 'B2',
    title: 'Độc bản kiềm tự nhiên đối đầu Evian / San Pellegrino',
    english: 'While European brands offer history, Vikoda provides a rare natural pH 9.0 synergy that no imported water can replicate at source.',
    phonetics: '/waɪl ˌjʊərəˈpiːən brændz ˈɒfər ˈhɪstəri, vɪˈkoʊdə prəˈvaɪdz ə rɛər ˈnætʃrəl piː-eɪtʃ naɪn pɔɪnt oʊ ˈsɪnərdʒi/',
    vietnamese: 'Trong khi các thương hiệu Châu Âu có bề dày lịch sử, Vikoda sở hữu sự cộng hưởng kiềm tự nhiên pH 9.0 quý hiếm mà không nước nhập khẩu nào có thể sao chép tại nguồn.',
    proTip: 'Đọc "nine point oh" dứt khoát, không nói "nine point zero".'
  },
  {
    id: 'vp-35',
    level: 'B2',
    title: 'Khoa học khoáng kiềm đệm axit tế bào',
    english: 'Vikoda’s abundant natural bicarbonate buffers metabolic acidity and optimizes cellular hydration.',
    phonetics: '/vɪˈkoʊdəz əˈbʌndənt ˈnætʃrəl baɪˈkɑːrbənət ˈbʌfərz ˌmɛtəˈbɒlɪk əˈsɪdəti ænd ˈɒptɪmaɪzɪz ˈsɛljələr haɪˈdreɪʃn/',
    vietnamese: 'Lượng muối Bicarbonate tự nhiên dồi dào trong Vikoda giúp đệm axit chuyển hóa và tối ưu sự thẩm thấu cấp nước tế bào.',
    proTip: 'Trọng âm chuẩn từ "bicarbonate" /baɪˈkɑːrbənət/ và "cellular" /ˈsɛljələr/.'
  },
  {
    id: 'vp-36',
    level: 'B2',
    title: 'Khai mở kỷ nguyên mới tại lễ ký kết',
    english: 'Today we do not merely sign a contract, we inaugurate a new era for natural alkaline wellness.',
    phonetics: '/təˈdeɪ wiː duː nɒt ˈmɪərli saɪn ə ˈkɒntrækt, wiː ɪˈnɔːgjəreɪt ə njuː ˈɪərə fɔːr ˈnætʃrəl ˈælkəlaɪn ˈwɛlnɪs/',
    vietnamese: 'Hôm nay chúng ta không đơn thuần ký kết một hợp đồng, chúng ta cùng nhau khai mở một kỷ nguyên mới cho sức khỏe khoáng kiềm tự nhiên.',
    proTip: 'Lời phát biểu nâng ly (toast) đầy cảm hứng với âm lượng vang và phong thái đĩnh đạc.'
  },
  {
    id: 'vp-37',
    level: 'B2',
    title: 'Thương lượng Incoterms CIF Tokyo',
    english: 'Our CIF Tokyo quotation includes marine insurance and container freight charges.',
    phonetics: '/aʊər siː-aɪ-ɛf ˈtoʊkioʊ kwoʊˈteɪʃn ɪnˈkluːdz məˈriːn ɪnˈʃʊərəns ænd kənˈteɪnər freɪt ˈtʃɑːrdʒɪz/',
    vietnamese: 'Báo giá CIF Tokyo của chúng tôi đã bao gồm bảo hiểm hàng hải và cước vận tải container.',
    proTip: 'Phát âm chuẩn thuật ngữ thương mại "marine insurance" và "freight charges".'
  },
  {
    id: 'vp-38',
    level: 'B2',
    title: 'Điều kiện mở tín dụng thư L/C trả ngay',
    english: 'We accept payment by irrevocable Letter of Credit at sight confirmed by a prime bank.',
    phonetics: '/wiː əkˈsɛpt ˈpeɪmənt baɪ ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt kənˈfɜːrmd baɪ ə praɪm bæŋk/',
    vietnamese: 'Chúng tôi chấp nhận thanh toán bằng Thư tín dụng không thể hủy ngang trả ngay xác nhận bởi ngân hàng hạng nhất.',
    proTip: 'Trọng âm từ "irrevocable" /ɪˈrɛvəkəbl/ rơi vào âm tiết thứ hai.'
  },
  {
    id: 'vp-39',
    level: 'B2',
    title: 'Hạn mức chiết khấu theo sản lượng container',
    english: 'A volume rebate of five percent applies once your annual orders exceed fifty TEUs.',
    phonetics: '/ə ˈvɒljuːm ˈriːbeɪt əv faɪv pərˈsɛnt əˈplaɪz wʌns jɔːr ˈænjuəl ˈɔːrdərz ɪkˈsiːd ˈfɪfti tiː-iː-juːz/',
    vietnamese: 'Mức chiết khấu sản lượng 5% sẽ được áp dụng khi tổng đơn hàng năm của quý vị vượt 50 container tiêu chuẩn.',
    proTip: 'TEU đọc là /tiː-iː-juː/ — đơn vị đo lường tương đương container 20 feet.'
  },
  {
    id: 'vp-40',
    level: 'B2',
    title: 'Đảm bảo thời hạn lưu kho 24 tháng',
    english: 'Our high-grade glass bottles ensure a twenty-four-month shelf life with intact mineral balance.',
    phonetics: '/aʊər haɪ-ɡreɪd ɡlæs ˈbɒtlz ɪnˈʃʊər ə ˈtwɛnti-fɔːr-mʌnθ ʃɛlf laɪf wɪð ɪnˈtækt ˈmɪnərəl ˈbæləns/',
    vietnamese: 'Chai thủy tinh cao cấp của chúng tôi đảm bảo hạn sử dụng 24 tháng với hàm lượng khoáng kiềm nguyên vẹn.',
    proTip: 'Từ "intact" /ɪnˈtækt/ nghĩa là nguyên vẹn, giữ trọn chất lượng.'
  },

  // LEVEL C1-C2: 10 ITEMS (Chiến lược toàn cầu, C-Suite, Thẩm định ESG & Hợp tác quốc tế)
  {
    id: 'vp-41',
    level: 'C1-C2',
    title: 'Chứng chỉ kiểm định phòng thí nghiệm Tokyo',
    english: 'Our mineral analysis has been independently certified by Japan Food Research Laboratories.',
    phonetics: '/aʊər ˈmɪnərəl əˈnæləsɪs hæz biːn ˌɪndɪˈpɛndəntli ˈsɜːrtɪfaɪd baɪ dʒəˈpæn fuːd rɪˈsɜːrtʃ ləˈbɒrətɔːriz/',
    vietnamese: 'Bản phân tích khoáng chất của chúng tôi đã được chứng nhận độc lập bởi Phòng Thí nghiệm Nghiên cứu Thực phẩm Nhật Bản (JFRL).',
    proTip: 'Nhấn mạnh "independently certified" để khẳng định độ tin cậy tuyệt đối với đối tác Nhật.'
  },
  {
    id: 'vp-42',
    level: 'C1-C2',
    title: 'Bảo vệ giá trị thương hiệu Vikoda trên thị trường quốc tế',
    english: 'We do not engage in price-slashing wars; we compete on unmatched pristine purity and clinical efficacy.',
    phonetics: '/wiː duː nɒt ɪnˈɡeɪdʒ ɪn praɪs-ˈslæʃɪŋ wɔːrz; wiː kəmˈpiːt ɒn ʌnˈmætʃt ˈprɪstiːn ˈpjʊərəti ænd ˈklɪnɪkl ˈɛfɪkəsi/',
    vietnamese: 'Chúng tôi không tham gia vào các cuộc chiến phá giá; chúng tôi cạnh tranh bằng độ tinh khiết nguyên sơ và hiệu quả sinh học vượt trội.',
    proTip: 'Cụm "clinical efficacy" /ˈklɪnɪkl ˈɛfɪkəsi/ nghĩa là hiệu quả lâm sàng đã được y học kiểm chứng.'
  },
  {
    id: 'vp-43',
    level: 'C1-C2',
    title: 'Hợp tác phân phối độc quyền theo vùng lãnh thổ',
    english: 'Exclusive territorial distribution rights are contingent upon meeting our quarterly volume milestones.',
    phonetics: '/ɪkˈskluːsɪv ˌtɛrɪˈtɔːriəl ˌdɪstrɪˈbjuːʃn raɪts ɑːr kənˈtɪndʒənt əˈpɒn ˈmiːtɪŋ aʊər ˈkwɔːrtərli ˈvɒljuːm ˈmaɪlstoʊnz/',
    vietnamese: 'Quyền phân phối độc quyền theo lãnh thổ sẽ phụ thuộc vào việc hoàn thành các mốc sản lượng định kỳ hàng quý.',
    proTip: 'Cụm "contingent upon" /kənˈtɪndʒənt əˈpɒn/ mang phong thái hợp đồng pháp lý chuyên nghiệp.'
  },
  {
    id: 'vp-44',
    level: 'C1-C2',
    title: 'Chiến lược phát triển bền vững ESG & Kinh tế tuần hoàn',
    english: 'Our circular economy initiatives reduce carbon footprint through solar-powered bottling and returnable glass packaging.',
    phonetics: '/aʊər ˈsɜːrkjələr ɪˈkɒnəmi ɪˈnɪʃətɪvz rɪˈdjuːs ˈkɑːrbən ˈfʊtprɪnt θruː ˈsoʊlər-ˈpaʊərd ˈbɒtlɪŋ ænd rɪˈtɜːrnəbl ɡlæs ˈpækɪdʒɪŋ/',
    vietnamese: 'Các sáng kiến kinh tế tuần hoàn của chúng tôi giảm phát thải carbon nhờ chiết rót bằng năng lượng mặt trời và bao bì thủy tinh tái sử dụng.',
    proTip: 'Cụm "circular economy initiatives" ghi điểm tuyệt đối trong các vòng thẩm định ESG của đối tác đa quốc gia.'
  },
  {
    id: 'vp-45',
    level: 'C1-C2',
    title: 'Chiến lược định vị phân khúc siêu cao cấp',
    english: 'Vikoda is positioned not merely as hydration, but as an indispensable wellness lifestyle statement.',
    phonetics: '/vɪˈkoʊdə ɪz pəˈzɪʃnd nɒt ˈmɪərli æz haɪˈdreɪʃn, bʌt æz ən ˌɪndɪˈspɛnsəbl ˈwɛlnɪs ˈlaɪfstaɪl ˈsteɪtmənt/',
    vietnamese: 'Vikoda được định vị không đơn thuần là nước giải khát, mà là tuyên ngôn phong cách sống chăm sóc sức khỏe không thể thiếu.',
    proTip: 'Từ "indispensable" /ˌɪndɪˈspɛnsəbl/ nghĩa là thiết yếu, không thể thiếu.'
  },
  {
    id: 'vp-46',
    level: 'C1-C2',
    title: 'Cam kết trách nhiệm xã hội và cộng đồng địa phương',
    english: 'Every bottle sold directly reinvests into preserving the pristine ecosystem of Khanh Hoa province.',
    phonetics: '/ˈɛvri ˈbɒtl soʊld dəˈrɛktli ˌriːɪnˈvɛsts ˈɪntuː prɪˈzɜːrvɪŋ ðə ˈprɪstiːn ˈiːkoʊˌsɪstəm əv kɑːɲ hwɑː ˈprɒvɪns/',
    vietnamese: 'Mỗi chai nước được bán ra đóng góp trực tiếp tái đầu tư vào việc bảo tồn hệ sinh thái nguyên sinh của tỉnh Khánh Hòa.',
    proTip: 'Tạo cảm xúc gắn kết đạo đức kinh doanh sâu sắc với các đối tác phát triển bền vững.'
  },
  {
    id: 'vp-47',
    level: 'C1-C2',
    title: 'Cam kết đồng hành marketing và truyền thông thương hiệu',
    english: 'We co-invest in regional brand-building campaigns and provide comprehensive sales collateral in your native language.',
    phonetics: '/wiː koʊ-ɪnˈvɛst ɪn ˈriːdʒənl brænd-ˈbɪldɪŋ kæmˈpeɪnz ænd prəˈvaɪd ˌkɒmprɪˈhɛnsɪv seɪlz kəˈlætərəl ɪn jʊər ˈneɪtɪv ˈlæŋɡwɪdʒ/',
    vietnamese: 'Chúng tôi đồng đầu tư vào các chiến dịch xây dựng thương hiệu khu vực và cung cấp toàn bộ tài liệu bán hàng bằng ngôn ngữ bản địa của quý vị.',
    proTip: 'Cụm "sales collateral" nghĩa là bộ công cụ ấn phẩm bán hàng hỗ trợ đại lý.'
  },
  {
    id: 'vp-48',
    level: 'C1-C2',
    title: 'Cơ chế giải quyết tranh chấp trọng tài quốc tế',
    english: 'Any dispute arising under this agreement shall be settled through expedited arbitration under SIAC rules.',
    phonetics: '/ˈɛni dɪˈspjuːt əˈraɪzɪŋ ˈʌndər ðɪs əˈɡriːmənt ʃæl biː ˈsɛtld θruː ˈɛkspədaɪtɪd ˌɑːrbɪˈtreɪʃn ˈʌndər ɛs-aɪ-eɪ-siː ruːlz/',
    vietnamese: 'Mọi tranh chấp phát sinh từ thỏa thuận này sẽ được giải quyết qua trọng tài rút gọn theo quy tắc của Trung tâm Trọng tài Quốc tế Singapore (SIAC).',
    proTip: 'Thể hiện sự minh bạch và chuẩn mực thương mại quốc tế cao nhất.'
  },
  {
    id: 'vp-49',
    level: 'C1-C2',
    title: 'Chu kỳ kiểm tra chất lượng lô hàng xuất xưởng',
    english: 'Batch-by-batch microbiological and physicochemical testing is performed prior to customs clearance release.',
    phonetics: '/bætʃ-baɪ-bætʃ ˌmaɪkroʊˌbaɪəˈlɒdʒɪkl ænd ˌfɪzɪkoʊˈkɛmɪkl ˈtɛstɪŋ ɪz pərˈfɔːrmd ˈpraɪər tuː ˈkʌstəmz ˈklɪərəns rɪˈliːs/',
    vietnamese: 'Kiểm nghiệm vi sinh và lý hóa từng lô hàng được thực hiện nghiêm ngặt trước khi thông quan xuất khẩu.',
    proTip: 'Cụm "microbiological and physicochemical testing" đảm bảo tiêu chuẩn kiểm dịch khắt khe.'
  },
  {
    id: 'vp-50',
    level: 'C1-C2',
    title: 'Tầm nhìn liên minh chiến lược toàn cầu',
    english: 'Together we are establishing a global benchmark for pristine natural alkaline hydration across international markets.',
    phonetics: '/təˈɡɛðər wiː ɑːr ɪˈstæblɪʃɪŋ ə ˈɡloʊbl ˈbɛntʃmɑːrk fɔːr ˈprɪstiːn ˈnætʃrəl ˈælkəlaɪn haɪˈdreɪʃn əˈkrɒs ˌɪntərˈnæʃnəl ˈmɑːrkɪts/',
    vietnamese: 'Cùng nhau, chúng ta đang thiết lập một chuẩn mực toàn cầu mới về nguồn nước khoáng kiềm tự nhiên nguyên sinh trên các thị trường quốc tế.',
    proTip: 'Lời kết hoàn hảo cho các bài phát biểu hợp tác cấp cao giữa các tập đoàn hàng đầu.'
  }
];

interface VikodaVoiceCoachProps {
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
  selectedLevel: CourseLevel;
  onBack?: () => void;
}

export const VikodaVoiceCoach: React.FC<VikodaVoiceCoachProps> = ({
  speechRate,
  onAwardXpAndGems,
  selectedLevel,
  onBack
}) => {
  const filteredItems = VOICE_PRACTICE_ITEMS.filter((i) => i.level === selectedLevel);
  const items = filteredItems.length > 0 ? filteredItems : VOICE_PRACTICE_ITEMS;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenText, setSpokenText] = useState<string>('');
  const [score, setScore] = useState<number | null>(null);
  const [isPlayingNative, setIsPlayingNative] = useState<boolean>(false);
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return () => {
      unsub();
      stopSpeech();
      stopSpeechRecognition();
    };
  }, []);

  const currentItem = items[currentIndex % items.length];

  const handlePlayNative = (slow: boolean = false) => {
    if (isPlayingNative) {
      stopSpeech();
      setIsPlayingNative(false);
    } else {
      setIsPlayingNative(true);
      const rate = slow ? 0.75 : speechRate;
      playSpeech(currentItem.english, rate, 'en-US', () => setIsPlayingNative(false));
    }
  };

  const handleStartSpeaking = () => {
    if (isRecording) {
      finishSpeechRecognition();
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setSpokenText('Trình duyệt chưa hỗ trợ Web Speech Recognition. Hãy mở trên Chrome hoặc Edge.');
      return;
    }

    setIsRecording(true);
    setSpokenText('Đang lắng nghe... Hãy đọc to câu tiếng Anh ở trên!');
    setScore(null);
    playSound('click');
    triggerHaptic('light');

    startSpeechRecognition(
      (finalText) => {
        setSpokenText(finalText);
        const evalResult = evaluatePronunciationDetails(currentItem.english, finalText);
        setScore(evalResult.score);
        setIsRecording(false);

        if (evalResult.score >= 60) {
          playSound('correct');
          triggerHaptic('success');
          onAwardXpAndGems(30, 10);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        } else {
          playSound('wrong');
          triggerHaptic('warning');
        }
      },
      () => {
        setIsRecording(false);
      },
      (errorMsg) => {
        setIsRecording(false);
        setSpokenText(errorMsg || 'Chưa nhận rõ giọng. Hãy thử nói lại to và gần micro hơn nhé.');
      },
      (interim) => {
        setSpokenText(interim);
      },
      'en-US',
      currentItem.english
    );
  };

  return (
    <div className="space-y-4 pb-24 max-w-lg mx-auto">
      
      {/* Header with Viko Mascot & Back button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {onBack && (
            <button
              onClick={() => {
                playSound('click');
                onBack();
              }}
              className="p-2 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition-all cursor-pointer shadow-2xs active:scale-95 mr-1"
              title="Quay lại Trung tâm Luyện tập"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
          )}
          <VikoMascot size="sm" mood="cheering" />
          <div>
            <h2 className="text-base font-black text-slate-900 leading-tight">
              VikoVoice • Luyện Phát Âm B2B
            </h2>
            <p className="text-[11px] text-slate-500 font-medium">
              Chấm điểm AI ngữ điệu & độ chuẩn xác ngoại giao
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick Voice Selector */}
          <div>
            <button
              onClick={() => {
                playSound('click');
                setIsVoicePickerOpen(true);
              }}
              className="px-2 py-1 rounded-xl bg-sky-50 border border-sky-200 text-[#0070D1] hover:bg-sky-100 text-xs font-bold flex items-center space-x-1 cursor-pointer active:translate-y-0.5"
              title="Đổi giọng đọc AI (Mỹ Nam, Anh Nam Chuẩn, Mỹ Nữ)"
            >
              <span>{VOICE_OPTIONS.find(v => v.id === currentVoiceId)?.flag || '🇺🇸'}</span>
              <Settings2 className="w-3.5 h-3.5" />
            </button>

            <VoiceSelectorModal
              isOpen={isVoicePickerOpen}
              onClose={() => setIsVoicePickerOpen(false)}
              onSelectVoice={(vId) => setCurrentVoiceId(vId)}
            />
          </div>

          <span className="text-xs font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      {/* Main Pronunciation Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-300 p-5 text-center space-y-4 shadow-md relative overflow-hidden">
        
        {/* Title & Level */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-black text-[#0070D1] uppercase tracking-wide">
            {currentItem.title}
          </span>
          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
            Cấp độ {currentItem.level}
          </span>
        </div>

        {/* Interactive Sentence & Word Explorer */}
        <div className="py-1">
          <InteractiveSentenceViewer
            sentence={currentItem.english}
            translation={currentItem.vietnamese}
          />
        </div>

        {/* Audio Listen Buttons (Mọi nút bấm đều có lý do) */}
        <div className="flex items-center justify-center space-x-2.5">
          <button
            onClick={() => handlePlayNative(false)}
            className="px-4 py-2 rounded-xl btn-duo-primary text-white text-xs font-black flex items-center space-x-1.5 cursor-pointer shadow-xs"
            title="Lý do: Nghe phát âm mẫu ở tốc độ chuẩn"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe giọng mẫu</span>
          </button>

          <button
            onClick={() => handlePlayNative(true)}
            className="px-3.5 py-2 rounded-xl btn-duo-white text-slate-700 text-xs font-black flex items-center space-x-1 cursor-pointer"
            title="Lý do: Giảm tốc độ còn 75% để nghe rõ từng âm tiết"
          >
            <span>🐢 Đọc chậm</span>
          </button>
        </div>

        {/* Live Circular Mic Button with Real-Time Acoustic Ripple Waves */}
        <div className="py-2 space-y-2 text-center">
          <LiveCircularMicButton
            isRecording={isRecording}
            onClick={handleStartSpeaking}
            size="lg"
          />

          {isRecording ? (
            <div className="space-y-2 animate-in fade-in">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Micro đang nghe... Hãy đọc to câu ở trên!</span>
              </div>
              {spokenText && !spokenText.includes('Đang lắng nghe') && (
                <div className="p-2.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs font-bold text-[#0070D1] animate-in fade-in max-w-sm mx-auto">
                  <span className="text-[10px] text-slate-500 uppercase block font-black mb-0.5">AI đang nghe bạn đọc:</span>
                  <p className="font-semibold text-slate-900">"{spokenText}"</p>
                </div>
              )}
              <p className="text-[11px] text-slate-500 font-medium">
                ⚡ Đọc xong dừng lại 1-2 giây hệ thống sẽ <strong>tự động chấm điểm</strong> (hoặc bấm lại micro để chốt bài)
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {!isRecording && score === null && spokenText && !spokenText.includes('Đang lắng nghe') && (
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 animate-in fade-in max-w-sm mx-auto">
                  <span>{spokenText}</span>
                </div>
              )}
              <p className="text-xs text-slate-500 font-bold text-center">
                Bấm micro và đọc to câu trên (Nói xong tự động chấm điểm)
              </p>

              {/* Quiet Office Pass Button */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    triggerHaptic('light');
                    setScore(null);
                    setSpokenText('');
                    if (currentIndex + 1 < VOICE_PRACTICE_ITEMS.length) {
                      setCurrentIndex((prev) => prev + 1);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold border border-slate-300 transition-all cursor-pointer shadow-2xs active:scale-95"
                  title="Dành cho nhân viên đang ở văn phòng, nơi đông người cần giữ im lặng (Không cộng/trừ điểm)"
                >
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span>🤫 Tôi không tiện nói lúc này (Luyện nói sau)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Score Feedback & Color-Coded Phonetic Diagnostics */}
        {score !== null && (
          <div className="p-3.5 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-3 text-left animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-800">Độ chuẩn xác giọng đọc:</span>
              <span className={`text-base font-black px-3 py-0.5 rounded-full ${
                score >= 75
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : score >= 50
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}>
                {score}%
              </span>
            </div>

            {/* Color-Coded Word Diagnostic Flow */}
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                Phân tích khẩu hình từng từ:
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-black">
                {currentItem.english.split(' ').map((word, wIdx) => {
                  const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
                  const spokenLower = spokenText.toLowerCase();
                  const isMatch = spokenLower.includes(cleanWord);
                  const hasEndingSound = /[s|t|d|ed|ce|sh|ch]$/i.test(cleanWord);

                  return (
                    <span 
                      key={wIdx}
                      className={`px-1.5 py-0.5 rounded ${
                        isMatch
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200 underline decoration-rose-400 decoration-wavy'
                      }`}
                      title={!isMatch && hasEndingSound ? 'Chú ý bật rõ âm đuôi' : undefined}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-slate-600 font-semibold italic">
              AI ghi nhận: "{spokenText}"
            </p>

            {/* Ending Sound & Intonation Reminder */}
            <div className="p-2 rounded-xl bg-sky-100/70 border border-sky-300/80 text-[11px] text-sky-950 space-y-1">
              <div className="font-bold flex items-center gap-1 text-[#0070D1]">
                <span>↘</span>
                <span>Ngữ điệu ngoại giao: Hạ giọng dứt khoát ở cuối câu khẳng định.</span>
              </div>
              <div className="text-slate-600 font-medium">
                💡 Lưu ý âm đuôi: Bật rõ các âm cuối (/s/, /t/, /d/, /z/) để không bị nuốt âm khi nói với đối tác Mỹ/Châu Âu.
              </div>
            </div>

            {score >= 75 ? (
              <p className="text-xs text-emerald-700 font-black">
                🎉 Rất tốt! Giọng đọc tròn vành rõ chữ, tự tin như đại sứ Vikoda! (+30 XP • +10 💎)
              </p>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-amber-800 font-bold">
                  💡 Lời khuyên: {currentItem.proTip}
                </p>
                <div className="pt-1.5 border-t border-amber-200/80">
                  <button
                    type="button"
                    onClick={() => {
                      playSound('click');
                      triggerHaptic('light');
                      setScore(null);
                      setSpokenText('');
                      if (currentIndex + 1 < VOICE_PRACTICE_ITEMS.length) {
                        setCurrentIndex((prev) => prev + 1);
                      }
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-98"
                  >
                    <VolumeX className="w-4 h-4 text-slate-600" />
                    <span>Lưu câu này để luyện lại sau & Sang câu tiếp</span>
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-0.5">
                    Không trừ điểm/tim. Bạn có thể luyện lại bất cứ khi nào thuận tiện.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pro Tip */}
        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start space-x-2">
          <span className="text-base shrink-0">✨</span>
          <div>
            <strong className="text-amber-950 font-black">Mẹo ngoại giao: </strong>
            <span>{currentItem.proTip}</span>
          </div>
        </div>

      </div>

      {/* Navigation Controls: Câu trước & Câu tiếp theo */}
      <div className="flex items-center justify-between pt-1">
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
            setScore(null);
            setSpokenText('');
            stopSpeech();
          }}
          className="flex items-center space-x-1 px-4 py-2.5 rounded-xl btn-duo-white text-xs font-black disabled:opacity-40 cursor-pointer"
          title="Lý do: Xem lại câu luyện tập trước"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <button
          disabled={currentIndex === items.length - 1}
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
            setScore(null);
            setSpokenText('');
            stopSpeech();
          }}
          className="flex items-center space-x-1 px-4 py-2.5 rounded-xl btn-duo-primary text-white text-xs font-black disabled:opacity-40 cursor-pointer shadow-xs"
          title="Lý do: Chuyển sang câu luyện tập tiếp theo"
        >
          <span>Câu tiếp theo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

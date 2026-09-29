import { PathNode, VikodaPitchCard, SpeakingChallenge, BuyerQAItem, EmailTemplate } from '../types';

export const DUOLINGO_PATH_NODES: PathNode[] = [
  {
    id: 'node-1',
    order: 1,
    title: 'Pitch 30 Giây',
    shortDesc: 'Giới thiệu Vikoda & Ngọc Trong Đá',
    category: 'pitch',
    icon: '💎',
    xpReward: 50,
    gemReward: 15,
    color: 'cyan',
  },
  {
    id: 'node-2',
    order: 2,
    title: '5 Bí Mật pH 9.0',
    shortDesc: '5 yếu tố khẳng định "Nước Tốt"',
    category: 'speaking',
    icon: '💧',
    xpReward: 75,
    gemReward: 20,
    color: 'blue',
  },
  {
    id: 'node-3',
    order: 3,
    title: 'Tour Mỏ Đảnh Thạnh',
    shortDesc: 'Sâu 220m, 72°C & Vành đai 35ha',
    category: 'factory',
    icon: '🏞️',
    xpReward: 90,
    gemReward: 25,
    color: 'emerald',
  },
  {
    id: 'node-4',
    order: 4,
    title: 'Hạ Gục Đối Tác Khó Tính',
    shortDesc: 'Trả lời câu hỏi hóc búa của khách Tây',
    category: 'qa',
    icon: '🎯',
    xpReward: 100,
    gemReward: 30,
    color: 'purple',
  },
  {
    id: 'node-5',
    order: 5,
    title: 'Chốt Deal Xuất Khẩu',
    shortDesc: 'Thương thảo HORECA 5 sao & Global',
    category: 'export',
    icon: '🏆',
    xpReward: 120,
    gemReward: 40,
    color: 'cyan',
  },
];

export const VIKODA_PITCH_CARDS: VikodaPitchCard[] = [
  {
    id: 'pitch-30s',
    topic: 'Giới thiệu 30s với Khách Quốc Tế',
    englishHeadline: 'Pure as Jade in Stone — Since 1957',
    vietnameseHeadline: 'Nguyên bản như Ngọc Trong Đá từ năm 1957',
    bulletPoints: [
      {
        en: 'Vikoda is Vietnam’s premier natural alkaline mineral water with a rare natural pH of 9.0.',
        vi: 'Vikoda là nước khoáng kiềm thiên nhiên hàng đầu Việt Nam sở hữu độ pH 9.0 tự nhiên quý hiếm.',
        keyword: 'natural alkaline mineral water',
        phonetics: '/ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər/'
      },
      {
        en: 'Discovered in 1957, it is bottled directly at the Danh Thanh source at 72°C from a depth of 220 meters.',
        vi: 'Được phát hiện năm 1957, đóng chai trực tiếp tại nguồn mỏ Đảnh Thạnh ở 72°C từ độ sâu 220m.',
        keyword: 'bottled directly at the source',
        phonetics: '/ˈbɒtld dəˈrɛktli æt ðə sɔːrs/'
      },
      {
        en: 'No chemical treatment, no artificial electrolysis — truly 100% natural gift from Mother Earth.',
        vi: 'Không can thiệp hóa chất, không điện phân nhân tạo — tinh hoa nguyên bản 100% từ đất mẹ.',
        keyword: 'no artificial electrolysis',
        phonetics: '/noʊ ˌɑːrtɪˈfɪʃl ɪˌlɛkˈtrɒləsɪs/'
      }
    ],
    proTip: 'Dùng từ "Bottled directly at the source" để gây ấn tượng mạnh với người mua sành sỏi từ Châu Âu và Nhật Bản.',
    audioText: 'Vikoda is Vietnam’s premier natural alkaline mineral water with a rare natural pH of 9.0. Discovered in 1957, it is bottled directly at the Danh Thanh source at 72 degrees Celsius from a depth of 220 meters.'
  },
  {
    id: '5-goods',
    topic: '5 Yếu Tố Khẳng Định "Nước Tốt"',
    englishHeadline: 'The 5 Pillars of Superior Alkaline Water',
    vietnameseHeadline: '5 Tiêu chuẩn vàng tạo nên vị thế nước khoáng Vikoda',
    bulletPoints: [
      {
        en: '1. Pristine Source: 35-hectare protected green ecological sanctuary around the spring.',
        vi: '1. Nguồn nước sạch: Vành đai xanh sinh thái 35 hecta bảo vệ nghiêm ngặt.',
        keyword: 'ecological sanctuary',
        phonetics: '/ˌiːkəˈlɒdʒɪkl ˈsæŋktʃuəri/'
      },
      {
        en: '2. Perfect Natural pH 9.0: Neutralizes excess stomach acid and improves gut health.',
        vi: '2. pH 9.0 tự nhiên hoàn hảo: Trung hòa axit dạ dày dư thừa, bảo vệ hệ tiêu hóa.',
        keyword: 'neutralizes excess acid',
        phonetics: '/ˈnjuːtrəlaɪzɪz ɪkˈsɛs ˈæsɪd/'
      },
      {
        en: '3. Essential Micro-minerals: Rich in natural Metasilicic acid (H2SiO3) for skin and joint vitality.',
        vi: '3. Giàu vi khoáng quý: Chứa axit Metasilicic (H2SiO3) giúp da sáng khỏe, khớp linh hoạt.',
        keyword: 'Metasilicic acid (H2SiO3)',
        phonetics: '/ˌmɛtəsɪˈlɪsɪk ˈæsɪd/'
      },
      {
        en: '4. High Antioxidant Potential (ORP = -100mV): Protects cells against free radicals.',
        vi: '4. Khả năng chống oxy hóa cao (ORP = -100mV): Bảo vệ tế bào khỏi gốc tự do.',
        keyword: 'Antioxidant potential (ORP)',
        phonetics: '/ˌæntiˈɒksɪdənt pəˈtɛnʃl/'
      },
      {
        en: '5. Micro-clusters: Tiny water molecules absorb instantly into cells for deep hydration.',
        vi: '5. Phân tử siêu nhỏ: Thẩm thấu tức thì qua màng tế bào, dẫn truyền dưỡng chất tối ưu.',
        keyword: 'micro-clusters',
        phonetics: '/ˈmaɪkroʊ ˈklʌstərz/'
      }
    ],
    proTip: 'Khi giải thích cho đối tác, nhấn mạnh chỉ số ORP âm (-100mV) chứng minh năng lực chống oxy hóa vượt trội so với nước đóng chai thông thường.',
    audioText: 'Vikoda offers five unique pillars: a pristine 35-hectare sanctuary, natural pH 9.0, rich metasilicic acid, high antioxidant power with minus 100 millivolts ORP, and micro-cluster hydration.'
  },
  {
    id: 'horeca-glass',
    topic: 'Thuyết Phục GM Khách Sạn & Resort 5 Sao',
    englishHeadline: 'The Luxury Glass Bottle Collection for Fine Dining',
    vietnameseHeadline: 'Định vị chai thủy tinh sang trọng cho bàn tiệc Michelin',
    bulletPoints: [
      {
        en: 'Bespoke embossed glass packaging designed exclusively for 5-star hospitality and Michelin banquets.',
        vi: 'Thiết kế chai thủy tinh dập nổi tinh tế, chuyên biệt cho khách sạn 5 sao và yến tiệc Michelin.',
        keyword: 'bespoke embossed glass',
        phonetics: '/bɪˈspoʊk ɪmˈbɒst glæs/'
      },
      {
        en: 'Delivers French-grade mineral prestige at 60% less cost compared to imported European labels.',
        vi: 'Mang lại sự sang trọng chuẩn mực Châu Âu với chi phí tiết kiệm 60% so với nhãn hàng nhập khẩu.',
        keyword: 'European-grade prestige',
        phonetics: '/ˌjʊərəˈpiːən greɪd prɛˈstiːʒ/'
      },
      {
        en: 'Sweet, light, non-intrusive minerality perfectly complements fine wines and gourmet culinary dishes.',
        vi: 'Vị khoáng thanh tao, ngọt dịu không át mùi vị của rượu vang hảo hạng và món ăn ẩm thực cao cấp.',
        keyword: 'wine pairing synergy',
        phonetics: '/waɪn ˈpɛərɪŋ ˈsɪnərdʒi/'
      }
    ],
    proTip: 'Đánh vào bài toán tối ưu chi phí nguyên vật liệu (Beverage Cost) kết hợp nâng tầm trải nghiệm thực khách tại nhà hàng fine-dining.',
    audioText: 'Our bespoke luxury glass bottle is crafted for 5-star hospitality, delivering European mineral elegance while cutting dining costs by sixty percent.'
  },
  {
    id: 'objection-buster',
    topic: 'Bẻ Khóa Định Kiến: Sỏi Thận & Axit Dạ Dày',
    englishHeadline: 'The Bio-Chemistry of Fully Dissolved Ionic Minerals',
    vietnameseHeadline: 'Khoa học về vi khoáng hòa tan dạng ion & an toàn tuyệt đối',
    bulletPoints: [
      {
        en: 'Vikoda’s minerals exist in fully dissolved ionic form, metabolizing cleanly without precipitation into stones.',
        vi: 'Khoáng chất Vikoda tồn tại ở dạng ion hòa tan hoàn toàn, hấp thu trọn vẹn và không lắng cặn tạo sỏi.',
        keyword: 'fully dissolved ionic form',
        phonetics: '/ˈfʊli dɪˈzɒlvd aɪˈɒnɪk fɔːrm/'
      },
      {
        en: 'A balanced TDS of 250 to 350 mg/L makes it safe and gentle for all age groups, everyday, year-round.',
        vi: 'Chỉ số TDS cân bằng 250 - 350 mg/L giúp nước an toàn, thanh nhẹ cho mọi lứa tuổi uống mỗi ngày quanh năm.',
        keyword: 'balanced TDS 250-350',
        phonetics: '/ˈbælənst tiː-diː-ɛs/'
      },
      {
        en: 'Does not neutralize natural gastric digestive juices, but gently cushions against excess esophageal reflux.',
        vi: 'Không trung hòa dịch vị tiêu hóa tự nhiên, mà làm dịu axit trào ngược thực quản hiệu quả.',
        keyword: 'cushions against acid reflux',
        phonetics: '/ˈkʊʃnz əˈɡɛnst ˈæsɪd ˈriːflʌks/'
      }
    ],
    proTip: 'Khi đối tác hỏi về sỏi thận, lập tức đưa ra chỉ số TDS 250-350 mg/L và khẳng định khoáng chất ở dạng "fully dissolved ions".',
    audioText: 'Vikoda contains fully dissolved ionic minerals with a balanced TDS of 250 to 350 mg per liter, ensuring complete safety with zero risk of kidney stones.'
  },
  {
    id: 'nature-vs-kangen',
    topic: 'Phân Biệt Kiềm Tự Nhiên vs Kiềm Điện Phân',
    englishHeadline: 'Mineral-Bonded Alkalinity vs. Artificial Electrolysis',
    vietnameseHeadline: 'Độ kiềm khoáng hóa bền vững 3 năm vs kiềm tan biến sau 48h',
    bulletPoints: [
      {
        en: 'Machine-ionized water relies on artificial titanium electrolysis and degrades back to neutral in 48 hours.',
        vi: 'Nước kiềm máy tạo ra từ điện phân nhân tạo titan và bị mất kiềm hoàn toàn chỉ sau 48 giờ.',
        keyword: 'artificial titanium electrolysis',
        phonetics: '/ˌɑːrtɪˈfɪʃl taɪˈteɪniəm ɪˌlɛkˈtrɒləsɪs/'
      },
      {
        en: 'Vikoda’s pH 9.0 is naturally mineral-bonded by subterranean bicarbonates, remaining stable for 3 full years.',
        vi: 'Độ pH 9.0 của Vikoda liên kết tự nhiên bởi Bicarbonate lòng đất, duy trì bền bỉ suốt 3 năm đóng chai.',
        keyword: 'subterranean bicarbonates',
        phonetics: '/ˌsʌbtəˈreɪniən baɪˈkɑːrbənəts/'
      },
      {
        en: 'Zero chemical additives or synthetic salts — 100% bottled directly as gifted by untouched nature.',
        vi: 'Không phụ gia hóa chất, không muối nhân tạo — 100% đóng chai nguyên bản từ lòng đất mẹ.',
        keyword: 'untouched nature',
        phonetics: '/ʌnˈtʌtʃt ˈneɪtʃər/'
      }
    ],
    proTip: 'Đây là vũ khí đàm phán quan trọng nhất khi đối tác so sánh Vikoda với máy Kangen hoặc nước kiềm bù khoáng nhân tạo.',
    audioText: 'Unlike machine-ionized water that loses alkalinity within 48 hours, Vikoda’s natural pH 9.0 is mineral-bonded by nature and remains stable for three full years.'
  },
  {
    id: 'export-incoterms',
    topic: 'Thương Thảo Hợp Đồng Xuất Khẩu B2B',
    englishHeadline: 'Global Shipping Terms, Incoterms & Container Loading',
    vietnameseHeadline: 'Điều kiện giao hàng FOB/CIF, MOQ và đóng kiện hàng hải',
    bulletPoints: [
      {
        en: 'Competitive FOB terms at Cat Lai and Hai Phong ports, or CIF quotes to all major global destination hubs.',
        vi: 'Giá FOB cạnh tranh tại cảng Cát Lái và Hải Phòng, hoặc báo giá CIF tới mọi cảng biển quốc tế.',
        keyword: 'FOB and CIF trade terms',
        phonetics: '/ɛf-oʊ-biː ænd siː-aɪ-ɛf treɪd tɜːrmz/'
      },
      {
        en: 'Flexible MOQ starting from one 20ft container with seaworthy shrink-wrapped wooden pallets.',
        vi: 'MOQ linh hoạt từ một container 20ft, quấn màng co tiêu chuẩn hàng hải và đóng pallet gỗ xuất khẩu.',
        keyword: 'seaworthy shrink-wrapped pallets',
        phonetics: '/ˈsiːwɜːrði ˈʃrɪŋk-ræpt ˈpæləts/'
      },
      {
        en: 'Secured via Irrevocable Letter of Credit (L/C) at sight or T/T with full SGS inspection dossier.',
        vi: 'Bảo chứng bằng L/C không hủy ngang trả ngay hoặc T/T kèm biên bản giám định độc lập SGS.',
        keyword: 'irrevocable L/C at sight',
        phonetics: '/ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt/'
      }
    ],
    proTip: 'Nhắc đến kiểm định SGS và đóng kiện pallet chuyên nghiệp để chứng minh sự am hiểu sâu sắc về chuỗi cung ứng quốc tế.',
    audioText: 'We offer competitive FOB Cat Lai and CIF quotes, flexible 20-foot container MOQ, and secure payment terms via Irrevocable Letter of Credit at sight.'
  },
  {
    id: 'esg-circular',
    topic: 'Đòn Bẩy ESG & Phát Triển Bền Vững',
    englishHeadline: 'Net-Zero Carbon Reduction & Circular Economy',
    vietnameseHeadline: 'Cắt giảm 85% phát thải Scope 3 & quy trình thu hồi vỏ chai',
    bulletPoints: [
      {
        en: 'Reduces maritime transportation carbon emissions by 85% compared to flying water across continents.',
        vi: 'Giảm 85% phát thải carbon vận chuyển hàng hải so với việc nhập khẩu nước đóng chai từ Châu Âu.',
        keyword: '85% carbon reduction',
        phonetics: '/ˈeɪti-faɪv pərˈsɛnt ˈkɑːrbən rɪˈdʌkʃn/'
      },
      {
        en: 'Comprehensive circular bottle-return and sterilization network assisting partners with Net-Zero audits.',
        vi: 'Mạng lưới thu hồi vỏ chai và khử trùng tuần hoàn hỗ trợ đối tác đạt kiểm toán Net-Zero.',
        keyword: 'circular bottle-return network',
        phonetics: '/ˈsɜːrkjələr ˈbɒtl rɪˈtɜːrn ˈnɛtwɜːrk/'
      },
      {
        en: 'Strict stewardship of the 35-hectare biosphere ensures permanent zero-industrial contamination.',
        vi: 'Sứ mệnh quản lý vành đai sinh thái 35 hecta đảm bảo vĩnh viễn không ô nhiễm công nghiệp.',
        keyword: 'biosphere stewardship',
        phonetics: '/ˈbaɪoʊsfɪər ˈstjuːərdʃɪp/'
      }
    ],
    proTip: 'ESG hiện là tiêu chuẩn bắt buộc của các tập đoàn khách sạn quốc tế; nêu rõ chỉ số giảm phát thải để giành chiến thắng trong hồ sơ thầu.',
    audioText: 'Vikoda cuts maritime freight carbon emissions by 85 percent and provides a closed-loop circular bottle return program for green hospitality.'
  },
  {
    id: 'tour-danhthanh',
    topic: 'Lời Mời Tham Quan Tour Mỏ Đảnh Thạnh VIP',
    englishHeadline: 'VIP Spring Inspection Tour at Khanh Hoa Sanctuary',
    vietnameseHeadline: 'Mời đối tác thực địa mục sở thị nguồn khoáng nóng 72°C',
    bulletPoints: [
      {
        en: 'Warmly invite partner executives to witness the untouched 72°C subterranean geyser firsthand.',
        vi: 'Trân trọng kính mời ban lãnh đạo đối tác tận mắt chứng kiến mạch nước khoáng nóng 72°C phun trào.',
        keyword: '72°C subterranean geyser',
        phonetics: '/ˌsʌbtəˈreɪniən ˈɡaɪzər/'
      },
      {
        en: 'Inspect our fully automated German bottling facility and state-of-the-art microbiology testing laboratory.',
        vi: 'Khảo sát dây chuyền đóng chai tự động công nghệ Đức và phòng xét nghiệm vi sinh tối tân.',
        keyword: 'microbiology laboratory',
        phonetics: '/ˌmaɪkroʊbaɪˈɒlədʒi ləˈbɒrətri/'
      },
      {
        en: 'Experience tasting mineral water straight from the spring alongside Khanh Hoa coastal hospitality.',
        vi: 'Trải nghiệm thưởng thức nước khoáng kiềm ấm nóng ngay tại vòi cùng lòng hiếu khách miền biển Khánh Hòa.',
        keyword: 'coastal hospitality',
        phonetics: '/ˈkoʊstl ˌhɒspɪˈtæləti/'
      }
    ],
    proTip: 'Mời khách sang thăm mỏ là đòn chốt sales uy lực nhất: 95% khách hàng sau khi uống nước khoáng tại vòi 72°C đều ký hợp đồng phân phối.',
    audioText: 'We warmly invite your executive team to inspect our pristine 72-degree Danh Thanh spring in Khanh Hoa and experience our modern automated bottling facility.'
  }
];

export const SPEAKING_CHALLENGES: SpeakingChallenge[] = [
  {
    id: 'sp-1',
    title: 'Giới thiệu slogan độc bản',
    category: 'brand_pitch',
    englishSentence: 'Vikoda is pure and original, just like a gem nestled inside rocks.',
    phonetics: '/vɪˈkoʊdə ɪz pjʊr ænd əˈrɪdʒənl, dʒʌst laɪk ə dʒɛm ˈnɛsld ɪnˈsaɪd rɒks/',
    vietnameseMeaning: 'Vikoda nguyên bản và thuần khiết, tựa như viên ngọc ẩn mình trong đá.',
    keyWords: ['pure', 'original', 'gem', 'nestled'],
    culturalNote: 'Nhấn mạnh từ "gem" và "original" với giọng tự hào, thể hiện giá trị độc bản của thiên nhiên Khánh Hòa.'
  },
  {
    id: 'sp-2',
    title: 'Khẳng định độ kiềm tự nhiên',
    category: 'buyer_objection',
    englishSentence: 'Our pH 9.0 is completely natural from Mother Earth, without any artificial electrolysis.',
    phonetics: '/aʊər piː-eɪtʃ naɪn ɪz kəmˈpliːtli ˈnætʃrəl frəm ˈmʌðər ɜːrθ, wɪˈðaʊt ˈɛni ˌɑːrtɪˈfɪʃl ɪˌlɛkˈtrɒləsɪs/',
    vietnameseMeaning: 'Độ pH 9.0 của chúng tôi hoàn toàn tự nhiên từ đất mẹ, không qua bất kỳ quá trình điện phân nhân tạo nào.',
    keyWords: ['completely natural', 'artificial electrolysis'],
    culturalNote: 'Điểm khác biệt chí mạng với nước kiềm máy Kangen là Vikoda không dùng hóa chất hay màng điện phân.'
  },
  {
    id: 'sp-3',
    title: 'Chứng nhận đóng chai tại nguồn',
    category: 'factory_tour',
    englishSentence: 'We bottle directly at the Danh Thanh spring at seventy-two degrees Celsius.',
    phonetics: '/wiː ˈbɒtl dəˈrɛktli æt ðə dɑːɲ tʰaɪɲ sprɪŋ æt ˈsɛvnti tuː dɪˈgriːz ˈsɛlsiəs/',
    vietnameseMeaning: 'Chúng tôi đóng chai trực tiếp tại mỏ khoáng Đảnh Thạnh ở nhiệt độ tại vòi 72 độ C.',
    keyWords: ['bottle directly', 'spring', 'degrees Celsius'],
    culturalNote: 'Đóng chai tại nguồn là quy định khắt khe nhất của tiêu chuẩn Codex quốc tế cho nước khoáng thiên nhiên.'
  },
  {
    id: 'sp-4',
    title: 'Giải thích vị ngọt thanh tự nhiên',
    category: 'buyer_objection',
    englishSentence: 'The natural metasilicic acid gives Vikoda a gentle, refreshing sweetness.',
    phonetics: '/ðə ˈnætʃrəl ˌmɛtəsɪˈlɪsɪk ˈæsɪd gɪvz vɪˈkoʊdə ə ˈdʒɛntl, rɪˈfrɛʃɪŋ ˈswiːtnəs/',
    vietnameseMeaning: 'Axit metasilicic tự nhiên mang lại cho Vikoda vị ngọt dịu thanh mát đặc trưng.',
    keyWords: ['metasilicic acid', 'refreshing sweetness'],
    culturalNote: 'Nhiều khách nước ngoài ngạc nhiên vì sao nước khoáng lại ngọt thanh - hãy chỉ rõ do khoáng chất Silic quý.'
  },
  {
    id: 'sp-5',
    title: 'Chào hàng khách sạn 5 sao',
    category: 'meeting',
    englishSentence: 'Our luxury glass bottles are proudly served at Sheraton, JW Marriott, and Vinpearl.',
    phonetics: '/aʊər ˈlʌkʃəri glæs ˈbɒtlz ɑːr ˈpraʊdli sɜːrvd æt ˈʃɛrətən, dʒeɪ-dʌbljuː ˈmæriət, ænd vɪnˈpɜːrl/',
    vietnameseMeaning: 'Chai thủy tinh cao cấp của chúng tôi tự hào phục vụ tại Sheraton, JW Marriott và Vinpearl.',
    keyWords: ['luxury glass bottles', 'proudly served'],
    culturalNote: 'Dẫn chứng các chuỗi 5 sao quốc tế là bảo chứng uy tín (social proof) mạnh mẽ nhất khi thương thảo.'
  }
];

export const BUYER_QA_LIST: BuyerQAItem[] = [
  {
    id: 'qa-1',
    clientType: 'Foreign Importer',
    foreignQuestionEn: 'How does Vikoda differ from artificial ionized alkaline water produced by machines?',
    foreignQuestionVi: 'Nước Vikoda khác gì so với nước kiềm nhân tạo điện phân bằng máy (như Kangen)?',
    expertAnswerEn: 'Artificial alkaline water is just tap or purified water with forced electrical ionization or added baking soda; its pH drops rapidly within hours of opening. In contrast, Vikoda absorbs alkaline minerals naturally over hundreds of years through deep rock strata, maintaining a stable pH 9.0 for up to three years in storage and seven days after opening!',
    expertAnswerVi: 'Nước kiềm nhân tạo chỉ là nước máy lọc qua điện phân hoặc pha baking soda, độ pH tụt rất nhanh sau vài giờ mở nắp. Ngược lại, Vikoda hấp thụ khoáng chất kiềm tự nhiên qua hàng trăm năm lọc qua các tầng địa chất, giữ vững pH 9.0 ổn định tới 3 năm và 7 ngày sau khi mở nắp!',
    highlightedTerms: [
      { term: 'Artificial ionization', meaning: 'Điện phân nhân tạo' },
      { term: 'Deep rock strata', meaning: 'Các tầng địa chất sâu' },
      { term: 'Stable pH over 3 years', meaning: 'Độ pH bền vững suốt 3 năm' }
    ],
    audioText: 'Artificial alkaline water loses its pH quickly. Vikoda absorbs minerals naturally through deep rock layers, keeping a rock-solid pH 9.0 for up to three years.'
  },
  {
    id: 'qa-2',
    clientType: 'Japanese Buyer',
    foreignQuestionEn: 'Does drinking mineral-rich water daily cause kidney stones?',
    foreignQuestionVi: 'Uống nước giàu khoáng chất hàng ngày có gây sỏi thận không?',
    expertAnswerEn: 'Absolutely not! In certified natural mineral water, calcium and magnesium salts are completely soluble at all temperatures. In fact, magnesium enhances kidney excretion, helping flush out excess salts. Furthermore, our Total Dissolved Solids are strictly balanced between 100 and 400 mg/L, making it perfectly safe for whole-family daily consumption.',
    expertAnswerVi: 'Hoàn toàn không! Các muối canxi và magie trong nước khoáng đạt chuẩn đều hòa tan hoàn toàn ở mọi nhiệt độ. Thậm chí magie còn tăng bài tiết thận, giúp đào thải canxi dư thừa. Hàm lượng TDS của Vikoda cân bằng hoàn hảo từ 100-400 mg/lít, rất an toàn để cả gia đình uống hàng ngày thay nước lọc.',
    highlightedTerms: [
      { term: 'Completely soluble', meaning: 'Hòa tan hoàn toàn' },
      { term: 'Total Dissolved Solids (TDS)', meaning: 'Tổng lượng vi khoáng hòa tan' },
      { term: 'Kidney excretion', meaning: 'Bài tiết qua đường thận' }
    ],
    audioText: 'No, calcium and magnesium in Vikoda are fully dissolved and safe. Balanced TDS of 100 to 400 milligrams per liter is ideal for daily drinking.'
  },
  {
    id: 'qa-3',
    clientType: '5-Star Hotel GM',
    foreignQuestionEn: 'Why should my luxury resort switch from imported European water to Vikoda?',
    foreignQuestionVi: 'Tại sao resort 5 sao của tôi nên chuyển từ nước khoáng nhập khẩu Châu Âu sang Vikoda?',
    expertAnswerEn: 'Vikoda offers the exact same world-class natural alkaline pH 9.0 and heritage since 1957, but with our local source in Khanh Hoa, your carbon footprint is reduced by 85%. Our minimalist 430ml luxury glass bottle elevates your guest tables while celebrating authentic Vietnamese natural heritage at half the import logistics cost!',
    expertAnswerVi: 'Vikoda sở hữu chất lượng pH 9.0 tự nhiên chuẩn quốc tế và di sản từ năm 1957, nhưng nhờ nguồn ngay tại Khánh Hòa, resort giảm được 85% dấu chân carbon. Chai thủy tinh 430ml tinh tế vừa nâng tầm bàn tiệc vừa tôn vinh tinh hoa đất Việt với chi phí logistics chỉ bằng một nửa!',
    highlightedTerms: [
      { term: 'Reduced carbon footprint', meaning: 'Giảm lượng khí thải carbon vận chuyển' },
      { term: 'Luxury glass bottle', meaning: 'Chai thủy tinh sang trọng' },
      { term: 'Authentic heritage', meaning: 'Di sản thiên nhiên nguyên bản' }
    ],
    audioText: 'Vikoda delivers world-class pH 9.0 natural water with 85% lower carbon footprint, packaged in gorgeous glass bottles that delight luxury guests.'
  }
];

export const VIKODA_EXPORT_TEMPLATES: EmailTemplate[] = [
  {
    id: 'export-intro',
    title: 'Thư Giới Thiệu Chào Hàng Xuất Khẩu (Export Proposal)',
    category: 'export',
    vietnameseContext: 'Gửi đối tác nhập khẩu đồ uống quốc tế (Nhật Bản, Hàn Quốc, Mỹ, UAE, Singapore) để mở quan hệ đại lý phân phối.',
    formality: 'formal',
    subject: 'Partnership Inquiry: Premium Natural Alkaline Mineral Water (pH 9.0) from Vietnam',
    body: `Dear [PartnerName],

I hope this email finds you well.

My name is [YourName], representing Khanh Hoa Mineral Water JSC (Vikoda) — a proud member of F.I.T Group, established since 1957 in Vietnam.

I am reaching out to explore potential distribution synergy with [PartnerCompany] for our signature product: Vikoda Natural Alkaline Mineral Water pH 9.0.

Why Vikoda Stands Out in the Global Functional Beverage Market:
• 100% Naturally Alkaline (pH 9.0): Untouched by chemical additives or artificial electrolysis.
• Bottled Directly at the Source: Sourced from the historic Danh Thanh hot spring at a depth of 220 meters and 72°C.
• Certified International Standards: Fully certified with FDA, ISO 9001:2015, and HACCP, currently exported to Hong Kong, Japan, and Greater China.
• Premium Recyclable Packaging: Luxury 430ml glass bottles and sleek 330ml aluminum cans.

We would be delighted to send our product catalogue, lab analysis reports, and product samples to your office in [Country/City].

Could we arrange a brief 15-minute introductory video call next week?

Thank you for your valuable consideration.

Best regards,

[YourName]
International Business Development Department
Khanh Hoa Mineral Water JSC (Vikoda - F.I.T Group)
Website: www.vikoda.com.vn | Tel: [YourPhone]`,
    variables: ['PartnerName', 'YourName', 'PartnerCompany', 'Country/City', 'YourPhone'],
    keyPhrases: [
      { phrase: 'distribution synergy', explanation: 'Sự cộng hưởng hợp tác phân phối' },
      { phrase: 'functional beverage market', explanation: 'Thị trường đồ uống chức năng tốt cho sức khỏe' },
      { phrase: 'Untouched by chemical additives', explanation: 'Tuyệt đối không can thiệp hóa chất' }
    ],
    proTip: 'Đính kèm chứng nhận FDA và HACCP là cách nhanh nhất để vượt qua bộ phận kiểm duyệt của các nhà phân phối quốc tế.'
  },
  {
    id: 'horeca-pitch',
    title: 'Chào Hàng Chai Thủy Tinh Cho Khách Sạn & Resort 5 Sao (HORECA)',
    category: 'horeca',
    vietnameseContext: 'Gửi Tổng Giám Đốc hoặc Giám đốc F&B của các khách sạn cao cấp (Marriott, InterContinental, Hyatt, Vinpearl...)',
    formality: 'formal',
    subject: 'Sustainable Luxury Dining Solution: Vikoda Glass Collection for [HotelName]',
    body: `Dear [DirectorName],

Greetings from Vikoda!

As [HotelName] continues to set the benchmark for luxury hospitality and sustainable guest experiences, I would like to introduce our exclusive Vikoda Glass Collection (430ml Still & Sparkling).

Key Benefits for [HotelName]'s F&B Operations:
1. Eco-Luxury Alignment: 100% reusable glass design supporting your zero-single-use-plastic commitment.
2. Distinctive Natural pH 9.0: A delicate, slightly sweet finish naturally derived from metasilicic acid, perfectly pairing with fine-dining gastronomy.
3. Cost & Supply Reliability: Sourced domestically from the Danh Thanh spring in Khanh Hoa, eliminating international shipping delays and hefty tariffs.

We would love to provide a complimentary tasting crate for your culinary and beverage team to evaluate.

May I deliver sample cases to [HotelName] this Thursday?

Warm regards,

[YourName]
Key Account Manager - HORECA Division
Vikoda Mineral Water JSC`,
    variables: ['DirectorName', 'HotelName', 'YourName'],
    keyPhrases: [
      { phrase: 'zero-single-use-plastic commitment', explanation: 'Cam kết loại bỏ rác thải nhựa dùng một lần của khách sạn 5 sao' },
      { phrase: 'fine-dining gastronomy', explanation: 'Nghệ thuật ẩm thực cao cấp' },
      { phrase: 'complimentary tasting crate', explanation: 'Thùng mẫu thử miễn phí dành riêng cho Bếp trưởng / F&B' }
    ],
    proTip: 'Các khách sạn 5 sao đều có chính sách phát triển bền vững (ESG). Nhấn mạnh chai thủy tinh giảm rác thải nhựa sẽ giúp bạn chốt hợp đồng nhanh hơn nhiều.'
  }
];

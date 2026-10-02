import { UnitLesson } from '../curriculumData';

export const LEVEL_C1C2_UNITS: UnitLesson[] = [
  {
    id: 'unit-33',
    unitNumber: 33,
    title: 'Hợp Đồng Xuất Khẩu & Incoterms 2020: FOB vs CIF',
    subtitle: 'Nắm vững điểm chuyển giao rủi ro, cước tàu biển và chi phí bảo hiểm hàng hải',
    level: 'C1-C2',
    icon: '🚢',
    color: 'emerald',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u33-e1',
        type: 'choice',
        promptEn: 'Under FOB terms (Incoterms 2020 Cat Lai Port), where does seller risk officially transfer to the buyer?',
        promptVi: 'Theo điều kiện FOB Cảng Cát Lái (Incoterms 2020), rủi ro chuyển giao từ người bán sang người mua tại thời điểm nào?',
        englishSentence: 'The risk officially transfers when the goods are safely loaded on board the vessel at the port of origin.',
        audioText: 'The risk officially transfers when the goods are safely loaded on board the vessel at the port of origin.',
        options: [
          'The risk officially transfers when the goods are safely loaded on board the vessel at the port of origin.',
          'When the goods arrive at the destination warehouse in Tokyo.',
          'When the buyer sells the bottles to retail consumers.'
        ],
        correctIndex: 0,
        explanation: 'FOB (Free on Board): Người bán chịu chi phí và rủi ro cho đến khi hàng đã xếp an toàn lên boong tàu tại cảng bốc hàng. Sau thời điểm này, cước biển và rủi ro trên biển thuộc về người mua.',
        whyWrong: 'Hiểu sai điểm chuyển giao rủi ro sẽ dẫn đến tranh chấp pháp lý hàng hải rất tốn kém.',
        crucialNote: '"Port of origin" = Cảng bốc hàng / Cảng đi.',
        memoryHook: 'FOB = Rủi ro chuyển giao ngay khi hàng qua lan can/boong tàu.'
      },
      {
        id: 'u33-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence clarifying maritime insurance obligations under CIF terms:',
        promptVi: 'Sắp xếp câu: "Theo điều kiện CIF, người bán phải mua bảo hiểm hàng hải tối thiểu cho lô hàng."',
        englishSentence: 'Under CIF terms, the seller must procure marine cargo insurance for the shipment.',
        audioText: 'Under CIF terms, the seller must procure marine cargo insurance for the shipment.',
        phonetics: '/ˈʌndər siː-aɪ-ɛf tɜːrmz, ðə ˈsɛlər mʌst prəˈkjʊər məˈriːn ˈkɑːrɡoʊ ɪnˈʃʊərəns fɔːr ðə ˈʃɪpmənt/',
        wordPool: ['Under', 'CIF', 'terms,', 'the', 'seller', 'must', 'procure', 'marine', 'cargo', 'insurance', 'for', 'the', 'shipment.'],
        explanation: 'CIF (Cost, Insurance and Freight): Người bán chịu cước vận tải biển và có nghĩa vụ mua bảo hiểm hàng hải tối thiểu loại C (Institute Cargo Clauses C) cho người mua.',
        whyWrong: 'Tuy người bán mua bảo hiểm, nhưng rủi ro trên biển vẫn thuộc về người mua từ thời điểm hàng lên tàu.',
        crucialNote: '"Procure insurance" = Thu xếp mua bảo hiểm.',
        memoryHook: 'CIF = Giá hàng + Bảo hiểm + Cước vận tải biển.'
      },
      {
        id: 'u33-e3',
        type: 'speak',
        promptEn: 'Practice stating container loading specifications for a 40-foot ocean container:',
        promptVi: 'Luyện nói câu quy định quy cách đóng hàng cho container đường biển 40 feet:',
        englishSentence: 'One 40-foot container accommodates twenty-two standard wooden pallets securely shrink-wrapped.',
        audioText: 'One forty-foot container accommodates twenty-two standard wooden pallets securely shrink-wrapped.',
        phonetics: '/wʌn ˈfɔːrti-fʊt kənˈteɪnər əˈkɒmədeɪts ˈtwɛnti-tuː ˈstændərd ˈwʊdn ˈpæləts sɪˈkjʊərli ʃrɪŋk-ræpt/',
        explanation: 'Một container 40 feet xếp được 22 pallet gỗ tiêu chuẩn đã quấn màng co và chèn túi khí chống xô lệch trong hành trình biển dài ngày.',
        whyWrong: 'Tối ưu hóa dung tích chứa hàng để giảm chi phí vận tải trên từng chai nước.',
        crucialNote: '"Shrink-wrapped" = Quấn màng co công nghiệp chống ẩm.',
        memoryHook: '40ft container = 22 pallets tiêu chuẩn quốc tế.'
      },
      {
        id: 'u33-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the Tokyo buyer specifying their designated discharge port:',
        promptVi: 'Nghe đối tác Tokyo chỉ định cảng dỡ hàng đến tại Nhật Bản:',
        englishSentence: 'Please quote your best CIF price for delivery to Yokohama port by next month.',
        audioText: 'Please quote your best CIF price for delivery to Yokohama port by next month.',
        options: [
          'Giao hàng đến Cảng Yokohama, Nhật Bản (Yokohama port)',
          'Giao hàng đến Cảng Cát Lái',
          'Giao hàng tại kho nhà máy Diên Khánh'
        ],
        correctIndex: 0,
        explanation: '"Delivery to Yokohama port" = Giao hàng đến cảng Yokohama. Người mua ở Tokyo nhưng chọn cảng nước sâu Yokohama để bốc dỡ container.',
        whyWrong: 'Đọc kỹ cảng đích để tính cước tàu (Ocean freight) và phí phụ phí (BAF, CAF, THC) chính xác.',
        crucialNote: '"Discharge port" = Cảng dỡ hàng.',
        memoryHook: 'Yokohama port = Cảng biển Yokohama Nhật Bản.'
      }
    ]
  },
  {
    id: 'unit-34',
    unitNumber: 34,
    title: 'Thanh Toán Quốc Tế: Thư Tín Dụng Irrevocable L/C',
    subtitle: 'Nắm vững quy trình phát hành L/C at sight, bộ chứng từ ngân hàng B/L, C/O',
    level: 'C1-C2',
    icon: '🏦',
    color: 'cyan',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u34-e1',
        type: 'choice',
        promptEn: 'Which international payment method offers the highest security against buyer default in container export?',
        promptVi: 'Phương thức thanh toán quốc tế nào đảm bảo tính an toàn tối thượng chống rủi ro khách bùng tiền?',
        englishSentence: 'An Irrevocable Letter of Credit at sight confirmed by a first-class international bank.',
        audioText: 'An Irrevocable Letter of Credit at sight confirmed by a first-class international bank.',
        options: [
          'An Irrevocable Letter of Credit at sight confirmed by a first-class international bank.',
          'Verbal promise to send cash through an unregistered messenger.',
          'Open account with 180 days credit without any bank guarantee.'
        ],
        correctIndex: 0,
        explanation: 'Thư tín dụng không thể hủy ngang trả ngay (Irrevocable L/C at sight) là cam kết thanh toán độc lập của ngân hàng phát hành; chỉ cần người bán xuất trình bộ chứng từ hợp lệ là ngân hàng bắt buộc phải trả tiền.',
        whyWrong: 'Xuất khẩu container giá trị hàng tỷ đồng tuyệt đối không dùng trả sau không bảo lãnh.',
        crucialNote: '"Confirmed L/C" = L/C có ngân hàng quốc tế uy tín đứng ra bảo lãnh thanh toán.',
        memoryHook: 'Irrevocable L/C = Thư tín dụng không thể hủy ngang.'
      },
      {
        id: 'u34-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence listing essential shipping documents required under the Letter of Credit:',
        promptVi: 'Sắp xếp câu: "Bộ chứng từ thanh toán bao gồm Vận đơn sạch, Hóa đơn thương mại và Chứng nhận xuất xứ."',
        englishSentence: 'Required documents include Clean On Board Bill of Lading, Commercial Invoice, and Certificate of Origin.',
        audioText: 'Required documents include Clean On Board Bill of Lading, Commercial Invoice, and Certificate of Origin.',
        phonetics: '/rɪˈkwaɪərd ˈdɒkjumənts ɪnˈkluːd kliːn ɒn bɔːrd bɪl əv ˈleɪdɪŋ, kəˈmɜːrʃl ˈɪnvɔɪs, ænd sərˈtɪfɪkət əv ˈɒrɪdʒɪn/',
        wordPool: ['Required', 'documents', 'include', 'Clean', 'On', 'Board', 'Bill', 'of', 'Lading,', 'Commercial', 'Invoice,', 'and', 'Certificate', 'of', 'Origin.'],
        explanation: 'Bộ ba chứng từ xuất khẩu sống còn: B/L (Vận đơn đường biển sạch), Commercial Invoice (Hóa đơn thương mại) và C/O (Chứng nhận xuất xứ hàng hóa Việt Nam).',
        whyWrong: 'Chỉ cần một lỗi chính tả nhỏ trên chứng từ ngân hàng cũng có thể từ chối thanh toán (Discrepancy).',
        crucialNote: 'Kiểm tra khớp từng dấu chấm, dấu phẩy giữa L/C và bộ chứng từ.',
        memoryHook: 'B/L + Invoice + C/O = Bộ ba chứng từ xuất khẩu quyền lực.'
      },
      {
        id: 'u34-e3',
        type: 'speak',
        promptEn: 'Practice demanding that the buyer open the L/C at least 15 days before shipment:',
        promptVi: 'Luyện nói câu yêu cầu đối tác phải mở L/C trước ngày xuất hàng ít nhất 15 ngày:',
        englishSentence: 'The operative L/C must be opened at least fifteen days prior to vessel departure.',
        audioText: 'The operative L/C must be opened at least fifteen days prior to vessel departure.',
        phonetics: '/ði ˈɒpərətɪv ɛl-siː mʌst biː ˈoʊpənd æt liːst ˈfɪfˈtiːn deɪz ˈpraɪər tuː ˈvɛsl dɪˈpɑːrtʃər/',
        explanation: '"Operative L/C" = L/C có hiệu lực hoạt động. Cần 15 ngày để ngân hàng bên bán kiểm tra các điều khoản trước khi đưa hàng ra cảng.',
        whyWrong: 'Không bao giờ đóng chai xuất khẩu khi chưa nhận được L/C hợp lệ trong tay.',
        crucialNote: '"Prior to" = Trước thời điểm.',
        memoryHook: '15 days prior = Mở L/C trước 15 ngày.'
      },
      {
        id: 'u34-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the trade banker confirming document examination and payment release:',
        promptVi: 'Nghe chuyên viên thanh toán quốc tế xác nhận bộ chứng từ hợp lệ và giải ngân tiền:',
        englishSentence: 'The shipping documents are compliant with UCP 600 rules and payment is released today.',
        audioText: 'The shipping documents are compliant with UCP six hundred rules and payment is released today.',
        options: [
          'Bộ chứng từ tuân thủ hoàn hảo quy tắc UCP 600 và tiền thanh toán đã được giải ngân hôm nay',
          'Bộ chứng từ có lỗi nghiêm trọng và bị từ chối thanh toán',
          'Ngân hàng bị phong tỏa tài khoản'
        ],
        correctIndex: 0,
        explanation: 'UCP 600 là Quy tắc và Thực hành Thống nhất về Tín dụng Chứng từ của Phòng Thương mại Quốc tế (ICC).',
        whyWrong: 'Thành công rực rỡ của giao dịch xuất khẩu container khoáng kiềm Vikoda đi thị trường nước ngoài.',
        crucialNote: '"Compliant with UCP 600" = Tuân thủ tập quán thương mại quốc tế.',
        memoryHook: 'Payment released = Giải ngân tiền xuất khẩu thành công.'
      }
    ]
  },
  {
    id: 'unit-35',
    unitNumber: 35,
    title: 'Tiêu Chuẩn FDA Hoa Kỳ, ISO & Kiểm Định SGS',
    subtitle: 'Vượt qua các hàng rào kỹ thuật khắt khe để vào thị trường Mỹ & Châu Âu',
    level: 'C1-C2',
    icon: '🏅',
    color: 'blue',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u35-e1',
        type: 'choice',
        promptEn: 'What is mandatory for Vikoda prior to commercial export into the United States market?',
        promptVi: 'Thủ tục pháp lý bắt buộc đối với Vikoda trước khi xuất khẩu thương mại vào thị trường Hoa Kỳ là gì?',
        englishSentence: 'Official US Food and Drug Administration (FDA) facility registration and product listing.',
        audioText: 'Official US Food and Drug Administration facility registration and product listing.',
        options: [
          'Official US Food and Drug Administration (FDA) facility registration and product listing.',
          'Only a personal recommendation from a local store owner.',
          'Bottled water is completely exempt from all US federal regulations.'
        ],
        correctIndex: 0,
        explanation: 'Đạo luật An ninh Sinh học và Đạo luật Hiện đại hóa An toàn Thực phẩm (FSMA) của Hoa Kỳ bắt buộc mọi cơ sở sản xuất nước uống phải có mã số đăng ký FDA hợp lệ.',
        whyWrong: 'Hàng không có mã số FDA sẽ bị hải quan Mỹ tịch thu ngay tại cảng Los Angeles hoặc Long Beach.',
        crucialNote: 'Vikoda đã hoàn tất đăng ký FDA chính thức cho các dòng sản phẩm xuất khẩu.',
        memoryHook: 'US FDA = Giấy thông hành vàng vào thị trường Mỹ.'
      },
      {
        id: 'u35-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence highlighting third-party laboratory panel testing by Eurofins and SGS:',
        promptVi: 'Sắp xếp câu: "Mẫu nước được kiểm nghiệm độc lập bởi các tập đoàn giám định hàng đầu thế giới Eurofins và SGS."',
        englishSentence: 'Water samples undergo independent third-party testing by Eurofins and SGS laboratories.',
        audioText: 'Water samples undergo independent third-party testing by Eurofins and SGS laboratories.',
        phonetics: '/ˈwɔːtər ˈsɑːmplz ˌʌndərˈɡoʊ ˌɪndɪˈpɛndənt θɜːrd-ˈpɑːrti ˈtɛstɪŋ baɪ ˈjʊəroʊfɪnz ænd ɛs-dʒiː-ɛs ˈlæbrətɔːriz/',
        wordPool: ['Water', 'samples', 'undergo', 'independent', 'third-party', 'testing', 'by', 'Eurofins', 'and', 'SGS', 'laboratories.'],
        explanation: 'SGS (Thụy Sĩ) và Eurofins (Pháp) là hai tổ chức kiểm nghiệm độc lập uy tín bậc nhất toàn cầu.',
        whyWrong: 'Báo cáo kiểm nghiệm của SGS và Eurofins được chấp nhận tại hơn 180 quốc gia mà không cần kiểm tra lại.',
        crucialNote: '"Third-party testing" = Kiểm định độc lập bên thứ ba.',
        memoryHook: 'SGS & Eurofins = Bằng chứng chất lượng được thế giới thừa nhận.'
      },
      {
        id: 'u35-e3',
        type: 'speak',
        promptEn: 'Deliver the compliance statement regarding ISO 22000 and HACCP food safety audit systems:',
        promptVi: 'Luyện nói câu khẳng định hệ thống kiểm soát chất lượng đạt chuẩn an toàn thực phẩm toàn cầu:',
        englishSentence: 'Our plant operates under certified ISO 22000 and HACCP comprehensive quality assurance frameworks.',
        audioText: 'Our plant operates under certified ISO twenty-two thousand and HACCP comprehensive quality assurance frameworks.',
        phonetics: '/aʊər plɑːnt ˈɒpəreɪts ˈʌndər ˈsɜːrtɪfaɪd ˈaɪsoʊ ˈtwɛnti-tuː ˈθaʊznd ænd ˈhæsæp ˌkɒmprɪˈhɛnsɪv ˈkwɒləti əˈʃʊərəns ˈfreɪmwɜːrks/',
        explanation: 'ISO 22000 tích hợp tiêu chuẩn HACCP phân tích mối nguy tới từng điểm kiểm soát tới hạn (CCP) trên toàn bộ dây chuyền.',
        whyWrong: 'Khẳng định năng lực quản trị nhà xưởng đạt chuẩn các tập đoàn đa quốc gia hàng đầu.',
        crucialNote: '"Quality assurance frameworks" = Hệ khung bảo đảm chất lượng toàn diện.',
        memoryHook: 'ISO 22000 & HACCP = Tiêu chuẩn quản trị an toàn thực phẩm tối cao.'
      },
      {
        id: 'u35-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the FDA audit officer declaring the inspection result of the bottling facility:',
        promptVi: 'Nghe thanh tra an toàn thực phẩm quốc tế công bố kết quả đánh giá nhà máy:',
        englishSentence: 'The bottling facility meets all federal purity requirements with zero sanitary violations.',
        audioText: 'The bottling facility meets all federal purity requirements with zero sanitary violations.',
        options: [
          'Nhà máy chiết rót đáp ứng mọi tiêu chuẩn độ tinh khiết liên bang, không vi phạm bất kỳ lỗi an toàn nào (Zero violations)',
          'Nhà máy bị đóng cửa ngay lập tức',
          'Nhà máy không đạt chuẩn xuất khẩu'
        ],
        correctIndex: 0,
        explanation: '"Zero sanitary violations" = Không có bất kỳ vi phạm vệ sinh nào. Đánh giá tuyệt đối từ các chuyên gia giám định quốc tế.',
        whyWrong: 'Tự hào mở toang cánh cửa xuất khẩu đến các thị trường phát triển khó tính nhất.',
        crucialNote: '"Federal purity requirements" = Các yêu cầu nghiêm ngặt của chính phủ liên bang.',
        memoryHook: 'Zero violations = Vượt qua kiểm tra tuyệt đối 100%.'
      }
    ]
  },
  {
    id: 'unit-36',
    unitNumber: 36,
    title: 'Vận Tải Biển: Vessel Delay, Demurrage & Detention',
    subtitle: 'Kỹ năng xử lý sự cố hàng hải, biến động cước và thương lượng ngày miễn phí lưu bãi',
    level: 'C1-C2',
    icon: '⚡',
    color: 'purple',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u36-e1',
        type: 'choice',
        promptEn: 'In export shipping contracts, what does the maritime term "Demurrage" officially refer to?',
        promptVi: 'Trong hợp đồng vận tải biển xuất khẩu, thuật ngữ "Demurrage" chính thức đề cập đến chi phí gì?',
        englishSentence: 'Fee payable for container retention beyond the agreed free time inside the port terminal.',
        audioText: 'Fee payable for container retention beyond the agreed free time inside the port terminal.',
        options: [
          'Fee payable for container retention beyond the agreed free time inside the port terminal.',
          'Commission paid to the sales agent for finding clients.',
          'Cost of printing bilingual labels on export bottles.'
        ],
        correctIndex: 0,
        explanation: 'Demurrage (Phí lưu bãi/lưu container tại cảng) phát sinh khi người nhập khẩu không nhận hàng và giải phóng container ra khỏi bãi cảng trong thời gian miễn phí cho phép.',
        whyWrong: 'Phân biệt: Demurrage = Phí lưu container bên trong cảng; Detention = Phí giữ vỏ container bên ngoài cảng chưa trả lại hãng tàu.',
        crucialNote: 'Khi đàm phán hợp đồng, luôn xin hãng tàu 14 đến 21 ngày "Combined Demurrage & Detention" miễn phí.',
        memoryHook: 'Demurrage = Phí lưu container tại cảng quá ngày miễn phí.'
      },
      {
        id: 'u36-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence negotiating 14 free days of combined demurrage and detention:',
        promptVi: 'Sắp xếp câu: "Chúng tôi yêu cầu 14 ngày miễn phí lưu bãi và lưu vỏ container tại cảng đích."',
        englishSentence: 'We request fourteen free days of combined demurrage and detention at destination port.',
        audioText: 'We request fourteen free days of combined demurrage and detention at destination port.',
        phonetics: '/wiː rɪˈkwɛst ˌfɔːrˈtiːn friː deɪz əv kəmˈbaɪnd dɪˈmʌrɪdʒ ænd dɪˈtɛnʃn æt ˌdɛstɪˈneɪʃn pɔːrt/',
        wordPool: ['We', 'request', 'fourteen', 'free', 'days', 'of', 'combined', 'demurrage', 'and', 'detention', 'at', 'destination', 'port.'],
        explanation: '14 ngày miễn phí (14 free days) giúp đối tác nhập khẩu có đủ thời gian làm thủ tục thông quan hải quan mà không bị phạt tiền lưu bãi.',
        whyWrong: 'Hành động hỗ trợ đắc lực thể hiện sự thấu hiểu sâu sắc nghiệp vụ ngoại thương của người xuất khẩu Vikoda.',
        crucialNote: '"Combined Demurrage & Detention" = Thời gian miễn phí gộp chung cả trong bãi và ngoài kho.',
        memoryHook: '14 free days = 14 ngày miễn phí lưu container.'
      },
      {
        id: 'u36-e3',
        type: 'speak',
        promptEn: 'Deliver the diplomatic email notification when ocean vessel delay occurs due to severe weather:',
        promptVi: 'Luyện nói câu thông báo ngoại giao khi tàu biển bị hoãn do thời tiết bão biển bất khả kháng:',
        englishSentence: 'Due to severe typhoon conditions, vessel departure is rescheduled by three days, and we are closely monitoring the ETA.',
        audioText: 'Due to severe typhoon conditions, vessel departure is rescheduled by three days, and we are closely monitoring the ETA.',
        phonetics: '/djuː tuː sɪˈvɪər taɪˈfuːn kənˈdɪʃnz, ˈvɛsl dɪˈpɑːrtʃər ɪz ˌriːˈskɛdʒuːld baɪ θriː deɪz, ænd wiː ɑːr ˈkloʊsli ˈmɒnɪtərɪŋ ði iː-tiː-eɪ/',
        explanation: 'Quy tắc 3 bước xử lý sự cố hàng hải: 1. Thông báo trước lý do bất khả kháng (force majeure) -> 2. Cập nhật lịch tàu mới -> 3. Chủ động theo dõi sát sao ngày đến dự kiến (ETA - Estimated Time of Arrival).',
        whyWrong: 'Khách hàng quốc tế đánh giá cao sự minh bạch và đồng hành tháo gỡ khó khăn.',
        crucialNote: 'ETA = Estimated Time of Arrival (Thời gian dự kiến tàu cập cảng đích).',
        memoryHook: 'Rescheduled by 3 days = Dời lịch tàu 3 ngày vì bão.'
      },
      {
        id: 'u36-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the overseas logistics coordinator confirming customs clearance completion:',
        promptVi: 'Nghe điều phối viên logistics nước ngoài xác nhận đã hoàn tất thông quan hải quan suôn sẻ:',
        englishSentence: 'Customs clearance is successfully completed with zero inspection hurdles.',
        audioText: 'Customs clearance is successfully completed with zero inspection hurdles.',
        options: [
          'Thủ tục thông quan hải quan đã hoàn tất thành công, không gặp bất kỳ vướng mắc kiểm tra nào',
          'Lô hàng bị hải quan tiêu hủy',
          'Lô hàng bị giữ lại 6 tháng'
        ],
        correctIndex: 0,
        explanation: '"Customs clearance completed" = Thông quan thành công. Toàn bộ container nước khoáng kiềm Vikoda sẵn sàng nhập kho tại thị trường đích.',
        whyWrong: 'Bộ chứng từ C/O và phiếu kiểm nghiệm mẫu nước chính xác 100% giúp hải quan phê duyệt thông quan siêu tốc.',
        crucialNote: '"Hurdles" = Rào cản, vướng mắc.',
        memoryHook: 'Customs cleared = Hàng đã thông quan thuận lợi.'
      }
    ]
  },
  {
    id: 'unit-37',
    unitNumber: 37,
    title: 'Đàm Phán Nhà Phân Phối Độc Quyền Quốc Tế',
    subtitle: 'Nghệ thuật ràng buộc hạn mức doanh số (Quotas) và bảo vệ lãnh thổ phân phối',
    level: 'C1-C2',
    icon: '🌐',
    color: 'amber',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u37-e1',
        type: 'choice',
        promptEn: 'When an international distributor demands country-wide exclusivity, what is the mandatory condition to enforce?',
        promptVi: 'Khi nhà phân phối quốc tế đòi quyền độc quyền toàn quốc, điều kiện tiên quyết bắt buộc phải ràng buộc là gì?',
        englishSentence: 'Exclusivity is strictly contingent upon meeting quarterly minimum purchase volume quotas.',
        audioText: 'Exclusivity is strictly contingent upon meeting quarterly minimum purchase volume quotas.',
        options: [
          'Exclusivity is strictly contingent upon meeting quarterly minimum purchase volume quotas.',
          'Grant exclusivity unconditionally for free forever.',
          'Refuse to talk and immediately cancel the contract.'
        ],
        correctIndex: 0,
        explanation: 'Quyền độc quyền thương mại (Commercial Exclusivity) luôn phải gắn liền với chỉ tiêu sản lượng tối thiểu mỗi quý (Quarterly purchase quotas). Nếu đối tác không đạt chỉ tiêu trong 2 quý liên tiếp, công ty có quyền đơn phương chấm dứt quyền độc quyền.',
        whyWrong: 'Bảo vệ thương hiệu Vikoda khỏi bẫy "độc quyền trên giấy" nhưng không chịu đầu tư bán hàng.',
        crucialNote: '"Contingent upon" = Ràng buộc phụ thuộc vào điều kiện.',
        memoryHook: 'Quotas for exclusivity = Độc quyền phải đi kèm hạn ngạch sản lượng.'
      },
      {
        id: 'u37-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence stipulating co-marketing expenditure sharing between manufacturer and distributor:',
        promptVi: 'Sắp xếp câu: "Hai bên cùng chia sẻ ngân sách tiếp thị thương hiệu trên cơ sở đóng góp 50/50."',
        englishSentence: 'Both parties agree to co-fund marketing campaigns on a fifty-fifty basis.',
        audioText: 'Both parties agree to co-fund marketing campaigns on a fifty-fifty basis.',
        phonetics: '/boʊθ ˈpɑːrtiz əˈɡriː tuː koʊ-fʌnd ˈmɑːrkɪtɪŋ kæmˈpeɪnz ɒn ə ˈfɪfti-ˈfɪfti ˈbeɪsɪs/',
        wordPool: ['Both', 'parties', 'agree', 'to', 'co-fund', 'marketing', 'campaigns', 'on', 'a', 'fifty-fifty', 'basis.'],
        explanation: '"Co-fund on a 50/50 basis" = Cùng góp vốn 50/50 cho các chiến dịch quảng bá địa phương (bảng hiệu, tài trợ sự kiện, quảng cáo truyền thông).',
        whyWrong: 'Gắn kết trách nhiệm và quyết tâm của đối tác trong việc phát triển thị trường mới.',
        crucialNote: '"Co-fund" = Đồng tài trợ ngân sách.',
        memoryHook: '50/50 co-funding = Đồng tài trợ tiếp thị 50/50 Win-Win.'
      },
      {
        id: 'u37-e3',
        type: 'speak',
        promptEn: 'Deliver the strategic contract clause regarding anti-parallel importing protection:',
        promptVi: 'Luyện nói câu cam kết bảo vệ đại lý độc quyền chống hiện tượng bán lấn tuyến / nhập khẩu song song:',
        englishSentence: 'We legally prohibit parallel importing to protect your exclusive territorial rights.',
        audioText: 'We legally prohibit parallel importing to protect your exclusive territorial rights.',
        phonetics: '/wiː ˈliːɡəli prəˈhɪbɪt ˈpærəlɛl ˈɪmpɔːrtɪŋ tuː prəˈtɛkt jʊər ɪkˈskluːsɪv ˌtɛrɪˈtɔːriəl raɪts/',
        explanation: '"Parallel importing" = Nhập khẩu song song / buôn lậu lấn tuyến từ các nước khác bán phá giá. Vikoda cam kết quản lý mã vạch và số lô nghiêm ngặt để bảo vệ thị trường cho nhà phân phối độc quyền.',
        whyWrong: 'Tạo niềm tin sắt đá để đối tác an tâm đầu tư hàng triệu đô la xây dựng hệ thống phân phối.',
        crucialNote: '"Territorial rights" = Quyền lợi lãnh thổ độc quyền.',
        memoryHook: 'Prohibit parallel import = Chống nhập khẩu lậu song song.'
      },
      {
        id: 'u37-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the foreign CEO confirming the inaugural annual commitment of 50 containers:',
        promptVi: 'Nghe Tổng Giám Đốc đối tác xác nhận cam kết nhập khẩu 50 container cho năm đầu tiên:',
        englishSentence: 'We formally commit to importing fifty 40-foot containers during the inaugural contract year.',
        audioText: 'We formally commit to importing fifty forty-foot containers during the inaugural contract year.',
        options: [
          'Chính thức cam kết nhập khẩu 50 container 40 feet trong năm hợp đồng đầu tiên (Fifty containers)',
          'Từ chối cam kết bất kỳ số lượng nào',
          'Chỉ nhập thử 1 thùng mẫu'
        ],
        correctIndex: 0,
        explanation: '50 container 40ft (tương đương hơn 1.2 triệu chai nước khoáng Vikoda) là hợp đồng phân phối quốc tế mang tính bước ngoặt lịch sử.',
        whyWrong: 'Minh chứng cho sức hút và vị thế của nước khoáng kiềm thiên nhiên Đảnh Thạnh trên bản đồ thế giới.',
        crucialNote: '"Inaugural contract year" = Năm hợp đồng đầu tiên.',
        memoryHook: '50 containers = Cam kết 50 container năm đầu tiên.'
      }
    ]
  },
  {
    id: 'unit-38',
    unitNumber: 38,
    title: 'Thuyết Trình Pitch Deck & Báo Cáo OGSM C-Suite',
    subtitle: 'Objectives - Goals - Strategies - Measurements & Khát vọng vươn tầm toàn cầu',
    level: 'C1-C2',
    icon: '👑',
    color: 'emerald',
    xpReward: 70,
    gemReward: 25,
    exercises: [
      {
        id: 'u38-e1',
        type: 'choice',
        promptEn: 'What does the OGSM strategic management methodology stand for at FIT & Vikoda?',
        promptVi: 'Mô hình quản trị chiến lược OGSM tại tập đoàn FIT & Vikoda là viết tắt của 4 từ nào?',
        englishSentence: 'Objectives - Goals - Strategies - Measurements.',
        audioText: 'Objectives - Goals - Strategies - Measurements.',
        options: [
          'Objectives - Goals - Strategies - Measurements.',
          'Organization - Growth - Sales - Marketing.',
          'Operation - General - Standard - Method.'
        ],
        correctIndex: 0,
        explanation: 'OGSM: Objectives (Mục tiêu tối thượng định tính), Goals (Chỉ tiêu định lượng tài chính), Strategies (Chiến lược đột phá cạnh tranh), Measurements (Thước đo chỉ số hành động hàng tháng).',
        whyWrong: 'Khung quản trị chiến lược được các tập đoàn hàng đầu thế giới (P&G, Unilever) áp dụng để thống nhất tư duy từ Hội đồng Quản trị đến từng nhân viên thực thi.',
        crucialNote: 'Biến tầm nhìn triệu đô thành các bước hành động cụ thể mỗi ngày.',
        memoryHook: 'OGSM = Mục tiêu - Chỉ tiêu - Chiến lược - Thước đo.'
      },
      {
        id: 'u38-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence defining the supreme corporate mission of Vikoda at executive board level:',
        promptVi: 'Sắp xếp câu: "Sứ mệnh tối thượng của chúng tôi là bảo vệ sức khỏe cộng đồng bằng nguồn khoáng kiềm nguyên bản."',
        englishSentence: 'Our supreme mission is safeguarding public wellness through pristine natural alkaline mineral water.',
        audioText: 'Our supreme mission is safeguarding public wellness through pristine natural alkaline mineral water.',
        phonetics: '/aʊər suːˈpriːm ˈmɪʃn ɪz ˈseɪfɡɑːrdɪŋ ˈpʌblɪk ˈwɛlnəs θruː ˈprɪstiːn ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər/',
        wordPool: ['Our', 'supreme', 'mission', 'is', 'safeguarding', 'public', 'wellness', 'through', 'pristine', 'natural', 'alkaline', 'mineral', 'water.'],
        explanation: 'Sứ mệnh cao quý vượt lên trên lợi nhuận thuần túy: Phụng sự sức khỏe giống nòi và nâng tầm nguồn tài nguyên ngọc trời Đảnh Thạnh của non sông Việt Nam.',
        whyWrong: 'Tôn chỉ xuyên suốt của Ban Lãnh Đạo tập đoàn FIT và công ty Vikoda.',
        crucialNote: '"Safeguarding public wellness" = Bảo vệ sức khỏe cộng đồng.',
        memoryHook: 'Supreme mission = Sứ mệnh tối thượng cao cả.'
      },
      {
        id: 'u38-e3',
        type: 'speak',
        promptEn: 'Deliver the founding philosophy of Jade in Stone (Ngọc Trong Đá) before the Board of Directors:',
        promptVi: 'Luyện nói câu triết lý "Ngọc Trong Đá" truyền cảm hứng của Ban Lãnh Đạo Vikoda:',
        englishSentence: 'Jade is fundamentally stone that endures rigorous grinding to unleash its brilliant glow.',
        audioText: 'Jade is fundamentally stone that endures rigorous grinding to unleash its brilliant glow.',
        phonetics: '/dʒeɪd ɪz ˌfʌndəˈmɛntli stoʊn ðæt ɪnˈdjʊərz ˈrɪɡərəs ˈɡraɪndɪŋ tuː ʌnˈliːʃ ɪts ˈbrɪljənt ɡloʊ/',
        explanation: 'Trang 61 Cẩm nang Quản trị: Con người Vikoda cũng vậy, trải qua khó khăn thử thách trên thương trường để bộc lộ khí chất và tài năng phi thường.',
        whyWrong: 'Triết lý nhân văn sâu sắc: Mọi cá nhân đều là một viên ngọc thô nếu chịu rèn giũa kỷ luật.',
        crucialNote: '"Rigorous grinding" = Rèn giũa nghiêm cẩn để bật sáng hào quang.',
        memoryHook: 'Rigorous grinding = Mài giũa khắc nghiệt bật sáng ngọc quý.'
      },
      {
        id: 'u38-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the Chairman delivering the closing keynote and certifying your Global Ambassador status:',
        promptVi: 'Nghe Chủ tịch tập đoàn phát biểu bế mạc và công nhận danh hiệu Đại Sứ Toàn Cầu Vikoda:',
        englishSentence: 'Congratulations on mastering all five levels! You are now an official Global Ambassador of Vikoda.',
        audioText: 'Congratulations on mastering all five levels! You are now an official Global Ambassador of Vikoda.',
        options: [
          'Chúc mừng bạn đã chinh phục xuất sắc cả 5 cấp độ! Bạn chính thức là Đại Sứ Toàn Cầu của Vikoda (Global Ambassador)',
          'Bạn bị truất quyền học tập',
          'Bạn phải học lại từ đầu'
        ],
        correctIndex: 0,
        explanation: 'Chúc mừng bạn! Bạn đã hoàn thành xuất sắc toàn bộ Kim tự tháp 5 Cấp độ của Vikoda English Pro: Từ Giao tiếp văn phòng cơ bản $\to$ Tiếng Anh phòng ban $\to$ Đại sứ mỏ Đảnh Thạnh $\to$ Đàm phán B2B HORECA $\to$ Xuất khẩu toàn cầu & Quản trị C-Suite!',
        whyWrong: 'Một hành trình nỗ lực bền bỉ và đầy tự hào của một chiến binh Vikoda đích thực.',
        crucialNote: 'Nhận Chứng nhận Đại Sứ Toàn Cầu và tự tin tỏa sáng trên mọi thương trường quốc tế!',
        memoryHook: 'GLOBAL AMBASSADOR = ĐẠI SỨ TOÀN CẦU VIKODA ĐẲNG CẤP QUỐC TẾ!'
      }
    ]
  }
];

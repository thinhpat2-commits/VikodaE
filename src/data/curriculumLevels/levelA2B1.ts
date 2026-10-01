import { UnitLesson } from '../curriculumData';

export const LEVEL_A2B1_UNITS: UnitLesson[] = [
  {
    id: 'unit-11',
    unitNumber: 11,
    title: 'Lịch Sử Mỏ Đảnh Thạnh 1957 & Bác Sĩ H. Fronte',
    subtitle: 'Nguồn khoáng nguyên bản phát hiện năm 1957 & ghi chép Đại Nam Nhất Thống Chí',
    level: 'A2-B1',
    icon: '📜',
    color: 'emerald',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u11-e1',
        type: 'word_order',
        promptEn: 'State the historic discovery of Danh Thanh spring by French geologists in 1957:',
        promptVi: 'Sắp xếp câu: "Mỏ nước khoáng Đảnh Thạnh được các nhà địa chất Pháp kiểm định năm 1957."',
        englishSentence: 'Danh Thanh mineral spring was tested by French geologists in 1957.',
        audioText: 'Danh Thanh mineral spring was tested by French geologists in 1957.',
        phonetics: '/dɑːɲ tʰaɲ ˈmɪnərəl sprɪŋ wɒz ˈtɛstɪd baɪ frɛntʃ dʒiˈɒlədʒɪsts ɪn ˈnaɪnˈtiːn ˈfɪfti sɛvn/',
        wordPool: ['Danh', 'Thanh', 'mineral', 'spring', 'was', 'tested', 'by', 'French', 'geologists', 'in', '1957.', 'found'],
        explanation: 'Bác sĩ H. Fronte cùng các chuyên gia địa chất Pháp đã lấy mẫu và xếp Đảnh Thạnh vào nhóm khoáng trị liệu quý hiếm.',
        whyWrong: 'Tài liệu cổ "Đại Nam Nhất Thống Chí" (1901) cũng đã ghi chép về dòng mạch ngọc trời này dưới chân núi Hòn Chuông.',
        crucialNote: 'Lịch sử lâu đời là bảo chứng vững chắc nhất chống lại các nhãn hàng nước kiềm mới nổi thiếu bề dày.',
        memoryHook: '1957 = Cột mốc khoa học khẳng định giá trị mỏ Đảnh Thạnh.'
      },
      {
        id: 'u11-e2',
        type: 'choice',
        promptEn: 'How did historical geological reports rank Dan Thanh mineral spring across Vietnam?',
        promptVi: 'Các báo cáo địa chất xếp mỏ Đảnh Thạnh vào vị trí nào trên bản đồ khoáng sản Việt Nam?',
        englishSentence: 'It is recognized as one of the twelve most precious mineral springs in Vietnam.',
        audioText: 'It is recognized as one of the twelve most precious mineral springs in Vietnam.',
        options: [
          'It is recognized as one of the twelve most precious mineral springs in Vietnam.',
          'It is just an ordinary pond of rainwater.',
          'Nobody ever heard about this spring before.'
        ],
        correctIndex: 0,
        explanation: 'Trải qua nhiều thập kỷ kiểm nghiệm, Đảnh Thạnh được đánh giá là một trong 12 địa hạt khoáng lý tưởng nhất toàn quốc.',
        whyWrong: 'Thành phần khoáng ổn định suốt hơn 60 năm qua, không hề bị biến đổi.',
        crucialNote: 'Dùng từ "precious" (quý hiếm) để nhấn mạnh tính độc bản địa chất.',
        memoryHook: 'TOP 12 = Một trong 12 mỏ khoáng quý giá nhất non sông Việt Nam.'
      },
      {
        id: 'u11-e3',
        type: 'speak',
        promptEn: 'Pronounce the brand slogan "Original as Jade in Stone" with conviction:',
        promptVi: 'Luyện nói câu triết lý thương hiệu "Nguyên bản như Ngọc Trong Đá":',
        englishSentence: 'Vikoda is pure and original as jade hidden within stone.',
        audioText: 'Vikoda is pure and original as jade hidden within stone.',
        phonetics: '/vɪˈkoʊdə ɪz pjʊər ænd əˈrɪdʒənl æz dʒeɪd ˈhɪdn wɪðˈɪn stoʊn/',
        explanation: '"Pure and original as jade hidden within stone" dịch chuẩn xác triết lý "Ngọc Trong Đá".',
        whyWrong: 'Không dịch thô là "Stone jade" vì làm mất tính biểu tượng văn học.',
        crucialNote: 'Phát âm chuẩn âm /dʒ/ của từ "Jade" (viên ngọc bích quý phái).',
        memoryHook: 'Jade in Stone = Ngọc Trong Đá - Tinh hoa ẩn mình chờ tỏa sáng.'
      }
    ]
  },
  {
    id: 'unit-12',
    unitNumber: 12,
    title: '5 Yếu Tố Khẳng Định Vị Thế "Nước Tốt"',
    subtitle: 'Độ sâu 220m, nhiệt độ 72°C tại vòi và vành đai bảo vệ 35 hecta',
    level: 'A2-B1',
    icon: '⛰️',
    color: 'cyan',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u12-e1',
        type: 'word_order',
        promptEn: 'State the exact geological depth of Vikoda’s mineral extraction:',
        promptVi: 'Sắp xếp câu: "Nước được khai thác trực tiếp từ độ sâu 220 mét trong lòng đất."',
        englishSentence: 'The water is extracted from a depth of 220 meters.',
        audioText: 'The water is extracted from a depth of two hundred twenty meters.',
        phonetics: '/ðə ˈwɔːtər ɪz ɪkˈstræktɪd frəm ə dɛpθ əv tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz/',
        wordPool: ['The', 'water', 'is', 'extracted', 'from', 'a', 'depth', 'of', '220', 'meters.', 'deep', 'take'],
        explanation: '"Extracted from a depth of 220 meters" là thuật ngữ địa chất chuẩn xác khi thuyết trình kỹ thuật.',
        whyWrong: 'Độ sâu 220m nằm sâu dưới các tầng đá magma cổ, đảm bảo cách ly tuyệt đối khỏi nước mặt ô nhiễm.',
        crucialNote: 'Dùng từ "extracted" (khai thác công nghệ cao) thay cho "taken" hay "pumped".',
        memoryHook: '220 METERS = Tầng khoáng nguyên thủy tinh khôi triệu năm.'
      },
      {
        id: 'u12-e2',
        type: 'choice',
        promptEn: 'What is the natural spring temperature recorded at the tap at Dan Thanh?',
        promptVi: 'Nhiệt độ tại vòi phun tự nhiên của mỏ khoáng Đảnh Thạnh đạt mức bao nhiêu?',
        englishSentence: 'The spring temperature at the tap reaches seventy-two degrees Celsius.',
        audioText: 'The spring temperature at the tap reaches seventy-two degrees Celsius.',
        options: [
          'The spring temperature at the tap reaches seventy-two degrees Celsius.',
          'The water temperature is near freezing at zero degrees.',
          'The temperature is normal tap room temperature.'
        ],
        correctIndex: 0,
        explanation: 'Nhiệt độ tự nhiên 72°C chứng minh mạch nguồn bắt nguồn từ lò magma sâu thẳm, vô trùng tuyệt đối.',
        whyWrong: 'Nước ngầm thông thường chỉ đạt 25-28°C; chỉ có nước khoáng địa nhiệt sâu mới đạt 72°C tự nhiên.',
        crucialNote: 'Lực phun tự nhiên đạt độ cao 8.1 mét mà không cần bơm cưỡng bức.',
        memoryHook: '72 DEGREES CELSIUS = Nhiệt độ mỏ khoáng nóng nguyên bản.'
      },
      {
        id: 'u12-e3',
        type: 'speak',
        promptEn: 'Introduce the 35-hectare green ecological protection sanctuary:',
        promptVi: 'Luyện nói câu giới thiệu vành đai bảo vệ sinh thái 35 hecta quanh nguồn nước:',
        englishSentence: 'We protect our source with a 35-hectare green ecological sanctuary.',
        audioText: 'We protect our source with a thirty-five-hectare green ecological sanctuary.',
        phonetics: '/wiː prəˈtɛkt aʊər sɔːrs wɪð ə θɜːrti-faɪv ˈhɛktɛər griːn ˌiːkəˈlɒdʒɪkl ˈsæŋktʃuəri/',
        explanation: '"Ecological sanctuary" khẳng định khu vực cấm xâm phạm, không có dân cư hay hóa chất nông nghiệp.',
        whyWrong: 'Đối tác B2B quốc tế (đặc biệt là Nhật Bản và Châu Âu) cực kỳ coi trọng bán kính bảo vệ nguồn nước.',
        crucialNote: 'Nhà máy còn chủ động trồng rừng xung quanh để duy trì thảm thực vật bền vững.',
        memoryHook: '35 HECTARES = Vành đai xanh bảo tồn sự tinh khiết trường tồn.'
      }
    ]
  },
  {
    id: 'unit-13',
    unitNumber: 13,
    title: 'Nước Khoáng Tự Nhiên vs Nước Kiềm Nhân Tạo',
    subtitle: 'So sánh độ bền pH 3 năm, mở nắp 7 ngày và tính an toàn sinh học',
    level: 'A2-B1',
    icon: '⚖️',
    color: 'blue',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u13-e1',
        type: 'choice',
        promptEn: 'How is artificial alkaline water typically manufactured in factories or machines?',
        promptVi: 'Nước kiềm nhân tạo thường được tạo ra bằng phương pháp nào theo cẩm nang đào tạo?',
        englishSentence: 'Artificial alkaline water is created by electrolysis or adding chemical baking soda.',
        audioText: 'Artificial alkaline water is created by electrolysis or adding chemical baking soda.',
        options: [
          'Artificial alkaline water is created by electrolysis or adding chemical baking soda.',
          'It flows naturally from volcanic mountain springs.',
          'It is created by cold mountain ice melting.'
        ],
        correctIndex: 0,
        explanation: 'Nước kiềm nhân tạo dùng máy điện phân hoặc thêm hóa chất kiềm như baking soda (NaHCO3) nên pH rất nhanh tụt.',
        whyWrong: 'Nước kiềm tự nhiên Vikoda thẩm thấu qua các tầng đá địa chất, mang ion kiềm tự nhiên bền vững.',
        crucialNote: 'Nhấn mạnh: Nước kiềm nhân tạo mở nắp vài giờ là tụt pH; Vikoda bảo quản 3 năm và mở nắp 7 ngày vẫn giữ pH!',
        memoryHook: 'Electrolysis = Điện phân nhân tạo; Natural Infiltration = Thẩm thấu tự nhiên ngàn năm.'
      },
      {
        id: 'u13-e2',
        type: 'word_order',
        promptEn: 'Highlight the long-lasting pH stability of Vikoda water:',
        promptVi: 'Sắp xếp câu: "Độ pH tự nhiên vẫn ổn định ngay cả sau 7 ngày mở nắp."',
        englishSentence: 'The natural pH remains stable even seven days after opening.',
        audioText: 'The natural pH remains stable even seven days after opening.',
        phonetics: '/ðə ˈnætʃrəl piː-eɪtʃ rɪˈmeɪnz ˈsteɪbl ˈiːvn ˈsɛvn deɪz ˈæftər ˈoʊpənɪŋ/',
        wordPool: ['The', 'natural', 'pH', 'remains', 'stable', 'even', 'seven', 'days', 'after', 'opening.', 'drops', 'acid'],
        explanation: 'Nhờ sự cân bằng đệm tự nhiên của muối khoáng vi lượng, pH 9.0 của Vikoda không bị oxy hóa nhanh.',
        whyWrong: 'Đây là luận điểm cốt lõi hạ gục mọi đối thủ nước kiềm máy gia đình.',
        crucialNote: 'Có thể làm thí nghiệm quỳ tím hoặc dung dịch thử pH trước mặt khách hàng để chứng minh.',
        memoryHook: 'Remains stable = Giữ vững tính kiềm ổn định.'
      },
      {
        id: 'u13-e3',
        type: 'speak',
        promptEn: 'Summarize the core competitive advantage to a retail distributor:',
        promptVi: 'Luyện nói câu khẳng định tính an toàn tuyệt đối khi sử dụng lâu dài:',
        englishSentence: 'Vikoda is 100% natural, safe, and healthy for daily consumption.',
        audioText: 'Vikoda is one hundred percent natural, safe, and healthy for daily consumption.',
        phonetics: '/vɪˈkoʊdə ɪz wʌn ˈhʌndrəd pərˈsɛnt ˈnætʃrəl, seɪf, ænd ˈhɛlθi fɔːr ˈdeɪli kənˈsʌmpʃn/',
        explanation: 'Khác với nước kiềm hóa chất nhân tạo, Vikoda có thể uống thay nước lọc hằng ngày suốt đời.',
        whyWrong: 'Tập trung vào từ "Daily consumption" (Tiêu dùng hằng ngày an toàn).',
        crucialNote: 'Bảo vệ gia đình khỏi chứng ợ chua, trào ngược dạ dày thực quản (GERD).',
        memoryHook: 'Daily consumption = Uống hằng ngày trọn vẹn sức khỏe.'
      }
    ]
  },
  {
    id: 'unit-14',
    unitNumber: 14,
    title: 'Khoa Học Vi Khoáng: H2SiO3 & Bicarbonate',
    subtitle: 'Giải mã Axit Metasilicic cho da & khớp, HCO3- cho tiêu hóa',
    level: 'A2-B1',
    icon: '🧪',
    color: 'purple',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u14-e1',
        type: 'choice',
        promptEn: 'What is the specific health benefit of Metasilicic Acid (H2SiO3) found in Dan Thanh water?',
        promptVi: 'Lợi ích sức khỏe nổi bật của Axit Metasilicic (H2SiO3) có trong mỏ khoáng Đảnh Thạnh là gì?',
        englishSentence: 'Metasilicic acid promotes youthful glowing skin and flexible joints.',
        audioText: 'Metasilicic acid promotes youthful glowing skin and flexible joints.',
        options: [
          'Metasilicic acid promotes youthful glowing skin and flexible joints.',
          'It makes your hair turn green immediately.',
          'It turns water into sugary syrup.'
        ],
        correctIndex: 0,
        explanation: 'H2SiO3 (Axit Metasilicic) là vi khoáng quý hòa tan tự nhiên giúp tăng tổng hợp collagen cho da và bôi trơn khớp sụn.',
        whyWrong: 'Theo cẩm nang đào tạo trang 13, hàm lượng silic tự nhiên còn tạo ra vị ngọt thanh đặc trưng của nước.',
        crucialNote: 'Rất nhiều suối khoáng nổi tiếng tại Pháp (Vichy, Evian) và Nhật Bản nổi tiếng chính nhờ vi khoáng H2SiO3 này.',
        memoryHook: 'H2SiO3 = Thần dược cho làn da tươi trẻ và khớp xương dẻo dai.'
      },
      {
        id: 'u14-e2',
        type: 'word_order',
        promptEn: 'Explain how Bicarbonate (HCO3-) neutralizes excess stomach acid:',
        promptVi: 'Sắp xếp câu: "Ion bicarbonate giúp trung hòa axit dạ dày dư thừa một cách tự nhiên."',
        englishSentence: 'Bicarbonate ions naturally neutralize excess stomach acid.',
        audioText: 'Bicarbonate ions naturally neutralize excess stomach acid.',
        phonetics: '/baɪˈkɑːrbənət ˈaɪənz ˈnætʃrəli ˈnjuːtrəlaɪz ˈɛksɛs ˈstʌmək ˈæsɪd/',
        wordPool: ['Bicarbonate', 'ions', 'naturally', 'neutralize', 'excess', 'stomach', 'acid.', 'create', 'burn'],
        explanation: 'HCO3- kết hợp với ion H+ trong dạ dày biến thành H2O và CO2 dịu nhẹ, chấm dứt cảm giác nóng rát thực quản.',
        whyWrong: 'Được các bác sĩ chuyên khoa tiêu hóa khuyên dùng cho người bị viêm loét dạ dày tá tràng.',
        crucialNote: 'Chỉ số ORP = -100mV còn đóng vai trò như một chất chống oxy hóa tế bào.',
        memoryHook: 'Neutralize excess acid = Trung hòa axit dư thừa tức thì.'
      },
      {
        id: 'u14-e3',
        type: 'speak',
        promptEn: 'State the total dissolved solids (TDS) range of Vikoda water:',
        promptVi: 'Luyện nói câu giới thiệu chỉ số tổng chất rắn hòa tan TDS của Vikoda:',
        englishSentence: 'Our total dissolved solids TDS ranges from 100 to 400 milligrams per liter.',
        audioText: 'Our total dissolved solids TDS ranges from one hundred to four hundred milligrams per liter.',
        phonetics: '/aʊər ˈtoʊtl dɪˈzɒlvd ˈsɒlɪdz tiː-diː-ɛs ˈreɪndʒɪz frəm wʌn ˈhʌndrəd tuː fɔːr ˈhʌndrəd ˈmɪlɪɡræmz pɜːr ˈliːtər/',
        explanation: 'TDS 100 - 400 mg/L là hàm lượng khoáng lý tưởng nhẹ nhàng (Light mineral), không gây quá tải cho thận.',
        whyWrong: 'Nước khoáng TDS quá cao (>1500mg/L) sẽ có vị mặn gắt khó uống; Vikoda đạt độ cân bằng vàng dịu êm.',
        crucialNote: 'Khách hàng có thể uống từ 1.5 đến 2.5 lít mỗi ngày an toàn tuyệt đối.',
        memoryHook: 'TDS 100-400 = Tỷ lệ vi khoáng vàng cho cơ thể.'
      }
    ]
  },
  {
    id: 'unit-15',
    unitNumber: 15,
    title: 'Quy Trình Đóng Chai Vô Trùng Tại Nguồn',
    subtitle: 'Dẫn khách tham quan dây chuyền khép kín tự động và công nghệ khử trùng tia UV',
    level: 'A2-B1',
    icon: '🏭',
    color: 'amber',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u15-e1',
        type: 'choice',
        promptEn: 'According to QCVN regulations, when is a brand legally permitted to label "Natural Mineral Water"?',
        promptVi: 'Theo quy định Bộ Y Tế, khi nào một nhãn hàng được phép ghi "Nước khoáng thiên nhiên" lên bao bì?',
        englishSentence: 'Only when the water is extracted and bottled directly at the natural source.',
        audioText: 'Only when the water is extracted and bottled directly at the natural source.',
        options: [
          'Only when the water is extracted and bottled directly at the natural source.',
          'Whenever a company wants to print it on labels.',
          'Only if the water is transported by tank trucks to another city.'
        ],
        correctIndex: 0,
        explanation: 'Trang 19 Cẩm nang đào tạo ghi rõ: Chỉ được ghi "Thiên nhiên" khi và chỉ khi "Khai thác và đóng chai trực tiếp tại nguồn".',
        whyWrong: 'Nhiều nhãn hiệu khác phải chở xe bồn đi xa nên mất quyền ghi chữ "Khoáng thiên nhiên" theo chuẩn QCVN 6-1:2010/BYT.',
        crucialNote: 'Đây là vũ khí pháp lý cực mạnh để chứng minh tính nguyên bản và vô trùng của Vikoda.',
        memoryHook: 'Bottled at source = Đóng chai tại nguồn - Chứng chỉ vàng chất lượng.'
      },
      {
        id: 'u15-e2',
        type: 'word_order',
        promptEn: 'Describe physical filtration and UV sterilization without chemical intervention:',
        promptVi: 'Sắp xếp câu: "Nước chỉ trải qua quá trình lọc vật lý và khử trùng bằng tia cực tím UV."',
        englishSentence: 'The water undergoes physical filtration and ultraviolet sterilization.',
        audioText: 'The water undergoes physical filtration and ultraviolet sterilization.',
        phonetics: '/ðə ˈwɔːtər ˌʌndərˈɡoʊz ˈfɪzɪkl fɪlˈtreɪʃn ænd ˌʌltrəˈvaɪələt ˌstɛrəlaɪˈzeɪʃn/',
        wordPool: ['The', 'water', 'undergoes', 'physical', 'filtration', 'and', 'ultraviolet', 'sterilization.', 'chemical', 'add'],
        explanation: 'Hoàn toàn không can thiệp hóa chất, giữ trọn vẹn 100% khoáng tính tự nhiên từ đất mẹ.',
        whyWrong: 'Tia UV tiêu diệt vi khuẩn trong 0.1 giây mà không làm thay đổi hương vị nước.',
        crucialNote: 'Dây chuyền chiết rót đạt chuẩn phòng sạch Cleanroom theo tiêu chuẩn GMP.',
        memoryHook: 'UV Sterilization = Tiệt trùng tia cực tím vô hại.'
      },
      {
        id: 'u15-e3',
        type: 'speak',
        promptEn: 'Highlight modern automated bottling lines imported from Germany and Italy:',
        promptVi: 'Luyện nói câu giới thiệu dây chuyền tự động hóa nhập khẩu từ Đức và Ý:',
        englishSentence: 'Our modern automated lines ensure absolute purity and hygiene.',
        audioText: 'Our modern automated lines ensure absolute purity and hygiene.',
        phonetics: '/aʊər ˈmɒdərn ˈɔːtəmeɪtɪd laɪnz ɪnˈʃʊər ˈæbsəluːt ˈpjʊərəti ænd ˈhaɪdʒiːn/',
        explanation: 'Nhà máy sở hữu 6 dây chuyền khép kín (RGB1, RGB2, CSD, CAN, PET, 5G) công suất tới 500 m3/ngày đêm.',
        whyWrong: 'Tự động hóa hoàn toàn từ khâu thổi chai, chiết rót, đóng nắp đến dán nhãn và đóng thùng.',
        crucialNote: 'Phát âm chuẩn từ "Hygiene" (/ˈhaɪdʒiːn/ - vệ sinh an toàn thực phẩm).',
        memoryHook: 'Automated lines = Dây chuyền tự động hóa tối tân.'
      }
    ]
  },
  {
    id: 'unit-16',
    unitNumber: 16,
    title: 'Bác Bỏ Sỏi Thận & Cặn Khoáng Chai Thủy Tinh',
    subtitle: 'Giải đáp khoa học hóa học về Ca(HCO3)2, muối magie và cặn trắng vô hại',
    level: 'A2-B1',
    icon: '🛡️',
    color: 'emerald',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u16-e1',
        type: 'choice',
        promptEn: 'When a buyer asks: "Does drinking mineral water cause kidney stones?", what is the scientific answer?',
        promptVi: 'Khi khách hàng hỏi: "Uống nước khoáng Vikoda có bị sỏi thận không?", câu trả lời khoa học chuẩn xác là gì?',
        englishSentence: 'No, magnesium salts promote urinary calcium excretion and prevent stones.',
        audioText: 'No, magnesium salts promote urinary calcium excretion and prevent stones.',
        options: [
          'No, magnesium salts promote urinary calcium excretion and prevent stones.',
          'Yes, it produces rocks in your body in two days.',
          'Only drink Vikoda if you want heavy surgery.'
        ],
        correctIndex: 0,
        explanation: 'Trang 25 Cẩm nang đào tạo: Muối magiê trong nước khoáng giúp tăng bài tiết và đào thải canxi qua đường tiểu, chống tạo sỏi.',
        whyWrong: 'Canxi và magiê trong Vikoda tan hoàn toàn ở mọi nhiệt độ cơ thể dưới dạng Ca(HCO3)2 và Mg(HCO3)2.',
        crucialNote: 'Trích dẫn nghiên cứu của Giảng viên Cao học Hóa học Phạm Hữu Đức để tạo độ uy tín tối thượng.',
        memoryHook: 'Magnesium aids excretion = Magie thúc đẩy đào thải, ngăn ngừa sỏi thận.'
      },
      {
        id: 'u16-e2',
        type: 'word_order',
        promptEn: 'Explain harmless white mineral residue sometimes seen on glass bottle surfaces:',
        promptVi: 'Sắp xếp câu: "Cặn trắng là dấu hiệu tự nhiên của nguồn nước giàu khoáng chất."',
        englishSentence: 'White mineral residue is a natural proof of rich minerals.',
        audioText: 'White mineral residue is a natural proof of rich minerals.',
        phonetics: '/waɪt ˈmɪnərəl ˈrɛzɪdjuː ɪz ə ˈnætʃrəl pruːf əv rɪtʃ ˈmɪnərəlz/',
        wordPool: ['White', 'mineral', 'residue', 'is', 'a', 'natural', 'proof', 'of', 'rich', 'minerals.', 'dirty', 'poison'],
        explanation: 'Khi bảo quản trong chai thủy tinh, sự bão hòa khoáng tự nhiên và bay hơi nhẹ của CO2 có thể tạo kết tinh canxi cacbonat vô hại.',
        whyWrong: 'Nước lọc RO khử khoáng nhân tạo thì không bao giờ có cặn vì bên trong là "nước chết" rỗng ruột!',
        crucialNote: 'Giải thích nhẹ nhàng giúp người tiêu dùng hiểu rằng cặn khoáng là minh chứng của nguồn nước sống.',
        memoryHook: 'Mineral residue = Tinh thể khoáng chất kết tinh tự nhiên.'
      },
      {
        id: 'u16-e3',
        type: 'speak',
        promptEn: 'Assure the customer of certified medical safety with confidence:',
        promptVi: 'Luyện nói câu cam kết an toàn chất lượng theo tiêu chuẩn Bộ Y Tế:',
        englishSentence: 'Our mineral water complies strictly with national drinking standards.',
        audioText: 'Our mineral water complies strictly with national drinking standards.',
        phonetics: '/aʊər ˈmɪnərəl ˈwɔːtər kəmˈplaɪz ˈstrɪktli wɪð ˈnæʃnəl ˈdrɪŋkɪŋ ˈstændərdz/',
        explanation: 'Đạt chuẩn QCVN 6-1:2010/BYT và tiêu chuẩn Codex Alimentarius quốc tế.',
        whyWrong: 'Hơn 50 chỉ tiêu kiểm nghiệm định kỳ hằng năm tại Viện Pasteur Nha Trang.',
        crucialNote: 'Từ "Complies strictly with" thể hiện sự tuân thủ pháp lý nghiêm ngặt.',
        memoryHook: 'Complies with standards = Tuân thủ nghiêm ngặt tiêu chuẩn kiểm định.'
      }
    ]
  },
  {
    id: 'unit-17',
    unitNumber: 17,
    title: 'Đảnh Thạnh Có Ga & Nghệ Thuật Pha Chế',
    subtitle: 'Khám phá Sparkling Mineral Water, giảm vị say rượu bia & bí quyết Mixology',
    level: 'A2-B1',
    icon: '🥂',
    color: 'cyan',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u17-e1',
        type: 'choice',
        promptEn: 'What is the key benefit of mixing Dan Thanh Sparkling Water with fruit juice or coffee?',
        promptVi: 'Lợi ích nổi bật khi dùng nước khoáng có ga Đảnh Thạnh để pha chế nước ép hoặc cà phê là gì?',
        englishSentence: 'Natural alkalinity balances acidity and enhances original fruity flavors.',
        audioText: 'Natural alkalinity balances acidity and enhances original fruity flavors.',
        options: [
          'Natural alkalinity balances acidity and enhances original fruity flavors.',
          'It makes the coffee bitter and undrinkable.',
          'It destroys all vitamins in the drink.'
        ],
        correctIndex: 0,
        explanation: 'Trang 31 Cẩm nang: Tính kiềm nhẹ làm dịu vị chua gắt của nước ép cam/chanh, giữ nguyên hương vị thanh mát tự nhiên.',
        whyWrong: 'Bọt ga CO2 tự nhiên mịn màng kích thích gai vị giác mà không gây rát họng như nước ngọt công nghiệp.',
        crucialNote: 'Các Barista và Bartender cao cấp tại các khách sạn 5 sao rất chuộng dùng Đảnh Thạnh làm chất nền pha chế.',
        memoryHook: 'Mixology base = Chất nền pha chế đồ uống đỉnh cao.'
      },
      {
        id: 'u17-e2',
        type: 'word_order',
        promptEn: 'Explain how drinking Vikoda alongside beer reduces hangover sensation:',
        promptVi: 'Sắp xếp câu: "Uống Vikoda giúp bù đắp ion và giảm cảm giác say khi uống bia."',
        englishSentence: 'Drinking Vikoda restores electrolytes and reduces hangover sensations.',
        audioText: 'Drinking Vikoda restores electrolytes and reduces hangover sensations.',
        phonetics: '/ˈdrɪŋkɪŋ vɪˈkoʊdə rɪˈstɔːrz ɪˈlɛktrəlaɪts ænd rɪˈdjuːsɪz ˈhæŋoʊvər sɛnˈseɪʃnz/',
        wordPool: ['Drinking', 'Vikoda', 'restores', 'electrolytes', 'and', 'reduces', 'hangover', 'sensations.', 'headache', 'more'],
        explanation: 'Nhờ tính kiềm tự nhiên và các ion Na+, K+, Mg2+, Vikoda làm chậm quá trình hấp thu cồn tại dạ dày.',
        whyWrong: 'Bù nước nhanh hơn 3 lần so với nước lọc thông thường nhờ cấu trúc phân tử nước siêu nhỏ.',
        crucialNote: 'Bí quyết sức khỏe tuyệt vời cho các buổi tiệc tùng ngoại giao của doanh nhân.',
        memoryHook: 'Restores electrolytes = Bù điện giải, xua tan cơn say rượu bia.'
      },
      {
        id: 'u17-e3',
        type: 'speak',
        promptEn: 'Describe the refreshing mouthfeel of Dan Thanh Lime & Salted Lemon variants:',
        promptVi: 'Luyện nói câu giới thiệu các dòng khoáng chanh và khoáng chanh muối Đảnh Thạnh:',
        englishSentence: 'Dan Thanh sparkling lime delivers authentic thirst-quenching refreshment.',
        audioText: 'Dan Thanh sparkling lime delivers authentic thirst-quenching refreshment.',
        phonetics: '/dɑːɲ tʰaɲ ˈspɑːrklɪŋ laɪm dɪˈlɪvərz ɔːˈθɛntɪk θɜːrst-ˈkwɛntʃɪŋ rɪˈfrɛʃmənt/',
        explanation: '"Thirst-quenching refreshment" nghĩa là cảm giác sảng khoái đã khát tức thì.',
        whyWrong: 'Vị ngọt thanh mát được chiết xuất từ đường mía thiên nhiên (saccarozo), hoàn toàn không dùng chất tạo ngọt hóa học độc hại.',
        crucialNote: 'Sản phẩm đoạt danh hiệu Hàng Việt Nam Chất Lượng Cao suốt 21 năm liên tiếp.',
        memoryHook: 'Thirst-quenching = Giải khát cực đỉnh.'
      }
    ]
  },
  {
    id: 'unit-18',
    unitNumber: 18,
    title: 'Kế Hoạch Làm Việc & Kiểm Tra Điểm Bán 4P',
    subtitle: 'Nắm vững quy trình đầu ngày, đồng bộ DMS, kiểm kho và bộ Sales Tool Kit',
    level: 'A2-B1',
    icon: '📋',
    color: 'blue',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u18-e1',
        type: 'choice',
        promptEn: 'Before leaving the distributor warehouse at 8:00 AM, what must sales reps do on DMS?',
        promptVi: 'Trước khi rời kho nhà phân phối lúc 8:00 sáng, nhân viên bán hàng bắt buộc phải làm gì trên phần mềm DMS?',
        englishSentence: 'Sync sales data on DMS and verify distributor inventory and promotions.',
        audioText: 'Sync sales data on DMS and verify distributor inventory and promotions.',
        options: [
          'Sync sales data on DMS and verify distributor inventory and promotions.',
          'Sleep at the warehouse until noon.',
          'Throw away all marketing tools.'
        ],
        correctIndex: 0,
        explanation: 'Trang 44 Cẩm nang bán hàng: Đồng bộ dữ liệu phần mềm DMS, kiểm tra hàng tồn kho NPP, các chương trình khuyến mãi và chuẩn bị Sales Tool Kit.',
        whyWrong: 'Rời kho đúng 8:00 sáng để đảm bảo tiến độ ghé thăm toàn bộ tuyến bán hàng trong ngày.',
        crucialNote: 'Check-in bằng 1 tấm hình selfie trước cửa hiệu để xác nhận lộ trình thực địa.',
        memoryHook: 'Sync DMS at 8:00 AM = Kỷ luật mở đầu ngày bán hàng thắng lợi.'
      },
      {
        id: 'u18-e2',
        type: 'word_order',
        promptEn: 'Identify the 4P audit elements during store visits (Product, Price, Place, Promotion):',
        promptVi: 'Sắp xếp câu: "Kiểm tra mức tồn kho, bao bì và bảng giá khuyến mãi của điểm bán."',
        englishSentence: 'Check stock levels, packaging, and promotional pricing at the store.',
        audioText: 'Check stock levels, packaging, and promotional pricing at the store.',
        phonetics: '/tʃɛk stɒk ˈlɛvlz, ˈpækɪdʒɪŋ, ænd prəˈmoʊʃənl ˈpraɪsɪŋ æt ðə stɔːr/',
        wordPool: ['Check', 'stock', 'levels,', 'packaging,', 'and', 'promotional', 'pricing', 'at', 'the', 'store.', 'ignore'],
        explanation: 'Giai đoạn P1-P4: Nhận diện cơ hội gia tăng sản lượng, kiểm tra vỏ két, đảo hàng cận date ra ngoài theo chuẩn FIFO.',
        whyWrong: 'Không kiểm tra kỹ sẽ dẫn đến tình trạng đứt hàng (Out of Stock) làm mất doanh số vào tay đối thủ.',
        crucialNote: 'Lau chùi tủ mát, kệ trưng bày sạch sẽ trước khi tiến hành chào đơn mới.',
        memoryHook: '4P Audit = Khảo sát toàn diện để tìm cơ hội bán thêm hàng.'
      },
      {
        id: 'u18-e3',
        type: 'speak',
        promptEn: 'Greet the key store decision-maker politely and state your clear arrival on schedule:',
        promptVi: 'Luyện nói câu chào chủ tiệm đúng hẹn và đi thẳng vào cơ hội kinh doanh mới:',
        englishSentence: 'Good morning! I am here on schedule with an exciting profit idea.',
        audioText: 'Good morning! I am here on schedule with an exciting profit idea.',
        phonetics: '/ɡʊd ˈmɔːrnɪŋ! aɪ æm hɪər ɒn ˈskɛdʒuːl wɪð æn ɪkˈsaɪtɪŋ ˈprɒfɪt aɪˈdɪə/',
        explanation: 'Trang 45 Cẩm nang: Chào tươi vui, nhấn mạnh "đúng lịch hẹn" và mở màn bằng lợi nhuận thay vì hỏi chung chung "hôm nay mua gì không".',
        whyWrong: 'Tuyệt đối tránh câu: "Hôm nay chị có mua gì không chị ơi?" - dễ bị từ chối ngay lập tức.',
        crucialNote: 'Khách hàng quan tâm đến việc kiếm thêm tiền và làm hài lòng thực khách.',
        memoryHook: 'Profit idea = Ý tưởng kiếm tiền mới giúp chủ quán gia tăng doanh số.'
      }
    ]
  },
  {
    id: 'unit-19',
    unitNumber: 19,
    title: 'Nguyên Tắc Trưng Bày AVA & Vị Trí Vàng',
    subtitle: 'Nắm vững Availability, Visibility, Affordability và 4 tầm trưng bày',
    level: 'A2-B1',
    icon: '✨',
    color: 'purple',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u19-e1',
        type: 'choice',
        promptEn: 'According to Vikoda merchandising standards, what are the two ideal vertical display levels?',
        promptVi: 'Theo chuẩn trưng bày trang 57, hai tầm độ cao nào là "vị trí vàng" kích thích mua hàng tốt nhất?',
        englishSentence: 'Eye level and reach level are the prime golden zones for merchandising.',
        audioText: 'Eye level and reach level are the prime golden zones for merchandising.',
        options: [
          'Eye level and reach level are the prime golden zones for merchandising.',
          'Floor bending level and ceiling stretch level.',
          'Hidden behind heavy wooden boxes in the corner.'
        ],
        correctIndex: 0,
        explanation: 'Tầm mắt (Eye level - ngang tầm mắt người đi) và Tầm tay (Reach level - từ hông tới ngực) chiếm tới 80% quyết định mua hàng tức thì.',
        whyWrong: 'Tầm khom (sát sàn) và Tầm với (quá cao) khiến khách ngại với tay, giảm doanh số rõ rệt.',
        crucialNote: 'Sắp xếp các sản phẩm bán chạy (chai thủy tinh 430ml, PET 500ml) vào chính giữa Tầm Mắt.',
        memoryHook: 'EYE & REACH LEVEL = Vị trí hái ra tiền trên quầy kệ.'
      },
      {
        id: 'u19-e2',
        type: 'word_order',
        promptEn: 'State the rule of AVA: Make products sing on store shelves:',
        promptVi: 'Sắp xếp câu: "Trưng bày ấn tượng tạo cảm giác sản phẩm đang ca hát trên quầy kệ."',
        englishSentence: 'Impressive display creates a feeling that products are singing on shelves.',
        audioText: 'Impressive display creates a feeling that products are singing on shelves.',
        phonetics: '/ɪmˈprɛsɪv dɪsˈpleɪ kriˈeɪts ə ˈfiːlɪŋ ðæt ˈprɒdʌkts ɑːr ˈsɪŋɪŋ ɒn ʃɛlvz/',
        wordPool: ['Impressive', 'display', 'creates', 'a', 'feeling', 'that', 'products', 'are', 'singing', 'on', 'shelves.', 'sleeping'],
        explanation: 'Trang 55 Cẩm nang: Tiêu chuẩn Visibility đòi hỏi diện tích bố trí khoa học, sạch sẽ, mặt nhãn hướng ra ngoài như đang ca hát chào mời khách.',
        whyWrong: 'Chai nước bám bụi hoặc quay lưng sẽ khiến khách hàng có cảm giác hàng tồn đọng lâu ngày.',
        crucialNote: 'Lau chùi sạch bụi bẩn và chụp ảnh góc rộng báo cáo lên hệ thống DMS.',
        memoryHook: 'Products singing = Sản phẩm tỏa sáng ca hát trên quầy.'
      },
      {
        id: 'u19-e3',
        type: 'speak',
        promptEn: 'Explain the 3 core benefits of AVA merchandising to the store owner:',
        promptVi: 'Luyện nói câu thuyết phục chủ tiệm đồng ý cho bày quầy kệ nổi bật:',
        englishSentence: 'Proper display attracts more shoppers and maximizes your daily profit.',
        audioText: 'Proper display attracts more shoppers and maximizes your daily profit.',
        phonetics: '/ˈprɒpər dɪsˈpleɪ əˈtrækts mɔːr ˈʃɒpərz ænd ˈmæksɪmaɪzɪz jʊər ˈdeɪli ˈprɒfɪt/',
        explanation: 'Chủ tiệm luôn lo ngại tốn diện tích; nhấn mạnh lợi ích: Bán chạy hơn, hút khách vãng lai và tăng doanh thu tối đa.',
        whyWrong: 'Kèm theo cam kết hỗ trợ vật phẩm POSM, banner và tài trợ tủ mát chuyên dụng.',
        crucialNote: 'Thái độ tự tin, đồng hành cùng thắng Win-Win.',
        memoryHook: 'Maximizes daily profit = Tối đa hóa lợi nhuận mỗi ngày.'
      }
    ]
  },
  {
    id: 'unit-20',
    unitNumber: 20,
    title: 'Công Thức Tính Đơn Hàng & Chốt Đơn V-I-K-O-D-A',
    subtitle: 'Làm chủ công thức tính tồn kho và kỹ thuật chốt đơn hàng đỉnh cao',
    level: 'A2-B1',
    icon: '🎯',
    color: 'amber',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u20-e1',
        type: 'choice',
        promptEn: 'According to Vikoda Training Manual page 46, what is the exact formula for Estimated Order Quantity?',
        promptVi: 'Công thức vàng xác định lượng đặt hàng dự kiến tại trang 46 là gì?',
        englishSentence: 'Estimated Order = Stock needed between visits MINUS Actual stock PLUS Event reserve.',
        audioText: 'Estimated Order equals Stock needed between visits minus Actual stock plus Event reserve.',
        options: [
          'Estimated Order = Stock needed between visits MINUS Actual stock PLUS Event reserve.',
          'Estimated Order = Guessing random numbers in your head.',
          'Estimated Order = Ask the owner to buy 1000 crates without calculating.'
        ],
        correctIndex: 0,
        explanation: 'Công thức khoa học: [Lượng tồn kho cần thiết giữa 2 lần ghé thăm] - [Lượng tồn kho thực tế] + [Lượng cần thiết cho trưng bày & sự kiện lễ hội].',
        whyWrong: 'Nhân viên bán hàng chuyên nghiệp không bao giờ đoán mò; tính toán chính xác giúp điểm bán không bị đứt hàng mà không tồn ứ.',
        crucialNote: 'Viết con số cụ thể ra giấy nháp trước khi bước vào đàm phán chốt số lượng thùng.',
        memoryHook: 'CÔNG THỨC: (Cần thiết - Thực tế) + Dự phòng sự kiện = Đơn hàng chuẩn xác.'
      },
      {
        id: 'u20-e2',
        type: 'word_order',
        promptEn: 'Master the 6-letter closing acronym V-I-K-O-D-A:',
        promptVi: 'Sắp xếp câu giải mã chữ O (Opportunity) và D (Detail) trong nguyên tắc VIKODA:',
        englishSentence: 'Present the business opportunity and provide clear order details.',
        audioText: 'Present the business opportunity and provide clear order details.',
        phonetics: '/prɪˈzɛnt ðə ˈbɪznəs ˌɒpərˈtjuːnəti ænd prəˈvaɪd klɪər ˈɔːrdər ˈdiːteɪlz/',
        wordPool: ['Present', 'the', 'business', 'opportunity', 'and', 'provide', 'clear', 'order', 'details.', 'delay', 'argue'],
        explanation: 'V - Victory Win-Win; I - Implement thực hiện; K - Keeping duy trì; O - Opportunity cơ hội; D - Detail chi tiết; A - Action chốt order!',
        whyWrong: 'Đây là quy trình chốt đơn độc quyền được đúc kết bởi ban lãnh đạo Vikoda.',
        crucialNote: 'Luôn đưa ra số lượng cụ thể: "Hôm nay em lên đơn cho chị 15 két thủy tinh và 10 thùng khoáng chanh nhé!".',
        memoryHook: 'V-I-K-O-D-A = Quy trình 6 bước bách chiến bách thắng.'
      },
      {
        id: 'u20-e3',
        type: 'speak',
        promptEn: 'Deliver the definitive order closing phrase with commitment:',
        promptVi: 'Luyện nói câu chốt đơn dứt khoát kèm cam kết thời gian giao hàng:',
        englishSentence: 'I have finalized your order of twenty crates, delivery tomorrow at 9 AM.',
        audioText: 'I have finalized your order of twenty crates, delivery tomorrow at nine AM.',
        phonetics: '/aɪ hæv ˈfaɪnəlaɪzd jʊər ˈɔːrdər əv ˈtwɛnti kreɪts, dɪˈlɪvəri təˈmɒroʊ æt naɪn eɪ-ɛm/',
        explanation: 'Báo rõ số lượng, tổng tiền và cam kết giờ giao hàng chuẩn xác (trang 47 Cẩm nang bán hàng).',
        whyWrong: 'Giúp chủ cửa hàng an tâm chuẩn bị vỏ két đổi trả và tiền mặt thanh toán.',
        crucialNote: 'Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ Cấp độ A2-B1: Bậc Thầy Sản Phẩm & Bán Hàng!',
        memoryHook: 'Action closed = Chốt đơn thành công, cam kết uy tín.'
      }
    ]
  }
];

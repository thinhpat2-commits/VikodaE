import { UnitLesson } from '../curriculumData';

export const LEVEL_B1_UNITS: UnitLesson[] = [
  {
    id: 'unit-17',
    unitNumber: 17,
    title: 'Lịch Sử Mỏ Đảnh Thạnh 1957 & Bác Sĩ H. Fronte',
    subtitle: 'Nguồn khoáng nguyên bản phát hiện năm 1957 & ghi chép Đại Nam Nhất Thống Chí',
    level: 'B1',
    icon: '📜',
    color: 'emerald',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u17-e1',
        type: 'choice',
        promptEn: 'In what year was Danh Thanh mineral spring officially analyzed by French medical scientists?',
        promptVi: 'Năm nào mỏ khoáng Đảnh Thạnh được các nhà khoa học Pháp chính thức phân tích và xếp loại dược tính?',
        englishSentence: 'Danh Thanh mineral spring was scientifically tested by French experts in 1957.',
        audioText: 'Danh Thanh mineral spring was scientifically tested by French experts in nineteen fifty-seven.',
        options: [
          'Danh Thanh mineral spring was scientifically tested by French experts in 1957.',
          'It was accidentally found yesterday by a tourist.',
          'The spring was artificially created in 2020.'
        ],
        correctIndex: 0,
        explanation: 'Bác sĩ H. Fronte cùng các chuyên gia địa chất Pháp đã lấy mẫu xét nghiệm năm 1957 và xếp Đảnh Thạnh vào nhóm khoáng trị liệu quý hiếm hàng đầu Đông Dương.',
        whyWrong: 'Bề dày lịch sử gần 70 năm là bảo chứng vững chắc nhất chống lại các nhãn hàng kiềm nhân tạo mới nổi.',
        crucialNote: 'Tài liệu cổ "Đại Nam Nhất Thống Chí" (1901) cũng đã ghi chép về dòng mạch ngọc trời này dưới chân núi Hòn Chuông.',
        memoryHook: '1957 = Cột mốc khoa học Pháp kiểm chứng giá trị mỏ Đảnh Thạnh.'
      },
      {
        id: 'u17-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence stating that Danh Thanh is among the 12 most precious mineral springs in Vietnam:',
        promptVi: 'Sắp xếp câu: "Đảnh Thạnh được công nhận là một trong 12 mỏ khoáng quý giá nhất Việt Nam."',
        englishSentence: 'It is recognized as one of the twelve most precious mineral springs in Vietnam.',
        audioText: 'It is recognized as one of the twelve most precious mineral springs in Vietnam.',
        phonetics: '/ɪt ɪz ˈrɛkəɡnaɪzd æz wʌn əv ðə twɛlv moʊst ˈprɛʃəs ˈmɪnərəl sprɪŋz ɪn ˌvjɛtˈnɑːm/',
        wordPool: ['It', 'is', 'recognized', 'as', 'one', 'of', 'the', 'twelve', 'most', 'precious', 'mineral', 'springs', 'in', 'Vietnam.', 'dirty'],
        explanation: '"Precious mineral springs" = Các nguồn mỏ khoáng quý hiếm, có giá trị sinh học và trị liệu cao.',
        whyWrong: 'Trải qua nhiều thập kỷ kiểm định độc lập, thành phần khoáng chất Đảnh Thạnh hoàn toàn ổn định.',
        crucialNote: 'Nhấn mạnh từ "precious" (/ˈprɛʃəs/ - quý báu) khi thuyết trình với đối tác.',
        memoryHook: 'Top 12 = Một trong 12 mỏ khoáng quý giá nhất đất nước.'
      },
      {
        id: 'u17-e3',
        type: 'speak',
        promptEn: 'Pronounce the brand philosophy "Original as Jade in Stone" with confidence:',
        promptVi: 'Luyện nói câu triết lý thương hiệu "Nguyên bản như Ngọc Trong Đá":',
        englishSentence: 'Vikoda is pure and original as jade hidden within stone.',
        audioText: 'Vikoda is pure and original as jade hidden within stone.',
        phonetics: '/vɪˈkoʊdə ɪz pjʊər ænd əˈrɪdʒənl æz dʒeɪd ˈhɪdn wɪðˈɪn stoʊn/',
        explanation: '"Pure and original as jade hidden within stone" dịch chuẩn xác triết lý "Ngọc Trong Đá".',
        whyWrong: 'Hình tượng viên ngọc bích quý giá kết tinh triệu năm trong lòng tầng đá magma núi lửa.',
        crucialNote: 'Phát âm chuẩn âm /dʒ/ của từ "Jade" (viên ngọc bích).',
        memoryHook: 'Jade in Stone = Ngọc Trong Đá - Tinh hoa nguyên bản.'
      },
      {
        id: 'u17-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the historical narrative and select the location of the natural spring:',
        promptVi: 'Lắng nghe phần giới thiệu lịch sử và chọn vị trí địa lý của mỏ khoáng:',
        englishSentence: 'The natural spring is located at the foot of Hon Chuong mountain in Khanh Hoa province.',
        audioText: 'The natural spring is located at the foot of Hon Chuong mountain in Khanh Hoa province.',
        options: [
          'Dưới chân núi Hòn Chuông, tỉnh Khánh Hòa (At the foot of Hon Chuong mountain)',
          'Ở một hồ nước nhân tạo tại Hà Nội',
          'Nằm ngoài bờ biển sâu dưới đáy đại dương'
        ],
        correctIndex: 0,
        explanation: 'Mỏ Đảnh Thạnh tọa lạc tại thôn Cây Sung, xã Diên Tân, huyện Diên Khánh, dưới chân dãy núi Hòn Chuông hùng vĩ.',
        whyWrong: 'Vùng sinh thái biệt lập, không có cư dân hay nhà máy hóa chất xung quanh.',
        crucialNote: '"At the foot of" = Dưới chân núi.',
        memoryHook: 'Hon Chuong mountain = Dưới chân núi Hòn Chuông nguyên sơ.'
      }
    ]
  },
  {
    id: 'unit-18',
    unitNumber: 18,
    title: 'Giếng Khoan 220m & Vòi Nước Nóng 72°C',
    subtitle: 'Khai thác sâu trong lòng đất mẹ và vòi phun địa nhiệt vô trùng',
    level: 'B1',
    icon: '⛰️',
    color: 'cyan',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u18-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence stating the extraction depth of 220 meters below ground:',
        promptVi: 'Sắp xếp câu: "Nước được khai thác từ độ sâu 220 mét trong lòng đất cổ xưa."',
        englishSentence: 'Our water is extracted from a pristine depth of 220 meters.',
        audioText: 'Our water is extracted from a pristine depth of two hundred twenty meters.',
        phonetics: '/aʊər ˈwɔːtər ɪz ɪkˈstræktɪd frəm ə ˈprɪstiːn dɛpθ əv tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz/',
        wordPool: ['Our', 'water', 'is', 'extracted', 'from', 'a', 'pristine', 'depth', 'of', '220', 'meters.', 'shallow'],
        explanation: '"Extracted from a pristine depth of 220 meters" = Khai thác từ độ sâu 220m nguyên sinh.',
        whyWrong: 'Nằm sâu dưới các tầng đá magma cổ, ngăn cách tuyệt đối khỏi mọi tác động của nước mưa bề mặt.',
        crucialNote: 'Dùng từ "extracted" (khai thác kỹ thuật cao) thay vì "pumped" hay "taken".',
        memoryHook: '220 meters = Độ sâu 220m tinh khôi.'
      },
      {
        id: 'u18-e2',
        type: 'choice',
        promptEn: 'What is the natural emergence temperature recorded directly at the spring tap?',
        promptVi: 'Nhiệt độ vòi phun tự nhiên tại nguồn Đảnh Thạnh đo được là bao nhiêu?',
        englishSentence: 'The water naturally emerges at seventy-two degrees Celsius at the tap.',
        audioText: 'The water naturally emerges at seventy-two degrees Celsius at the tap.',
        options: [
          'The water naturally emerges at seventy-two degrees Celsius at the tap.',
          'It is freezing cold ice water at zero degrees.',
          'The water is artificially boiled by an electric heater.'
        ],
        correctIndex: 0,
        explanation: 'Nhiệt độ 72°C tự nhiên chứng minh mạch ngầm bắt nguồn từ hoạt động địa nhiệt sâu trong lòng vỏ trái đất, hoàn toàn vô trùng sinh học.',
        whyWrong: 'Nước ngầm thông thường chỉ ở mức 25-28°C; chỉ có mỏ khoáng nóng sâu mới đạt 72°C.',
        crucialNote: 'Áp lực tự nhiên giúp vòi phun trào lên cao 8.1 mét.',
        memoryHook: '72 degrees Celsius = Nhiệt độ tự nhiên 72°C tại vòi.'
      },
      {
        id: 'u18-e3',
        type: 'speak',
        promptEn: 'Introduce the 35-hectare green ecological protection sanctuary around the spring:',
        promptVi: 'Luyện nói câu giới thiệu vành đai bảo vệ sinh thái xanh 35 hecta quanh nguồn nước:',
        englishSentence: 'We protect our source with a 35-hectare green ecological sanctuary.',
        audioText: 'We protect our source with a thirty-five-hectare green ecological sanctuary.',
        phonetics: '/wiː prəˈtɛkt aʊər sɔːrs wɪð ə θɜːrti-faɪv ˈhɛktɛər griːn ˌiːkəˈlɒdʒɪkl ˈsæŋktʃuəri/',
        explanation: '"Ecological sanctuary" = Vành đai bảo tồn sinh thái nghiêm ngặt, cấm mọi hoạt động gây ô nhiễm.',
        whyWrong: 'Các đối tác quốc tế cực kỳ coi trọng bán kính bảo vệ nguồn nước ngầm.',
        crucialNote: 'Công ty chủ động trồng và chăm sóc rừng cây xung quanh để giữ gìn thảm thực vật.',
        memoryHook: '35 hectares = Vành đai xanh 35 hecta bảo tồn.'
      },
      {
        id: 'u18-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the chief engineer describing the natural artesian pressure of the well:',
        promptVi: 'Nghe kỹ sư trưởng mô tả về áp lực phun tự nhiên của giếng khoan:',
        englishSentence: 'The artesian water gushes naturally up to eight meters high without pumping.',
        audioText: 'The artesian water gushes naturally up to eight meters high without pumping.',
        options: [
          'Nước tự phun trào cao tới hơn 8 mét mà không cần dùng máy bơm (Without pumping)',
          'Nước chảy yếu ớt phải dùng máy bơm công suất lớn',
          'Nguồn nước đã cạn kiệt không còn phun'
        ],
        correctIndex: 0,
        explanation: '"Artesian water" = Nước khoáng phun tự nhiên do áp lực tầng địa chất nén.',
        whyWrong: 'Chứng tỏ nguồn năng lượng địa nhiệt và áp suất dồi dào trong lòng mỏ Đảnh Thạnh.',
        crucialNote: 'Từ "artesian" là thuật ngữ địa chất chuyên sâu rất giá trị.',
        memoryHook: 'Artesian water = Mỏ khoáng tự phun trào.'
      }
    ]
  },
  {
    id: 'unit-19',
    unitNumber: 19,
    title: '5 Yếu Tố Khẳng Định Vị Thế "Nước Tốt"',
    subtitle: 'Nguồn sâu, khoáng nhẹ, kiềm pH 9.0, đóng chai tại nguồn và bề dày lịch sử',
    level: 'B1',
    icon: '💎',
    color: 'blue',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u19-e1',
        type: 'choice',
        promptEn: 'According to Vikoda standards, what are the core pillars that define "Good Water"?',
        promptVi: 'Theo chuẩn mực đào tạo Vikoda, 5 yếu tố then chốt tạo nên định vị "Nước Tốt" là gì?',
        englishSentence: 'Natural origin, ideal pH 9.0, balanced minerals, bottled at source, and proven heritage.',
        audioText: 'Natural origin, ideal pH nine point oh, balanced minerals, bottled at source, and proven heritage.',
        options: [
          'Natural origin, ideal pH 9.0, balanced minerals, bottled at source, and proven heritage.',
          'Adding artificial color, sugar, and preservatives.',
          'Boiling municipal tap water with chemicals.'
        ],
        correctIndex: 0,
        explanation: '5 Yếu tố Nước Tốt: Nguồn gốc thiên nhiên 220m, Độ kiềm hoàn hảo pH 9.0, Khoáng chất vi lượng cân bằng, Đóng chai tại nguồn và Lịch sử hơn 60 năm.',
        whyWrong: 'Đây là kim chỉ nam định vị thương hiệu giúp Vikoda khác biệt hoàn toàn với nước tinh khiết thông thường.',
        crucialNote: 'Mọi nhân viên Vikoda đều tự hào thuộc lòng 5 yếu tố vàng này.',
        memoryHook: '5 Yếu tố = Nguồn sâu, Kiềm 9.0, Khoáng nhẹ, Tại nguồn, Bề dày lịch sử.'
      },
      {
        id: 'u19-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence emphasizing that Vikoda is low in total dissolved solids for daily drinking:',
        promptVi: 'Sắp xếp câu: "Hàm lượng khoáng nhẹ giúp nước phù hợp để uống hằng ngày cho cả gia đình."',
        englishSentence: 'Balanced mineral content makes our water ideal for daily consumption.',
        audioText: 'Balanced mineral content makes our water ideal for daily consumption.',
        phonetics: '/ˈbælənst ˈmɪnərəl ˈkɒntɛnt meɪks aʊər ˈwɔːtər aɪˈdiːəl fɔːr ˈdeɪli kənˈsʌmpʃn/',
        wordPool: ['Balanced', 'mineral', 'content', 'makes', 'our', 'water', 'ideal', 'for', 'daily', 'consumption.', 'bad'],
        explanation: '"Balanced mineral content" = Hàm lượng khoáng chất cân bằng, nhẹ dịu, không gây quá tải cho thận.',
        whyWrong: 'Có thể uống thay nước lọc thông thường mỗi ngày cho cả người già và trẻ nhỏ.',
        crucialNote: 'Chỉ số TDS (Tổng chất rắn hòa tan) ở mức lý tưởng 200 - 350 mg/lít.',
        memoryHook: 'Daily consumption = Uống hằng ngày an toàn.'
      },
      {
        id: 'u19-e3',
        type: 'speak',
        promptEn: 'Practice highlighting the legal requirement under QCVN to label "Natural Mineral Water":',
        promptVi: 'Luyện nói câu nhấn mạnh chỉ được ghi "Nước khoáng thiên nhiên" khi đóng chai tại nguồn:',
        englishSentence: 'Only water bottled directly at the source can be labeled Natural Mineral Water.',
        audioText: 'Only water bottled directly at the source can be labeled Natural Mineral Water.',
        phonetics: '/ˈoʊnli ˈwɔːtər ˈbɒtld dəˈrɛktli æt ðə sɔːrs kæn biː ˈleɪbld ˈnætʃrəl ˈmɪnərəl ˈwɔːtər/',
        explanation: 'Quy chuẩn Bộ Y Tế QCVN 6-1:2010/BYT quy định: Chỉ được ghi "Khoáng thiên nhiên" khi khai thác và đóng chai trực tiếp tại nguồn mỏ.',
        whyWrong: 'Nhiều nhãn hiệu chở xe bồn đi xa nên mất quyền ghi chữ "Thiên nhiên" trên nhãn.',
        crucialNote: 'Vũ khí pháp lý mạnh mẽ khẳng định tính nguyên bản của Vikoda.',
        memoryHook: 'Bottled at source = Đóng chai tại nguồn.'
      },
      {
        id: 'u19-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and identify the core health philosophy of Vikoda water:',
        promptVi: 'Lắng nghe thông điệp và chọn triết lý chăm sóc sức khỏe cốt lõi của Vikoda:',
        englishSentence: 'Vikoda brings natural balance and original vitality back to your body.',
        audioText: 'Vikoda brings natural balance and original vitality back to your body.',
        options: [
          'Đưa cơ thể trở về trạng thái cân bằng tự nhiên và sinh khí nguyên bản (Natural balance)',
          'Làm cơ thể mệt mỏi và mất nước',
          'Biến cơ thể thành máy móc công nghiệp'
        ],
        correctIndex: 0,
        explanation: '"Natural balance & original vitality" = Trạng thái cân bằng tự nhiên và sinh lực dồi dào.',
        whyWrong: 'Cuộc sống hiện đại nhiều áp lực và thực phẩm giàu axit khiến cơ thể mất cân bằng; Vikoda giúp hồi phục lại trạng thái lý tưởng.',
        crucialNote: '"Vitality" nghĩa là sức sống, sinh khí tươi trẻ.',
        memoryHook: 'Natural balance = Cân bằng tự nhiên.'
      }
    ]
  },
  {
    id: 'unit-20',
    unitNumber: 20,
    title: 'Khoa Học Độ Kiềm Tự Nhiên pH 9.0',
    subtitle: 'Phân biệt kiềm tự nhiên từ địa chất vs kiềm nhân tạo qua máy điện giải',
    level: 'B1',
    icon: '🧪',
    color: 'purple',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u20-e1',
        type: 'choice',
        promptEn: 'What is the fundamental difference between Vikoda and artificially ionized alkaline water?',
        promptVi: 'Sự khác biệt căn bản giữa Vikoda và nước kiềm nhân tạo qua máy điện giải là gì?',
        englishSentence: 'Vikoda’s pH 9.0 is naturally formed by ancient geology and never degrades over time.',
        audioText: 'Vikoda’s pH nine point oh is naturally formed by ancient geology and never degrades over time.',
        options: [
          'Vikoda’s pH 9.0 is naturally formed by ancient geology and never degrades over time.',
          'There is no scientific difference between nature and machines.',
          'Machine water comes from mountain springs.'
        ],
        correctIndex: 0,
        explanation: 'Độ kiềm pH 9.0 của Vikoda được tôi luyện qua hàng triệu năm trong lòng đá magma nên cực kỳ ổn định. Nước kiềm nhân tạo dùng máy điện phân nhân tạo thường tụt độ pH nhanh chóng sau khi đóng nắp.',
        whyWrong: 'Khách hàng thông thái luôn ưu tiên kiềm thiên nhiên từ lòng đất mẹ thay vì kiềm nhân tạo từ máy lọc.',
        crucialNote: 'Từ "never degrades" nghĩa là không bị suy giảm theo thời gian.',
        memoryHook: 'Natural geology = Kiềm tự nhiên vĩnh cửu.'
      },
      {
        id: 'u20-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence explaining how natural bicarbonate neutralizes stomach acid:',
        promptVi: 'Sắp xếp câu: "Ion bicarbonate tự nhiên giúp trung hòa axit dạ dày dư thừa hiệu quả."',
        englishSentence: 'Natural bicarbonate helps neutralize excess stomach acid effectively.',
        audioText: 'Natural bicarbonate helps neutralize excess stomach acid effectively.',
        phonetics: '/ˈnætʃrəl baɪˈkɑːrbənət hɛlps ˈnjuːtrəlaɪz ˈɛksɛs ˈstʌmək ˈæsɪd ɪˈfɛktɪvli/',
        wordPool: ['Natural', 'bicarbonate', 'helps', 'neutralize', 'excess', 'stomach', 'acid', 'effectively.', 'bad', 'sour'],
        explanation: 'Ion HCO3- (Bicarbonate) là chất đệm tự nhiên, phản ứng nhẹ nhàng với axit dạ dày, ngăn ngừa chứng ợ chua và trào ngược mà không gây sốc cho hệ tiêu hóa.',
        whyWrong: 'Cơ chế sinh học tự nhiên đã được y khoa chứng minh suốt hàng trăm năm.',
        crucialNote: 'Phát âm từ "Neutralize" (/ˈnjuːtrəlaɪz/ - trung hòa).',
        memoryHook: 'Bicarbonate neutralizes acid = Bicarbonate trung hòa axit dư thừa.'
      },
      {
        id: 'u20-e3',
        type: 'speak',
        promptEn: 'Practice explaining that Vikoda water contains zero artificial chemical additives:',
        promptVi: 'Luyện nói câu khẳng định Vikoda hoàn toàn không sử dụng hóa chất nhân tạo:',
        englishSentence: 'Our water contains zero artificial chemicals or added synthetic salts.',
        audioText: 'Our water contains zero artificial chemicals or added synthetic salts.',
        phonetics: '/aʊər ˈwɔːtər kənˈteɪnz ˈzɪəroʊ ˌɑːrtɪˈfɪʃl ˈkɛmɪklz ɔːr ˈædɪd sɪnˈθɛtɪk sɔːlts/',
        explanation: '"Zero artificial chemicals" = Không hóa chất nhân tạo. "Zero synthetic salts" = Không phụ gia muối tổng hợp.',
        whyWrong: 'Cam kết 100% thuần khiết tự nhiên là lời hứa danh dự của thương hiệu Vikoda.',
        crucialNote: 'Nhấn mạnh chữ "ZERO" để tạo sự tin tưởng tuyệt đối.',
        memoryHook: 'Zero chemicals = Hoàn toàn không hóa chất.'
      },
      {
        id: 'u20-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the health expert explaining the role of organic silica in Vikoda water:',
        promptVi: 'Nghe chuyên gia sức khỏe giải thích về công dụng của khoáng chất Silic hữu cơ trong nước:',
        englishSentence: 'Natural silica promotes collagen production and gives the water a gentle sweet aftertaste.',
        audioText: 'Natural silica promotes collagen production and gives the water a gentle sweet aftertaste.',
        options: [
          'Silic hữu cơ kích thích sản sinh collagen làm đẹp da và tạo vị ngọt thanh hậu vị',
          'Silic là chất độc hại cần lọc bỏ',
          'Silic làm nước có mùi hắc khó chịu'
        ],
        correctIndex: 0,
        explanation: 'Silic (SiO2) hòa tan tự nhiên hỗ trợ tái tạo collagen, làm săn chắc làn da và tạo nên vị ngọt mát đặc trưng của mỏ Đảnh Thạnh.',
        whyWrong: 'Rất nhiều spa và resort cao cấp chọn Vikoda chính nhờ hàm lượng Silic làm đẹp da tự nhiên.',
        crucialNote: '"Gentle sweet aftertaste" = Vị ngọt hậu thanh tao.',
        memoryHook: 'Silica = Đẹp da và ngọt thanh hậu vị.'
      }
    ]
  },
  {
    id: 'unit-21',
    unitNumber: 21,
    title: 'Bác Bỏ Tin Đồn Sỏi Thận Khoa Học',
    subtitle: 'Giải đáp vì sao ion Canxi & Magiê hòa tan hoàn toàn không bao giờ gây sỏi',
    level: 'B1',
    icon: '🛡️',
    color: 'emerald',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u21-e1',
        type: 'choice',
        promptEn: 'When a customer asks: "Does drinking natural mineral water cause kidney stones?", what is the scientific truth?',
        promptVi: 'Khi khách hàng hỏi: "Uống nước khoáng Vikoda có gây sỏi thận không?", câu trả lời khoa học chuẩn xác là gì?',
        englishSentence: 'No, dissolved magnesium ions actively assist the kidneys in excreting excess calcium.',
        audioText: 'No, dissolved magnesium ions actively assist the kidneys in excreting excess calcium.',
        options: [
          'No, dissolved magnesium ions actively assist the kidneys in excreting excess calcium.',
          'Yes, it produces large stones within two days.',
          'Only drink Vikoda if you want heavy surgery.'
        ],
        correctIndex: 0,
        explanation: 'Nghiên cứu khoa học chứng minh: Muối magiê hòa tan trong nước khoáng kích thích thận đào thải cặn canxi qua đường tiểu, chính vì vậy nước khoáng kiềm còn giúp PHÒNG NGỪA sỏi thận.',
        whyWrong: 'Canxi trong Vikoda ở dạng ion Ca(HCO3)2 hòa tan 100%, cơ thể hấp thụ dễ dàng chứ không lắng cặn như canxi thô.',
        crucialNote: 'Trích dẫn nghiên cứu của các giảng viên đại học chuyên ngành Hóa sinh để tạo độ uy tín vững chắc.',
        memoryHook: 'Magnesium prevents stones = Magiê đào thải canxi, chống tạo sỏi.'
      },
      {
        id: 'u21-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence explaining harmless white mineral residue inside glass bottles:',
        promptVi: 'Sắp xếp câu: "Cặn khoáng trắng kết tinh là bằng chứng tự nhiên của nguồn nước giàu khoáng chất."',
        englishSentence: 'White mineral residue is a natural proof of rich minerals.',
        audioText: 'White mineral residue is a natural proof of rich minerals.',
        phonetics: '/waɪt ˈmɪnərəl ˈrɛzɪdjuː ɪz ə ˈnætʃrəl pruːf əv rɪtʃ ˈmɪnərəlz/',
        wordPool: ['White', 'mineral', 'residue', 'is', 'a', 'natural', 'proof', 'of', 'rich', 'minerals.', 'dirty', 'fake'],
        explanation: 'Khi bảo quản trong chai thủy tinh, sự bão hòa khoáng tự nhiên có thể tạo kết tinh canxi cacbonat mỏng vô hại trên thành chai.',
        whyWrong: 'Nước lọc RO khử khoáng nhân tạo thì không bao giờ có cặn vì bên trong là "nước rỗng" không có dưỡng chất!',
        crucialNote: 'Giải thích nhẹ nhàng giúp người tiêu dùng hiểu rằng cặn khoáng là minh chứng của nguồn nước sống.',
        memoryHook: 'Proof of rich minerals = Bằng chứng của nguồn nước giàu khoáng.'
      },
      {
        id: 'u21-e3',
        type: 'speak',
        promptEn: 'Assure the customer of safety and continuous medical certification with confidence:',
        promptVi: 'Luyện nói câu cam kết an toàn chất lượng theo tiêu chuẩn Viện Pasteur:',
        englishSentence: 'Our water is tested annually with over fifty strict safety parameters.',
        audioText: 'Our water is tested annually with over fifty strict safety parameters.',
        phonetics: '/aʊər ˈwɔːtər ɪz ˈtɛstɪd ˈænjuəli wɪð ˈoʊvər ˈfɪfti strɪkt ˈseɪfti pəˈræmɪtərz/',
        explanation: 'Hơn 50 chỉ tiêu lý hóa và vi sinh được kiểm nghiệm định kỳ hằng năm tại Viện Pasteur Nha Trang.',
        whyWrong: 'Bảo chứng an toàn y tế vững như bàn thạch suốt hơn 30 năm qua.',
        crucialNote: 'Phát âm chuẩn từ "Parameters" (/pəˈræmɪtərz/ - các chỉ số kiểm nghiệm).',
        memoryHook: 'Tested with 50 parameters = Kiểm nghiệm hơn 50 chỉ tiêu khắt khe.'
      },
      {
        id: 'u21-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the doctor explaining the hydration benefit of micro-clusters:',
        promptVi: 'Nghe bác sĩ giải thích về cụm phân tử nước siêu nhỏ thẩm thấu vào tế bào:',
        englishSentence: 'Micro-clusters penetrate cellular membranes faster for superior cellular hydration.',
        audioText: 'Micro-clusters penetrate cellular membranes faster for superior cellular hydration.',
        options: [
          'Cụm phân tử nước siêu nhỏ thẩm thấu qua màng tế bào nhanh hơn, giúp bù nước tối ưu',
          'Nước không thể đi vào tế bào cơ thể',
          'Nước chỉ đọng lại ở dạ dày mà không đi đâu'
        ],
        correctIndex: 0,
        explanation: '"Micro-clusters" = Cụm phân tử nước siêu nhỏ. Giúp cơ thể hấp thu nước và khoáng chất nhanh gấp 2 lần nước thường.',
        whyWrong: 'Lý do người uống Vikoda cảm thấy đỡ khát ngay lập tức và tinh thần sảng khoái.',
        crucialNote: '"Superior hydration" = Bù nước vượt trội.',
        memoryHook: 'Micro-clusters = Cụm phân tử nước siêu nhỏ thẩm thấu nhanh.'
      }
    ]
  },
  {
    id: 'unit-22',
    unitNumber: 22,
    title: 'Thuyết Minh Dẫn Tour Mỏ Đảnh Thạnh',
    subtitle: 'Nghệ thuật hướng dẫn khách tham quan giếng khoan và đài quan sát mỏ',
    level: 'B1',
    icon: '🧭',
    color: 'cyan',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u22-e1',
        type: 'choice',
        promptEn: 'How to welcome VIP guests as they step off the tour bus at Dan Thanh factory gate:',
        promptVi: 'Cách chào đón đoàn khách VIP bước xuống xe tại cổng nhà máy mỏ Đảnh Thạnh:',
        englishSentence: 'Welcome to Dan Thanh spring! We are thrilled to take you on this discovery tour.',
        audioText: 'Welcome to Dan Thanh spring! We are thrilled to take you on this discovery tour.',
        options: [
          'Welcome to Dan Thanh spring! We are thrilled to take you on this discovery tour.',
          'Get off the bus quickly and do not touch anything.',
          'Why did your bus arrive so late?'
        ],
        correctIndex: 0,
        explanation: '"We are thrilled to take you on this discovery tour" = Chúng tôi rất vinh hạnh được đồng hành cùng quý khách trong chuyến tham quan khám phá hôm nay.',
        whyWrong: 'Phong thái cởi mở, trang trọng và tự hào về di sản thiên nhiên của công ty.',
        crucialNote: 'Phát mũ bảo hộ và chai nước Vikoda ướp lạnh cho từng vị khách.',
        memoryHook: 'Discovery tour = Chuyến tham quan khám phá nguồn cội.'
      },
      {
        id: 'u22-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence showing guests the natural artesian fountain gushing at 72°C:',
        promptVi: 'Sắp xếp câu: "Trước mặt quý vị là vòi phun khoáng nóng tự nhiên ở nhiệt độ 72°C."',
        englishSentence: 'In front of you is our natural 72°C geothermal spring fountain.',
        audioText: 'In front of you is our natural seventy-two degrees Celsius geothermal spring fountain.',
        phonetics: '/ɪn frʌnt əv juː ɪz aʊər ˈnætʃrəl ˌdʒiːoʊˈθɜːrml sprɪŋ ˈfaʊntn/',
        wordPool: ['In', 'front', 'of', 'you', 'is', 'our', 'natural', '72°C', 'geothermal', 'spring', 'fountain.', 'cold'],
        explanation: '"Geothermal spring fountain" = Vòi phun mỏ khoáng địa nhiệt nóng tự nhiên.',
        whyWrong: 'Khoảnh khắc khách tận mắt chứng kiến hơi nước khoáng bốc lên nghi ngút là điểm nhấn ấn tượng nhất của tour.',
        crucialNote: 'Mời khách thử chạm nhẹ tay vào dòng nước ấm sau khi qua kênh làm mát.',
        memoryHook: 'Geothermal spring = Mạch khoáng nóng địa nhiệt.'
      },
      {
        id: 'u22-e3',
        type: 'speak',
        promptEn: 'Deliver the tour itinerary transition from the spring well to the automated bottling hall:',
        promptVi: 'Luyện nói câu chuyển tiếp từ giếng khoan sang khu vực nhà máy chiết rót đóng chai:',
        englishSentence: 'Now, let us proceed to the automated bottling hall to see the sterile filling line.',
        audioText: 'Now, let us proceed to the automated bottling hall to see the sterile filling line.',
        phonetics: '/naʊ, lɛt ʌs prəˈsiːd tuː ði ˈɔːtəmeɪtɪd ˈbɒtlɪŋ hɔːl tuː siː ðə ˈstɛrəl ˈfɪlɪŋ laɪn/',
        explanation: '"Let us proceed to..." = Bây giờ, xin mời quý khách cùng di chuyển đến khu vực chiết rót vô trùng.',
        whyWrong: 'Mẫu câu hướng dẫn viên chuyên nghiệp, liền mạch và lôi cuốn.',
        crucialNote: 'Nhắc khách đi theo lối hành lang kính ngắm cảnh để quan sát toàn bộ dây chuyền.',
        memoryHook: 'Proceed to bottling hall = Di chuyển sang khu vực đóng chai.'
      },
      {
        id: 'u22-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the tour guide explaining the safety rule inside the cleanroom corridor:',
        promptVi: 'Lắng nghe hướng dẫn viên nhắc nhở quy định an toàn khi đi qua hành lang phòng sạch:',
        englishSentence: 'Please wear your protective shoe covers and remain inside the observation corridor.',
        audioText: 'Please wear your protective shoe covers and remain inside the observation corridor.',
        options: [
          'Vui lòng bọc giày bảo hộ và đi lại bên trong hành lang quan sát cách ly',
          'Được tự do chạy vào khu máy móc để chạm vào chai nước',
          'Không có quy định bảo hộ nào'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc nghiêm ngặt: Khách quan sát qua hành lang kính cách ly vô trùng để đảm bảo tiêu chuẩn GMP/HACCP.',
        whyWrong: 'Thể hiện tính chuyên nghiệp và tiêu chuẩn vệ sinh đẳng cấp quốc tế của nhà máy Vikoda.',
        crucialNote: '"Observation corridor" = Hành lang kính quan sát.',
        memoryHook: 'Protective shoe covers = Bọc giày bảo hộ vô trùng.'
      }
    ]
  },
  {
    id: 'unit-23',
    unitNumber: 23,
    title: 'Dây Chuyền Chiết Rót & Công Nghệ Đóng Chai',
    subtitle: '6 dây chuyền khép kín tự động hóa: Thổi chai, chiết rót, dán nhãn, đóng thùng',
    level: 'B1',
    icon: '⚙️',
    color: 'purple',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u23-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence describing the full automated line imported from Germany and Italy:',
        promptVi: 'Sắp xếp câu: "Dây chuyền tự động hóa hiện đại được nhập khẩu từ Đức và Ý."',
        englishSentence: 'Our automated production lines are imported from Germany and Italy.',
        audioText: 'Our automated production lines are imported from Germany and Italy.',
        phonetics: '/aʊər ˈɔːtəmeɪtɪd prəˈdʌkʃn laɪnz ɑːr ɪmˈpɔːrtɪd frəm ˈdʒɜːrməni ænd ˈɪtəli/',
        wordPool: ['Our', 'automated', 'production', 'lines', 'are', 'imported', 'from', 'Germany', 'and', 'Italy.', 'old'],
        explanation: 'Nhà máy Vikoda vận hành 6 dây chuyền khép kín tự động hóa tối tân: RGB1, RGB2 (Chai thủy tinh), CSD (Có ga), CAN (Lon nhôm), PET và 5G (Bình 19L).',
        whyWrong: 'Công nghệ châu Âu đảm bảo độ đồng đều và công suất lên đến 500 m3/ngày đêm.',
        crucialNote: 'Bảo chứng vững vàng khi thuyết trình với các đoàn kiểm định đối tác nước ngoài.',
        memoryHook: 'Imported from Germany & Italy = Nhập khẩu từ Đức và Ý.'
      },
      {
        id: 'u23-e2',
        type: 'choice',
        promptEn: 'How does the factory sterilize water without using artificial chemical chlorine or boiling?',
        promptVi: 'Nhà máy khử trùng nước như thế nào mà hoàn toàn không dùng hóa chất clo hay đun sôi nhân tạo?',
        englishSentence: 'The water passes through physical fine filtration and ultraviolet UV sterilization.',
        audioText: 'The water passes through physical fine filtration and ultraviolet UV sterilization.',
        options: [
          'The water passes through physical fine filtration and ultraviolet UV sterilization.',
          'We pour heavy chlorine powder into large open pools.',
          'Workers boil water using wood fires.'
        ],
        correctIndex: 0,
        explanation: 'Lọc vật lý qua màng tinh vi và khử trùng bằng tia cực tím UV. Tiêu diệt vi khuẩn trong 0.1 giây mà giữ nguyên vẹn 100% khoáng tính và vị ngọt lành tự nhiên.',
        whyWrong: 'Tuyệt đối không dùng hóa chất can thiệp để giữ đúng định nghĩa "Nước khoáng thiên nhiên".',
        crucialNote: 'Tia UV không làm biến đổi cấu trúc khoáng kiềm của nước.',
        memoryHook: 'UV Sterilization = Tiệt trùng bằng tia cực tím an toàn.'
      },
      {
        id: 'u23-e3',
        type: 'speak',
        promptEn: 'Practice stating the daily production capacity of the Vikoda manufacturing plant:',
        promptVi: 'Luyện nói câu giới thiệu năng lực sản xuất cung ứng dồi dào của nhà máy:',
        englishSentence: 'Our modern factory can produce up to 500 cubic meters per day.',
        audioText: 'Our modern factory can produce up to five hundred cubic meters per day.',
        phonetics: '/aʊər ˈmɒdərn ˈfæktəri kæn prəˈdjuːs ʌp tuː faɪv ˈhʌndrəd ˈkjuːbɪk ˈmiːtərz pɜːr deɪ/',
        explanation: '"500 cubic meters per day" = 500 mét khối (tương đương 500,000 lít) nước khoáng mỗi ngày đêm.',
        whyWrong: 'Năng lực sản xuất mạnh mẽ đảm bảo không bao giờ lo đứt gãy nguồn hàng cho các chuỗi phân phối lớn.',
        crucialNote: '"Cubic meters" = Mét khối.',
        memoryHook: '500 cubic meters/day = Năng lực 500 m3/ngày đêm.'
      },
      {
        id: 'u23-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the production manager confirming the capping and date printing process:',
        promptVi: 'Nghe giám đốc sản xuất mô tả về khâu dập nắp vô trùng và in laser ngày sản xuất:',
        englishSentence: 'Laser coding prints the exact batch number and expiration date in two seconds.',
        audioText: 'Laser coding prints the exact batch number and expiration date in two seconds.',
        options: [
          'Công nghệ in laser khắc số lô và hạn sử dụng chính xác chỉ trong 2 giây',
          'Công nhân dùng bút lông viết tay lên từng chai',
          'Không có in ngày sản xuất'
        ],
        correctIndex: 0,
        explanation: 'In phun laser công nghệ cao trên cổ chai giúp người tiêu dùng dễ dàng truy xuất nguồn gốc và ngày sản xuất.',
        whyWrong: 'Chống hàng giả và đảm bảo tính minh bạch thương mại tuyệt đối.',
        crucialNote: '"Batch number" = Số lô; "Expiration date" = Hạn sử dụng.',
        memoryHook: 'Laser coding = In laser truy xuất nguồn gốc chính xác.'
      }
    ]
  },
  {
    id: 'unit-24',
    unitNumber: 24,
    title: 'Bộ Sưu Tập Bao Bì: Thủy Tinh, PET & Bình 19L',
    subtitle: 'Nắm vững quy cách đóng gói, thời hạn sử dụng và phân khúc khách hàng',
    level: 'B1',
    icon: '📦',
    color: 'emerald',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u24-e1',
        type: 'choice',
        promptEn: 'What is the standard shelf life (HSD) of Vikoda Natural Mineral Water in PET bottles?',
        promptVi: 'Hạn sử dụng (HSD) tiêu chuẩn của nước khoáng kiềm Vikoda đóng chai PET là bao nhiêu tháng?',
        englishSentence: 'Our PET bottled water maintains optimal fresh quality for twenty-four months.',
        audioText: 'Our PET bottled water maintains optimal fresh quality for twenty-four months.',
        options: [
          'Our PET bottled water maintains optimal fresh quality for twenty-four months.',
          'The water expires in two hours after opening.',
          'Water never expires and can last one hundred years.'
        ],
        correctIndex: 0,
        explanation: 'Các sản phẩm chai PET (350ml, 500ml, 1.5L) có HSD tiêu chuẩn 24 tháng (2 năm) nhờ độ kiềm tự nhiên ổn định và công nghệ đóng chai vô trùng.',
        whyWrong: 'Thời hạn 24 tháng giúp các đại lý và nhà phân phối yên tâm quay vòng vốn tồn kho.',
        crucialNote: '"Shelf life" = Hạn sử dụng trên kệ hàng.',
        memoryHook: '24 months = Hạn sử dụng 24 tháng tươi mới.'
      },
      {
        id: 'u24-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence describing the packaging specification of returnable glass bottles:',
        promptVi: 'Sắp xếp câu: "Chai thủy tinh được đóng quy cách 20 chai một két nhựa thu hồi vỏ."',
        englishSentence: 'Returnable glass bottles are packed twenty bottles per plastic crate.',
        audioText: 'Returnable glass bottles are packed twenty bottles per plastic crate.',
        phonetics: '/rɪˈtɜːrnəbl ɡlæs ˈbɒtlz ɑːr pækt ˈtwɛnti ˈbɒtlz pɜːr ˈplæstɪk kreɪt/',
        wordPool: ['Returnable', 'glass', 'bottles', 'are', 'packed', 'twenty', 'bottles', 'per', 'plastic', 'crate.', 'box'],
        explanation: '"Returnable plastic crate" = Két nhựa đổi vỏ 2 chiều 20 chai. Giúp tiết kiệm chi phí bao bì và bảo vệ môi trường.',
        whyWrong: 'Rất được các quán ăn, nhà hàng tiệc cưới ưa chuộng vì bài toán kinh tế tối ưu.',
        crucialNote: 'Đối với xuất khẩu hoặc bán lẻ cao cấp, có quy cách thùng carton 12 chai dùng 1 chiều.',
        memoryHook: '20 bottles per crate = Két 20 chai thủy tinh đổi vỏ.'
      },
      {
        id: 'u24-e3',
        type: 'speak',
        promptEn: 'Deliver the graduation keynote summarizing your pride as a certified Vikoda Ambassador:',
        promptVi: 'Luyện nói câu tổng kết đầy tự hào của một Đại sứ Thương hiệu Vikoda xuất sắc:',
        englishSentence: 'I am proud to share the pure wellness of Danh Thanh mineral water with the world.',
        audioText: 'I am proud to share the pure wellness of Danh Thanh mineral water with the world.',
        phonetics: '/aɪ æm praʊd tuː ʃɛər ðə pjʊər ˈwɛlnəs əv dɑːɲ tʰaɲ ˈmɪnərəl ˈwɔːtər wɪð ðə wɜːrld/',
        explanation: 'Chúc mừng bạn! Bạn đã hoàn thành trọn vẹn Cấp độ 3: Đại Sứ Thương Hiệu & Thuyết Minh Mỏ Đảnh Thạnh!',
        whyWrong: 'Giờ đây bạn đã hoàn toàn tự tin thuyết trình về lịch sử, nguồn nước 220m, vòi 72°C và các dòng sản phẩm của công ty.',
        crucialNote: 'Sẵn sàng bước tiếp lên Cấp độ 4: Bán Hàng B2B, HORECA 5 Sao & Đàm Phán Thương Mại!',
        memoryHook: 'Certified Ambassador = Đại sứ thương hiệu được chứng nhận.'
      },
      {
        id: 'u24-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the customer service officer describing the 19-liter office dispenser bottles:',
        promptVi: 'Nghe nhân viên CSKH giới thiệu 2 loại bình 19L phục vụ cho cơ quan văn phòng:',
        englishSentence: 'We offer both spigot bottles for direct pouring and inverted bottles for hot-and-cold dispensers.',
        audioText: 'We offer both spigot bottles for direct pouring and inverted bottles for hot-and-cold dispensers.',
        options: [
          'Gồm 2 dòng: Bình có vòi rót trực tiếp và bình úp cho cây nước nóng lạnh',
          'Chỉ bán nước đổ vào xô nhựa',
          'Không cung cấp bình 19L cho văn phòng'
        ],
        correctIndex: 0,
        explanation: '"Spigot bottles" = Bình có vòi vặn. "Inverted bottles" = Bình úp cây nước nóng lạnh.',
        whyWrong: 'Hai lựa chọn tiện lợi phù hợp cho mọi không gian làm việc công sở hiện đại.',
        crucialNote: '"Hot-and-cold dispensers" = Cây nước nóng lạnh văn phòng.',
        memoryHook: 'Spigot & Inverted = Bình có vòi và bình úp.'
      }
    ]
  }
];

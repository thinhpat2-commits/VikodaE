import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  Mic, 
  Volume2, 
  CheckCircle2, 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  MessageSquare,
  Award,
  ShieldCheck,
  Star
} from 'lucide-react';
import { playSpeech, startSpeechRecognition, finishSpeechRecognition, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { CompanyEmblem } from './brand/VikodaLogos';

interface PitchSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
}

interface BuyerPersona {
  id: string;
  name: string;
  role: string;
  company: string;
  flag: string;
  avatar: string;
  objective: string;
  rounds: {
    roundNumber: number;
    roundTitle: string;
    buyerQuestionEn: string;
    buyerQuestionVi: string;
    buyerAudio: string;
    suggestedPitchEn: string;
    suggestedPitchVi: string;
    options: {
      id: string;
      textEn: string;
      textVi: string;
      isBest: boolean;
      score: number;
      feedback: string;
    }[];
  }[];
}

const BUYER_PERSONAS: BuyerPersona[] = [
  {
    id: 'kenji',
    name: 'Mr. Kenji Takahashi',
    role: 'Procurement Director',
    company: 'Tokyo Organic Wellness Corp (Japan)',
    flag: '🇯🇵',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    objective: 'Tìm nguồn nước kiềm thiên nhiên đóng chai cao cấp cho chuỗi 200 siêu thị hữu cơ tại Tokyo.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Màn Chào Hỏi & Giới Thiệu 30 Giây (The Elevator Hook)',
        buyerQuestionEn: 'Good morning. We see many mineral waters in Southeast Asia. What makes Vikoda fundamentally different?',
        buyerQuestionVi: 'Chào bạn. Thị trường Đông Nam Á có rất nhiều loại nước khoáng. Điều gì tạo nên sự khác biệt cốt lõi của Vikoda?',
        buyerAudio: 'Good morning. We see many mineral waters in Southeast Asia. What makes Vikoda fundamentally different?',
        suggestedPitchEn: 'Vikoda is Vietnam’s rare natural alkaline mineral water with a natural pH of 9.0, bottled directly at our 1957 volcanic source at 72 degrees Celsius.',
        suggestedPitchVi: 'Vikoda là nước khoáng kiềm thiên nhiên hiếm có với độ pH 9.0 tự nhiên, đóng chai trực tiếp tại nguồn mỏ núi lửa năm 1957 ở 72 độ C.',
        options: [
          {
            id: 'k1-best',
            textEn: 'Vikoda is Vietnam’s rare natural alkaline mineral water with an innate pH of 9.0, bottled directly at our 1957 volcanic source at 72°C with zero chemical electrolysis.',
            textVi: 'Vikoda là nước khoáng kiềm thiên nhiên quý hiếm với pH 9.0 tự nhiên, đóng chai trực tiếp tại nguồn mỏ 1957 ở 72°C mà không cần điện phân.',
            isBest: true,
            score: 100,
            feedback: 'Xuất sắc! Đánh trúng tâm lý người Nhật coi trọng tính "nguyên bản thiên nhiên" (Natural & No artificial electrolysis).'
          },
          {
            id: 'k1-mid',
            textEn: 'Our water is very delicious and we sell it very cheaply in Vietnam.',
            textVi: 'Nước của chúng tôi uống rất ngon và bán rất rẻ ở Việt Nam.',
            isBest: false,
            score: 50,
            feedback: 'Quá phổ thông! Khách Nhật tìm kiếm giá trị sức khỏe và nguồn gốc di sản, không phải nước giá rẻ.'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Xử Lý Nghi Ngờ: Độ Bền Của Kiềm (Handling The Ionization Trap)',
        buyerQuestionEn: 'In Japan, ionized water loses its alkaline pH after 48 hours. How does Vikoda maintain pH 9.0 during ocean freight?',
        buyerQuestionVi: 'Ở Nhật, nước kiềm điện phân nhân tạo bị mất kiềm chỉ sau 48 giờ. Làm sao Vikoda giữ được pH 9.0 trong suốt quá trình vận chuyển đường biển?',
        buyerAudio: 'In Japan, ionized water loses its alkaline pH after 48 hours. How does Vikoda maintain pH 9.0 during ocean freight?',
        suggestedPitchEn: 'Because our alkalinity comes from natural bicarbonate minerals from Mother Earth, Vikoda maintains a stable pH of 9.0 for up to three years.',
        suggestedPitchVi: 'Vì độ kiềm của Vikoda kết tinh từ muối khoáng Bicarbonate tự nhiên trong lòng đất mẹ, nên độ pH 9.0 duy trì ổn định đến 3 năm.',
        options: [
          {
            id: 'k2-best',
            textEn: 'Because Vikoda’s alkalinity is naturally mineral-bonded from Mother Earth, our laboratory tests confirm a stable pH 9.0 for up to three full years across shipping temperatures.',
            textVi: 'Vì độ kiềm của Vikoda được khoáng hóa tự nhiên trong lòng đất mẹ, kiểm nghiệm thực tế khẳng định độ pH 9.0 duy trì bền bỉ suốt 3 năm bất chấp nhiệt độ vận chuyển.',
            isBest: true,
            score: 100,
            feedback: 'Hoàn hảo! Dập tắt ngay lo ngại về độ bền kiềm, giải thích rõ nguyên nhân "mineral-bonded".'
          },
          {
            id: 'k2-mid',
            textEn: 'We add some alkaline chemicals before closing the cap so it stays strong.',
            textVi: 'Chúng tôi pha thêm hóa chất tạo kiềm trước khi đóng nắp để kiềm không bị mất.',
            isBest: false,
            score: 20,
            feedback: 'Thảm họa! Vikoda cam kết 100% thiên nhiên, việc nói pha hóa chất sẽ làm mất hợp đồng ngay lập tức.'
          }
        ]
      },
      {
        roundNumber: 3,
        roundTitle: 'Chốt Deal Hợp Tác (The Closing Ask & Logistics)',
        buyerQuestionEn: 'We are interested in testing this with our QA lab. What are your terms for sending samples and initial trial orders?',
        buyerQuestionVi: 'Chúng tôi rất hứng thú kiểm định mẫu tại phòng lab Tokyo. Điều kiện gửi hàng mẫu và đơn thử nghiệm ban đầu ra sao?',
        buyerAudio: 'We are interested in testing this with our QA lab. What are your terms for sending samples and initial trial orders?',
        suggestedPitchEn: 'We are pleased to air-freight complimentary sample cartons with our certified lab reports, and we welcome your team to inspect our spring.',
        suggestedPitchVi: 'Chúng tôi hân hạnh gửi tặng thùng mẫu qua đường hàng không kèm phiếu kiểm nghiệm vi sinh, và kính mời đoàn Nhật Bản thăm mỏ Đảnh Thạnh.',
        options: [
          {
            id: 'k3-best',
            textEn: 'We will dispatch complimentary sample cases via air freight today alongside our ISO and HACCP dossiers. We also warmly invite you to visit our Danh Thanh sanctuary.',
            textVi: 'Chúng tôi sẽ gửi ngay mẫu thử bằng đường hàng không hôm nay cùng bộ hồ sơ ISO và HACCP. Chúng tôi cũng nồng nhiệt mời ngài đến thăm mỏ Đảnh Thạnh.',
            isBest: true,
            score: 100,
            feedback: 'Đỉnh cao đàm phán! Mời khách sang thăm mỏ nước khoáng là đòn tâm lý mạnh nhất khẳng định sự minh bạch và đẳng cấp của Vikoda.'
          },
          {
            id: 'k3-mid',
            textEn: 'You must transfer 100,000 dollars before we send anything.',
            textVi: 'Quý ngài phải chuyển khoản 100,000 đô trước khi chúng tôi gửi bất cứ thứ gì.',
            isBest: false,
            score: 30,
            feedback: 'Quá thô lỗ trong giao thương quốc tế! Luôn bắt đầu bằng mẫu thử chuyên nghiệp.'
          }
        ]
      }
    ]
  },
  {
    id: 'sarah',
    name: 'Ms. Sarah Jenkins',
    role: 'Global Procurement VP',
    company: 'Regal 5-Star International Hotels',
    flag: '🏨',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    objective: 'Tìm kiếm dòng nước khoáng chai thủy tinh sang trọng thay thế hàng nhập khẩu Châu Âu đắt đỏ và giảm 80% rác thải nhựa.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Mở Màn: Định Vị Chai Thủy Tinh Cao Cấp (Luxury Glass Aesthetic)',
        buyerQuestionEn: 'Our 5-star properties currently serve San Pellegrino and Evian. How can Vikoda match that dining table prestige?',
        buyerQuestionVi: 'Các khách sạn 5 sao của chúng tôi hiện dùng San Pellegrino và Evian. Làm sao Vikoda sánh được sự sang trọng trên bàn tiệc?',
        buyerAudio: 'Our 5-star properties currently serve San Pellegrino and Evian. How can Vikoda match that dining table prestige?',
        suggestedPitchEn: 'Vikoda offers luxury embossed glass bottles paired with 1957 heritage, reducing your carbon footprint by 85% at a far more competitive cost.',
        suggestedPitchVi: 'Vikoda mang đến chai thủy tinh cao cấp kết hợp di sản 1957, giảm 85% khí thải vận chuyển với mức giá cạnh tranh vượt trội.',
        options: [
          {
            id: 's1-best',
            textEn: 'Our bespoke luxury glass bottles are designed for Michelin-level fine dining, offering European-grade natural pH 9.0 while slashing your freight carbon footprint by 85%.',
            textVi: 'Dòng chai thủy tinh cao cấp của chúng tôi được thiết kế riêng cho chuẩn bàn tiệc Michelin, chất lượng khoáng kiềm pH 9.0 ngang tầm Châu Âu nhưng giảm 85% phát thải CO2.',
            isBest: true,
            score: 100,
            feedback: 'Tuyệt đỉnh! Đánh trúng cả 3 điểm: thẩm mỹ sang trọng, chất lượng tương đương và tiêu chí ESG xanh.'
          },
          {
            id: 's1-mid',
            textEn: 'Imported water is too expensive, you should use our cheap plastic bottles.',
            textVi: 'Nước nhập khẩu đắt quá, bà nên dùng chai nhựa giá rẻ của chúng tôi.',
            isBest: false,
            score: 30,
            feedback: 'Khách sạn 5 sao cấm dùng chai nhựa trên bàn tiệc cao cấp! Phải luôn pitch chai thủy tinh (Glass bottle).'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Kinh Tế Tuần Hoàn & Thu Hồi Vỏ Chai (Circular Economy)',
        buyerQuestionEn: 'What is your operational policy regarding empty glass bottle collection and sustainability?',
        buyerQuestionVi: 'Chính sách vận hành của Vikoda về thu hồi vỏ chai rỗng và phát triển bền vững như thế nào?',
        buyerAudio: 'What is your operational policy regarding empty glass bottle collection and sustainability?',
        suggestedPitchEn: 'We operate a complete circular bottle-return program, sanitizing and recycling containers to help you achieve your Zero-Waste certification.',
        suggestedPitchVi: 'Chúng tôi có quy trình thu hồi vỏ chai khép kín, khử khuẩn và tái tuần hoàn để giúp khách sạn đạt chứng chỉ Không Rác Thải.',
        options: [
          {
            id: 's2-best',
            textEn: 'We provide a seamless circular bottle-return logistics network, directly assisting your hotels in achieving strict Net-Zero and global green hospitality certifications.',
            textVi: 'Chúng tôi cung cấp mạng lưới logistics thu hồi vỏ chai tuần hoàn trọn gói, trực tiếp hỗ trợ khách sạn đạt chứng chỉ Net-Zero và Du lịch Xanh quốc tế.',
            isBest: true,
            score: 100,
            feedback: 'Quá thông minh! Khách sạn 5 sao toàn cầu đang chịu sức ép lớn về ESG, đề xuất này chốt đơn tức khắc.'
          },
          {
            id: 's2-mid',
            textEn: 'Once we deliver, we do not care about the empty bottles. Throw them in the trash.',
            textVi: 'Giao xong thì vỏ chai các vị tự vứt vào thùng rác, chúng tôi không quan tâm.',
            isBest: false,
            score: 20,
            feedback: 'Vi phạm nghiêm trọng chính sách bảo vệ môi trường của các chuỗi resort quốc tế.'
          }
        ]
      },
      {
        roundNumber: 3,
        roundTitle: 'Chốt Thử Nghiệm Tại 3 Khách Sạn Flagship (The Pilot Rollout)',
        buyerQuestionEn: 'We want to test Vikoda at our flagship rooftop restaurants before full chain rollout. Can you support staff training and sommelier tasting?',
        buyerQuestionVi: 'Chúng tôi muốn thử nghiệm Vikoda tại 3 nhà hàng tầng thượng trước khi nhân rộng toàn chuỗi. Vikoda có hỗ trợ đào tạo nhân viên và nếm thử cùng chuyên gia sommelier không?',
        buyerAudio: 'We want to test Vikoda at our flagship rooftop restaurants before full chain rollout. Can you support staff training and sommelier tasting?',
        suggestedPitchEn: 'Absolutely! Our brand ambassadors will conduct masterclasses for your staff and provide bespoke tasting kits for your sommeliers.',
        suggestedPitchVi: 'Chắc chắn rồi! Đại sứ thương hiệu của chúng tôi sẽ đào tạo trực tiếp nhân viên và cung cấp bộ thử nếm chuyên nghiệp cho các chuyên gia rượu vang.',
        options: [
          {
            id: 's3-best',
            textEn: 'Absolutely! Our senior brand ambassadors will conduct on-site masterclasses for your service staff and provide complimentary sommelier pairing kits for your wine directors.',
            textVi: 'Chắc chắn rồi! Đại sứ thương hiệu cấp cao của chúng tôi sẽ đào tạo trực tiếp tại chỗ cho nhân viên phục vụ và tặng bộ công cụ thử nếm chuyên biệt cho các giám đốc rượu vang.',
            isBest: true,
            score: 100,
            feedback: 'Đẳng cấp dịch vụ vượt trội! Hỗ trợ đào tạo tại chỗ là chìa khóa mở toang cánh cửa các chuỗi khách sạn 5 sao quốc tế.'
          },
          {
            id: 's3-mid',
            textEn: 'No, we only sell bottles. Training staff is your internal responsibility.',
            textVi: 'Không, chúng tôi chỉ bán chai nước. Đào tạo nhân viên là trách nhiệm nội bộ của bà.',
            isBest: false,
            score: 20,
            feedback: 'Thái độ thiếu hợp tác sẽ đánh mất hợp đồng triệu đô với chuỗi khách sạn 5 sao.'
          }
        ]
      }
    ]
  },
  {
    id: 'michael',
    name: 'Mr. Michael Chang',
    role: 'Beverage Director',
    company: 'Marina Bay Hospitality Group (Singapore)',
    flag: '🇸🇬',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    objective: 'Tìm kiếm dòng nước khoáng cao cấp cho chuỗi nhà hàng fine dining tại Singapore, yêu cầu thời gian giao hàng nhanh dưới 5 ngày.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Thời Gian Vận Chuyển Hàng Hải Tuyến Cát Lái - Singapore',
        buyerQuestionEn: 'Singapore relies heavily on quick restocking. How fast can you deliver from Vietnam to Jurong port?',
        buyerQuestionVi: 'Singapore phụ thuộc vào nguồn hàng bổ sung nhanh. Vikoda vận chuyển từ cảng Việt Nam đến cảng Jurong mất bao lâu?',
        buyerAudio: 'Singapore relies heavily on quick restocking. How fast can you deliver from Vietnam to Jurong port?',
        suggestedPitchEn: 'Shipping from Cat Lai port to Singapore takes only 3 to 4 days, with multiple feeder departures every single week.',
        suggestedPitchVi: 'Vận chuyển từ cảng Cát Lái sang Singapore chỉ mất từ 3 đến 4 ngày, với nhiều chuyến tàu khởi hành hàng tuần.',
        options: [
          {
            id: 'm1-best',
            textEn: 'Shipping from Cat Lai port to Singapore takes merely 3 to 4 days with weekly feeder departures, guaranteeing zero supply disruptions.',
            textVi: 'Hàng xuất từ cảng Cát Lái sang Singapore chỉ mất từ 3 đến 4 ngày đường biển với lịch tàu hàng tuần, cam kết không bao giờ đứt gãy chuỗi cung ứng.',
            isBest: true,
            score: 100,
            feedback: 'Cực kỳ chính xác! Lợi thế địa lý sát Singapore của Việt Nam là ưu thế áp đảo so với nguồn hàng mất 40 ngày lênh đênh từ Châu Âu.'
          },
          {
            id: 'm1-mid',
            textEn: 'Maybe one or two months, we are not very sure about ocean ships.',
            textVi: 'Có thể mất một hoặc hai tháng, chúng tôi không chắc lắm về tàu biển.',
            isBest: false,
            score: 30,
            feedback: 'Buyer Singapore sẽ hủy đàm phán ngay nếu bạn không nắm vững lịch tàu đường biển tuyến Đông Nam Á.'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Hương Vị Tự Nhiên & Kết Hợp Ẩm Thực Châu Á Cao Cấp',
        buyerQuestionEn: 'Many Asian diners dislike strong sulfur or heavy mineral aftertaste. What is Vikoda’s mouthfeel profile?',
        buyerQuestionVi: 'Nhiều thực khách Châu Á không thích vị khoáng gắt hoặc mùi lưu huỳnh nồng. Cảm nhận vòm họng của Vikoda như thế nào?',
        buyerAudio: 'Many Asian diners dislike strong sulfur or heavy mineral aftertaste. What is Vikoda’s mouthfeel profile?',
        suggestedPitchEn: 'Vikoda features a silky, naturally sweet, light mouthfeel that refreshes the palate without masking delicate culinary flavors.',
        suggestedPitchVi: 'Vikoda sở hữu hậu vị ngọt dịu thanh tao, êm ái tự nhiên giúp làm sạch vòm họng mà không át đi hương vị tinh tế của món ăn.',
        options: [
          {
            id: 'm2-best',
            textEn: 'Vikoda delivers a silky-smooth, naturally sweet mouthfeel with balanced bicarbonate minerality that gently cleanses the palate between rich Asian dishes.',
            textVi: 'Vikoda mang đến cảm giác thanh thoát mượt mà vòm họng, vị ngọt dịu tự nhiên với khoáng kiềm Bicarbonate giúp làm sạch vị giác hoàn hảo giữa các món ăn Châu Á.',
            isBest: true,
            score: 100,
            feedback: 'Chuẩn xác thuật ngữ F&B chuyên nghiệp: "cleanses the palate" (làm sạch vị giác) là từ khóa vàng của các sommelier.'
          },
          {
            id: 'm2-mid',
            textEn: 'Water is just water, it tastes the same as tap water.',
            textVi: 'Nước nào chả là nước, vị nó cũng giống như nước máy thôi.',
            isBest: false,
            score: 20,
            feedback: 'Tuyệt đối tránh nói "nước nào cũng giống nhau"; Vikoda là tinh hoa khoáng kiềm tự nhiên 1957.'
          }
        ]
      }
    ]
  },
  {
    id: 'fatima',
    name: 'Ms. Fatima Al-Mansoor',
    role: 'Chief Sourcing Officer',
    company: 'Gulf Wellness Trading (Dubai, UAE)',
    flag: '🇦🇪',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    objective: 'Tìm kiếm nguồn nước khoáng thiên nhiên đạt chuẩn Halal, chịu được nhiệt độ lưu kho 45°C tại Trung Đông mà không suy giảm chất lượng.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Chứng Chỉ Halal Quốc Tế & Quy Chuẩn Đóng Chai Vô Trùng',
        buyerQuestionEn: 'For Gulf markets, Halal compliance and sterile bottling are strictly audited. How do you certify your facilities?',
        buyerQuestionVi: 'Đối với thị trường Vùng Vịnh, chứng nhận Halal và quy trình chiết rót vô trùng được kiểm toán rất khắt khe. Vikoda chứng minh như thế nào?',
        buyerAudio: 'For Gulf markets, Halal compliance and sterile bottling are strictly audited. How do you certify your facilities?',
        suggestedPitchEn: 'Vikoda holds international Halal certification and operates sterile German bottling technology with zero human touch.',
        suggestedPitchVi: 'Vikoda đạt chứng nhận Halal quốc tế và vận hành dây chuyền công nghệ Đức vô trùng tuyệt đối không chạm tay người.',
        options: [
          {
            id: 'f1-best',
            textEn: 'Our spring sanctuary and automated German bottling plants hold full international Halal certification, operating in a sterile closed-loop with zero human contamination.',
            textVi: 'Mỏ khoáng và nhà máy tự động công nghệ Đức của chúng tôi đạt chứng chỉ Halal quốc tế đầy đủ, vận hành khép kín vô trùng 100% không tiếp xúc bàn tay người.',
            isBest: true,
            score: 100,
            feedback: 'Xuất sắc! Khẳng định chứng chỉ Halal và công nghệ khép kín không chạm (zero human contamination) tạo niềm tin tuyệt đối với các nhà nhập khẩu Trung Đông.'
          },
          {
            id: 'f1-mid',
            textEn: 'Water does not need Halal because it is liquid.',
            textVi: 'Nước là chất lỏng nên không cần chứng chỉ Halal.',
            isBest: false,
            score: 30,
            feedback: 'Sai lầm nghiêm trọng! Tại UAE và Saudi Arabia, nước đóng chai bắt buộc phải có chứng chỉ Halal về quy trình nguồn gốc và đóng nắp.'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Độ Bền Kiềm & Ổn Định Khoáng Chất Dưới Nhiệt Độ Cao 45°C',
        buyerQuestionEn: 'Warehouse temperatures in Dubai can reach 45°C during summer. Will the mineral profile or pH degrade?',
        buyerQuestionVi: 'Nhiệt độ kho bãi tại Dubai vào mùa hè có thể chạm 45°C. Thành phần khoáng chất hoặc độ pH có bị biến tính không?',
        buyerAudio: 'Warehouse temperatures in Dubai can reach 45 degrees Celsius during summer. Will the mineral profile or pH degrade?',
        suggestedPitchEn: 'Since Vikoda naturally erupts at 72°C from deep underground, it easily withstands 45°C desert storage with zero chemical degradation.',
        suggestedPitchVi: 'Vì nước khoáng Vikoda vốn phun trào tự nhiên từ lòng đất ở 72°C, nước hoàn toàn chịu được nhiệt độ sa mạc 45°C mà không bị biến tính hóa học.',
        options: [
          {
            id: 'f2-best',
            textEn: 'Our mineral water naturally emerges from 220 meters at 72°C, meaning its mineral structure has been heat-stabilized by Mother Earth and easily withstands 45°C summer warehousing.',
            textVi: 'Nước khoáng của chúng tôi phun trào từ lòng đất 220m ở 72°C, nghĩa là cấu trúc khoáng đã được tôi luyện nhiệt tự nhiên bởi Đất Mẹ và chịu được nhiệt độ kho bãi 45°C hoàn hảo.',
            isBest: true,
            score: 100,
            feedback: 'Lý lẽ khoa học không thể thuyết phục hơn! Dùng chính nhiệt độ tự nhiên 72°C của nguồn Đảnh Thạnh để đập tan nỗi lo nhiệt độ 45°C của sa mạc Dubai.'
          },
          {
            id: 'f2-mid',
            textEn: 'You must store it in an air-conditioned room or it will turn sour.',
            textVi: 'Bà phải cất nước trong phòng bật điều hòa nếu không nước sẽ bị chua.',
            isBest: false,
            score: 30,
            feedback: 'Chi phí bảo quản điều hòa sẽ khiến khách hàng từ chối nhập khẩu ngay lập tức.'
          }
        ]
      }
    ]
  }
];

export const PitchSimulatorModal: React.FC<PitchSimulatorModalProps> = ({
  isOpen,
  onClose,
  speechRate,
  onAwardXpAndGems
}) => {
  const [selectedPersona, setSelectedPersona] = useState<BuyerPersona>(BUYER_PERSONAS[0]);
  const [roundIdx, setRoundIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedVoiceText, setRecognizedVoiceText] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [isDealClosed, setIsDealClosed] = useState(false);

  if (!isOpen) return null;

  const currentRound = selectedPersona.rounds[roundIdx];

  const handlePlayBuyerSpeech = () => {
    playSound('click');
    playSpeech(currentRound.buyerAudio, speechRate, 'en-US');
  };

  const handleToggleMic = () => {
    if (isRecording) {
      finishSpeechRecognition();
    } else {
      setIsRecording(true);
      startSpeechRecognition(
        (text) => {
          setRecognizedVoiceText(text);
          setIsRecording(false);
          // auto-select best option if keyword matches
          setSelectedOptionId(currentRound.options[0].id);
          playSound('success');
        },
        () => setIsRecording(false)
      );
    }
  };

  const handleSelectOption = (optId: string) => {
    if (hasSubmitted) return;
    playSound('click');
    setSelectedOptionId(optId);
  };

  const handleSubmitRound = () => {
    if (!selectedOptionId) return;
    setHasSubmitted(true);
    const chosen = currentRound.options.find((o) => o.id === selectedOptionId);
    if (chosen?.isBest) {
      playSound('success');
      setTotalScore((prev) => prev + chosen.score);
    } else {
      playSound('wrong');
      setTotalScore((prev) => prev + (chosen?.score || 30));
    }
  };

  const handleNextRound = () => {
    playSound('click');
    if (roundIdx + 1 < selectedPersona.rounds.length) {
      setRoundIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasSubmitted(false);
      setRecognizedVoiceText('');
    } else {
      // Finished all rounds -> Deal Closed!
      setIsDealClosed(true);
      playSound('celebrate');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      onAwardXpAndGems(150, 40);
    }
  };

  const handleRestart = () => {
    setRoundIdx(0);
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setRecognizedVoiceText('');
    setTotalScore(0);
    setIsDealClosed(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-sky-100 shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0072CE] to-cyan-500 p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-black tracking-tight">Giả Lập Pitching Quốc Tế Thực Chiến</h3>
              <p className="text-[10px] text-sky-100 font-semibold">Tập dượt đàm phán trực tiếp với Buyer & Đối Tác Ngoại Quốc</p>
            </div>
          </div>
          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Persona Selector Tabs: Horizontally scrollable on mobile */}
        {!isDealClosed && (
          <div className="bg-slate-100/90 p-2 flex gap-2 border-b border-slate-200 overflow-x-auto no-scrollbar select-none">
            {BUYER_PERSONAS.map((p) => {
              const isSel = selectedPersona.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedPersona(p);
                    handleRestart();
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 min-w-[130px] sm:flex-1 cursor-pointer ${
                    isSel 
                      ? 'bg-white text-slate-900 shadow-xs ring-1 ring-sky-300 font-black' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span className="text-xl shrink-0">{p.flag}</span>
                  <div className="text-left min-w-0">
                    <span className="block text-[11px] font-black truncate">{p.name}</span>
                    <span className="text-[9px] text-slate-500 block truncate">{p.company}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* MAIN BODY */}
        <div className="p-5">
          {!isDealClosed ? (
            <div className="space-y-4">
              
              {/* Buyer Question Card */}
              <div className="bg-sky-50/80 rounded-2xl p-4 border border-sky-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={selectedPersona.avatar}
                      alt={selectedPersona.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-sky-400 shadow-xs"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-black text-slate-900">{selectedPersona.name}</span>
                        <span className="text-xs">{selectedPersona.flag}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold">{selectedPersona.role}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlayBuyerSpeech}
                    className="p-2 rounded-xl bg-white text-[#0066CC] hover:bg-sky-100 shadow-2xs border border-sky-200 flex items-center space-x-1 text-xs font-bold cursor-pointer"
                    title="Nghe đối tác nói"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-[10px]">Nghe câu hỏi</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-black text-[#0072CE] uppercase tracking-wider block">
                    Vòng {roundIdx + 1}/{selectedPersona.rounds.length}: {currentRound.roundTitle}
                  </span>
                  <p className="text-sm font-black text-slate-900 leading-snug">
                    "{currentRound.buyerQuestionEn}"
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    {currentRound.buyerQuestionVi}
                  </p>
                </div>
              </div>

              {/* Your Pitch Response Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center space-x-1">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Lựa chọn phương án Pitching tối ưu:</span>
                  </span>

                  {/* Speech to text practice button */}
                  <button
                    onClick={handleToggleMic}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center space-x-1 transition-all cursor-pointer ${
                      isRecording
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Mic className="w-3 h-3" />
                    <span>{isRecording ? 'Đang lắng nghe...' : 'Luyện nói bằng Mic'}</span>
                  </button>
                </div>

                {recognizedVoiceText && (
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium animate-fade-in">
                    🎤 Giọng nói nhận diện: "{recognizedVoiceText}"
                  </div>
                )}

                {/* Option Cards */}
                <div className="space-y-2.5">
                  {currentRound.options.map((opt) => {
                    const isSel = selectedOptionId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        disabled={hasSubmitted}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                          isSel
                            ? 'border-sky-500 bg-sky-50/60 shadow-xs'
                            : 'border-slate-200 hover:border-sky-300 bg-white'
                        }`}
                      >
                        <p className="text-xs font-bold text-slate-900 leading-relaxed">
                          {opt.textEn}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          {opt.textVi}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action: Submit or Next */}
              {!hasSubmitted ? (
                <button
                  disabled={!selectedOptionId}
                  onClick={handleSubmitRound}
                  className="w-full py-3 rounded-2xl bg-[#0072CE] hover:bg-[#005A9C] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-black shadow-md transition-all cursor-pointer"
                >
                  🚀 Trình Bày Luận Điểm Với Đối Tác
                </button>
              ) : (
                <div className="space-y-3 animate-fade-in">
                  {/* Feedback Box */}
                  {(() => {
                    const chosen = currentRound.options.find((o) => o.id === selectedOptionId);
                    return (
                      <div className={`p-3.5 rounded-2xl text-xs ${chosen?.isBest ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-amber-50 border border-amber-200 text-amber-900'}`}>
                        <span className="font-black block mb-0.5">
                          {chosen?.isBest ? '🌟 Đối Tác Rất Ấn Tượng (+100 điểm)!' : '⚠️ Đối tác chưa thỏa mãn (+50 điểm)'}
                        </span>
                        <p className="text-[11px] leading-relaxed">{chosen?.feedback}</p>
                      </div>
                    );
                  })()}

                  <button
                    onClick={handleNextRound}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xs font-black shadow-md flex items-center justify-center space-x-1.5 cursor-pointer active:scale-98"
                  >
                    <span>{roundIdx + 1 === selectedPersona.rounds.length ? 'Xem Kết Quả Đàm Phán' : 'Vòng tiếp theo'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* DEAL CLOSED STATE */
            <div className="text-center py-5 space-y-4 animate-scale-up">
              <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
                🤝
              </div>

              <div>
                <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">
                  Negotiation Master
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  DEAL CLOSED! CHỐT HỢP ĐỒNG THÀNH CÔNG!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Bạn đã thuyết phục thành công đối tác {selectedPersona.name} ({selectedPersona.company}) với tổng điểm tuyệt đối!
                </p>
              </div>

              {/* Deal Summary Certificate */}
              <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-50 to-sky-50 border-2 border-amber-300 max-w-xs mx-auto space-y-2">
                <div className="flex items-center justify-center space-x-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-2xl font-black text-[#005A9C]">
                  {totalScore} / {selectedPersona.rounds.length * 100} Điểm
                </div>
                <p className="text-[11px] font-bold text-slate-600">
                  Thưởng: +150 XP • +40 Ngọc Khoáng 💎
                </p>
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  onClick={handleRestart}
                  className="flex-1 py-3 rounded-2xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Pitch lại với khách khác</span>
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    onClose();
                  }}
                  className="flex-1 py-3 rounded-2xl bg-[#0072CE] hover:bg-[#005A9C] text-white text-xs font-black shadow-md cursor-pointer"
                >
                  Hoàn Thành
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

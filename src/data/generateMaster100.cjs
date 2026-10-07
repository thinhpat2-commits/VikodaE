const fs = require('fs');
const path = require('path');

// 100 Unit Titles and Specs (5 Levels x 20 Units = 100 Units)
const UNIT_SPECS = [
  // ================= LEVEL A1 (Units 1 - 20) =================
  // Căn bản sinh tồn: Chào hỏi, chỉ đường, đếm số, nhận diện chai, xã giao văn phòng đơn giản
  { num: 1, lvl: 'A1', icon: '👋', color: 'emerald', title: 'Chào Hỏi & Tự Giới Thiệu Bản Thân', sub: 'Mở lời tự tin, giới thiệu tên và vị trí tại Vikoda' },
  { num: 2, lvl: 'A1', icon: '💧', color: 'emerald', title: 'Mời Nước & Rót Nước Lịch Thiệp', sub: 'Đưa chai nước Vikoda mát lạnh và mời khách dùng nước' },
  { num: 3, lvl: 'A1', icon: '🧭', color: 'emerald', title: 'Chỉ Đường Cơ Bản Trong Tòa Nhà', sub: 'Hướng dẫn khách di chuyển lịch sự trong văn phòng' },
  { num: 4, lvl: 'A1', icon: '📞', color: 'emerald', title: 'Trực Điện Thoại & Nối Máy Lịch Sự', sub: 'Tiếp nhận cuộc gọi và xin giữ máy chờ chuyển tiếp' },
  { num: 5, lvl: 'A1', icon: '🥗', color: 'emerald', title: 'Rủ Đi Ăn Trưa & Giao Lưu Đồng Nghiệp', sub: 'Cách rủ đồng nghiệp đi ăn trưa và trò chuyện thân mật' },
  { num: 6, lvl: 'A1', icon: '💬', color: 'emerald', title: 'Nghệ Thuật Small Talk Nơi Công Sở', sub: 'Mở lời duyên dáng về thời tiết, thể thao và ngày cuối tuần' },
  { num: 7, lvl: 'A1', icon: '📇', color: 'emerald', title: 'Nghi Thức Trao & Nhận Danh Thiếp', sub: 'Quy tắc 2 tay, đọc danh thiếp và mở lời liên lạc' },
  { num: 8, lvl: 'A1', icon: '🏢', color: 'emerald', title: 'Chào Đón Khách Đến Thăm Văn Phòng', sub: 'Mẫu câu chào hỏi, mời khách ngồi và hỏi thăm đường đi' },
  { num: 9, lvl: 'A1', icon: '🍾', color: 'emerald', title: 'Nhận Diện Dòng Chai Đơn Giản', sub: 'Tên gọi các loại chai PET 350ml, 500ml và bình 19L' },
  { num: 10, lvl: 'A1', icon: '🔢', color: 'emerald', title: 'Đếm Số Lượng Đơn Giản', sub: 'Đếm số chai trên bàn, đếm số thùng mẫu thực tế' },
  { num: 11, lvl: 'A1', icon: '📅', color: 'emerald', title: 'Đọc Giờ Giấc, Thứ Ngày Tháng', sub: 'Hỏi ngày giờ thuận tiện và xác nhận giờ hẹn' },
  { num: 12, lvl: 'A1', icon: '🍽️', color: 'emerald', title: 'Phép Lịch Sự Trong Bữa Ăn Nhẹ', sub: 'Quy tắc mời đồ uống và cảm ơn khi dùng bữa cùng đồng nghiệp' },
  { num: 13, lvl: 'A1', icon: '🏨', color: 'emerald', title: 'Đặt Bàn Ăn & Khách Sạn Cho Khách', sub: 'Hỗ trợ đặt chỗ ăn ở chu đáo cho đối tác nước ngoài' },
  { num: 14, lvl: 'A1', icon: '🚗', color: 'emerald', title: 'Chỉ Đường Từ Sân Bay Đến Khách Sạn', sub: 'Chỉ hướng rẽ, khoảng cách km và phương tiện di chuyển' },
  { num: 15, lvl: 'A1', icon: '🏷️', color: 'emerald', title: 'Nhận Diện Màu Sắc & Logo Nhãn Chai', sub: 'Nhận diện màu xanh Cyan và biểu tượng thương hiệu' },
  { num: 16, lvl: 'A1', icon: '📦', color: 'emerald', title: 'Quy Cách Đóng Thùng Đơn Giản', sub: 'Mô tả số chai trên lốc, trọng lượng thùng cơ bản' },
  { num: 17, lvl: 'A1', icon: '🙏', color: 'emerald', title: 'Mẫu Câu Nhờ Vả & Cảm Ơn Nơi Làm Việc', sub: 'Mẫu câu nhờ giúp đỡ, xin lỗi và cảm ơn chân thành' },
  { num: 18, lvl: 'A1', icon: '🤝', color: 'emerald', title: 'Tiễn Khách Ra Xe & Chào Tạm Biệt', sub: 'Nghi thức tiễn khách ra tận xe và tặng quà lưu niệm' },
  { num: 19, lvl: 'A1', icon: '💎', color: 'emerald', title: 'Khái Niệm Nước Tự Nhiên Dễ Hiểu Nhất', sub: 'Mô tả nguồn nước mát lành thanh khiết cho người mới' },
  { num: 20, lvl: 'A1', icon: '🎓', color: 'emerald', title: 'Mốc Tốt Nghiệp Giao Tiếp Sinh Tồn A1', sub: 'Tổng duyệt 20 tình huống nhập môn trước khi lên cấp' },

  // ================= LEVEL A2 (Units 21 - 40) =================
  // Vận hành cơ bản: Email ngắn, lịch trình, nội quy, an toàn lao động, kiểm kiện hàng
  { num: 21, lvl: 'A2', icon: '👥', color: 'cyan', title: 'Phòng Nhân Sự & Văn Hóa Doanh Nghiệp', sub: 'Nội quy công ty, phúc lợi và giá trị cốt lõi Vikoda' },
  { num: 22, lvl: 'A2', icon: '✉️', color: 'cyan', title: 'Soạn Thảo Email Công Sở Chuyên Nghiệp', sub: 'Cấu trúc thư điện tử chuẩn quốc tế, tiêu đề và chữ ký' },
  { num: 23, lvl: 'A2', icon: '📣', color: 'cyan', title: 'Phòng Marketing & Định Vị Thương Hiệu', sub: 'Chiến dịch truyền thông, mạng xã hội và hình ảnh sản phẩm' },
  { num: 24, lvl: 'A2', icon: '💼', color: 'cyan', title: 'Mục Tiêu Làm Việc & Phân Công Nhiệm Vụ', sub: 'Phân chia chỉ tiêu công việc và phối hợp đội ngũ' },
  { num: 25, lvl: 'A2', icon: '🚛', color: 'cyan', title: 'Kho Vận, Hậu Cần & Đội Xe Giao Hàng', sub: 'Sắp xếp xe tải, lịch giao hàng và chứng từ xuất kho' },
  { num: 26, lvl: 'A2', icon: '👥', color: 'cyan', title: 'Tham Gia & Báo Cáo Cuộc Họp Nội Bộ', sub: 'Trình bày ý kiến, đóng góp phản hồi và thảo luận' },
  { num: 27, lvl: 'A2', icon: '📋', color: 'cyan', title: 'Kiểm Kê Tồn Kho & Xếp Dỡ Pallet', sub: 'Quy tắc xếp hàng chuẩn, kiểm đếm số lượng thực tế' },
  { num: 28, lvl: 'A2', icon: '🦺', color: 'cyan', title: 'An Toàn Lao Động & Thiết Bị Bảo Hộ', sub: 'Tuân thủ mũ bảo hiểm, giày bảo hộ và găng tay trong xưởng' },
  { num: 29, lvl: 'A2', icon: '📝', color: 'cyan', title: 'Báo Cáo Ca Làm Việc Hàng Ngày', sub: 'Ghi nhận sản lượng ca sản xuất và bàn giao công việc' },
  { num: 30, lvl: 'A2', icon: '⚡', color: 'cyan', title: 'Giải Quyết Giao Hàng Khẩn Cấp', sub: 'Phối hợp xử lý đơn hàng gấp cho chuỗi khách hàng' },
  { num: 31, lvl: 'A2', icon: '🚶', color: 'cyan', title: 'Chuẩn Bị Tiếp Đón Đoàn Khảo Sát', sub: 'Kế hoạch tiếp đoàn kiểm tra và khách tham quan nhà máy' },
  { num: 32, lvl: 'A2', icon: '📑', color: 'cyan', title: 'Soạn Thảo Biên Bản Cuộc Họp', sub: 'Tóm tắt các quyết định và đầu mối chịu trách nhiệm' },
  { num: 33, lvl: 'A2', icon: '🏬', color: 'cyan', title: 'Hỗ Trợ Tiếp Thị Kệ Trưng Bày Hàng Hóa', sub: 'Nhận diện và sắp xếp vị trí chai trên kệ điểm bán' },
  { num: 34, lvl: 'A2', icon: '📦', color: 'cyan', title: 'Xử Lý Thùng Hàng Móp Méo Vận Chuyển', sub: 'Báo cáo rách thùng, ẩm ướt và lập biên bản kho' },
  { num: 35, lvl: 'A2', icon: '🚗', color: 'cyan', title: 'Chỉ Đường Đến Nhà Máy Đảnh Thạnh', sub: 'Hướng dẫn di chuyển từ Nha Trang đến mỏ nước khoáng Diên Khánh' },
  { num: 36, lvl: 'A2', icon: '🏷️', color: 'cyan', title: 'Kiểm Tra Hạn Sử Dụng & Mã Lô Hàng', sub: 'Đọc đúng ngày sản xuất (MFG) và hạn sử dụng (EXP) trên nắp' },
  { num: 37, lvl: 'A2', icon: '🥂', color: 'cyan', title: 'Nhận Diện Dòng Chai Thủy Tinh Cao Cấp', sub: 'Mô tả chai thủy tinh sang trọng nắp vương miện' },
  { num: 38, lvl: 'A2', icon: '🌿', color: 'cyan', title: 'Không Gian Xanh Sinh Thái Mỏ Nước', sub: 'Mô tả cây xanh và môi trường trong lành quanh mỏ khoáng' },
  { num: 39, lvl: 'A2', icon: '🍹', color: 'cyan', title: 'Giới Thiệu Đảnh Thạnh Có Ga Truyền Thống', sub: 'Nước khoáng có ga lâu đời sảng khoái từ năm 1957' },
  { num: 40, lvl: 'A2', icon: '🎖️', color: 'cyan', title: 'Mốc Tốt Nghiệp Vận Hành Đa Phòng Ban A2', sub: 'Bài kiểm tra năng lực phối hợp doanh nghiệp toàn diện' },

  // ================= LEVEL B1 (Units 41 - 60) =================
  // Đại sứ thương hiệu: 4 con số vàng, kiềm pH 9.0, tour mỏ, lịch sử 1957, thuyết trình PowerPoint
  { num: 41, lvl: 'B1', icon: '🏞️', color: 'blue', title: 'Thuyết Minh Tour Mỏ Đảnh Thạnh', sub: 'Dẫn khách thăm giếng khoan sâu 220m và quy trình khai thác khép kín' },
  { num: 42, lvl: 'B1', icon: '🏅', color: 'blue', title: '4 Con Số Vàng Nguồn Khoáng 1957', sub: 'Thuộc lòng pH 9.0, độ sâu 220m, 72°C và vành đai 35ha' },
  { num: 43, lvl: 'B1', icon: '🔬', color: 'blue', title: 'Phân Biệt Nước Khoáng vs Nước Lọc', sub: 'Phân tích ranh giới "Natural Mineral water" vs "Purified water"' },
  { num: 44, lvl: 'B1', icon: '📜', color: 'blue', title: 'Di Sản Lịch Sử Mỏ Khoáng Từ Năm 1957', sub: 'Kể lại hành trình khai phá nguồn nước quý giá ngàn năm' },
  { num: 45, lvl: 'B1', icon: '👨‍⚕️', color: 'blue', title: 'Bác Sĩ Pháp H. Fronte & Nghiên Cứu Vi Sinh', sub: 'Dẫn chứng tài liệu nghiên cứu y khoa giá trị lịch sử' },
  { num: 46, lvl: 'B1', icon: '⚛️', color: 'blue', title: 'Khoa Học Muối Bicarbonate & Bền Kiềm', sub: 'Chứng minh độ pH 9.0 duy trì bền bỉ suốt 3 năm trong chai' },
  { num: 47, lvl: 'B1', icon: '⚖️', color: 'blue', title: 'So Sánh Kiềm Tự Nhiên vs Điện Phân', sub: 'Chỉ rõ kiềm nhân tạo mất tính kiềm sau 48 giờ mở nắp' },
  { num: 48, lvl: 'B1', icon: '🌋', color: 'blue', title: 'Khai Thác Độ Sâu 220m Qua Vỉa Khoáng', sub: 'Mô tả lớp địa chất bazan ngàn năm lọc sạch giọt nước' },
  { num: 49, lvl: 'B1', icon: '♨️', color: 'blue', title: 'Nhiệt Độ Vòi Phun 72°C Tại Nguồn', sub: 'Khẳng định độ tinh khiết vô trùng nhiệt từ lòng đất mẹ' },
  { num: 50, lvl: 'B1', icon: '🌿', color: 'blue', title: 'Vành Đai Xanh Sinh Thái Nghiêm Ngặt 35ha', sub: 'Cam kết bảo vệ môi trường mỏ không hóa chất nông nghiệp' },
  { num: 51, lvl: 'B1', icon: '🏥', color: 'blue', title: 'Bác Bỏ Tin Đồn Nước Khoáng Gây Sỏi Thận', sub: 'Dẫn giải khoa học muối khoáng hòa tan vi lượng an toàn' },
  { num: 52, lvl: 'B1', icon: '📑', color: 'blue', title: 'Trình Bày Phiếu Kiểm Nghiệm Viện Pasteur', sub: 'Giải thích các chỉ số an toàn vi sinh đạt chuẩn quốc tế' },
  { num: 53, lvl: 'B1', icon: '🖥️', color: 'blue', title: 'Kỹ Năng Thuyết Trình Dự Án PowerPoint', sub: 'Mở đầu ấn tượng, chuyển ý mượt mà và nhấn mạnh số liệu' },
  { num: 54, lvl: 'B1', icon: '❓', color: 'blue', title: 'Làm Chủ Phần Hỏi Đáp Q&A Cân Não', sub: 'Bình tĩnh phản hồi các câu hỏi hóc búa của chuyên gia' },
  { num: 55, lvl: 'B1', icon: '🎧', color: 'blue', title: 'Xử Lý Phàn Nàn Của Khách Hàng', sub: 'Lắng nghe thấu cảm và đưa ra giải pháp khắc phục ngay' },
  { num: 56, lvl: 'B1', icon: '📖', color: 'blue', title: 'Kỹ Thuật Kể Câu Chuyện Thương Hiệu', sub: 'Truyền cảm hứng về giọt "Ngọc Trong Đá" của Đảnh Thạnh' },
  { num: 57, lvl: 'B1', icon: '🍹', color: 'blue', title: 'Đảnh Thạnh Có Ga & Nghệ Thuật Pha Chế', sub: 'Công thức Mocktail và Cocktail khoáng sảng khoái' },
  { num: 58, lvl: 'B1', icon: '🎪', color: 'blue', title: 'Gian Hàng Hội Chợ Triển Lãm F&B', sub: 'Mời khách thử nước và phát tài liệu giới thiệu sản phẩm' },
  { num: 59, lvl: 'B1', icon: '🍽️', color: 'blue', title: 'Nghi Thức Dùng Tiệc Với Đối Tác Cấp Cao', sub: 'Quy tắc mời rượu, nâng ly và kết nối ngoại giao thân tình' },
  { num: 60, lvl: 'B1', icon: '🏆', color: 'blue', title: 'Mốc Tốt Nghiệp Đại Sứ Thương Hiệu B1', sub: 'Sát hạch toàn diện kỹ năng thuyết trình và bảo vệ giá trị' },

  // ================= LEVEL B2 (Units 61 - 80) =================
  // Đàm phán thương mại & Kỹ thuật chuyên sâu: Hóa đơn VAT, Krones, ISO/HACCP, TDS, QA/QC, HORECA
  { num: 61, lvl: 'B2', icon: '🎯', color: 'purple', title: 'Chào Hàng B2B Cho Đại Lý & Nhà Phân Phối', sub: 'Trình bày chính sách hoa hồng và điều kiện hợp tác dài hạn' },
  { num: 62, lvl: 'B2', icon: '🏨', color: 'purple', title: 'Đột Phá Kênh HORECA Khách Sạn 5 Sao', sub: 'Thuyết phục GM và F&B Director đưa chai thủy tinh lên bàn tiệc' },
  { num: 63, lvl: 'B2', icon: '🛡️', color: 'purple', title: 'Xử Lý Phản Bác Giá Đắt Của Đối Tác', sub: 'Bẻ gãy so sánh với nước lọc rẻ tiền bằng phân tích giá trị' },
  { num: 64, lvl: 'B2', icon: '💰', color: 'purple', title: 'Bảo Vệ Biên Lợi Nhuận & Không Hạ Giá Vội', sub: 'Giữ vững định vị cao cấp, thay thế bằng hỗ trợ marketing' },
  { num: 65, lvl: 'B2', icon: '📊', color: 'purple', title: 'Phòng Kế Toán & Hóa Đơn Chứng Từ VAT', sub: 'Xử lý hóa đơn VAT, thanh toán chi phí và công nợ Net 30' },
  { num: 66, lvl: 'B2', icon: '🏭', color: 'purple', title: 'Dây Chuyền Vô Trùng Krones Đức', sub: 'Giới thiệu công nghệ chiết rót tốc độ cao hiện đại nhất' },
  { num: 67, lvl: 'B2', icon: '🛡️', color: 'purple', title: 'Tiêu Chuẩn Quốc Tế ISO 22000 & HACCP', sub: 'Chứng chỉ an toàn thực phẩm bảo chứng cho chất lượng' },
  { num: 68, lvl: 'B2', icon: '🌡️', color: 'purple', title: 'Đo Chỉ Số TDS & Độ Cứng Nước Khoáng', sub: 'Giải thích tổng lượng chất rắn hòa tan và khoáng nhẹ' },
  { num: 69, lvl: 'B2', icon: '🧪', color: 'purple', title: 'Phòng Quản Lý Chất Lượng QA/QC', sub: 'Tiêu chuẩn kiểm nghiệm vi sinh và giám sát an toàn' },
  { num: 70, lvl: 'B2', icon: '🔧', color: 'purple', title: 'Bảo Trì Thiết Bị & Khắc Phục Sự Cố', sub: 'Báo cáo hỏng hóc máy móc và quy trình sửa chữa' },
  { num: 71, lvl: 'B2', icon: '📉', color: 'purple', title: 'Đàm Phán Chiết Khấu Theo Sản Lượng Volume', sub: 'Cơ chế bậc thang chiết khấu thúc đẩy đơn hàng lớn' },
  { num: 72, lvl: 'B2', icon: '🤝', color: 'purple', title: 'Thương Thảo Hạn Mức Tín Dụng & Thanh Toán', sub: 'Đàm phán tỷ lệ đặt cọc 30% và thanh toán trước giao hàng' },
  { num: 73, lvl: 'B2', icon: '🛒', color: 'purple', title: 'Đưa Hàng Vào Chuỗi Siêu Thị Hiện Đại MT', sub: 'Thương thảo phí mở mã hàng và chương trình khuyến mãi kệ' },
  { num: 74, lvl: 'B2', icon: '🔒', color: 'purple', title: 'Đàm Phán Quyền Phân Phối Độc Quyền', sub: 'Gắn độc quyền vùng với chỉ tiêu doanh số cam kết hàng quý' },
  { num: 75, lvl: 'B2', icon: '⚔️', color: 'purple', title: 'Đối Đầu Trực Diện Evian & San Pellegrino', sub: 'So sánh lợi thế khoáng kiềm tự nhiên pH 9.0 và carbon thấp' },
  { num: 76, lvl: 'B2', icon: '📜', color: 'purple', title: 'Soạn Thảo Hợp Đồng Nguyên Tắc Mua Bán', sub: 'Điều khoản giao hàng, đổi trả và trách nhiệm các bên' },
  { num: 77, lvl: 'B2', icon: '🔄', color: 'purple', title: 'Chiến Lược Tái Ký & Giữ Chân Khách B2B', sub: 'Chương trình tri ân nhà phân phối đạt doanh số vàng' },
  { num: 78, lvl: 'B2', icon: '⏱️', color: 'purple', title: 'Kỹ Thuật Đóng Deal Trong 48 Giờ', sub: 'Tạo cảm giác cấp bách bằng giới hạn thời gian ưu đãi' },
  { num: 79, lvl: 'B2', icon: '✍️', color: 'purple', title: 'Lễ Ký Kết Hợp Tác Phân Phối Chiến Lược', sub: 'Nghi thức bắt tay, phát biểu và công bố với báo giới' },
  { num: 80, lvl: 'B2', icon: '👑', color: 'purple', title: 'Mốc Tốt Nghiệp Bậc Thầy Bán Hàng B2B', sub: 'Kỳ thi sát hạch toàn bộ kỹ năng đàm phán hợp đồng thương mại' },

  // ================= LEVEL C1-C2 (Units 81 - 100) =================
  // Xuất khẩu toàn cầu & C-Suite: Incoterms, L/C, FDA, SIAC, ESG, M&A
  { num: 81, lvl: 'C1-C2', icon: '🚢', color: 'amber', title: 'Incoterms 2020: FOB Cảng Quy Nhơn vs CIF', sub: 'Phân định rõ ranh giới rủi ro và chi phí vận chuyển đường biển' },
  { num: 82, lvl: 'C1-C2', icon: '🏦', color: 'amber', title: 'Thư Tín Dụng L/C Không Hủy Ngang Trả Ngay', sub: 'Soạn thảo điều khoản thanh toán ngân hàng quốc tế bảo mật' },
  { num: 83, lvl: 'C1-C2', icon: '📜', color: 'amber', title: 'Bộ Chứng Từ Xuất Khẩu & Vận Đơn B/L', sub: 'Kiểm tra Bill of Lading, Hóa đơn thương mại và C/O form' },
  { num: 84, lvl: 'C1-C2', icon: '⚓', color: 'amber', title: 'Bảo Hiểm Hàng Hóa Đường Biển Mức A (ICC A)', sub: 'Bảo hiểm rủi ro toàn diện container chìm đắm hoặc thất lạc' },
  { num: 85, lvl: 'C1-C2', icon: '🌪️', color: 'amber', title: 'Điều Khoản Bất Khả Kháng Force Majeure', sub: 'Bảo vệ quyền lợi pháp lý khi bão lũ, chiến tranh cản trở giao hàng' },
  { num: 86, lvl: 'C1-C2', icon: '🌐', color: 'amber', title: 'Thiết Lập Mạng Lưới Phân Phối Toàn Cầu', sub: 'Chiến lược tìm đối tác Master Distributor tại Nhật và Châu Âu' },
  { num: 87, lvl: 'C1-C2', icon: '💧', color: 'amber', title: 'Xử Lý Khiếu Nại Container Độ Ẩm Trên Biển', sub: 'Giải quyết kỹ thuật chống đọng sương và bảo vệ nhãn chai' },
  { num: 88, lvl: 'C1-C2', icon: '📑', color: 'amber', title: 'Thông Quan & Tiêu Chuẩn FDA / Nhật Bản', sub: 'Hồ sơ kiểm dịch thực phẩm nghiêm ngặt của Bộ Y Tế Nhật' },
  { num: 89, lvl: 'C1-C2', icon: '⚖️', color: 'amber', title: 'Trọng Tài Thương Mại Quốc Tế SIAC / VIAC', sub: 'Điều khoản tài phán giải quyết tranh chấp hợp đồng công bằng' },
  { num: 90, lvl: 'C1-C2', icon: '🏢', color: 'amber', title: 'Thương Thảo Hợp Đồng Liên Doanh Quốc Tế', sub: 'Góp vốn, chia sẻ lợi nhuận và chuyển giao công nghệ' },
  { num: 91, lvl: 'C1-C2', icon: '🎤', color: 'amber', title: 'Phát Biểu Khai Mạc Tại Hội Chợ Quốc Tế', sub: 'Bài diễn văn truyền cảm hứng trước cộng đồng doanh nhân toàn cầu' },
  { num: 92, lvl: 'C1-C2', icon: '🇻🇳', color: 'amber', title: 'Chiến Lược Định Vị Nước Khoáng Quốc Gia', sub: 'Đưa thương hiệu mỏ Đảnh Thạnh sánh vai cường quốc nước khoáng' },
  { num: 93, lvl: 'C1-C2', icon: '🚨', color: 'amber', title: 'Quản Trị Khủng Hoảng Truyền Thông Quốc Tế', sub: 'Họp báo bình tĩnh, thông cáo sự thật và bảo vệ giá trị cốt lõi' },
  { num: 94, lvl: 'C1-C2', icon: '🤝', color: 'amber', title: 'Đàm Phán Hợp Đồng Độc Quyền Châu Lục', sub: 'Hợp đồng xuất khẩu triệu thùng sang hệ thống siêu thị châu Á' },
  { num: 95, lvl: 'C1-C2', icon: '🔮', color: 'amber', title: 'Triết Lý Lãnh Đạo "Ngọc Trong Đá" C-Suite', sub: 'Mài giũa kỷ luật thép và xây dựng đội ngũ kiệt xuất' },
  { num: 96, lvl: 'C1-C2', icon: '🌳', color: 'amber', title: 'Quản Trị Phát Triển Bền Vững ESG Toàn Diện', sub: 'Báo cáo tác động môi trường và trách nhiệm xã hội tập đoàn' },
  { num: 97, lvl: 'C1-C2', icon: '🌏', color: 'amber', title: 'Đại Hội Cổ Đông & Đối Tác Chiến Lược Toàn Cầu', sub: 'Công bố kết quả tăng trưởng doanh thu xuất khẩu vượt bậc' },
  { num: 98, lvl: 'C1-C2', icon: '📈', color: 'amber', title: 'Định Giá Thương Hiệu & Chiến Lược M&A', sub: 'Nâng tầm giá trị tài sản vô hình của nguồn mỏ Đảnh Thạnh' },
  { num: 99, lvl: 'C1-C2', icon: '🖋️', color: 'amber', title: 'Lễ Ký Kết Ngoại Giao Thương Mại Cấp Quốc Gia', sub: 'Nghi thức vinh danh sản phẩm đạt Thương Hiệu Quốc Gia Việt Nam' },
  { num: 100, lvl: 'C1-C2', icon: '🎓', color: 'amber', title: 'Đại Lễ Tốt Nghiệp Lãnh Đạo C-Suite Toàn Năng', sub: 'Cấp Chứng Chỉ Tinh Hoa Ngoại Giao Thương Hiệu Vikoda Toàn Cầu' }
];

console.log('Total unit specifications:', UNIT_SPECS.length);
fs.writeFileSync('src/data/unitSpecs.json', JSON.stringify(UNIT_SPECS, null, 2));
console.log('Saved unitSpecs.json successfully!');

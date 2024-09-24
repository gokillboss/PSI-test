const nailQuestions = [
  {
    questionText: "Những loại nào sau đây tượng trưng cho thuốc tẩy trùng?",
    options: [
      { text: "Thuốc tẩy dùng trong nhà", isCorrect: true },
      { text: "Nước ấm", isCorrect: false },
      { text: "Tia tử ngoại", isCorrect: false },
      { text: "Xà phòng khử trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Chăm sóc móng tay cơ bản, bước tiếp theo định hình móng là gì?",
    options: [
      { text: "Tẩy sơn cũ", isCorrect: false },
      { text: "Làm sạch phần dưới đầu móng", isCorrect: false },
      { text: "Rửa và khử trùng bao tay", isCorrect: false },
      { text: "Làm mềm phần da quanh móng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Ở giai đoạn phát triển nhất tình trạng nhiễm khuẩn trên nền móng sẽ giống như:",
    options: [
      { text: "Màu xanh", isCorrect: false },
      { text: "Màu vàng", isCorrect: false },
      { text: "Màu đen", isCorrect: true },
      { text: "Màu đỏ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Để ngăn không bị tách sơn ra từng lớp quý vị nên sử dụng:",
    options: [
      { text: "Lớp phủ nền", isCorrect: true },
      { text: "Sơn giũa móng", isCorrect: false },
      { text: "Sơn móng dạng lỏng khô nhanh", isCorrect: false },
      { text: "Lớp xi ngắn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nên tránh làm gì trong vòng 24 - 48 giờ trước khi chăm sóc móng chân:",
    options: [
      { text: "Cạo lông chân", isCorrect: true },
      { text: "Dũa móng chân", isCorrect: false },
      { text: "Tẩy sơn", isCorrect: false },
      { text: "Tỉa móng chân", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nên làm gì trước tiên nếu khách hàng bị cắt chân trong khi làm dịch vụ?",
    options: [
      { text: "Báo cho quản lý tiệm biết", isCorrect: false },
      { text: "Tiếp tục làm việc", isCorrect: false },
      { text: "Ngưng dịch vụ này", isCorrect: true },
      { text: "Lấy các mảnh vụn và da thừa", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Tất cả các dụng cụ đã được khử trùng, phải được bảo quản?",
    options: [
      {
        text: "Bảo quản trong 1 thùng chứa sạch có nắp đậy khi không sử dụng",
        isCorrect: true,
      },
      { text: "Ngâm trong dung dịch khử trùng Phenolic", isCorrect: false },
      { text: "Bảo quản trong hộp đựng dụng cụ dơ bẩn", isCorrect: false },
      { text: "Khử trùng với nước", isCorrect: false },
    ],
    category: 1,
  },
  //

  {
    questionText:
      "Trong khi ngâm chân, làm móng chân của khách hàng từ 5 - 10 phút để:",
    options: [
      { text: "Nghỉ ngơi 1 lát", isCorrect: false },
      { text: "Làm sạch chân", isCorrect: true },
      { text: "Loại bỏ lớp sơn", isCorrect: false },
      { text: "Kích thích tuần hoàn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Dùng các chất hoá học để tiêu diệt mầm bệnh gọi là:",
    options: [
      { text: "Nồi hấp", isCorrect: false },
      { text: "Làm sạch", isCorrect: false },
      { text: "Khử trùng", isCorrect: true },
      { text: "Tiệt trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi phục vụ khách hàng, người thợ hành nghề được cấp phép rửa tay bằng gì?",
    options: [
      { text: "Cồn và nước", isCorrect: false },
      { text: "Chất khử trùng và nước", isCorrect: false },
      { text: "Xà phòng và nước", isCorrect: true },
      { text: "Dung dịch EPA và nước", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Người hành nghề được cấp bảng SDS ở đâu?",
    options: [
      { text: "Bác sĩ và dược sĩ", isCorrect: false },
      { text: "Lấy của chủ tiệm salon", isCorrect: false },
      { text: "Hướng dẫn của chủ salon", isCorrect: false },
      { text: "Nhà sản xuất hoặc nhà phân phối", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Có 2 loại miễn dịch là tự nhiên và:",
    options: [
      { text: "Mắc phải", isCorrect: true },
      { text: "Lây nhiễm", isCorrect: false },
      { text: "Miễn nhiễm", isCorrect: false },
      { text: "Nhân tạo", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Bất kỳ vật dụng nào không thể làm sạch được sau khi sử dụng cho mỗi khách hàng đều phải được:",
    options: [
      { text: "Rửa", isCorrect: false },
      { text: "Diệt trùng", isCorrect: false },
      { text: "Sát trùng", isCorrect: false },
      { text: "Được vứt bỏ", isCorrect: true },
    ],
    category: 1,
  },
  //

  {
    questionText: "Bảng chỉ dẫn sử dụng an toàn hoá chất SDS dùng trong salon:",
    options: [
      {
        text: "Quy định việc sử dụng sản phẩm ở các cửa hàng và salon",
        isCorrect: false,
      },
      {
        text: "Cung cấp thông tin về thành phần sản phẩm và mối nguy hiểm",
        isCorrect: false,
      },
      {
        text: "Cung cấp thông tin về các hành động cần thực hiện nếu phơi nhiễm với máu hay theo sự cố chảy máu",
        isCorrect: false,
      },
      {
        text: "Quy định những loại sản phẩm mà các nhà sản xuất hoá chất có thể sản xuất",
        isCorrect: true,
      },
    ],
    category: 1,
  },
  {
    questionText: "Vật dụng dùng 1 lần được khử trùng như thế nào?",
    options: [
      { text: "Hấp khử trùng", isCorrect: false },
      { text: "Khử trùng bằng xà phòng và nước", isCorrect: false },
      { text: "Không thể khử trùng vật dụng này", isCorrect: true },
      { text: "Bằng chất khử trùng hợp lệ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trong số các bước sau đây thuộc các quy trình chăm sóc móng tay cơ bản, nên làm bước nào đầu tiên?",
    options: [
      { text: "Làm mềm phần da quanh móng", isCorrect: false },
      { text: "Thoa kem dưỡng viền quanh móng", isCorrect: false },
      { text: "Định hình móng", isCorrect: true },
      { text: "Làm sạch phần đầu móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Tần suất khử trùng dụng cụ đa năng:",
    options: [
      { text: "Sau khi dùng cho mỗi khách hàng", isCorrect: true },
      { text: "Sau khi dùng cho 2 khách hàng", isCorrect: false },
      {
        text: "Vào cuối ngày làm việc ( hay vào cuối mỗi ngày)",
        isCorrect: false,
      },
      { text: "Sau 2 giờ làm việc", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Sản phẩm nào có thể làm hỏng nhựa và kim loại:",
    options: [
      { text: "Cồn", isCorrect: false },
      { text: "Thuốc tẩy đa dụng", isCorrect: true },
      { text: "Chất làm se", isCorrect: false },
      { text: "Thuốc sát trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Các phương pháp được sử dụng để loại bỏ giảm lây nhiễm các vi sinh vật truyền nhiễm được gọi là:",
    options: [
      { text: "Kiểm soát lây nhiễm", isCorrect: true },
      { text: "Kiểm soát sinh vật", isCorrect: false },
      { text: "Kiểm soát vệ sinh", isCorrect: false },
      { text: "Kiểm soát vi khuẩn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi sử dụng chất diệt trùng đồ nghề theo tiêu chuẩn EPA, bạn nên:",
    options: [
      { text: "Ngâm dụng cụ, kể cả tay cầm", isCorrect: true },
      { text: "Chỉ ngâm phần đầu tiếp xúc với khách hàng", isCorrect: false },
      { text: "Chỉ ngâm phần tay cầm", isCorrect: false },
      { text: "Chỉ nhúng sơ qua rồi lấy ra ngay", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi khử trùng các dụng cụ bị dơ bạn nên sử dụng tiêu chuẩn thời gian nào cho ngâm dung dịch khử trùng của bạn:",
    options: [
      { text: "Một giờ đồng hồ", isCorrect: false },
      { text: "Dùng Alcohol", isCorrect: false },
      { text: "Chỉ dẫn của nhà phân phối", isCorrect: false },
      { text: "Các chỉ dẫn của nhà sản xuất", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Nhân viên có bằng hành nghề nên mang vật dụng nào sau đây khi pha chất khử trùng:",
    options: [
      { text: "Quần áo không thấm hoá chất", isCorrect: false },
      { text: "Kính bảo hộ và găng tay", isCorrect: true },
      { text: "Kềm bảo vệ", isCorrect: false },
      { text: "Khẩu trang", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi loại bỏ phần da viền quanh móng và vớt phần vụn xuống, nhân viên có bằng hành nghề cần phải làm gì đầu tiên?",
    options: [
      { text: "Dũa móng thật nhẵn mịn", isCorrect: false },
      { text: "Làm sạch phần viền móng", isCorrect: false },
      { text: "Đẩy phần da viền quanh móng ngược trở lại", isCorrect: true },
      {
        text: "Dùng đầu nhọn của chiếc bấm móng để cắt phần da viền",
        isCorrect: false,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Làm thế nào để thợ hành nghề được cấp bằng xác định thời gian tiếp xúc chính xác với chất khử trùng?",
    options: [
      { text: "Theo nguyên tắc quy định của tiểu bang", isCorrect: false },
      { text: "Theo nhãn của sản phẩm", isCorrect: true },
      { text: "Luôn luôn là 10 phút", isCorrect: false },
      { text: "Ít nhất 15 phút", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trong khi chăm sóc bàn chân, trước hết bàn chân của khách hàng nên:",
    options: [
      { text: "Làm sạch", isCorrect: true },
      { text: "Khử trùng", isCorrect: false },
      { text: "Khử nhiễm", isCorrect: false },
      { text: "Tiệt trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi bôi chất loại bỏ lớp biểu bì điều quan trọng tránh tiếp xúc với mức độ để ngăn ngừa:",
    options: [
      { text: "Tình trạng khô", isCorrect: true },
      { text: "Móng màu xanh tái", isCorrect: false },
      { text: "Móng bị đổi màu", isCorrect: false },
      { text: "Nhiễm khuẩn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Cần làm gì loại bỏ vi khuẩn phát sinh trước khi khử trùng?",
    options: [
      { text: "Làm sạch", isCorrect: true },
      { text: "Ngâm", isCorrect: false },
      { text: "Bôi trơn", isCorrect: false },
      { text: "Tiệt trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi làm sạch vết cắt máu do khách hàng gây ra, người thợ có bằng hành nghề phải làm gì?",
    options: [
      { text: "Xịt thuốc sát trùng", isCorrect: false },
      { text: "Rửa tay và ngâm tay", isCorrect: false },
      { text: "Khử trùng các dụng cụ như trong bệnh viện", isCorrect: true },
      { text: "Che chắn các dụng cụ một cách khoa học", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Chất nào không sử dụng trên da, tóc hoặc móng?",
    options: [
      { text: "Chất tẩy rửa", isCorrect: true },
      { text: "Chất khử trùng", isCorrect: false },
      { text: "Chất sát trùng", isCorrect: false },
      { text: "Chất ổn định nhũ tương", isCorrect: false },
    ],
    category: 1,
  },

  //////////////////////////
  {
    questionText:
      "Bất kỳ vật dụng nào không thể khử trùng được sau khi được sử dụng cho mỗi khách hàng đều được:",
    options: [
      { text: "Rửa", isCorrect: false },
      { text: "Diệt trùng", isCorrect: false },
      { text: "Sát trùng", isCorrect: false },
      { text: "Được vứt bỏ", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi pha trộn hoá chất theo hướng dẫn của nhà sản xuất, thợ hành nghề được cấp phép cần có đồ dùng nào sau đây?",
    options: [
      { text: "Đồng hồ hẹn giờ", isCorrect: false },
      { text: "Thiết bị đo lường", isCorrect: true },
      { text: "Khăn sạch", isCorrect: false },
      { text: "Kềm bảo vệ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Đồ dùng tiếp xúc với máu phải làm gì?",
    options: [
      { text: "Vứt bỏ ngay", isCorrect: false },
      { text: "Sát trùng", isCorrect: false },
      { text: "Khử trùng", isCorrect: true },
      { text: "Rửa xà phòng và nước", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Các sản phẩm nào nhằm mục đích giảm vi khuẩn và có thể sử dụng trên da?",
    options: [
      { text: "Chất se da", isCorrect: false },
      { text: "Chất kháng khuẩn", isCorrect: true },
      { text: "Chất khử trùng", isCorrect: false },
      { text: "Chất cân bằng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Nên làm gì để dung dịch khử trùng tránh bị nhiễm bẩn?",
    options: [
      { text: "Sử dụng dung dịch khử trùng mạnh", isCorrect: false },
      { text: "Sử dụng dung dịch sát khuẩn mạnh", isCorrect: false },
      {
        text: "Chuẩn bị 1 lượng nhỏ dung dịch và thay dung dịch hàng năm",
        isCorrect: false,
      },
      { text: "Rửa dụng cụ thật kỹ trước khi ngâm", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Các bạn cất giữ dụng cụ đã khử trùng như thế nào?",
    options: [
      { text: "Máy sát trùng bằng nước", isCorrect: false },
      { text: "Nồi hấp", isCorrect: false },
      { text: "Hộp đựng đóng kín", isCorrect: true },
      { text: "Hộp dựng hở nắp", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Mức độ kiểm soát nhiễm trùng nào diệt trùng dễ hơn?",
    options: [
      { text: "Bong vẩy", isCorrect: false },
      { text: "Làm sạch", isCorrect: true },
      { text: "Khử trùng", isCorrect: false },
      { text: "Tiệt trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Hoá chất nào sau đây Dược phẩm Hoa kỳ cấm:",
    options: [
      { text: "Dung dịch Methyl Methacrylate", isCorrect: true },
      { text: "Cồn ethyl", isCorrect: false },
      { text: "Acetone", isCorrect: false },
      { text: "Nước", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Sau khi làm sạch bước tiếp theo kiểm soát lây nhiễm là gì?",
    options: [
      { text: "Khử trùng", isCorrect: false },
      { text: "Sấy khô", isCorrect: false },
      { text: "Tiệt trùng", isCorrect: false },
      { text: "Thanh trùng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi được sử dụng trong salon tất cả các chất khử trùng phải được sự chấp thuận của:",
    options: [
      {
        text: "Cơ quan quản lý an toàn sức khoẻ nghề nghiệp",
        isCorrect: false,
      },
      { text: "Cơ quan bảo vệ môi trường", isCorrect: true },
      { text: "Cơ quan quản lý thực phẩm, dược phẩm", isCorrect: false },
      { text: "Cơ quan quản lý doanh nghiệp nhỏ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Trong lúc chăm sóc bàn tay, khi nào nên tạo hình móng?",
    options: [
      { text: "Trước khi tẩy sơn móng", isCorrect: false },
      { text: "Sau khi tẩy sơn móng", isCorrect: true },
      { text: "Sau khi làm mềm lớp biểu bì", isCorrect: false },
      { text: "Trước khi sơn lớp bóng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Phương pháp nào sau đây thực hiện hiệu quả để khử trùng dụng cụ kim loại?",
    options: [
      { text: "Thuốc sát trùng", isCorrect: false },
      { text: "Nhiệt độ thiệt khô", isCorrect: false },
      { text: "Xà phòng và nước nóng", isCorrect: false },
      { text: "Thuốc khử trùng được đăng ký với EPA", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Khả năng mà cơ thể tiêu diệt vi khuẩn đã xâm nhập để chống lại sự nhiễm trùng nói chung được gọi là:",
    options: [
      { text: "Miễn dịch", isCorrect: true },
      { text: "Khử trùng", isCorrect: false },
      { text: "Tiệt trùng (tiêm chùng)", isCorrect: false },
      { text: "Nhiễm trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Sau khi làm móng chân chậu ngâm chân phải được:",
    options: [
      { text: "Khử trùng", isCorrect: true },
      { text: "Khử nhiễm", isCorrect: false },
      { text: "Tiệt trùng", isCorrect: false },
      { text: "Sát trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Chất sát trùng chủ yếu được sử dụng để làm gì?",
    options: [
      { text: "Tóc", isCorrect: false },
      { text: "Da", isCorrect: false },
      { text: "Các dụng cụ chạy điện", isCorrect: false },
      { text: "Các bề mặt kệ tủ", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Nên làm gì với da tiếp xúc với chất khử trùng:",
    options: [
      { text: "Rửa xà phòng và nước", isCorrect: true },
      { text: "Dùng chất khử trùng tay", isCorrect: false },
      { text: "Lau khô tay với khăn sạch", isCorrect: false },
      { text: "Rửa lại bằng nước ấm", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Sự xuất hiện của mủ là dấu hiệu của:",
    options: [
      { text: "Vi rút", isCorrect: false },
      { text: "Nhiễm trùng", isCorrect: true },
      { text: "Viêm gan", isCorrect: false },
      { text: "Rận", isCorrect: false },
    ],
    category: 1,
  },
  //////////////////////////

  {
    questionText:
      "Khi bạn đã nghi ngờ khách hàng bị nhiễm trùng móng, bạn phải?",
    options: [
      { text: "Khử trùng móng trước", isCorrect: false },
      { text: "Tiếp tục thực hiện dịch vụ", isCorrect: false },
      { text: "Không thực hiện dịch vụ", isCorrect: true },
      { text: "Ngâm móng tay trong dung dịch kháng khuẩn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nên làm gì nếu bạn vô ý cắt vào mình khi đang thực hiện dịch vụ:",
    options: [
      { text: "Làm theo quy trình dành cho sự cố phơi nhiễm", isCorrect: true },
      { text: "Cáo lỗi và che bằng y tế", isCorrect: false },
      { text: "Dùng chất sát khuẩn", isCorrect: false },
      { text: "Làm sạch khu vực làm việc", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Trong số các bước sau đây nên làm bước nào trước tiên?",
    options: [
      { text: "Ngâm móng tay", isCorrect: false },
      { text: "Dũa móng tay", isCorrect: false },
      { text: "Khách hàng rửa tay", isCorrect: true },
      { text: "Cắt phần da quanh móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Phương tiện nào sau đây tiệt trùng hiệu quả?",
    options: [
      { text: "Thuốc tẩy", isCorrect: false },
      { text: "Đèn tia cực tím", isCorrect: false },
      { text: "Nồi hấp", isCorrect: true },
      { text: "Chất khử trùng ướt", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Thuốc sát trùng hỗ trợ cho:",
    options: [
      { text: "Tiêu diệt tất cả các mầm bệnh", isCorrect: false },
      { text: "Khô da", isCorrect: false },
      { text: "Khử trùng dụng cụ", isCorrect: false },
      { text: "Làm chậm sự phát triển của vi khuẩn", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Để đảm bảo rằng sản phẩm khử trùng mang mức độ hiệu quả hãy luôn thực hiện:",
    options: [
      { text: "10% dung dịch", isCorrect: false },
      { text: "Bảo đảm hoàn thiện", isCorrect: false },
      { text: "Một sản phẩm thương mại pha chế sẵn", isCorrect: false },
      { text: "Số đăng ký EPA", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Tại sao điều quan trọng đối với khách hàng là tránh cạo lông chân trước khi làm móng?",
    options: [
      { text: "Gây bệnh mảng tròn", isCorrect: false },
      { text: "Tạo cảm giác không thoải mái khi massage", isCorrect: false },
      { text: "Gây khó khăn khi gỡ mặt nạ", isCorrect: false },
      {
        text: "Có thể làm khách hàng có nguy cơ bị nhiễm trùng",
        isCorrect: true,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Nếu sử dụng kềm để cắt đi phần bong thừa của móng tay giả, móng sẽ:",
    options: [
      { text: "Tăng độ bong tróc và làm hỏng lớp sừng", isCorrect: true },
      {
        text: "Khiến móng tay chắc và mịn sau khi làm dịch vụ",
        isCorrect: false,
      },
      {
        text: "Không ảnh hưởng đến việc cắt móng hoặc móng tay",
        isCorrect: false,
      },
      { text: "Tăng thời gian bảo dưỡng khách hàng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi phết chất nền trước khi sơn móng, trước khi nhúng chổi trở lại trong hộp đựng bạn nên làm gì để tránh bị nhiễm bẩn?",
    options: [
      { text: "Làm sạch bằng Acetone", isCorrect: true },
      { text: "Làm sạch bằng dung dịch hoá dầu Monomer", isCorrect: false },
      { text: "Khử trùng chiếc chổi", isCorrect: false },
      { text: "Lau chổi lên 1 chiếc khăn sạch", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Làm sạch mạnh mẽ dưới đầu ngón tay có thể gây ra",
    options: [
      { text: "Xước móng", isCorrect: false },
      { text: "Melanonychia", isCorrect: false },
      { text: "Chấn thương cho nền móng", isCorrect: false },
      { text: "Phá vỡ lớp kết dính Hyponychium", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Yếu tố nào sau đây không ảnh hưởng đến sự an toàn của thợ hành nghề được cấp phép hoặc khách hàng:",
    options: [
      { text: "Cục da chai", isCorrect: true },
      { text: "Vi rút", isCorrect: false },
      { text: "Nấm chân", isCorrect: false },
      { text: "Viêm da tiếp xúc", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Mũi quay máy dũa điện nào được cho là sử dụng 1 lần:",
    options: [
      { text: "Kim loại", isCorrect: false },
      { text: "Cac bua", isCorrect: false },
      { text: "Gá đánh bóng", isCorrect: true },
      { text: "Mũi mài móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Cách sửa móng tay bị xước:",
    options: [
      { text: "Bôi kem biểu bì", isCorrect: false },
      { text: "Acetone", isCorrect: false },
      { text: "Primer", isCorrect: false },
      { text: "Cắt sửa móng với dầu nóng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Các vòng lưỡi quay trong vòng hoàn chỉnh của mỗi phút gọi là:",
    options: [
      { text: "RPM", isCorrect: true },
      { text: "OSHA", isCorrect: false },
      { text: "MPH", isCorrect: false },
      { text: "MPA", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Mô hoặc da mềm chung quanh đáy móng tay và móng chân được gọi là:",
    options: [
      { text: "Lớp biểu bì", isCorrect: true },
      { text: "Phần vòng cung màu trắng", isCorrect: false },
      { text: "Rãnh móng", isCorrect: false },
      { text: "Nếp gấp trên móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Phần móng nào bịt kín phần đầu móng cho da bình thường để tránh ẩm, vi khuẩn hoặc nấm xâm nhập vào móng?",
    options: [
      { text: "Đáy móng", isCorrect: false },
      { text: "Nền của móng", isCorrect: false },
      { text: "Phần da ở dưới đầu móng", isCorrect: true },
      { text: "Chứng sưng liên móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Chức năng của dũa bàn chân là nhằm:",
    options: [
      { text: "Dũa các đầu móng chân", isCorrect: false },
      { text: "Làm mạnh các đầu móng chân", isCorrect: false },
      { text: "Làm mềm các chỗ chai sần", isCorrect: true },
      {
        text: "Làm sạch dọc theo các chiều móng chân bé hơn",
        isCorrect: false,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Những nếp nhăn ở 2 bên móng mọc theo chiều của móng được gọi là:",
    options: [
      { text: "Mộng thịt", isCorrect: false },
      { text: "Phần thịt dưới móng", isCorrect: false },
      { text: "Các rãnh móng", isCorrect: false },
      { text: "Các nếp gấp", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Chúng ta nên tránh cắt vào mô sống xung quanh móng, chúng ta có thể tạo ra:",
    options: [
      { text: "Mộng thịt", isCorrect: false },
      { text: "Sẹo lồi", isCorrect: false },
      { text: "Móng tay mọc không đều", isCorrect: false },
      { text: "Xước măng rô", isCorrect: true },
    ],
    category: 1,
  },
  //////////////////////////

  {
    questionText: "Không hoá chất Monomer không mùi, không:",
    options: [
      { text: "Cứng lại", isCorrect: false },
      { text: "Cứng lại rất nhanh", isCorrect: true },
      { text: "Cất lại trong chai lọ", isCorrect: false },
      { text: "Nhíp vào móng thật", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Để ngăn móng không bị tách sơn ra từng lớp quý vị nên sử dụng:",
    options: [
      { text: "Lớp phủ nền", isCorrect: true },
      { text: "Sơn giữa móng", isCorrect: false },
      { text: "Sơn móng dạng lỏng khô nhanh", isCorrect: false },
      { text: "Lớp xi ngắn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Vô tình bôi chất Acrylic vào biểu bì có thể khiến:",
    options: [
      { text: "Biểu bì phát triển", isCorrect: false },
      { text: "Móng giả chênh vênh trên đầu móng", isCorrect: false },
      { text: "Biểu bì hoà tan", isCorrect: false },
      { text: "Sản phẩm dễ bong tróc", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Thành phần chính của móng là:",
    options: [
      { text: "Keratin", isCorrect: true },
      { text: "Sụn", isCorrect: false },
      { text: "Melanocyte", isCorrect: false },
      { text: "Cacbon", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Các sản phẩm được yêu cầu lấy khỏi hủ chứa, chẳng hạn như kem hoặc sản phẩm tạo kiểu cho móng bằng cách nào sau đây:",
    options: [
      { text: "Ngón trỏ sạch", isCorrect: false },
      { text: "Miếng xốp vô trùng", isCorrect: true },
      { text: "Miếng xốp được khử trùng", isCorrect: false },
      { text: "Vật dụng còn lại bỏ sót được khử trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Sản phẩm nào cho phép móng giả Monomer và Acrylic liên kết với mặt móng:",
    options: [
      { text: "Keo dán móng", isCorrect: false },
      { text: "Keo dính", isCorrect: false },
      { text: "Máy sấy tóc", isCorrect: false },
      { text: "Sơn lót", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Phải dùng gì để lấy một lượng nhỏ bột còn sót lại trên đĩa móng sau khi lấy đầu móng ra:",
    options: [
      { text: "Cục đánh bóng bọc da dê", isCorrect: false },
      { text: "Dũa mịn", isCorrect: true },
      { text: "Dũa nhám 180", isCorrect: false },
      { text: "Dũa điện tử", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Mũi quay máy dũa điện nào được cho là sử dụng một lần?",
    options: [
      { text: "Kim loại", isCorrect: false },
      { text: "Cac bua", isCorrect: false },
      { text: "Gá đánh bóng", isCorrect: true },
      { text: "Mũi mài móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Mô sống ở đầu đĩa móng che phủ phần mô dưới móng và dây thần kinh dưới đầu móng không được cắt phạm vào hoặc làm tổn thương đến:",
    options: [
      { text: "Dây chằng", isCorrect: false },
      { text: "Phần đầu móng", isCorrect: false },
      {
        text: "Phần da ở phía ngay dưới đầu móng Hyponychium",
        isCorrect: true,
      },
      { text: "Da nền móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Các vật dụng dùng 1 lần còn được gọi là:",
    options: [
      { text: "Có thể tái sử dụng", isCorrect: false },
      { text: "Xốp", isCorrect: false },
      { text: "Dùng 1 lần", isCorrect: true },
      { text: "Được khử trùng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Quý vị nên bỏ 1 lượng nhỏ monomer còn sót lại bằng cách nào?",
    options: [
      { text: "Trong 1 chiếc khăn vải bông", isCorrect: false },
      { text: "Thùng rác đóng kín", isCorrect: false },
      { text: "Khăn giấy thấm nước vào túi nhựa", isCorrect: true },
      { text: "Một chiếc khăn vào thùng rác", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Để tránh làm hỏng móng, mũi quay dũa điện phải lấy độ chính xác là:",
    options: [
      { text: "Phẳng", isCorrect: true },
      { text: "Hướng lên trên", isCorrect: false },
      { text: "45 độ", isCorrect: false },
      { text: "60 độ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Mục đích cắt đầu móng trong quá trình làm móng tay cơ bản",
    options: [
      { text: "Loại bỏ đầu móng tay", isCorrect: true },
      { text: "Mở đầu móng tay", isCorrect: false },
      { text: "Loại bỏ đầu lởm chởm", isCorrect: false },
      { text: "Chuẩn bị sơn móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi gắn móng giả làm từ monomer nên sử dụng sơn lót như thế nào?",
    options: [
      {
        text: "Chỉ nên sử dụng sơn lót có màn bọc móng chứ không phải là liquid",
        isCorrect: false,
      },
      { text: "Dùng bình xịt để xịt sơn lót lên móng", isCorrect: false },
      { text: "Cùng kết hợp với liquid", isCorrect: false },
      { text: "Nhẹ nhàng sơn lót lên móng thật", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Nên gỡ bỏ móng bột như thế nào?",
    options: [
      { text: "Dũa", isCorrect: false },
      { text: "Dũa mịn", isCorrect: false },
      { text: "Ngâm trong Acetone", isCorrect: true },
      { text: "Ngâm trong Liquid", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Mục đích làm khô móng trước khi gắn móng giả là gì?",
    options: [
      { text: "Để loại bỏ dầu", isCorrect: true },
      { text: "Để thấm bả nhờn", isCorrect: false },
      { text: "Để tăng độ mọc dài", isCorrect: false },
      { text: "Để hổ trợ cho vệt", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi gắn móng giả làm từ Monomer và Polymer, nên sử dụng sơn lót như thế nào?",
    options: [
      { text: "Cùng kết hợp với Liquid", isCorrect: false },
      { text: "Dùng bình xịt để xịt", isCorrect: false },
      {
        text: "Chỉ nên sử dụng sơn móng với màn bọc chứ không phải là Liquid",
        isCorrect: false,
      },
      { text: "Chấm một chút sơn lót vào móng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Mục đích của gel liên kết UV là gì?",
    options: [
      { text: "Thêm màu sắc", isCorrect: false },
      { text: "Khử mùi hôi", isCorrect: false },
      { text: "Làm cho lớp sừng dày hơn", isCorrect: false },
      { text: "Tăng độ bám dính hoặc cứng lại", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Trước khi gắn móng giả làm từ Monomer nên sử dụng sản phẩm sơn lót như thế nào?",
    options: [
      { text: "Cùng kết hợp với Liquid", isCorrect: false },
      { text: "Dùng bình xịt để xịt chung quanh móng", isCorrect: false },
      { text: "Chấm một chút xíu sơn lót ở giữa móng", isCorrect: true },
      {
        text: "Chỉ nên sử dụng sơn lót có màng bọc móng chứ không phải là Acrylic",
        isCorrect: false,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Các bạn sử dụng cái nào vuốt kem thoa trên tay dính trên mặt móng?",
    options: [
      { text: "Khăn lau", isCorrect: true },
      { text: "Sơn lót", isCorrect: false },
      { text: "Bột", isCorrect: false },
      { text: "Nước", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nên tránh cắt vào mô sống chung quanh móng chân hay móng tay chúng ta có thể tạo ra:",
    options: [
      { text: "Mộng thịt", isCorrect: false },
      { text: "Sẹo lồi", isCorrect: false },
      { text: "Móng tay mọc dài không dừng", isCorrect: false },
      { text: "Xước măng rô", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Điều gì làm thay đổi hình dạng hoặc độ dày của lớp sừng?",
    options: [
      { text: "Sử dụng chất làm cứng móng, chất bổ Keratin", isCorrect: false },
      { text: "Bệnh hoặc chấn thương nền móng", isCorrect: true },
      { text: "Liên tục sử dụng móng tay giả", isCorrect: false },
      { text: "Xuất hiện các đốm trắng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Hình dạng móng nào là xước nhất và dễ bị gãy hơn:",
    options: [
      { text: "Vuông bầu dục", isCorrect: false },
      { text: "Tròn", isCorrect: false },
      { text: "Bầu dục", isCorrect: false },
      { text: "Nhọn", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Các đường rãnh hoặc rãnh mọc hai bên móng là gì?",
    options: [
      { text: "Đầu móng", isCorrect: false },
      { text: "Các nếp gấp trên móng", isCorrect: true },
      { text: "Phần da dưới đầu móng", isCorrect: false },
      { text: "Biểu bì", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Nên tỉa móng chân như thế nào?",
    options: [
      { text: "Ngắn", isCorrect: false },
      { text: "Tròn", isCorrect: false },
      { text: "Bằng, ngang", isCorrect: true },
      { text: "Ngắn hơn phần méo móng chân", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Chức năng chính da viền quanh móng là:",
    options: [
      { text: "Giữ cho móng phẳng", isCorrect: false },
      { text: "Gắn kín khu vực đó để ngăn ngừa vi sinh vật", isCorrect: true },
      { text: "Gắn thành móng vào xương bên dưới", isCorrect: false },
      { text: "Cung cấp chất bổ dưỡng cho móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Khi xác định độ dài của móng giả điều quan trọng ngăn ngừa nứt bằng cách sử dụng:",
    options: [
      { text: "Dụng cụ cắt móng", isCorrect: false },
      { text: "Kềm cắt đầu móng", isCorrect: false },
      { text: "Kéo cắt đầu móng", isCorrect: true },
      { text: "Khoan móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Tại sao dầu và kem được sử dụng trong khi làm móng tay và móng chân?",
    options: [
      {
        text: "Để lớp sừng ẩm ướt trước khi gắn móng tay giả",
        isCorrect: false,
      },
      {
        text: "Để tăng độ mềm dẻo cho móng và làm mềm cho da",
        isCorrect: true,
      },
      {
        text: "Để làm cho da mềm mại và để màu da được sắc bén",
        isCorrect: false,
      },
      { text: "Để cho lớp sừng khách hàng được dày hơn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Người được cấp phép có thể không thực hiện dịch vụ:",
    options: [
      { text: "Nấm móng", isCorrect: true },
      { text: "Xước măng rô", isCorrect: false },
      { text: "Móng bị chàm", isCorrect: false },
      { text: "Chứng móng đốm trắng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Kem dưỡng viền quanh móng có tác dụng ngăn ngừa:",
    options: [
      { text: "Móng dễ gãy", isCorrect: false },
      { text: "Nấm móng", isCorrect: false },
      { text: "Nhiễm khuẩn", isCorrect: false },
      { text: "Các vết ố trên móng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText: "Một khách hàng muốn gỡ bỏ móng giả nhân viên nên làm gì?",
    options: [
      {
        text: "Dùng dụng cụ bấm móng để gỡ bỏ móng giả khỏi nền móng",
        isCorrect: false,
      },
      {
        text: "Đầu móng giả ngâm dung dịch Acetone kéo vuốt trượt ra",
        isCorrect: true,
      },
      { text: "Dũa đầu móng giả đến nền móng", isCorrect: false },
      { text: "Bóc đầu móng giả đó ra", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Để máy dũa điện tử hoạt động chính xác, điều quan trọng",
    options: [
      {
        text: "Các mũi dũa quay tròn hoàn hảo không bị lung lay",
        isCorrect: true,
      },
      {
        text: "Máy dũa được bảo quản nơi ít ánh sáng, mát mẻ trong salon",
        isCorrect: false,
      },
      { text: "Máy dũa chỉ được mua bởi nhà sản xuất", isCorrect: false },
      { text: "Máy dũa được thay đổi giữa các khách hàng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Dầu dưỡng móng tay ngăn ngừa?",
    options: [
      { text: "Móng dễ gãy", isCorrect: true },
      { text: "Nhiễm khuẩn", isCorrect: false },
      { text: "Nấm móng", isCorrect: false },
      { text: "Vết ố lên trên móng tay đã sơn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Nên đánh sơn bóng vào phần nào của móng?",
    options: [
      { text: "Đáy móng", isCorrect: false },
      { text: "Lớp sừng", isCorrect: true },
      { text: "Nếp gấp móng", isCorrect: false },
      { text: "Phần biểu mô", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Lớp sơn lót cải thiện:",
    options: [
      { text: "Diện mạo móng", isCorrect: false },
      { text: "Sát trùng", isCorrect: false },
      { text: "Kết dính", isCorrect: true },
      { text: "Tăng độ cứng móng", isCorrect: false },
    ],
    category: 1,
  },
  //////////////////////////
  {
    questionText:
      "Phần móng nào bít kín phần đầu móng cho da bình thường để tránh ẩm, vi khuẩn hay nấm xâm nhập vào trong móng?",
    options: [
      { text: "Thân móng", isCorrect: false },
      { text: "Phần da dưới đầu móng", isCorrect: true },
      { text: "Nền của móng", isCorrect: false },
      { text: "Chứng sưng liên móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Chất lượng cọ hiệu quả nhất sử dụng dung dịch Monomer được làm bằng:",
    options: [
      { text: "Lông chồn", isCorrect: true },
      { text: "Tóc người", isCorrect: false },
      { text: "Lông bò", isCorrect: false },
      { text: "Lông lợn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Một cục máu đông ở phần dưới móng gây ra do chấn thương được gọi là:",
    options: [
      { text: "Móng bị nhiễm trùng", isCorrect: false },
      { text: "Móng bị xâm xi", isCorrect: false },
      { text: "Móng bệnh", isCorrect: true },
      { text: "Vết xước móng tay", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Ngăn ngừa móng bị tách lớp, bong ra từng lớp nên sử dụng:",
    options: [
      { text: "Sơn móng dạng lỏng khô nhanh", isCorrect: false },
      { text: "Lớp si ngắn", isCorrect: false },
      { text: "Lớp sơn lót", isCorrect: true },
      { text: "Quý vị nên sơn lợt lợt", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Bước nào sau đây trong quá trình gắn đầu móng giả là bước đầu tiên?",
    options: [
      {
        text: "Loại bỏ lớp bóng bằng chất mài có độ thô ráp trung bình",
        isCorrect: false,
      },
      { text: "Gắn keo dính", isCorrect: false },
      { text: "Dùng chất hút ẩm cho móng", isCorrect: true },
      { text: "Trượt vào trên các đầu móng tay", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nên tránh cắt quá nhiều vào phần da sống vì điều này có thể:",
    options: [
      { text: "Móng tay bị xước", isCorrect: true },
      { text: "Mộng thịt", isCorrect: false },
      { text: "Sẹo xấu", isCorrect: false },
      { text: "Móng mọc vào giữa", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Phải thực hiện điều gì khi gắn đầu móng giả vào đầu móng thật?",
    options: [
      { text: "Bôi chất lỏng Monomer có độ bám dính", isCorrect: false },
      {
        text: "Gắn với kích thước đầu móng giả với chất sừng của khách hàng",
        isCorrect: true,
      },
      { text: "Gắn móng tay lên móng tay sáp", isCorrect: false },
      { text: "Thoa dầu lên tay tròn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Điều gì quyết định độ dài, chiều rộng, độ cong của lớp sừng?",
    options: [
      { text: "Chế độ ăn uống, lối sống", isCorrect: false },
      { text: "Chiều dài của đầu móng", isCorrect: true },
      { text: "Tình trạng của lớp biểu bì", isCorrect: false },
      { text: "Cấu trúc chất của nền móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Nếu khách hàng đến salon trong tình trạng móng bị tách lớp, có những đường lằn, đường dọc quý vị nên:",
    options: [
      { text: "Kiến nghị khách hàng chất sơn móng", isCorrect: false },
      {
        text: "Dũa các đường lằn vào phần đầu móng nhưng không phải chăm sóc móng",
        isCorrect: false,
      },
      { text: "Dũa hết đường lằn, tiến hành chăm sóc móng", isCorrect: true },
      {
        text: "Kiến nghị khách hàng chăm sóc móng với đầu móng",
        isCorrect: false,
      },
    ],
    category: 1,
  },
  {
    questionText: "Khi gắn đầu móng giả, mục đích của chất Primer:",
    options: [
      { text: "Làm cho móng tay sơn bột dính hơn", isCorrect: false },
      { text: "Kết hợp keo dán móng cùng keo dính", isCorrect: false },
      {
        text: "Tạo độ cong cho móng để móng không bị bong tróc",
        isCorrect: false,
      },
      {
        text: "Làm khô móng tự nhiên để móng giả dính vào thân móng",
        isCorrect: true,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Những vết nhăn ở hai bên móng mọc hướng theo chiều của móng được gọi là:",
    options: [
      { text: "Mộng thịt", isCorrect: false },
      { text: "Các rãnh móng", isCorrect: false },
      { text: "Nếp gấp", isCorrect: true },
      { text: "Phần thịt trên móng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Để loại trừ bất kỳ câu hỏi nào về dịch vụ sẽ được thực hiện, hãy luôn thực hiện:",
    options: [
      { text: "Lập hồ sơ khách hàng", isCorrect: false },
      { text: "Gội đầu kỹ càng", isCorrect: false },
      { text: "Tư vấn khách hàng", isCorrect: true },
      { text: "Giới thiệu chính thức", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Thông tin quan trọng cần biết về khách hàng trước khi thực hiện massage là gì?",
    options: [
      { text: "Tuổi", isCorrect: false },
      { text: "Lối sống", isCorrect: false },
      { text: "Hoạt động thể chất", isCorrect: false },
      { text: "Bệnh trạng", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Người thợ được cấp phép hành nghề nên tránh thực hiện massage trên khách hàng có điều kiện nào sau đây:",
    options: [
      { text: "Viêm khớp", isCorrect: false },
      { text: "Đau cơ bắp", isCorrect: false },
      { text: "Suy tim mạch", isCorrect: false },
      { text: "Cao huyết áp", isCorrect: true },
    ],
    category: 1,
  },
  {
    questionText:
      "Trong quá trình tư vấn khách hàng, lắng nghe mong muốn của khách hàng và nhắc lại mong muốn của họ để họ hiểu là kiểu lắng nghe:",
    options: [
      { text: "Quan tâm", isCorrect: false },
      { text: "Chủ động", isCorrect: true },
      { text: "Phản ứng", isCorrect: false },
      { text: "Phản chiếu", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Ứng xử đúng mức và sự kết hợp đạo đức là phát triển của:",
    options: [
      { text: "Ứng xử trong công việc", isCorrect: false },
      { text: "Các nguyên tắc đạo đức nghề nghiệp", isCorrect: true },
      { text: "Nhân sự", isCorrect: false },
      { text: "Giao tiếp", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Khách hàng bị bệnh viêm khớp nên tránh:",
    options: [
      { text: "Xoa bóp mạnh", isCorrect: true },
      { text: "Xoa bóp nhẹ", isCorrect: false },
      { text: "Bấm huyệt", isCorrect: false },
      { text: "Xoa vuốt nhẹ", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Khách hàng bị bệnh truyền nhiễm hoặc lây nhiễm có thể:",
    options: [
      { text: "Làm mọi dịch vụ tại salon", isCorrect: false },
      {
        text: "Không được làm bất kỳ dịch vụ nào trong salon",
        isCorrect: true,
      },
      {
        text: "Được làm dịch vụ nếu khách hàng đeo khẩu trang",
        isCorrect: false,
      },
      {
        text: "Được làm dịch vụ nếu khách hàng đeo găng tay",
        isCorrect: false,
      },
    ],
    category: 1,
  },
  {
    questionText:
      "Nhân viên có bằng hành nghề phải làm gì nếu khách hàng bị nghi ngờ nhiễm nấm khi chăm sóc bàn chân:",
    options: [
      { text: "Sử dụng bao tay", isCorrect: false },
      { text: "Từ chối phục vụ", isCorrect: true },
      { text: "Dùng xà bông diệt khuẩn", isCorrect: false },
      { text: "Sử dụng chất sát khuẩn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Kỹ thuật nhấn trong massage cần thực hiện theo hướng nào?",
    options: [
      { text: "Quanh vùng trung tâm của cơ bắp", isCorrect: false },
      { text: "Từ điểm nối cơ bắp đến điểm đầu cơ bắp", isCorrect: true },
      { text: "Từ trung tâm đến điểm nối cơ bắp", isCorrect: false },
      { text: "Từ đầu cơ bắp đến dây chằng", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Trong thao tác massage, bóp sâu mạnh mẽ nên được:",
    options: [
      { text: "Tránh", isCorrect: true },
      { text: "Thực hiện thường xuyên", isCorrect: false },
      { text: "Được sử dụng cho toàn bộ lần massage", isCorrect: false },
      { text: "Chỉ sử dụng trong massage chân", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Các loại hơi nguy hiểm được sản sinh ra trong salon:",
    options: [
      { text: "Sản phẩm sơn móng tay dạng lỏng", isCorrect: true },
      { text: "Thông gió mạnh, gây chuyển động", isCorrect: false },
      { text: "Máy mài móng được sử dụng để dũa móng", isCorrect: false },
      { text: "Than hoạt tính được sử dụng để thông khí", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText: "Hệ thống thông gió ở tiệm salon có tác dụng gì?",
    options: [
      { text: "Loại bỏ mùi hôi khiến khách hàng tránh xa", isCorrect: false },
      { text: "Giảm nguy cơ nuốt phải hoá chất độc hại", isCorrect: false },
      { text: "Loại hoá chất ô nhiễm ra khỏi không khí", isCorrect: true },
      { text: "Giúp các sản phẩm sơn khô nhanh hơn", isCorrect: false },
    ],
    category: 1,
  },
  {
    questionText:
      "Phương tiện nào sau đây giúp làm thông hơi hiệu quả trong salon?",
    options: [
      { text: "Quạt trần", isCorrect: false },
      { text: "Cửa sổ và cửa ra vào mở", isCorrect: false },
      { text: "Hệ thống thông gió bên ngoài", isCorrect: true },
      { text: "Máy lọc không khí và mặt nạ chống bụi", isCorrect: false },
    ],
    category: 1,
  },
];

module.exports = nailQuestions;

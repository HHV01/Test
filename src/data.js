const F = (label, prompt, answer, note, level = 1) => ({
  label, prompt, answer, note, level
});

export const chapters = [
  {
    id: 1,
    short: "Nền tảng",
    title: "Kinh tế học và các vấn đề cơ bản",
    color: "#d95f3b",
    intro: "Hiểu cách con người và xã hội lựa chọn khi nguồn lực khan hiếm, cùng các nguyên lý nền tảng để đọc mọi mô hình kinh tế.",
    keywords: ["khan hiếm", "chi phí cơ hội", "cận biên", "PPF", "thực chứng"],
    traps: ["Nhầm thực chứng với chuẩn tắc", "Cho rằng chi phí cơ hội chỉ là tiền", "Nhầm điểm trong PPF là không thể đạt"],
    formulas: ["Chi phí cơ hội = giá trị của phương án tốt nhất bị từ bỏ"],
    facts: [
      F("Kinh tế học", "Kinh tế học nghiên cứu vấn đề cốt lõi nào?", "Cách xã hội quản lý các nguồn lực khan hiếm", "Trọng tâm là sự khan hiếm và lựa chọn."),
      F("Kinh tế vi mô", "Kinh tế vi mô tập trung nghiên cứu điều gì?", "Hành vi của cá nhân, hộ gia đình, doanh nghiệp và từng thị trường", "Vi mô nhìn vào các đơn vị ra quyết định riêng lẻ."),
      F("Kinh tế vĩ mô", "Kinh tế vĩ mô tập trung vào phạm vi nào?", "Các hiện tượng của toàn bộ nền kinh tế như tăng trưởng, lạm phát, thất nghiệp", "Vĩ mô phân tích các biến tổng thể."),
      F("Thực chứng", "Phát biểu kinh tế học thực chứng có đặc điểm gì?", "Mô tả và giải thích điều đang xảy ra, có thể kiểm chứng", "Thực chứng trả lời câu hỏi “là gì”."),
      F("Chuẩn tắc", "Phát biểu kinh tế học chuẩn tắc có đặc điểm gì?", "Đưa ra nhận định điều gì nên xảy ra dựa trên giá trị", "Từ “nên” thường báo hiệu nhận định chuẩn tắc."),
      F("Khan hiếm", "Sự khan hiếm xuất hiện khi nào?", "Nguồn lực hữu hạn trong khi nhu cầu của con người lớn hơn", "Khan hiếm buộc xã hội phải lựa chọn."),
      F("Chi phí cơ hội", "Chi phí cơ hội của một lựa chọn là gì?", "Giá trị của phương án tốt nhất bị từ bỏ", "Không phải tổng mọi phương án bị bỏ qua."),
      F("PPF", "Đường giới hạn khả năng sản xuất biểu thị điều gì?", "Các phối hợp sản lượng tối đa có thể sản xuất với nguồn lực và công nghệ hiện có", "Điểm trên đường PPF thể hiện hiệu quả sản xuất."),
      F("Điểm trong PPF", "Một điểm nằm bên trong đường PPF cho biết điều gì?", "Nguồn lực đang được sử dụng chưa hiệu quả", "Nền kinh tế có thể tăng ít nhất một loại hàng hóa mà chưa phải giảm loại kia."),
      F("Điểm ngoài PPF", "Một điểm nằm ngoài đường PPF hiện tại có ý nghĩa gì?", "Chưa thể đạt được với nguồn lực và công nghệ hiện có", "Tăng nguồn lực hoặc tiến bộ công nghệ có thể làm PPF dịch ra."),
      F("Tư duy cận biên", "Người ra quyết định hợp lý hành động theo nguyên tắc cận biên thế nào?", "So sánh lợi ích cận biên với chi phí cận biên", "Một hành động nên tăng thêm khi lợi ích cận biên lớn hơn chi phí cận biên.", 2)
    ]
  },
  {
    id: 2,
    short: "Cung & cầu",
    title: "Cung, cầu và chính sách chính phủ",
    color: "#217a73",
    intro: "Đọc chuyển động của thị trường bằng cung–cầu, độ co giãn, cân bằng và tác động của giá trần, giá sàn, thuế, trợ cấp.",
    keywords: ["lượng cầu", "dịch chuyển", "cân bằng", "co giãn", "giá trần"],
    traps: ["Nhầm di chuyển dọc đường với dịch chuyển đường", "Nhầm giá trần gây dư thừa", "Cho rằng bên nộp thuế luôn chịu toàn bộ thuế"],
    formulas: ["Eᵈ = %ΔQd / %ΔP", "Eˢ = %ΔQs / %ΔP", "Doanh thu = P × Q"],
    facts: [
      F("Cầu", "Đường cầu mô tả mối quan hệ nào khi các yếu tố khác không đổi?", "Giữa giá hàng hóa và lượng cầu", "Thông thường giá tăng làm lượng cầu giảm."),
      F("Cung", "Đường cung mô tả mối quan hệ nào khi các yếu tố khác không đổi?", "Giữa giá hàng hóa và lượng cung", "Thông thường giá tăng làm lượng cung tăng."),
      F("Cầu thị trường", "Cầu thị trường được xác định như thế nào?", "Cộng theo chiều ngang lượng cầu của các cá nhân tại mỗi mức giá", "Đây là tổng lượng người mua sẵn lòng và có khả năng mua."),
      F("Dịch chuyển cầu", "Yếu tố nào làm dịch chuyển đường cầu thay vì di chuyển dọc đường cầu?", "Thu nhập, thị hiếu, kỳ vọng, giá hàng liên quan hoặc số người mua thay đổi", "Giá của chính hàng hóa chỉ gây di chuyển dọc đường cầu."),
      F("Dịch chuyển cung", "Yếu tố nào có thể làm dịch chuyển đường cung?", "Giá đầu vào, công nghệ, kỳ vọng, số người bán hoặc điều kiện tự nhiên thay đổi", "Giá của chính hàng hóa gây di chuyển dọc đường cung."),
      F("Cân bằng", "Điểm cân bằng thị trường là nơi nào?", "Lượng cung bằng lượng cầu", "Tại đó không có áp lực nội tại làm giá thay đổi."),
      F("Dư thừa", "Khi giá cao hơn mức cân bằng, thị trường thường ở trạng thái nào?", "Dư thừa vì lượng cung lớn hơn lượng cầu", "Người bán có xu hướng giảm giá."),
      F("Thiếu hụt", "Khi giá thấp hơn mức cân bằng, thị trường thường ở trạng thái nào?", "Thiếu hụt vì lượng cầu lớn hơn lượng cung", "Người mua cạnh tranh làm giá có xu hướng tăng."),
      F("Giá trần", "Giá trần có hiệu lực khi được đặt ở đâu?", "Thấp hơn giá cân bằng và có thể gây thiếu hụt", "Giá trần là mức giá tối đa được phép giao dịch."),
      F("Giá sàn", "Giá sàn có hiệu lực khi được đặt ở đâu?", "Cao hơn giá cân bằng và có thể gây dư thừa", "Giá sàn là mức giá tối thiểu được phép giao dịch."),
      F("Gánh nặng thuế", "Gánh nặng thuế phụ thuộc chủ yếu vào yếu tố nào?", "Độ co giãn tương đối của cung và cầu", "Bên kém co giãn hơn thường chịu phần thuế lớn hơn.", 3)
    ]
  },
  {
    id: 3,
    short: "Người tiêu dùng",
    title: "Lựa chọn của người tiêu dùng",
    color: "#6b57a5",
    intro: "Kết hợp sở thích và giới hạn ngân sách để xác định giỏ hàng tối ưu, đồng thời phân tích tác động của thu nhập và giá.",
    keywords: ["bàng quan", "MRS", "ngân sách", "tiếp xúc", "tối ưu"],
    traps: ["Cho rằng hai đường bàng quan có thể cắt nhau", "Nhầm độ dốc ngân sách với thu nhập", "Bỏ qua điều kiện góc"],
    formulas: ["Đường ngân sách: PₓX + PᵧY = I", "Tối ưu nội: MRS = Pₓ/Pᵧ"],
    facts: [
      F("Đường bàng quan", "Một đường bàng quan biểu thị điều gì?", "Các giỏ hàng đem lại cùng một mức thỏa dụng", "Người tiêu dùng không thiên vị giữa các điểm trên cùng đường."),
      F("Độ dốc bàng quan", "Độ dốc của đường bàng quan phản ánh đại lượng nào?", "Tỷ lệ thay thế cận biên giữa hai hàng hóa", "MRS cho biết lượng một hàng sẵn lòng từ bỏ để có thêm hàng kia."),
      F("Dạng lồi", "Vì sao đường bàng quan thường lồi về phía gốc tọa độ?", "Tỷ lệ thay thế cận biên thường giảm dần", "Càng có nhiều X, người tiêu dùng càng ít sẵn lòng hy sinh Y để có thêm X."),
      F("Không giao nhau", "Vì sao hai đường bàng quan không thể cắt nhau?", "Vì sẽ mâu thuẫn với tính nhất quán của sở thích", "Một giỏ hàng không thể đồng thời đại diện cho hai mức thỏa dụng khác nhau."),
      F("Đường ngân sách", "Đường ngân sách biểu thị điều gì?", "Các giỏ hàng dùng hết thu nhập tại mức giá cho trước", "Nó mô tả giới hạn khả năng mua."),
      F("Độ dốc ngân sách", "Độ dốc tuyệt đối của đường ngân sách bằng gì?", "Tỷ lệ giá Pₓ/Pᵧ", "Độ dốc là −Pₓ/Pᵧ."),
      F("Thu nhập tăng", "Khi thu nhập tăng và giá không đổi, đường ngân sách thay đổi thế nào?", "Dịch chuyển song song ra ngoài", "Độ dốc không đổi vì tỷ lệ giá không đổi."),
      F("Giá X giảm", "Khi giá hàng X giảm, đường ngân sách thay đổi thế nào?", "Xoay ra ngoài tại trục X", "Sức mua tối đa của X tăng còn giao điểm trục Y không đổi."),
      F("Tối ưu nội", "Tại nghiệm tối ưu nội, điều kiện tiếp xúc là gì?", "MRS bằng tỷ lệ giá của hai hàng hóa", "Đường bàng quan tiếp xúc đường ngân sách."),
      F("Hàng thông thường", "Với hàng hóa thông thường, thu nhập tăng thường làm điều gì?", "Lượng cầu hàng hóa tăng", "Tác động thu nhập cùng chiều."),
      F("Hàng thứ cấp", "Với hàng hóa thứ cấp, thu nhập tăng thường làm điều gì?", "Lượng cầu hàng hóa giảm", "Tác động thu nhập ngược chiều.", 2)
    ]
  },
  {
    id: 4,
    short: "Chi phí",
    title: "Chi phí sản xuất",
    color: "#b27a20",
    intro: "Nắm cấu trúc doanh thu–chi phí, các đường chi phí ngắn hạn và dài hạn, cùng nguyên tắc tối đa hóa lợi nhuận.",
    keywords: ["chi phí cố định", "chi phí biên", "bình quân", "MR = MC", "dài hạn"],
    traps: ["Nhầm chi phí chìm với chi phí cơ hội", "Lấy MC bằng ATC ở mọi mức sản lượng", "Tối đa doanh thu thay cho tối đa lợi nhuận"],
    formulas: ["π = TR − TC", "ATC = TC/Q", "AFC = FC/Q", "AVC = VC/Q", "MC = ΔTC/ΔQ"],
    facts: [
      F("Lợi nhuận", "Lợi nhuận kinh tế được tính thế nào?", "Tổng doanh thu trừ tổng chi phí kinh tế", "Chi phí kinh tế gồm cả chi phí hiện và chi phí cơ hội."),
      F("Hàm sản xuất", "Hàm sản xuất mô tả mối quan hệ nào?", "Giữa lượng đầu vào và sản lượng tối đa có thể tạo ra", "Nó phản ánh công nghệ sản xuất."),
      F("Chi phí cố định", "Chi phí cố định có đặc điểm gì trong ngắn hạn?", "Không thay đổi theo sản lượng", "Doanh nghiệp vẫn chịu FC khi sản lượng bằng 0."),
      F("Chi phí biến đổi", "Chi phí biến đổi thay đổi thế nào?", "Thay đổi theo mức sản lượng", "Nguyên liệu và lao động theo giờ thường là ví dụ."),
      F("Tổng chi phí", "Tổng chi phí bằng tổng của những thành phần nào?", "Chi phí cố định và chi phí biến đổi", "TC = FC + VC."),
      F("Chi phí biên", "Chi phí biên đo lường điều gì?", "Phần tổng chi phí tăng thêm khi sản xuất thêm một đơn vị", "MC = ΔTC/ΔQ."),
      F("Chi phí bình quân", "Chi phí bình quân toàn bộ được tính thế nào?", "Tổng chi phí chia cho sản lượng", "ATC = AFC + AVC."),
      F("Quan hệ MC–ATC", "Khi MC nhỏ hơn ATC, ATC thay đổi thế nào?", "ATC giảm", "Đại lượng cận biên thấp hơn kéo đại lượng bình quân xuống."),
      F("Ngắn hạn", "Đặc trưng của ngắn hạn trong sản xuất là gì?", "Có ít nhất một yếu tố đầu vào cố định", "Độ dài thời gian cụ thể tùy ngành."),
      F("Dài hạn", "Đặc trưng của dài hạn trong sản xuất là gì?", "Mọi yếu tố đầu vào đều có thể thay đổi", "Doanh nghiệp có thể điều chỉnh quy mô."),
      F("Tối đa lợi nhuận", "Nguyên tắc sản lượng tối đa hóa lợi nhuận là gì?", "Chọn sản lượng tại đó doanh thu biên bằng chi phí biên", "Điều kiện MR = MC đi cùng MC đang tăng.", 2)
    ]
  },
  {
    id: 5,
    short: "Cấu trúc thị trường",
    title: "Các loại thị trường",
    color: "#2f6e9e",
    intro: "So sánh cạnh tranh hoàn hảo, độc quyền, cạnh tranh độc quyền và độc quyền nhóm qua quyền lực giá và hành vi doanh nghiệp.",
    keywords: ["người nhận giá", "rào cản", "MR", "phân biệt giá", "phụ thuộc chiến lược"],
    traps: ["Cho rằng độc quyền không có đường cầu", "Nhầm cạnh tranh độc quyền với độc quyền", "Dùng P = MC cho mọi cấu trúc"],
    formulas: ["Mọi doanh nghiệp tối ưu: MR = MC", "Cạnh tranh hoàn hảo: P = MR"],
    facts: [
      F("Cạnh tranh hoàn hảo", "Đặc điểm cốt lõi của thị trường cạnh tranh hoàn hảo là gì?", "Nhiều người mua bán, sản phẩm đồng nhất và tự do gia nhập", "Mỗi doanh nghiệp quá nhỏ để ảnh hưởng giá."),
      F("Người nhận giá", "Doanh nghiệp cạnh tranh hoàn hảo đối diện mức giá thế nào?", "Chấp nhận giá do thị trường quyết định", "Đường cầu riêng của doanh nghiệp nằm ngang tại giá thị trường."),
      F("Cung ngắn hạn", "Đường cung ngắn hạn của doanh nghiệp cạnh tranh là phần nào?", "Phần đường MC nằm trên AVC", "Dưới AVC doanh nghiệp nên tạm ngừng."),
      F("Cân bằng dài hạn", "Lợi nhuận kinh tế của doanh nghiệp cạnh tranh hoàn hảo trong dài hạn thường bằng bao nhiêu?", "Bằng 0 do gia nhập và rút lui", "Doanh nghiệp vẫn thu lợi nhuận kế toán và bù đủ chi phí cơ hội."),
      F("Độc quyền", "Đặc điểm nào tạo quyền lực cho doanh nghiệp độc quyền?", "Một người bán cùng rào cản gia nhập cao", "Doanh nghiệp là người định giá trong giới hạn của cầu."),
      F("MR độc quyền", "Với đường cầu dốc xuống, doanh thu biên của độc quyền nằm ở đâu?", "Nằm dưới đường cầu", "Muốn bán thêm, doanh nghiệp thường phải giảm giá."),
      F("Giá độc quyền", "Doanh nghiệp độc quyền tối đa hóa lợi nhuận theo trình tự nào?", "Chọn Q tại MR = MC rồi lấy giá trên đường cầu", "Không đặt trực tiếp P = MC."),
      F("Phân biệt giá", "Phân biệt giá là hành vi nào?", "Bán cùng hàng hóa cho các khách hàng khác nhau với mức giá khác nhau không do chi phí", "Cần khả năng phân nhóm và hạn chế bán lại."),
      F("Cạnh tranh độc quyền", "Thị trường cạnh tranh độc quyền có đặc điểm nào?", "Nhiều doanh nghiệp bán sản phẩm khác biệt và tương đối dễ gia nhập", "Mỗi doanh nghiệp có một ít quyền lực thị trường."),
      F("Độc quyền nhóm", "Điểm nổi bật của độc quyền nhóm là gì?", "Chỉ vài doanh nghiệp và các quyết định phụ thuộc chiến lược lẫn nhau", "Hành động của một hãng ảnh hưởng mạnh đến hãng khác."),
      F("Điều tiết độc quyền", "Một mục tiêu phổ biến của chính sách đối với độc quyền là gì?", "Hạn chế tổn thất vô ích và lạm dụng quyền lực thị trường", "Công cụ có thể là luật cạnh tranh, điều tiết giá hoặc sở hữu công.", 3)
    ]
  },
  {
    id: 6,
    short: "GDP & thu nhập",
    title: "Đo lường sản lượng quốc gia",
    color: "#a64c6f",
    intro: "Phân biệt các chỉ tiêu sản lượng–thu nhập, ba phương pháp tính GDP và vai trò của giá danh nghĩa, giá thực tế.",
    keywords: ["GDP", "GNP", "NDP", "NI", "giá thực tế"],
    traps: ["Cộng cả hàng trung gian", "Quên trừ nhập khẩu", "Nhầm GDP với GNP", "Nhầm danh nghĩa với thực tế"],
    formulas: ["GDP = C + I + G + X − M", "GNP = GDP + thu nhập ròng từ nước ngoài", "NDP = GDP − khấu hao", "DI = PI − thuế cá nhân"],
    facts: [
      F("GDP", "GDP đo lường đại lượng nào?", "Giá trị thị trường của hàng hóa và dịch vụ cuối cùng sản xuất trong lãnh thổ một thời kỳ", "GDP dựa trên phạm vi lãnh thổ."),
      F("GNP", "GNP khác GDP chủ yếu ở tiêu chí nào?", "GNP dựa trên thu nhập do công dân tạo ra bất kể nơi sản xuất", "GNP = GDP + thu nhập yếu tố ròng từ nước ngoài."),
      F("NDP", "NDP được xác định như thế nào?", "GDP trừ khấu hao", "Chỉ tiêu ròng loại phần hao mòn tư bản."),
      F("NNP", "NNP được xác định như thế nào?", "GNP trừ khấu hao", "Đây là tổng sản phẩm quốc dân ròng."),
      F("NI", "Thu nhập quốc dân phản ánh điều gì?", "Tổng thu nhập của các yếu tố sản xuất trong nền kinh tế", "NI gắn với tiền công, tiền thuê, lãi và lợi nhuận."),
      F("PI", "Thu nhập cá nhân là gì?", "Thu nhập thực tế các cá nhân nhận được trước thuế cá nhân", "PI khác NI do các khoản không phân phối và chuyển giao."),
      F("DI", "Thu nhập khả dụng được dùng cho mục đích nào?", "Tiêu dùng hoặc tiết kiệm sau khi nộp thuế cá nhân", "DI = PI − thuế cá nhân."),
      F("Phương pháp chi tiêu", "Công thức GDP theo phương pháp chi tiêu là gì?", "C + I + G + X − M", "Nhập khẩu bị trừ vì đã nằm trong C, I hoặc G nhưng không sản xuất trong nước."),
      F("Phương pháp thu nhập", "Phương pháp thu nhập cộng những khoản nào?", "Thu nhập trả cho các yếu tố sản xuất cùng các điều chỉnh cần thiết", "Về nguyên tắc, giá trị sản lượng bằng thu nhập tạo ra."),
      F("GDP danh nghĩa", "GDP danh nghĩa sử dụng loại giá nào?", "Giá hiện hành của chính năm đang tính", "Nó thay đổi do cả giá và lượng."),
      F("GDP thực tế", "GDP thực tế sử dụng loại giá nào?", "Giá cố định của năm cơ sở", "Nó giúp tách biến động sản lượng khỏi biến động giá.", 2)
    ]
  },
  {
    id: 7,
    short: "AD–AS",
    title: "Tổng cung, tổng cầu và sản lượng cân bằng",
    color: "#4d7d42",
    intro: "Phân tích cân bằng sản lượng trong nền kinh tế mở, các cú sốc tổng cung–tổng cầu và cơ chế số nhân.",
    keywords: ["AD", "AS", "sản lượng tiềm năng", "số nhân", "nền kinh tế mở"],
    traps: ["Nhầm AD với cầu một hàng hóa", "Nhầm dịch chuyển với di chuyển dọc đường", "Quên rò rỉ nhập khẩu"],
    formulas: ["AD = C + I + G + X − M", "Số nhân chi tiêu giản đơn k = 1/(1 − MPC)", "ΔY = k × ΔA"],
    facts: [
      F("Tổng cầu", "Tổng cầu biểu thị điều gì?", "Tổng lượng hàng hóa và dịch vụ được mua tại mỗi mức giá chung", "AD gồm C, I, G và xuất khẩu ròng."),
      F("Độ dốc AD", "Đường tổng cầu thường có hình dạng nào?", "Dốc xuống theo mức giá chung", "Hiệu ứng lãi suất, của cải và tỷ giá góp phần giải thích."),
      F("Dịch chuyển AD", "Yếu tố nào làm tổng cầu dịch chuyển?", "Thay đổi C, I, G hoặc xuất khẩu ròng không do mức giá chung", "Chính sách tài khóa và tiền tệ có thể làm AD dịch chuyển."),
      F("Tổng cung ngắn hạn", "Đường tổng cung ngắn hạn thường có dạng nào?", "Dốc lên", "Giá và tiền lương điều chỉnh không hoàn toàn trong ngắn hạn."),
      F("Tổng cung dài hạn", "Đường tổng cung dài hạn được biểu diễn thế nào?", "Thẳng đứng tại sản lượng tiềm năng", "Dài hạn, sản lượng phụ thuộc nguồn lực và công nghệ."),
      F("Dịch chuyển AS", "Yếu tố nào có thể dịch chuyển tổng cung?", "Chi phí đầu vào, năng suất, nguồn lực hoặc kỳ vọng thay đổi", "Giá dầu tăng là cú sốc cung bất lợi."),
      F("Cân bằng vĩ mô", "Cân bằng sản lượng và mức giá trong mô hình AD–AS ở đâu?", "Tại giao điểm của AD và AS", "Giao điểm xác định mức giá và sản lượng cân bằng."),
      F("Sản lượng tiềm năng", "Sản lượng tiềm năng là gì?", "Mức sản lượng bền vững khi các nguồn lực được sử dụng ở mức bình thường", "Không đồng nghĩa thất nghiệp bằng 0."),
      F("MPC", "Khuynh hướng tiêu dùng cận biên đo lường điều gì?", "Phần thu nhập khả dụng tăng thêm được dùng để tiêu dùng", "MPC nằm giữa 0 và 1 trong mô hình giản đơn."),
      F("Số nhân", "Số nhân chi tiêu cho biết điều gì?", "Sản lượng cân bằng thay đổi nhiều lần so với thay đổi chi tiêu tự định", "Một khoản chi trở thành thu nhập và tạo các vòng chi tiêu tiếp theo."),
      F("Kinh tế mở", "Trong nền kinh tế mở, nhập khẩu có vai trò gì trong dòng chi tiêu?", "Là một khoản rò rỉ khỏi chi tiêu cho sản phẩm trong nước", "Khuynh hướng nhập khẩu cao làm số nhân nhỏ hơn.", 3)
    ]
  },
  {
    id: 8,
    short: "Chính sách vĩ mô",
    title: "Các chính sách kinh tế vĩ mô",
    color: "#355c7d",
    intro: "Kết nối tài khóa, tiền tệ, IS–LM và ngoại hối để chọn đúng công cụ trong từng bối cảnh kinh tế.",
    keywords: ["tài khóa", "cung tiền", "IS", "LM", "tỷ giá"],
    traps: ["Nhầm công cụ của ngân hàng trung ương với chính phủ", "Nhầm IS dịch do cung tiền", "Nhầm nội tệ lên giá giúp xuất khẩu"],
    formulas: ["IS: cân bằng thị trường hàng hóa", "LM: cân bằng thị trường tiền tệ", "Tỷ giá là giá của một đồng tiền tính bằng đồng tiền khác"],
    facts: [
      F("Tài khóa", "Chính sách tài khóa sử dụng các công cụ chủ yếu nào?", "Chi tiêu chính phủ và thuế", "Cơ quan tài khóa tác động tổng cầu qua G và thuế."),
      F("Tài khóa mở rộng", "Tài khóa mở rộng thường gồm biện pháp nào?", "Tăng chi tiêu chính phủ hoặc giảm thuế", "Mục tiêu thường là kích thích tổng cầu và sản lượng."),
      F("Tài khóa thắt chặt", "Tài khóa thắt chặt thường được dùng khi nào?", "Khi cần giảm tổng cầu và áp lực lạm phát", "Công cụ là giảm G hoặc tăng thuế."),
      F("Tiền tệ", "Chính sách tiền tệ do chủ thể nào thực hiện?", "Ngân hàng trung ương thông qua cung tiền và lãi suất", "Công cụ thường gồm nghiệp vụ thị trường mở, dự trữ và lãi suất."),
      F("Tiền tệ mở rộng", "Tiền tệ mở rộng tác động ban đầu thế nào?", "Tăng cung tiền và tạo áp lực giảm lãi suất", "Lãi suất thấp hơn khuyến khích đầu tư và tổng cầu."),
      F("Đường IS", "Đường IS biểu thị các phối hợp nào?", "Lãi suất và sản lượng làm thị trường hàng hóa cân bằng", "IS thường dốc xuống."),
      F("Dịch chuyển IS", "Yếu tố nào làm đường IS dịch chuyển?", "Thay đổi chi tiêu tự định như G, thuế, đầu tư kỳ vọng", "Tài khóa mở rộng thường dịch IS sang phải."),
      F("Đường LM", "Đường LM biểu thị các phối hợp nào?", "Lãi suất và sản lượng làm thị trường tiền tệ cân bằng", "LM thường dốc lên."),
      F("Dịch chuyển LM", "Tăng cung tiền làm đường LM thay đổi thế nào?", "Dịch sang phải hoặc xuống dưới", "Tại mỗi mức sản lượng, lãi suất cân bằng thấp hơn."),
      F("Tỷ giá", "Tỷ giá hối đoái là gì?", "Giá của một đồng tiền được biểu thị bằng đồng tiền khác", "Cung cầu ngoại tệ xác định tỷ giá trong cơ chế thả nổi."),
      F("Nội tệ lên giá", "Khi nội tệ lên giá, xuất khẩu ròng thường thay đổi thế nào?", "Giảm vì hàng trong nước đắt tương đối với nước ngoài", "Xuất khẩu giảm và nhập khẩu có xu hướng tăng.", 3)
    ]
  },
  {
    id: 9,
    short: "Lạm phát & việc làm",
    title: "Lạm phát và thất nghiệp",
    color: "#a4473d",
    intro: "Nhận diện, đo lường, phân loại nguyên nhân và chọn phản ứng chính sách trước biến động giá cả và thị trường lao động.",
    keywords: ["mức giá chung", "CPI", "thất nghiệp tự nhiên", "chu kỳ", "lực lượng lao động"],
    traps: ["Nhầm giá một mặt hàng tăng với lạm phát", "Cho rằng thất nghiệp tự nhiên bằng 0", "Đưa người không tìm việc vào lực lượng lao động"],
    formulas: ["Tỷ lệ lạm phát = % thay đổi chỉ số giá", "Tỷ lệ thất nghiệp = Số người thất nghiệp / Lực lượng lao động × 100%"],
    facts: [
      F("Lạm phát", "Dấu hiệu cốt lõi của lạm phát là gì?", "Mức giá chung tăng liên tục theo thời gian", "Giá một mặt hàng tăng riêng lẻ chưa đủ để kết luận lạm phát."),
      F("Đo lường lạm phát", "Lạm phát thường được đo bằng cách nào?", "Tính tỷ lệ phần trăm thay đổi của một chỉ số giá", "CPI hoặc chỉ số điều chỉnh GDP có thể được sử dụng."),
      F("Giảm phát", "Giảm phát là trạng thái nào?", "Mức giá chung giảm kéo dài", "Giảm phát khác với lạm phát giảm tốc."),
      F("Lạm phát do cầu kéo", "Lạm phát do cầu kéo xuất hiện khi nào?", "Tổng cầu tăng nhanh hơn khả năng sản xuất", "Có thể hình dung “quá nhiều tiền đuổi theo quá ít hàng”."),
      F("Lạm phát do chi phí đẩy", "Lạm phát do chi phí đẩy bắt nguồn từ đâu?", "Chi phí sản xuất tăng làm tổng cung giảm", "Giá dầu hoặc tiền lương đầu vào tăng có thể gây ra."),
      F("Tác động lạm phát", "Lạm phát ngoài dự kiến gây tác động phân phối nào?", "Làm chuyển giao sức mua giữa người cho vay và người đi vay", "Lạm phát cao hơn dự kiến thường có lợi cho người vay theo lãi suất danh nghĩa cố định."),
      F("Thất nghiệp", "Một người được xem là thất nghiệp khi nào?", "Không có việc, sẵn sàng làm việc và đang tích cực tìm việc", "Không tìm việc thì thường không thuộc lực lượng lao động."),
      F("Lực lượng lao động", "Lực lượng lao động gồm những ai?", "Người có việc làm cộng người thất nghiệp đang tìm việc", "Không bao gồm toàn bộ dân số trưởng thành."),
      F("Thất nghiệp tạm thời", "Thất nghiệp tạm thời phát sinh vì lý do gì?", "Người lao động cần thời gian tìm công việc phù hợp", "Nó tồn tại cả khi nền kinh tế vận hành bình thường."),
      F("Thất nghiệp cơ cấu", "Thất nghiệp cơ cấu xuất hiện khi nào?", "Kỹ năng hoặc địa điểm lao động không phù hợp với nhu cầu việc làm", "Thay đổi công nghệ có thể tạo thất nghiệp cơ cấu."),
      F("Thất nghiệp chu kỳ", "Thất nghiệp chu kỳ liên quan đến yếu tố nào?", "Suy giảm tổng cầu trong các giai đoạn suy thoái", "Khi sản lượng dưới tiềm năng, thất nghiệp chu kỳ thường dương.", 2)
    ]
  }
];

function rotate(array, offset) {
  return array.map((_, i) => array[(i + offset) % array.length]);
}

export const questions = chapters.flatMap((chapter) => {
  const answers = chapter.facts.map((fact) => fact.answer);
  return chapter.facts.map((fact, index) => {
    const distractors = [1, 3, 6].map((step) => answers[(index + step) % answers.length]);
    const correctIndex = (chapter.id + index) % 4;
    const raw = [...distractors];
    raw.splice(correctIndex, 0, fact.answer);
    const options = rotate(raw, index % 2);
    const finalCorrect = options.indexOf(fact.answer);
    return {
      id: `c${chapter.id}-${index + 1}`,
      chapter: chapter.id,
      level: fact.level,
      prompt: fact.prompt,
      options,
      correct: finalCorrect,
      explanation: fact.note,
      optionNotes: options.map((option, optionIndex) =>
        optionIndex === finalCorrect
          ? `Đúng. ${fact.note}`
          : `Chưa đúng. Phương án này mô tả “${chapter.facts[answers.indexOf(option)]?.label || "một khái niệm khác"}”, không trả lời chính xác câu hỏi về “${fact.label}”.`
      )
    };
  });
});

questions.push({
  id: "sample-gdp",
  chapter: 6,
  level: 3,
  prompt: "Tiêu dùng 800, đầu tư 250, chi tiêu chính phủ 300, xuất khẩu 180 và nhập khẩu 230 (tỷ USD). GDP theo chi tiêu bằng bao nhiêu?",
  options: ["1.250 tỷ USD", "1.300 tỷ USD", "1.350 tỷ USD", "1.530 tỷ USD"],
  correct: 1,
  explanation: "GDP = C + I + G + X − M = 800 + 250 + 300 + 180 − 230 = 1.300 tỷ USD.",
  optionNotes: [
    "Sai. Kết quả này không cộng trừ đầy đủ năm thành phần.",
    "Đúng. Áp dụng đúng GDP = C + I + G + X − M.",
    "Sai. Kết quả này bỏ sót tác động ròng của ngoại thương.",
    "Sai. Đây là tổng trước khi trừ nhập khẩu."
  ]
});

export const totalQuestions = questions.length;

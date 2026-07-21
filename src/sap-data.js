const F = (label, prompt, answer, note, level = 1) => ({ label, prompt, answer, note, level });

export const sapChapters = [
  {
    id: 1, short: "FI-AR", title: "Financial Accounting — Accounts Receivable", color: "#2d6da3",
    intro: "Quản lý khoản phải thu từ tạo hóa đơn khách hàng, ghi nhận tiền vào đến sửa hoặc đảo các bút toán sai.",
    keywords: ["customer", "receivable", "reconciliation account", "incoming payment", "clearing"],
    traps: ["Nhầm AR với AP", "Hạch toán trực tiếp vào reconciliation account", "Nhầm đổi gán hóa đơn với hủy toàn bộ khoản tiền"],
    formulas: ["Invoice → Open receivable → Incoming payment → Clearing", "Thanh toán sớm Motown: 2% trong 14 ngày", "Company Code: US00 · Leading Ledger: 0L"],
    facts: [
      F("Mục tiêu FI-AR", "Mục tiêu chính của case study FI-AR là gì?", "Hiểu và quản lý quy trình kế toán ngoài trong khu vực khoản phải thu", "Người học làm việc trong customer accounting của bộ phận FI."),
      F("Accounts Receivable", "Accounts Receivable tổng hợp nội dung nào?", "Các khoản phải thu riêng lẻ từ khách hàng trong customer sub-ledger", "Song song với sub-ledger là reconciliation account trong General Ledger."),
      F("Reconciliation account", "Tài khoản nào kết nối customer sub-ledger với General Ledger?", "Trade receivables reconciliation account", "Tài khoản đối chiếu tổng hợp tự động các bút toán từ sổ phụ khách hàng."),
      F("Payment terms", "Vì sao điều khoản thanh toán của Motown Bikes được lưu trong master data?", "Để hệ thống tự động tính chiết khấu khi ghi nhận tiền vào", "Case quy định chiết khấu 2% nếu khách hàng thanh toán trong 14 ngày."),
      F("Create Outgoing Invoices", "Ứng dụng nào được dùng để nhập thủ công hóa đơn khách hàng?", "Create Outgoing Invoices", "Case tạo bảy customer invoices tại company code US00."),
      F("Display Customer Balances", "Ứng dụng nào hiển thị debit, credit, balance và line items của khách hàng?", "Display Customer Balances", "Số dư được xem theo company code, fiscal year và customer."),
      F("Post Incoming Payments", "Ứng dụng nào ghi nhận khoản tiền khách hàng đã thanh toán?", "Post Incoming Payments", "Khoản thu được gán với open item tương ứng để thực hiện clearing."),
      F("Motown payment", "Với hóa đơn Motown 1 trị giá 5.000 USD và chiết khấu 2%, số tiền nhận là bao nhiêu?", "4.900 USD", "Chiết khấu là 100 USD nên số tiền vào ngân hàng là 4.900 USD.", 3),
      F("Cancel receivable", "Khi Motown không còn cần First Aid Kits và chưa thanh toán, xử lý nào phù hợp?", "Hủy chứng từ hóa đơn tạo khoản phải thu", "Đây là reversal of a delivery and service receivable before payment."),
      F("Change assignment", "Philly Bikes đã trả đúng số tiền nhưng bị clearing nhầm hóa đơn; cần làm gì?", "Reset clearing rồi gán khoản thanh toán sang đúng invoice", "Tiền vẫn ở Global Bike; chỉ open item được thanh toán bị thay đổi."),
      F("Reverse payment", "Khi incoming payment của Windy City Bikes bị ghi nhận nhầm hoàn toàn, xử lý nào đúng?", "Reset clearing và đảo toàn bộ chứng từ thanh toán", "Sau khi đảo, khoản phải thu ban đầu mở lại và số dư trade receivables tăng."),
      F("Vai trò", "Ai thực hiện phần lớn nghiệp vụ tạo invoice và post incoming payment trong FI-AR case?", "Stephanie Bernard — AR Accountant", "Shuyuan Chen, Head of Accounting, xử lý các tình huống đảo và sửa bút toán.")
    ]
  },
  {
    id: 2, short: "FI-AP", title: "Financial Accounting — Accounts Payable", color: "#a05c38",
    intro: "Theo dõi nghĩa vụ với nhà cung cấp từ dữ liệu chủ và tài khoản G/L đến invoice receipt, outgoing payment và financial statement.",
    keywords: ["supplier", "payable", "open item", "vendor payment", "expense account"],
    traps: ["Nhầm vendor với customer", "Đăng trực tiếp reconciliation account", "Cho rằng paid item vẫn là open item"],
    formulas: ["Vendor invoice: Dr Expense · Cr Payables", "Vendor payment: Dr Payables · Cr Bank", "US00: 1.500 USD rent · DE00 challenge: 3.000 EUR"],
    facts: [
      F("Mục tiêu FI-AP", "Case study FI-AP tập trung vào quy trình nào?", "Quy trình kế toán ngoài trong khu vực khoản phải trả nhà cung cấp", "Người học làm việc trong supplier accounting của bộ phận FI."),
      F("Reconciliation account", "Đặc điểm quan trọng của reconciliation account trong FI-AP là gì?", "Kết nối vendor sub-ledger với G/L và không được post trực tiếp", "Bút toán supplier cập nhật tài khoản đối chiếu tự động."),
      F("Business Partner", "Ba category của Business Partner trong tài liệu là gì?", "Person, Organization và Group", "Cardinal Properties được tạo dưới dạng Organization với vai trò vendor."),
      F("Vendor", "Vendor được định nghĩa như thế nào trong case study?", "Business partner mà doanh nghiệp có nghĩa vụ phải trả cho hàng hóa, dịch vụ hoặc quyền đã nhận", "Vendor còn được gọi là supplier trong ngữ cảnh nghiệp vụ."),
      F("Bank transfer", "Bút toán chuyển 5.000 USD sang alternate bank account ghi Nợ và Có thế nào?", "Nợ bank account mới và Có bank account hiện tại cùng 5.000 USD", "Đây là chuyển tiền nội bộ nên tổng tiền không thay đổi.", 2),
      F("Create Supplier Invoice", "Ứng dụng nào ghi nhận hóa đơn tiền thuê 1.500 USD từ Cardinal Properties?", "Create Supplier Invoice", "Hóa đơn tạo expense và một khoản phải trả mở cho landlord."),
      F("Open item", "Một supplier invoice được gọi là open item khi nào?", "Khi nghĩa vụ phải trả đã ghi nhận nhưng chưa được thanh toán", "Sau clearing bằng outgoing payment, item không còn mở."),
      F("Display Supplier Balances", "Ứng dụng nào dùng để kiểm tra số dư và line items của Cardinal Properties?", "Display Supplier Balances", "Có thể xem theo supplier, company code US00 và fiscal year."),
      F("Post Outgoing Payments", "Ứng dụng nào thanh toán tiền thuê cho Cardinal Properties?", "Post Outgoing Payments", "Journal Entry Type trong case là KZ — Vendor Payment."),
      F("Payment posting", "Thanh toán supplier tác động tới tài khoản nào?", "Giảm Accounts Payable và giảm số dư bank account", "Bút toán thanh toán là Nợ Payables, Có Bank."),
      F("Financial statement", "Ứng dụng Balance Sheet/Income Statement giúp kiểm tra điều gì?", "Ảnh hưởng của các bút toán lên balance sheet và profit and loss statement", "Cấu trúc báo cáo gom các G/L accounts theo statement version."),
      F("FI-AP challenge", "Trong FI-AP Challenge tại Đức, company code và số tiền invoice là gì?", "DE00 và 3.000 EUR", "Challenge dùng Burgmeister Zubehör OHG và yêu cầu chú ý company code khác US00.", 3)
    ]
  },
  {
    id: 3, short: "SD", title: "Sales and Distribution — Order to Cash", color: "#398071",
    intro: "Thực hiện trọn chu trình bán hàng từ tạo khách hàng và chào giá đến giao hàng, xuất kho, lập hóa đơn và thu tiền.",
    keywords: ["inquiry", "quotation", "sales order", "outbound delivery", "goods issue", "billing"],
    traps: ["Nhầm inquiry với legally binding quotation", "Nhầm picking với goods issue", "Lập billing trước khi hoàn tất delivery"],
    formulas: ["BP → Inquiry → Quotation → Sales Order → Outbound Delivery", "Picking → Post Goods Issue → Billing → Incoming Payment", "Order-to-cash tích hợp SD + MM + FI"],
    facts: [
      F("Order-to-cash", "Mục tiêu của SD case study là gì?", "Hiểu và thực hiện một chu trình order-to-cash tích hợp", "Quy trình đi qua SD, MM và FI với nhiều vai trò nghiệp vụ."),
      F("Customer master", "Ba nhóm dữ liệu của customer master là gì?", "General, accounting và sales data", "Case dùng central creation để tạo đồng thời các view cần thiết."),
      F("Business Partner role", "Role nào được chọn để tạo khách hàng FI trong case The Bike Zone?", "FLCU00 — FI Customer", "Business Partner là đối tượng cấp trên và được gán các role theo organizational level."),
      F("Contact person", "Contact person của khách hàng có vai trò gì?", "Là nhân viên của khách hàng qua đó Global Bike giao tiếp", "Contact person được tạo là Person với role BUP001 và liên kết với customer BP."),
      F("Inquiry", "Customer inquiry có tính chất nào?", "Yêu cầu báo giá hoặc thông tin bán hàng không mang tính ràng buộc", "Inquiry có thể chứa vật liệu, dịch vụ, điều kiện và ngày giao."),
      F("Quotation", "Quotation khác inquiry ở điểm quan trọng nào?", "Quotation là đề nghị giao hàng hoặc dịch vụ có tính ràng buộc pháp lý", "Dữ liệu inquiry có thể được copy vào quotation."),
      F("Sales order", "Sales order trong case được tạo như thế nào?", "Tạo với reference tới quotation đã được khách hàng chấp nhận", "Order type là OR1 — Standard order."),
      F("Outbound delivery", "Chứng từ nào khởi động hoạt động giao hàng?", "Outbound delivery được tạo từ sales order", "Shipping point là đơn vị tổ chức chịu trách nhiệm tạo delivery."),
      F("Picking", "Picking vật liệu tác động trực tiếp tới đâu?", "Cập nhật outbound delivery document", "Picking chuẩn bị đúng số lượng hàng nhưng chưa chuyển quyền sở hữu."),
      F("Post Goods Issue", "Post Goods Issue có ý nghĩa nghiệp vụ gì?", "Chuyển quyền sở hữu hàng từ Global Bike sang The Bike Zone và giảm tồn kho", "PGI tạo tác động vật tư và kế toán, khác với chỉ picking."),
      F("Billing and payment", "Sau khi delivery hoàn tất, hai bước tài chính cuối là gì?", "Tạo/post billing document rồi ghi nhận incoming customer payment", "Billing tạo customer invoice; payment sau đó clearing khoản phải thu."),
      F("Document flow", "Document Flow dùng để làm gì?", "Liên kết và theo dõi toàn bộ chứng từ liên quan đến sales order", "Khi hoàn tất, inquiry, quotation, order, delivery, goods issue, billing và payment có thể được truy vết.")
    ]
  },
  {
    id: 4, short: "MM", title: "Materials Management — Procure to Pay", color: "#785ca5",
    intro: "Thực hiện quy trình mua sắm tích hợp từ supplier/material master đến chọn báo giá, nhận hàng, hóa đơn và thanh toán.",
    keywords: ["purchase requisition", "RFQ", "supplier quotation", "purchase order", "goods receipt", "invoice"],
    traps: ["Cho rằng purchase requisition làm tăng tồn kho", "Nhầm RFQ với purchase order", "Nhầm quality inspection stock với unrestricted-use stock"],
    formulas: ["Supplier + Material master → Purchase Requisition → RFQ", "Quotation evaluation → Purchase Order → Goods Receipt", "Supplier Invoice → Outgoing Payment → Cleared payable"],
    facts: [
      F("Procure-to-pay", "Mục tiêu của MM case study là gì?", "Hiểu và thực hiện quy trình mua sắm tích hợp từ master data đến payment", "Quy trình phối hợp Materials Management và Financial Accounting."),
      F("Supplier master", "Ba nhóm dữ liệu trong supplier master là gì?", "General Data, Finance và Procurement", "Case tạo Mid-West Supply centrally để có đủ các view giao dịch."),
      F("Material master", "Material chain lock mới được định giá theo phương pháp nào?", "Moving Average Price/Periodic Unit Price với price control V", "Inventory price ban đầu là 32 USD và valuation class 3100 — Trading goods."),
      F("Stock ban đầu", "Ngay sau khi tạo material nhưng chưa post giao dịch, stock history là bao nhiêu?", "Bằng 0 ở tất cả key figures", "Tạo master data không đồng nghĩa nhập hàng vào kho."),
      F("Purchase requisition", "Purchase requisition có tác động ngay tới tồn kho không?", "Không; đây là yêu cầu mua nội bộ và chưa phải goods receipt", "Tài liệu xác nhận stock development chưa thay đổi sau khi tạo requisition."),
      F("RFQ", "Request for Quotation được tạo nhằm mục đích gì?", "Mời nhiều supplier cung cấp điều kiện và giá cho nhu cầu mua", "Case duy trì quotation của ba vendor để so sánh."),
      F("Bid evaluation", "Sau price-based bid evaluation, case chọn supplier nào?", "Mid-West Supply vì có quotation tốt nhất", "Best quotation được highlight xanh và hai quotation còn lại bị reject."),
      F("Purchase order", "Purchase order trong case được tạo với reference tới chứng từ nào?", "Supplier quotation/RFQ đã được chọn", "Reference giúp kế thừa dữ liệu và duy trì document flow."),
      F("Goods receipt", "Khi post goods receipt cho stock item, hệ thống tạo chứng từ gì?", "Material document ghi vật liệu, số lượng, plant và storage location", "Goods receipt là bước làm tăng tồn kho thực tế."),
      F("Quality inspection", "Làm thế nào để 100 units dùng được tự do sau kiểm tra?", "Transfer từ Stock in Quality Inspection sang Unrestricted-use stock", "Đây là thay đổi loại stock trong plant."),
      F("Partial invoices", "Case MM xử lý invoice của supplier theo cách nào?", "Tạo hai partial supplier invoices cho hai lần giao hàng", "Cả hai invoice có status Posted và xuất hiện trong PO history."),
      F("Outgoing payment", "Khi thanh toán cùng lúc hai hóa đơn tổng 6.400 USD, open balance trở thành bao nhiêu?", "0 USD sau khi chọn và clear cả hai open items", "Hệ thống tạo supplier payment document và khoản phải trả được tất toán.", 3)
    ]
  }
];

export const sapGuides = {
  1: {
    question: "Điều gì xảy ra khi doanh nghiệp bán hàng trước nhưng khách hàng trả tiền sau?",
    overview: "Global Bike đã giao hàng nên có quyền đòi tiền khách hàng. Quyền đòi tiền đó là khoản phải thu (Accounts Receivable). FI-AR giúp biết ai còn nợ, nợ hóa đơn nào, đã trả bao nhiêu và cần xử lý thế nào nếu ghi nhận sai.",
    scenario: "Global Bike xuất hóa đơn 5.000 USD cho Motown Bikes. Motown được giảm 2% nếu trả trong 14 ngày, nên ngân hàng thực nhận 4.900 USD. SAP đóng hóa đơn 5.000 USD bằng cách ghép 4.900 USD tiền vào và 100 USD chiết khấu.",
    flow: ["Tạo customer invoice", "Phát sinh open receivable", "Nhận tiền vào ngân hàng", "Chọn đúng open item", "Clearing khoản phải thu"],
    glossary: [
      ["Customer", "Khách hàng mua hàng/dịch vụ của Global Bike"],
      ["Receivable", "Số tiền khách hàng còn nợ doanh nghiệp"],
      ["Open item", "Hóa đơn chưa được thanh toán hoặc clearing hết"],
      ["Clearing", "Ghép khoản thanh toán với hóa đơn để đóng công nợ"],
      ["Reversal", "Bút toán đảo để triệt tiêu ảnh hưởng của bút toán sai"]
    ],
    examples: {
      "Mục tiêu FI-AR": "Hãy hình dung FI-AR như một sổ theo dõi: Motown nợ 5.000 USD, Philly nợ hai hóa đơn 3.500 USD và Windy City đã bị ghi nhận nhầm tiền.",
      "Accounts Receivable": "Khi bán xe 6.000 USD cho Big Apple Bikes nhưng chưa thu tiền, customer sub-ledger của Big Apple xuất hiện một open item 6.000 USD.",
      "Reconciliation account": "Năm khách hàng cùng nợ tổng cộng 28.000 USD. Sổ phụ vẫn giữ chi tiết từng khách hàng, còn Trade Receivables trên G/L hiển thị tổng 28.000 USD.",
      "Payment terms": "Invoice 5.000 USD, điều khoản 2%/14 ngày: trả đúng hạn sớm thì cash discount = 5.000 × 2% = 100 USD và khách chỉ chuyển 4.900 USD.",
      "Create Outgoing Invoices": "AR Accountant nhập customer Motown, company code US00, amount 5.000 USD và reference “### Motown 1” để tạo khoản phải thu.",
      "Display Customer Balances": "Trước thanh toán, Motown có debit/open balance 7.000 USD từ hai hóa đơn. Sau khi một hóa đơn được clearing, balance chỉ còn phần chưa trả.",
      "Post Incoming Payments": "Ngân hàng báo nhận 4.900 USD. Nhân viên chọn Bank 1, nhập số tiền và gán khoản thu vào invoice Motown 1.",
      "Motown payment": "5.000 USD − (5.000 × 2%) = 4.900 USD. SAP ghi nhận 4.900 USD vào bank và 100 USD cash discount để đóng đủ invoice.",
      "Cancel receivable": "Motown hủy đơn First Aid Kits trước khi trả tiền. Ta cancel invoice Motown 2; không được tạo một incoming payment giả.",
      "Change assignment": "Philly trả 3.500 USD cho invoice 2 nhưng nhân viên đóng invoice 1. Reset clearing rồi chọn lại invoice 2; tiền ngân hàng không đổi.",
      "Reverse payment": "Khoản 4.000 USD được ghi nhầm cho Windy City. Reset and reverse làm bank posting sai bị đảo và invoice Windy 1 trở lại trạng thái open.",
      "Vai trò": "Stephanie tạo invoice và thu tiền hằng ngày; khi cần đảo chứng từ có ảnh hưởng kiểm soát, Head of Accounting Shuyuan Chen xử lý."
    }
  },
  2: {
    question: "Điều gì xảy ra khi doanh nghiệp nhận dịch vụ trước và thanh toán nhà cung cấp sau?",
    overview: "Global Bike đã nhận hàng hoặc dịch vụ nên phát sinh nghĩa vụ trả tiền nhà cung cấp. Nghĩa vụ đó là khoản phải trả (Accounts Payable). FI-AP theo dõi supplier invoice, ngày đến hạn, open item và khoản tiền đi ra ngân hàng.",
    scenario: "Cardinal Properties gửi hóa đơn thuê nhà 1.500 USD. Global Bike ghi Nợ Rent Expense và Có Accounts Payable. Khi trả tiền, hệ thống ghi Nợ Accounts Payable và Có Bank; open item của Cardinal được đóng.",
    flow: ["Chuẩn bị G/L và supplier master", "Nhận supplier invoice", "Ghi nhận expense + payable", "Post outgoing payment", "Clearing supplier open item"],
    glossary: [
      ["Supplier/Vendor", "Đơn vị cung cấp hàng hóa hoặc dịch vụ cho Global Bike"],
      ["Payable", "Nghĩa vụ doanh nghiệp còn phải trả supplier"],
      ["Expense", "Chi phí phát sinh để vận hành doanh nghiệp"],
      ["Outgoing payment", "Khoản tiền doanh nghiệp chuyển trả supplier"],
      ["G/L account", "Tài khoản trong sổ cái dùng để phân loại giá trị kế toán"]
    ],
    examples: {
      "Mục tiêu FI-AP": "Theo dõi trọn vòng đời hóa đơn thuê nhà: nhận bill 1.500 USD → còn nợ Cardinal → chuyển khoản → công nợ bằng 0.",
      "Reconciliation account": "Khi post invoice cho Cardinal, SAP tự tăng Payables reconciliation account. Người dùng không nhập trực tiếp vào tài khoản này.",
      "Business Partner": "Cardinal Properties là Organization; chủ nhà cá nhân có thể là Person; một nhóm đồng sở hữu có thể được mô hình hóa là Group.",
      "Vendor": "Cardinal cung cấp quyền sử dụng mặt bằng nên dù không giao vật liệu, Cardinal vẫn là vendor và Global Bike có liability 1.500 USD.",
      "Bank transfer": "Chuyển 5.000 USD từ Bank 1800000 sang Bank 180###5: Nợ bank mới 5.000, Có bank cũ 5.000; tổng tài sản tiền không đổi.",
      "Create Supplier Invoice": "Nhập supplier Cardinal, gross amount 1.500 USD, reference “### Cardinal 1” và expense account Rent Expenses.",
      "Open item": "Ngay sau khi post invoice, Cardinal có open item 1.500 USD. Đây là khoản đã ghi nhận nhưng chưa trả.",
      "Display Supplier Balances": "Lọc Cardinal + US00 + năm hiện tại để xem 1.500 USD đang open và drill-down tới journal entry.",
      "Post Outgoing Payments": "Chọn KZ Vendor Payment, bank 180###5, amount 1.500 USD rồi chọn đúng open item của Cardinal để clearing.",
      "Payment posting": "Khi trả: Dr Accounts Payable 1.500 / Cr Bank 1.500. Liability và cash cùng giảm, expense không ghi lần thứ hai.",
      "Financial statement": "Sau invoice, Rent Expense tăng trên P&L và Payables tăng trên Balance Sheet; sau payment, Payables và Bank cùng giảm.",
      "FI-AP challenge": "Tại Đức, dùng DE00 và EUR. Hóa đơn công cụ 3.000 EUR không được nhập nhầm US00/USD của bài Cardinal."
    }
  },
  3: {
    question: "Một yêu cầu mua xe của khách hàng biến thành doanh thu và tiền mặt như thế nào?",
    overview: "SD quản lý chu trình từ lúc khách hỏi giá đến khi nhận hàng và trả tiền. Mỗi bước tạo một chứng từ nối với bước trước, giúp bộ phận bán hàng, kho và kế toán cùng nhìn một sự thật.",
    scenario: "The Bike Zone hỏi mua touring bikes. Global Bike tạo inquiry, gửi quotation, chuyển thành sales order, giao hàng từ kho, post goods issue, lập billing document rồi nhận tiền khách hàng.",
    flow: ["Customer + contact master", "Inquiry", "Quotation", "Sales order", "Outbound delivery", "Picking + Goods Issue", "Billing", "Incoming payment"],
    glossary: [
      ["Inquiry", "Yêu cầu thông tin/báo giá, chưa ràng buộc"],
      ["Quotation", "Chào giá có điều kiện và thời hạn, mang tính ràng buộc"],
      ["Sales order", "Đơn bán hàng đã được doanh nghiệp chấp nhận xử lý"],
      ["Delivery", "Chứng từ điều phối việc giao hàng từ kho"],
      ["Billing", "Bước tạo hóa đơn và khoản phải thu khách hàng"]
    ],
    examples: {
      "Order-to-cash": "Khách hỏi giá hôm thứ Hai, chấp nhận báo giá thứ Ba, nhận xe thứ Sáu và chuyển tiền tuần sau: SD/FI theo dõi toàn bộ chuỗi đó.",
      "Customer master": "Tên và địa chỉ The Bike Zone là general data; reconciliation account là accounting data; sales area UE00/WH/BI là sales data.",
      "Business Partner role": "Một BP The Bike Zone có thể mang role FLCU00 để dùng trong FI và role sales customer để đặt order trong sales area.",
      "Contact person": "John là nhân viên The Bike Zone. Tạo John dưới role BUP001 rồi liên kết BP relationship để sales rep biết người cần gọi.",
      "Inquiry": "Khách hỏi “Giá và ngày giao 5 touring bikes là bao nhiêu?” Đây là inquiry, khách chưa cam kết mua.",
      "Quotation": "Global Bike chào 5 xe với mức giá cụ thể, hiệu lực đến một ngày xác định. Trong thời hạn đó, offer có tính ràng buộc.",
      "Sales order": "Khách đồng ý quotation. Dùng Create with Reference để copy customer, material, quantity và conditions vào OR1 sales order.",
      "Outbound delivery": "Sales order nói khách mua gì; outbound delivery nói kho MI00 phải chuẩn bị và giao số hàng nào.",
      "Picking": "Kho xác nhận đã lấy đúng 5 xe khỏi vị trí lưu trữ, nhưng quyền sở hữu vẫn chưa chuyển chỉ vì picking.",
      "Post Goods Issue": "Khi xe rời kho, PGI giảm inventory và ghi nhận tác động kế toán; trạng thái delivery được cập nhật.",
      "Billing and payment": "Billing tạo khoản phải thu The Bike Zone. Khi tiền vào Bank, Post Incoming Payments đóng open invoice.",
      "Document flow": "Từ sales order có thể mở document flow để tìm quotation gốc, delivery, goods issue, invoice và payment liên quan."
    }
  },
  4: {
    question: "Doanh nghiệp mua vật tư từ nhu cầu nội bộ đến lúc trả tiền supplier như thế nào?",
    overview: "MM quản lý procure-to-pay: xác định cần mua gì, hỏi giá nhiều supplier, chọn báo giá, đặt hàng, nhận hàng và chuyển dữ liệu sang FI để ghi nhận invoice và thanh toán.",
    scenario: "Global Bike cần chain locks. Nhân viên tạo material CHLK1###, purchase requisition, gửi RFQ cho ba supplier, chọn Mid-West Supply, nhận hai đợt hàng, post hai invoice rồi trả tổng 6.400 USD.",
    flow: ["Supplier + material master", "Purchase requisition", "RFQ", "Supplier quotations", "Purchase order", "Goods receipt", "Supplier invoice", "Outgoing payment"],
    glossary: [
      ["Purchase requisition", "Yêu cầu mua nội bộ, chưa gửi supplier"],
      ["RFQ", "Lời mời supplier gửi báo giá"],
      ["Purchase order", "Đơn đặt hàng chính thức gửi supplier"],
      ["Goods receipt", "Xác nhận hàng thực tế đã tới"],
      ["Three-way match", "Đối chiếu PO, goods receipt và supplier invoice"]
    ],
    examples: {
      "Procure-to-pay": "Kho cần 200 chain locks → yêu cầu mua → chọn Mid-West → nhận đủ hàng → nhận hai invoice → trả 6.400 USD.",
      "Supplier master": "Địa chỉ Mid-West là general data; reconciliation account/payment terms là finance; purchasing organization/order currency là procurement data.",
      "Material master": "CHLK1### có valuation price 32 USD. Với 100 units, giá trị inventory dự kiến là 3.200 USD trước các điều chỉnh.",
      "Stock ban đầu": "Chỉ tạo mã CHLK1### không làm xuất hiện hàng thật. Stock vẫn 0 cho đến khi goods receipt được post.",
      "Purchase requisition": "Warehouse báo cần 200 locks. PR ghi nhu cầu và plant MI00 nhưng chưa cam kết mua từ vendor nào.",
      "RFQ": "Purchasing gửi cùng yêu cầu cho ba supplier để nhận giá, ngày giao và điều kiện có thể so sánh.",
      "Bid evaluation": "Nếu Mid-West có total net value thấp nhất và đáp ứng điều kiện, chọn báo giá đó; hai báo giá khác được đánh dấu rejected.",
      "Purchase order": "PO chính thức hóa việc mua chain locks từ Mid-West và kế thừa quantity/price từ quotation được chọn.",
      "Goods receipt": "Xe tải giao 100 locks. Post GR tạo material document và tăng stock tại plant/storage location tương ứng.",
      "Quality inspection": "100 locks vừa nhận chưa được phép dùng. Sau kiểm tra đạt, transfer chúng sang unrestricted-use để kho có thể xuất dùng.",
      "Partial invoices": "Supplier giao hai đợt nên gửi hai invoice. Mỗi invoice được đối chiếu với PO và lượng đã nhận của đợt tương ứng.",
      "Outgoing payment": "Hai open invoices cộng 6.400 USD. Chọn cả hai khi post payment làm open balance từ 6.400 về 0."
    }
  }
};

sapChapters.forEach((chapter) => {
  const guide = sapGuides[chapter.id];
  chapter.facts.forEach((fact) => {
    fact.example = guide.examples[fact.label];
    fact.mastery = `Có thể tự giải thích “${fact.label}”, nêu đúng bước liên quan và áp dụng vào tình huống Global Bike.`;
  });
});

export const sapQuestions = sapChapters.flatMap((chapter) => {
  const answers = chapter.facts.map((fact) => fact.answer);
  return chapter.facts.map((fact, index) => {
    const distractors = [1, 4, 7].map((step) => answers[(index + step) % answers.length]);
    const correctIndex = (chapter.id + index) % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, fact.answer);
    const correct = options.indexOf(fact.answer);
    return {
      id: `sap-${chapter.id}-${index + 1}`, chapter: chapter.id, level: fact.level,
      prompt: fact.prompt, options, correct, explanation: fact.note,
      optionNotes: options.map((option, optionIndex) => optionIndex === correct
        ? `Đúng. ${fact.note}`
        : `Chưa đúng. Phương án này mô tả “${chapter.facts[answers.indexOf(option)]?.label || "một bước khác"}”, không phù hợp với “${fact.label}”.`)
    };
  });
});

export const sapTotalQuestions = sapQuestions.length;

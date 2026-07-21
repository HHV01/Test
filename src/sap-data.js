const F = (label, prompt, answer, note, level = 1) => ({ label, prompt, answer, note, level });
const X = (label, prompt, answer, note, example, level = 2) => ({
  ...F(label, prompt, answer, note, level), example
});

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

const additionalExamFacts = {
  1: [
    X("Seven customer invoices", "Trong case FI-AR, người học tạo tổng cộng bao nhiêu customer invoice?", "Bảy customer invoice", "Các invoice thuộc Motown, Philly, Big Apple, Peachtree và Windy City Bikes.", "Motown và Philly mỗi khách có hai invoice; ba khách còn lại mỗi khách có một invoice."),
    X("Debtor", "Trong tài liệu, debtor là đối tượng nào?", "Business partner mà Global Bike có khoản phải thu do đã cung cấp dịch vụ hoặc hàng hóa", "Debtor xuất phát từ tiếng Latin “debere”, nghĩa là nợ.", "Global Bike đã giao xe cho Philly nhưng chưa nhận tiền, vì vậy Philly là debtor của Global Bike."),
    X("Manage BP in AR", "App nào được dùng để thay đổi payment terms trong customer master của Motown Bikes?", "Manage Business Partner Master Data", "Điều khoản được lưu ở master data để tự động dùng khi post payment.", "AR Accountant tìm Motown rồi cập nhật điều kiện giảm 2% nếu trả trong 14 ngày."),
    X("Company code AR", "Company code được sử dụng xuyên suốt case FI-AR tại Global Bike Inc. là gì?", "US00 — Global Bike Inc.", "Company code xác định đơn vị pháp lý và sổ kế toán liên quan.", "Khi Create Outgoing Invoices hoặc Post Incoming Payments, người học chọn US00."),
    X("Bank account AR", "Khi post incoming payment trong case FI-AR, G/L bank account nào được sử dụng?", "1810000 — Bank 1", "Khoản khách trả làm tăng tài khoản ngân hàng này.", "Motown chuyển 4.900 USD; phần tiền thực nhận được ghi vào Bank 1."),
    X("Balance dimensions", "Display Customer Balances trình bày số dư theo các chiều chính nào?", "Company code, fiscal year và customer", "App hiển thị debit, credit, balance và cho phép mở line items.", "Lọc customer Philly, US00 và năm hiện tại để tìm hai invoice 3.500 USD."),
    X("Payment reference", "Reference trong lúc post incoming payment giúp ích gì?", "Giúp nhận diện và đối chiếu khoản tiền với invoice nghiệp vụ tương ứng", "Reference không thay thế việc chọn đúng open item nhưng giúp truy vết.", "Reference “### Motown 1” giúp nhân viên biết khoản 4.900 USD đang thanh toán invoice nào."),
    X("Cash discount clearing", "Khoản chiết khấu 100 USD của Motown được xử lý thế nào để invoice 5.000 USD được đóng?", "Kết hợp 4.900 USD tiền nhận với 100 USD cash discount khi clearing", "Tổng hai phần bằng đúng giá trị invoice.", "4.900 + 100 = 5.000 USD nên open balance của Motown 1 về 0.", 3),
    X("Three correction cases", "Ba tình huống sửa sai của FI-AR khác nhau chủ yếu ở điểm nào?", "Hủy receivable trước payment, đổi invoice assignment, hoặc reverse toàn bộ payment", "Phải xác định tiền đã vào hay chưa và bản thân payment có đúng không.", "Motown 2: cancel bill; Philly: đổi invoice được clearing; Windy: đảo payment sai hoàn toàn.", 3),
    X("Cancel balance effect", "Sau khi cancel invoice Motown 2 chưa thanh toán, trade receivables thay đổi thế nào?", "Giảm đúng bằng giá trị khoản phải thu bị hủy", "Invoice bị đảo nên Global Bike không còn quyền đòi khoản đó.", "Cancel invoice First Aid Kits 2.000 USD làm receivable giảm 2.000 USD."),
    X("Reassignment bank effect", "Reset và reassign payment của Philly ảnh hưởng số dư ngân hàng thế nào?", "Không làm thay đổi số dư ngân hàng", "Tiền nhận là đúng; chỉ liên kết clearing giữa hai invoice bị sửa.", "Khoản 3.500 USD vẫn ở bank, invoice Philly 2 đóng và Philly 1 mở lại."),
    X("Payment reversal balance", "Sau khi reverse incoming payment sai của Windy City, trạng thái invoice gốc thế nào?", "Invoice trở lại open và trade receivables tăng trở lại", "Payment đã bị rút lại nên khoản nợ khách hàng chưa được thanh toán.", "Invoice Windy 1 trị giá 4.000 USD xuất hiện lại trong danh sách open items."),
    X("Leading ledger AR", "Khi xem Balance Sheet/Income Statement trong FI-AR, leading ledger nào được chọn?", "0L — Leading Ledger", "Case dùng company code US00 và statement version G###.", "Head of Accounting chọn US00, ledger 0L và đúng posting period để xem tác động reversal.")
  ],
  2: [
    X("New bank G/L", "G/L account 180###5 được tạo với loại tài khoản nào trong FI-AP case?", "Balance Sheet Account thuộc Current Asset Accounts", "Đây là alternate bank account dùng cho outgoing vendor payments.", "Số dư tiền ngân hàng là tài sản nên không được tạo như expense account."),
    X("Payables G/L", "G/L account 330###5 được dùng cho mục đích nào?", "Reconciliation account cho khoản phải trả nhà cung cấp", "Nó thuộc balance sheet và kết nối supplier sub-ledger với G/L.", "Cardinal Properties được gán reconciliation account này trong company code data."),
    X("Rent expense G/L", "G/L account 631###5 có G/L Account Type nào?", "Primary Cost or Revenue thuộc Operating Expenditure", "Tài khoản dùng ghi nhận Rent Expenses.", "Invoice Cardinal 1.500 USD được hạch toán vào Rent Expenses 631###5."),
    X("Chart of accounts", "Chart of Accounts được dùng khi tạo các G/L account của Global Bike Group là gì?", "GL00 — Global Bike Group", "Chart of accounts chứa cấu trúc tài khoản dùng chung.", "Cả bank, payables reconciliation và rent expense account đều được tạo trong GL00."),
    X("Local currency setting", "Khi gán bank account mới cho US00, account currency nào được hệ thống xác định?", "USD, kèm lựa chọn Only Balance in Local Currency", "Currency được suy ra từ company code US00.", "Tài khoản 180###5 được quản lý số dư bằng local currency USD."),
    X("Sort key", "Sort Key được chọn cho bank G/L account trong case FI-AP là gì?", "001 — Posting Date", "Sort key hỗ trợ sắp xếp và gán trường trên line item.", "Các line item của bank có thể được tổ chức theo ngày hạch toán."),
    X("Journal entry app", "App nào dùng để kiểm tra chứng từ chuyển 5.000 USD giữa hai bank account?", "Manage Journal Entries", "Có thể lọc US00, journal entry date và người tạo.", "Sau Post General Journal Entries, Head of Accounting mở Manage Journal Entries để xem debit/credit."),
    X("Invoice gross amount", "Gross Invoice Amount của hóa đơn thuê Cardinal Properties là bao nhiêu?", "1.500 USD", "Reference là “### Cardinal 1” và invoice date là ngày hiện tại.", "Create Supplier Invoice phát sinh rent expense và supplier payable cùng 1.500 USD."),
    X("G/L balance filters", "Khi xem Rent Expense balance, các giá trị Ledger và Controlling Area là gì?", "Ledger 0L và Controlling Area NA00", "Kèm company code US00, G/L 631###5 và fiscal year hiện tại.", "Nhấp debit amount của tháng hiện tại để drill-down line items."),
    X("Vendor payment type", "Journal Entry Type khi trả Cardinal Properties là gì?", "KZ — Vendor Payment", "Account Type trong Open Item Selection là Supplier.", "Post Outgoing Payments với KZ phân biệt payment nhà cung cấp với payment khách hàng DZ."),
    X("Cleared supplier balance", "Sau khi thanh toán đúng invoice Cardinal, trạng thái open item ra sao?", "Open item được cleared và supplier open balance về 0 cho invoice đó", "Payment và invoice được liên kết trong clearing document.", "Display Supplier Balances sau payment không còn 1.500 USD ở open items."),
    X("Statement version", "Financial statement của case FI-AP sử dụng Statement Version nào?", "G###", "Số ### là mã cá nhân của người học trong hệ thống dùng chung.", "Balance Sheet/Income Statement được chạy cho US00 với statement version G###."),
    X("DE00 account suffix", "Trong FI-AP Challenge tại DE00, ba account number kết thúc bằng số nào?", "Kết thúc bằng 6: 180###6, 330###6 và 631###6", "Challenge phân biệt rõ với các account kết thúc bằng 5 của US00.", "Bank, reconciliation và expense account cho Đức đều dùng suffix 6.", 3)
  ],
  3: [
    X("Integrated departments", "Order-to-cash case tích hợp những bộ phận nào?", "Sales and Distribution, Materials Management và Financial Accounting", "Sales tạo order, warehouse xử lý hàng và FI ghi billing/payment.", "Một sales order đi qua sales rep, warehouse employee và AR accountant."),
    X("Sales area", "Sales area của inquiry trong case The Bike Zone gồm những mã nào?", "UE00 / WH / BI", "Tương ứng US East sales organization, Wholesale distribution channel và Bicycles division.", "Khi tạo inquiry type IN, nhập UE00, WH và BI.", 3),
    X("Inquiry type", "Document type dùng để tạo customer inquiry là gì?", "IN — Inquiry", "Inquiry chưa tạo cam kết giao hàng.", "The Bike Zone hỏi giá touring bikes bằng document type IN."),
    X("Quotation type", "Document type dùng để tạo customer quotation là gì?", "QT — Quotation", "Quotation được tạo với reference đến inquiry.", "Chọn tab Inquiry trong Create with Reference rồi nhập inquiry number."),
    X("Order type", "Document type của sales order trong case là gì?", "OR1 — Standard order", "Order được copy dữ liệu từ quotation đã được chấp nhận.", "Manage Sales Orders → Create Sales Order VA01 → OR1."),
    X("Stock app SD", "App nào được dùng để kiểm tra tồn kho touring bikes trước và sau goods issue?", "Stock – Multiple Materials", "So sánh stock trước/sau cho thấy PGI làm giảm inventory.", "Lọc description *TOURING* và material chứa *###*."),
    X("Track order app", "App nào hiển thị Overall Fulfillment, Net Value và document flow của sales order?", "Track Sales Orders", "Trạng thái thay đổi theo tiến độ delivery, billing và payment.", "Sau khi tạo delivery, overall fulfillment có thể là Partially processed."),
    X("Shipping point", "Shipping Point dùng trong outbound delivery của case là gì?", "MI00", "Shipping point là đơn vị tổ chức chịu trách nhiệm xử lý giao hàng.", "Warehouse lọc open deliveries của The Bike Zone tại MI00."),
    X("Delivery creation app", "App nào tạo outbound delivery từ sales order?", "Create Outbound Deliveries – From Sales Orders", "Delivery là chứng từ khởi động shipping activities.", "Nhập Ship-to party The Bike Zone để tìm sales order cần giao."),
    X("Goods issue ownership", "Tại bước nào quyền sở hữu hàng chuyển từ Global Bike sang The Bike Zone?", "Khi Post Goods Issue", "Picking chỉ cập nhật số lượng đã lấy trên outbound delivery.", "Sau PGI, stock touring bikes của Global Bike giảm."),
    X("Billing due list", "Trước khi tạo billing document, danh sách nào được lọc theo Sold-to party?", "Billing Due List Items", "Chỉ các delivery đủ điều kiện billing mới xuất hiện.", "Nhập BP number The Bike Zone để thu hẹp kết quả."),
    X("Customer payment type", "Journal Entry Type khi post tiền khách hàng The Bike Zone là gì?", "DZ — Customer Payment", "Đây là incoming payment tại company code US00.", "DZ dùng cho customer payment, khác KZ dùng trả supplier."),
    X("Final order status", "Sau khi billing và incoming payment hoàn tất, Overall Fulfillment của sales order là gì?", "Completely Processed", "Document flow cho thấy các related documents đã được tạo đầy đủ.", "Track Sales Orders cuối case hiển thị toàn bộ chuỗi đã hoàn tất.")
  ],
  4: [
    X("Vendor BP role", "BP Role dùng để tạo Mid-West Supply trong MM case là gì?", "FLVN00 — FI Vendor", "Supplier được tạo dưới category Organization.", "Manage Business Partner Master Data → Organization → role FLVN00."),
    X("Material identity", "Material mới được tạo cho quy trình mua hàng là mặt hàng nào?", "Chain lock với material number CHLK1###", "Đây là trading good được mua về kho.", "Search material bằng mã chứa số cá nhân ### để phân biệt dữ liệu người học."),
    X("Storage location", "Storage Location của chain lock trong case MM là gì?", "TG00 — Trading Goods", "Storage location thuộc plant/valuation area MI00.", "Goods receipt phải ghi đúng plant MI00 và nơi lưu TG00."),
    X("Valuation settings", "Valuation Class và Price Control của chain lock là gì?", "3100 — Trading goods và V — Moving Average Price", "Inventory price khởi tạo là 32 USD.", "Giá trị 100 units theo giá ban đầu là 3.200 USD."),
    X("PR organization", "Purchase requisition sử dụng Purchasing Group, Purchasing Organization, Company Code và Plant nào?", "N00 / US00 / US00 / MI00", "Các trường xác định người mua và đơn vị tổ chức chịu trách nhiệm.", "Trong item details của chain lock, nhập lần lượt N00, US00, US00 và MI00.", 3),
    X("PR stock effect", "Ngay sau khi tạo Purchase Requisition, stock chain lock thay đổi thế nào?", "Không thay đổi; stock vẫn bằng 0", "PR chỉ ghi nhận nhu cầu nội bộ, chưa có hàng thực nhận.", "Manage Stock sau PR vẫn không có stock development."),
    X("Price agreement in case", "Trong case MM được cung cấp, thông tin giá để chọn supplier được ghi nhận qua chứng từ nào?", "Supplier quotations được tạo từ RFQ và đem ra price-based bid evaluation", "PDF không mô tả bước tạo Purchase Info Record trong luồng này.", "Ba supplier gửi quotation; hệ thống so sánh Total Quotation Net Value để chọn Mid-West."),
    X("Before purchase order", "Nghiệp vụ nào được hoàn tất ngay trước khi tạo Purchase Order trong case?", "Đánh giá báo giá, chọn Mid-West Supply và reject hai quotation còn lại", "PO chỉ được tạo sau khi đã xác định quotation tốt nhất.", "Best quote được highlight xanh trong Compare Supplier Quotations."),
    X("PO reference", "Purchase Order trong case MM được tạo bằng cách tham chiếu dữ liệu từ đâu?", "Từ RFQ/supplier quotation đã được chọn", "Reference duy trì giá, supplier và document flow của sourcing process.", "Không tạo PO hoàn toàn từ đầu; dùng kết quả quotation của Mid-West."),
    X("PO business meaning", "Khi Purchase Order được phát hành, điều gì được yêu cầu từ supplier?", "Supplier chuẩn bị và giao hàng theo số lượng, giá và điều kiện đã thỏa thuận", "PO không tự động đồng nghĩa đã nhận hàng hoặc đã thanh toán.", "Mid-West nhận PO chain locks rồi mới tổ chức giao tới Global Bike."),
    X("Mandatory GR location", "Khi post Goods Receipt cho stock item, cần xác định hai thông tin địa điểm nào?", "Plant và Storage Location", "Material document ghi nơi hàng được nhận và lưu.", "Chain locks được nhận tại plant MI00 và storage location TG00."),
    X("GR accounting document", "Bước nào trong procurement case làm phát sinh material document và cập nhật giá trị tồn kho?", "Post Goods Receipt for Purchase Order", "GR xác nhận hàng thực tế đã đến; với hàng định giá, hệ thống tạo tác động vật tư và kế toán.", "Nhận 100 chain locks tạo material document chứa material, quantity, plant và storage location."),
    X("PO history result", "Sau hai lần giao và hai supplier invoice, Purchase Order History hiển thị điều gì?", "Hai goods receipts và hai invoices có trạng thái Posted", "Không còn Next Delivery Quantity khi PO đã được giao đủ.", "Từ PO có thể mở material documents và financial documents liên quan.", 3)
  ]
};

sapChapters.forEach((chapter) => chapter.facts.push(...additionalExamFacts[chapter.id]));

sapChapters.forEach((chapter) => {
  const guide = sapGuides[chapter.id];
  chapter.facts.forEach((fact) => {
    fact.example ||= guide.examples[fact.label];
    fact.mastery = `Có thể tự giải thích “${fact.label}”, nêu đúng bước liên quan và áp dụng vào tình huống Global Bike.`;
  });
});

const appOptions = [
  "Manage Business Partner Master Data", "Create Outgoing Invoices", "Display Customer Balances",
  "Post Incoming Payments", "Manage Journal Entries", "Create Supplier Invoice",
  "Display Supplier Balances", "Post Outgoing Payments", "Stock – Multiple Materials",
  "Track Sales Orders", "Create Outbound Deliveries – From Sales Orders",
  "Manage Sales Quotations", "Manage Sales Orders", "Manage Outbound Deliveries"
];
const codeOptions = [
  "US00 — Global Bike Inc.", "DE00 — Global Bike Germany", "0L — Leading Ledger",
  "KZ — Vendor Payment", "DZ — Customer Payment", "IN — Inquiry", "QT — Quotation",
  "OR1 — Standard order", "FLCU00 — FI Customer", "FLVN00 — FI Vendor",
  "BUP001 — Contact Person", "MI00", "TG00 — Trading Goods", "001 — Posting Date"
];
const numberOptions = [
  "Bảy customer invoice", "1.500 USD", "3.000 EUR", "4.900 USD", "5.000 USD",
  "6.400 USD", "0 USD", "100 units", "200 units", "2% trong 14 ngày"
];
const targetedDistractors = {
  "Price agreement in case": [
    "Purchase Info Record được tạo trước khi hỏi giá", "Planned Independent Requirement dùng để chốt giá",
    "Vendor Pricing Agreement được tạo sau khi nhận hàng"
  ],
  "Before purchase order": [
    "Post Goods Receipt vào kho", "Tạo supplier invoice", "Post outgoing payment cho supplier"
  ],
  "PO reference": [
    "Từ một Purchase Order cũ", "Từ Planned Order", "Tạo mới hoàn toàn, không dùng reference"
  ],
  "PO business meaning": [
    "Supplier được thanh toán ngay lập tức", "Hàng được ghi nhận nhập kho ngay lập tức",
    "Supplier phải ký một hợp đồng mới ngoài hệ thống"
  ],
  "Mandatory GR location": [
    "Plant và Warehouse Number", "Storage Location và Warehouse Number", "SKU Number và Plant"
  ],
  "GR accounting document": [
    "Create Purchase Requisition", "Create Purchase Order", "Post Supplier Invoice"
  ],
  "PR stock effect": [
    "Stock tăng bằng toàn bộ quantity yêu cầu", "Stock chuyển sang quality inspection",
    "Stock giảm vì hệ thống đã giữ hàng"
  ],
  "Cash discount clearing": [
    "Ghi nhận đủ 5.000 USD vào bank", "Chỉ ghi 4.900 USD và để invoice còn open 100 USD",
    "Hủy invoice rồi tạo invoice mới 4.900 USD"
  ],
  "Three correction cases": [
    "Cả ba đều phải reverse toàn bộ payment", "Cả ba chỉ cần đổi reference text",
    "Cả ba đều không ảnh hưởng open items"
  ],
  "Payment posting": [
    "Tăng Accounts Payable và tăng Bank", "Tăng Rent Expense và giảm Bank",
    "Giảm Rent Expense và giảm Accounts Payable"
  ],
  "Quotation": [
    "Chỉ là yêu cầu thông tin không ràng buộc", "Là chứng từ xác nhận hàng đã xuất kho",
    "Là chứng từ ghi nhận tiền khách hàng đã trả"
  ],
  "Goods issue ownership": [
    "Khi tạo inquiry", "Khi picking material", "Khi tạo billing document"
  ]
};

function optionPoolFor(fact, chapter) {
  if (/App nào|Ứng dụng nào/i.test(fact.prompt)) return appOptions;
  if (/Document type|Journal Entry Type|BP Role|Company code|leading ledger|Shipping Point|Sort Key|mã nào|là gì\?$/i.test(fact.prompt) &&
      /(code|type|role|ledger|point|key|US00|MI00)/i.test(`${fact.prompt} ${fact.answer}`)) return codeOptions;
  if (/bao nhiêu|số tiền|balance trở thành|tổng cộng/i.test(fact.prompt)) return numberOptions;
  return chapter.facts.map((item) => item.answer);
}

export const sapQuestions = sapChapters.flatMap((chapter) => {
  const answers = chapter.facts.map((fact) => fact.answer);
  return chapter.facts.map((fact, index) => {
    const pool = optionPoolFor(fact, chapter).filter((answer) => answer !== fact.answer);
    const uniquePool = [...new Set(pool)];
    const distractors = targetedDistractors[fact.label] || [1, 4, 7].map((step, choiceIndex) =>
      uniquePool[(index * 2 + step + choiceIndex) % uniquePool.length]
    );
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

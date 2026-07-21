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

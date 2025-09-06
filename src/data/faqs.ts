export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "getting-started",
    question: "Làm thế nào để bắt đầu sử dụng nền tảng của bạn?",
    answer: "Việc bắt đầu rất đơn giản! Chỉ cần đăng ký tài khoản, hoàn thành quá trình thiết lập ban đầu và bạn sẽ có quyền truy cập vào tất cả các tính năng của chúng tôi. Hướng dẫn từng bước sẽ giúp bạn hiểu rõ mọi thứ cần biết."
  },
  {
    id: "pricing-plans",
    question: "Bạn cung cấp những gói giá nào?",
    answer: "Chúng tôi cung cấp các gói giá linh hoạt phù hợp với nhiều nhu cầu khác nhau. Gói cơ bản bắt đầu từ 200.000đ/tháng, gói chuyên nghiệp 650.000đ/tháng, và các giải pháp doanh nghiệp theo yêu cầu. Tất cả gói đều bao gồm các tính năng cốt lõi với giới hạn sử dụng khác nhau."
  },
  {
    id: "data-security",
    question: "Dữ liệu của tôi có an toàn không?",
    answer: "Bảo mật dữ liệu là ưu tiên hàng đầu của chúng tôi. Chúng tôi sử dụng mã hóa tiêu chuẩn ngành, máy chủ an toàn và kiểm tra bảo mật thường xuyên. Dữ liệu của bạn được bảo vệ bằng nhiều lớp bảo mật bao gồm mã hóa SSL, sao lưu an toàn và tuân thủ GDPR cùng các quy định bảo mật khác."
  },
  {
    id: "customer-support",
    question: "Bạn cung cấp loại hỗ trợ khách hàng gì?",
    answer: "Chúng tôi cung cấp hỗ trợ khách hàng toàn diện qua nhiều kênh bao gồm email, chat trực tuyến và hỗ trợ điện thoại trong giờ làm việc. Cơ sở kiến thức và diễn đàn cộng đồng có sẵn 24/7. Khách hàng premium còn được hỗ trợ ưu tiên và có người quản lý tài khoản riêng."
  },
  {
    id: "integration-options",
    question: "Tôi có thể tích hợp với các công cụ khác không?",
    answer: "Có! Chúng tôi hỗ trợ tích hợp với hơn 50+ công cụ phổ biến bao gồm hệ thống CRM, nền tảng email marketing, công cụ phân tích và nhiều hơn nữa. Chúng tôi cũng cung cấp REST API và webhook cho tích hợp tùy chỉnh. Kiểm tra thư mục tích hợp để xem danh sách đầy đủ các nền tảng được hỗ trợ."
  },
  {
    id: "free-trial",
    question: "Bạn có cung cấp dùng thử miễn phí không?",
    answer: "Chắc chắn rồi! Chúng tôi cung cấp dùng thử miễn phí 14 ngày với quyền truy cập đầy đủ vào tất cả tính năng. Không cần thẻ tín dụng để bắt đầu. Điều này cho bạn đủ thời gian để khám phá nền tảng và xem nó phù hợp với nhu cầu của bạn như thế nào trước khi cam kết."
  }
];
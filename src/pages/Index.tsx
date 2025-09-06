import FaqSection from "../components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          FAQ Accordion Demo
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Chuyên nghiệp, có accessibility, hỗ trợ deep-linking, animation mượt và SEO schema chuẩn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#faq-getting-started" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Deep Linking
          </a>
          <a 
            href="#faq-section" 
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            View FAQ
          </a>
        </div>
      </header>

      {/* FAQ Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" id="faq-section">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Tìm câu trả lời cho những câu hỏi phổ biến nhất
            </p>
          </div>
          
          <FaqSection 
            allowMultiple={false}
            className="max-w-none"
          />
        </div>
      </main>

      {/* Features */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Features Implemented
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Data-driven</h4>
                <p className="text-sm text-muted-foreground">
                  Render từ array, không hardcode
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">♿ A11y chuẩn</h4>
                <p className="text-sm text-muted-foreground">
                  WAI-ARIA, keyboard navigation
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">🔗 Deep-linking</h4>
                <p className="text-sm text-muted-foreground">
                  URL hash auto-open, copy link
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">✨ Smooth Animation</h4>
                <p className="text-sm text-muted-foreground">
                  Height + opacity transition
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">📱 Responsive</h4>
                <p className="text-sm text-muted-foreground">
                  Mobile-first, dark mode
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">🔍 SEO Schema</h4>
                <p className="text-sm text-muted-foreground">
                  JSON-LD FAQPage schema
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

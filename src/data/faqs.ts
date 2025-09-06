export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "getting-started",
    question: "How do I get started with your platform?",
    answer: "Getting started is easy! Simply sign up for an account, complete the onboarding process, and you'll have access to all our features. Our step-by-step guide will walk you through everything you need to know."
  },
  {
    id: "pricing-plans",
    question: "What pricing plans do you offer?",
    answer: "We offer flexible pricing plans to suit different needs. Our basic plan starts at $9/month, with professional plans at $29/month, and enterprise solutions available on request. All plans include our core features with varying usage limits."
  },
  {
    id: "data-security",
    question: "How secure is my data?",
    answer: "Data security is our top priority. We use industry-standard encryption, secure servers, and regular security audits. Your data is protected with multiple layers of security including SSL encryption, secure backups, and compliance with GDPR and other privacy regulations."
  },
  {
    id: "customer-support",
    question: "What kind of customer support do you provide?",
    answer: "We provide comprehensive customer support through multiple channels including email, live chat, and phone support during business hours. Our knowledge base and community forums are available 24/7. Premium customers also get priority support and dedicated account managers."
  },
  {
    id: "integration-options",
    question: "Can I integrate with other tools?",
    answer: "Yes! We support integrations with over 50+ popular tools including CRM systems, email marketing platforms, analytics tools, and more. We also provide REST APIs and webhooks for custom integrations. Check our integration directory for the full list of supported platforms."
  },
  {
    id: "free-trial",
    question: "Do you offer a free trial?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. This gives you plenty of time to explore the platform and see how it fits your needs before making a commitment."
  }
];
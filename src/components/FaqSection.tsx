import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, Link } from 'lucide-react';
import { faqs as defaultFaqs, type FaqItem } from '../data/faqs';

type FaqSectionProps = {
  items?: FaqItem[];
  allowMultiple?: boolean;
  className?: string;
};

type FaqItemRowProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent, index: number) => void;
  index: number;
};

const FaqItemRow: React.FC<FaqItemRowProps> = ({ item, isOpen, onToggle, onKeyDown, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  const handleCopyLink = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const url = new URL(window.location.href);
    url.hash = `faq-${item.id}`;
    window.history.pushState({}, '', url.toString());
    
    // Copy to clipboard
    navigator.clipboard.writeText(url.toString()).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url.toString();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }, [item.id]);

  const questionId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div 
      className="border border-faq-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
      id={`faq-${item.id}`}
    >
      <button
        id={questionId}
        className="w-full text-left px-6 py-4 bg-faq-question hover:bg-faq-question-hover focus:bg-faq-question-hover focus:outline-none focus:ring-2 focus:ring-faq-focus-ring focus:ring-inset transition-all duration-200 min-h-[44px] flex items-center justify-between group"
        onClick={onToggle}
        onKeyDown={(e) => onKeyDown(e, index)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        type="button"
      >
        <span className="font-semibold text-foreground pr-4 text-left">
          {item.question}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleCopyLink}
            className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-background/50 focus:outline-none focus:ring-1 focus:ring-faq-focus-ring"
            aria-label={`Sao chép liên kết đến ${item.question}`}
            type="button"
            tabIndex={-1}
          >
            <Link className="w-4 h-4 text-faq-icon" />
          </button>
          <ChevronDown 
            className={`w-5 h-5 text-faq-icon transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
          />
        </div>
      </button>
      
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          height: isOpen ? `${contentHeight}px` : '0px'
        }}
        aria-live="polite"
      >
        <div 
          ref={contentRef}
          className="px-6 py-4 bg-faq-answer text-foreground leading-relaxed"
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC<FaqSectionProps> = ({ 
  items = defaultFaqs, 
  allowMultiple = false, 
  className = "" 
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#faq-')) {
        const faqId = hash.replace('#faq-', '');
        const faqItem = items.find(item => item.id === faqId);
        
        if (faqItem) {
          // Open the item
          setOpenItems(prev => {
            const newSet = allowMultiple ? new Set<string>(prev) : new Set<string>();
            newSet.add(faqId);
            return newSet;
          });

          // Scroll to the item
          setTimeout(() => {
            const element = document.getElementById(`faq-${faqId}`);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              });
            }
          }, 100);
        }
      }
    };

    // Handle initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [items, allowMultiple]);

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set<string>(prev);
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      
      return newSet;
    });
  }, [allowMultiple]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, currentIndex: number) => {
    const buttons = sectionRef.current?.querySelectorAll('button[aria-expanded]') as NodeListOf<HTMLButtonElement>;
    if (!buttons) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = currentIndex + 1 >= buttons.length ? 0 : currentIndex + 1;
        buttons[nextIndex].focus();
        break;
      
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = currentIndex - 1 < 0 ? buttons.length - 1 : currentIndex - 1;
        buttons[prevIndex].focus();
        break;
      
      case 'Home':
        e.preventDefault();
        buttons[0].focus();
        break;
      
      case 'End':
        e.preventDefault();
        buttons[buttons.length - 1].focus();
        break;
      
      default:
        break;
    }
  }, []);

  // Generate JSON-LD schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className={`space-y-4 ${className}`}
        aria-label="Câu hỏi thường gặp"
      >
        {items.map((item, index) => (
          <FaqItemRow
            key={item.id}
            item={item}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
            onKeyDown={handleKeyDown}
            index={index}
          />
        ))}
      </section>
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchema)
        }}
      />
    </>
  );
};

export default FaqSection;
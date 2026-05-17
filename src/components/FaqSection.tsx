'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Browse our products, click any item to view full specs, and use the Inquire form. We'll respond within 24 business hours with pricing and lead times."
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "MOQ varies by product but typically starts at 500 units per style. For custom samples, we can accommodate smaller quantities."
  },
  {
    question: "Can I customize fabric, GSM, color, or branding?",
    answer: "Yes, we offer full customization for bulk orders including weight (GSM), blend, dyeing, and embroidery or printing of your brand logo."
  },
  {
    question: "What are typical lead times?",
    answer: "Standard production lead times are 4-6 weeks after sample approval, plus shipping time depending on your destination and method."
  },
  {
    question: "How do you ship internationally?",
    answer: "We offer Sea Freight (FCL/LCL) and Air Freight options through leading global carriers to ensure your order reaches you safely and on time."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex justify-between items-center text-left p-5 font-medium hover:bg-muted/50 transition"
          >
            <span>{faq.question}</span>
            <ChevronDown className={`size-5 text-accent transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

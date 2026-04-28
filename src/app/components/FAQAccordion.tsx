'use client';

import { useState } from 'react';
import { faqs } from '@/app/data/faqs';

interface FAQAccordionProps {
  limit?: number;
}

export default function FAQAccordion({ limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {displayFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{
            background: '#fff',
            border: `1.5px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: isOpen ? 'var(--shadow-blue)' : 'var(--shadow-sm)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: 16, padding: '18px 22px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-text)', textAlign: 'left',
                fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 600,
              }}
            >
              <span>{faq.q}</span>
              <span style={{
                flexShrink: 0, width: 24, height: 24,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: isOpen ? 'var(--color-primary)' : 'var(--color-surface-2)',
                color: isOpen ? '#fff' : 'var(--color-muted)',
                transition: 'all 0.2s ease', fontSize: '1.1rem', lineHeight: 1,
              }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 22px 18px', borderTop: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '0.9rem', paddingTop: 14, margin: 0, color: 'var(--color-text-2)' }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

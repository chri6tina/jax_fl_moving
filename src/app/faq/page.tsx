import type { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';
import FAQAccordion from '@/app/components/FAQAccordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moving FAQ — Jacksonville Moving Questions Answered',
  description: 'Common questions about moving in Jacksonville, FL answered by Jax Moving. Pricing, scheduling, insurance, specialty items, and more.',
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="❓ FAQ"
        title="Moving Questions,"
        titleHighlight="Answered"
        subtitle="Everything you need to know before your Jacksonville move."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <FAQAccordion />
          <div style={{
            marginTop: 48, background: 'var(--color-card)', border: '1px solid rgba(255,107,53,0.2)',
            borderRadius: 'var(--radius-lg)', padding: '32px 28px', textAlign: 'center',
          }}>
            <h3 style={{ marginBottom: 12 }}>Still have questions?</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              <Link href="/quote" className="btn btn-outline">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

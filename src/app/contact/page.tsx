import type { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Jax Moving',
  description: 'Contact Jacksonville\'s most transparent moving company. Get a flat-rate quote, ask a question, or just say hello.',
};


export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="📞 Contact"
        title="Let's Talk About"
        titleHighlight="Your Move"
        subtitle="Prefer to talk? Call us. Prefer a form? Fill it out. Either way, a real human responds — not a bot."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start', maxWidth: 960, margin: '0 auto' }}>
            {/* Contact info */}
            <div>
              <h2 style={{ marginBottom: 24, fontSize: '1.5rem' }}>Get in touch</h2>
              {[
                { icon: '🕐', label: 'Hours', value: 'Mon–Sun, 7am – 8pm' },
                { icon: '📍', label: 'Based in', value: 'Jacksonville, FL' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, color: 'var(--color-muted)', margin: '0 0 2px' }}>{item.label}</p>
                    <p style={{ fontWeight: 600, color: 'var(--color-text)', margin: 0, fontSize: '0.95rem' }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 32, background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px 22px' }}>
                <p style={{ fontWeight: 600, marginBottom: 6, color: 'var(--color-text)', fontSize: '0.95rem' }}>⚡ 60-Minute Response Guarantee</p>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>Submit the form and we&apos;ll have your flat-rate quote back to you within 60 minutes during business hours.</p>
              </div>
            </div>

            {/* Quote form */}
            <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '32px 28px' }}>
              <h3 style={{ marginBottom: 24 }}>Request a free quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

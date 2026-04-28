import type { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Free Moving Quote',
  description: 'Get a binding flat-rate moving quote from Jax Moving in under 60 seconds. No obligation. Jacksonville, FL and surrounding areas.',
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="🚛 Free Quote"
        title="Get Your Flat-Rate"
        titleHighlight="Moving Quote"
        subtitle="Fill out the form below and we'll send you a binding quote within the hour. No obligation, no spam."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '40px 36px' }}>
            <QuoteForm />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 32 }}>
            {[
              { icon: '⚡', label: '60-Second Quote', body: 'Fill out the form and we respond within the hour.' },
              { icon: '🔒', label: 'Binding Price', body: 'The price we quote is the price you pay. Always.' },
              { icon: '📞', label: 'Human Follow-Up', body: 'A real person calls or texts you to confirm your move.' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{item.icon}</div>
                <p style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: 4 }}>{item.label}</p>
                <p style={{ fontSize: '0.82rem', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

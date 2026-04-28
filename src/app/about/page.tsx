import type { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';

export const metadata: Metadata = {
  title: 'About Jax Moving',
  description: 'Jacksonville-owned and operated moving company. Learn about our story, our values, and why flat-rate pricing matters.',
};

const VALUES = [
  { icon: '🎯', title: 'Transparent Pricing', body: 'The price you see is the price you pay. We quote flat-rate — no hourly overtime, no surprise fuel surcharges, no hidden fees.' },
  { icon: '🛡️', title: 'Licensed & Insured', body: 'Fully licensed with the Florida Department of Agriculture and Consumer Services. Your belongings are covered from pickup to placement.' },
  { icon: '📍', title: 'Local First', body: 'We live and work in Jacksonville. Every crew member knows the neighborhoods, the parking restrictions, and the quirks of Northeast Florida moves.' },
  { icon: '⚡', title: 'Speed Without Sacrifice', body: 'Fast quotes, fast crews — but never at the cost of care. We move efficiently because we respect your time and your belongings equally.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="🏠 Our Story"
        title="Built for the Modern"
        titleHighlight="Jacksonville Move"
        subtitle="We started Jax Moving because we were sick of moving companies that hide their prices, miss their windows, and blame the customer when things go wrong."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 64 }}>
            {VALUES.map((v) => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ marginBottom: 8, fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{v.body}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '40px 36px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 16 }}>The Jax Moving Promise</h2>
            <p style={{ fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 24px' }}>
              If we break it, we replace it. If we&apos;re late, we discount it. If you&apos;re not happy, we make it right.
              That&apos;s not a marketing line — it&apos;s how we stay in business.
            </p>
            <a href="/quote" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>Get a Free Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}

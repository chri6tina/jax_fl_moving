import type { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import ServicesGrid from '@/app/components/ServicesGrid';
import ServiceAreas from '@/app/components/ServiceAreas';
import ReviewsStrip from '@/app/components/ReviewsStrip';
import FAQAccordion from '@/app/components/FAQAccordion';
import QuoteForm from '@/app/components/QuoteForm';
import NeighborhoodSpotlight from '@/app/components/NeighborhoodSpotlight';
import JacksonvilleRoots from '@/app/components/JacksonvilleRoots';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jax Moving — Jacksonville Movers Done Right',
  description: 'Flat-rate moving in Jacksonville, FL. Licensed & insured local movers. Get your free quote in 60 seconds. Serving Riverside, Mandarin, Jacksonville Beach & all of Northeast Florida.',
};

const HOW_IT_WORKS = [
  { step: '1', icon: '📝', title: 'Tell us about your move', body: 'Fill out our 60-second form or give us a call. We\'ll send a binding flat-rate quote — no hidden fees, no surprises.' },
  { step: '2', icon: '🚛', title: 'Our crew shows up on time', body: 'Uniformed, background-checked movers arrive with all pads, dollies, and boxes — ready to work, not stall.' },
  { step: '3', icon: '🏠', title: 'You\'re settled in', body: 'Every item placed exactly where you want it. We do a walkthrough together before we head out.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <JacksonvilleRoots />
      
      {/* How it works */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p className="section-label">⚡ The Process</p>
            <h2>Moving made simple — 3 steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32, position: 'relative' }}>
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={item.step} style={{ textAlign: 'center', padding: '8px 16px' }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'var(--color-surface-2)',
                    border: '2px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 24, height: 24, borderRadius: '50%',
                    background: 'var(--color-primary)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.72rem',
                    border: '2px solid #fff', boxShadow: 'var(--shadow-sm)',
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{ marginBottom: 10, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{item.body}</p>
                {idx < 2 && (
                  <div aria-hidden style={{ fontSize: '1.5rem', color: 'var(--color-muted)', marginTop: 16, display: 'none' }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood spotlight */}
      <NeighborhoodSpotlight />

      <ServicesGrid />

      {/* Why local section */}
      <section className="section" style={{ background: 'var(--color-dark)', overflow: 'hidden', position: 'relative' }}>
        <div aria-hidden style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(29,78,216,0.07)', pointerEvents: 'none' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FB923C', marginBottom: 14 }}>🏠 Locally Owned</p>
              <h2 style={{ color: '#fff', marginBottom: 20 }}>We live here.<br />We move neighbors.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28 }}>
                Jax Moving is not a franchise or a call center that subcontracts your move to strangers.
                The same crew that answers your call shows up at your door.
                We grew up in Jacksonville — and we treat your home like it&apos;s ours.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {[
                  'We know the parking permit rules on Oak Street',
                  'We\'ve done the Mandarin & Nocatee HOA paperwork before',
                  'We understand Jacksonville Beach condo elevator windows',
                  'We live in the same neighborhoods you\'re moving from',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', background: '#16A34A',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 3, fontSize: '0.6rem', color: '#fff', fontWeight: 800,
                    }}>✓</span>
                    <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary btn-lg">Meet the team →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { icon: '🏆', value: '500+', label: 'JAX Moves Done' },
                { icon: '⭐', value: '4.9', label: 'Avg. Star Rating' },
                { icon: '📋', value: 'FL Licensed', label: 'IM Registered' },
                { icon: '🛡️', value: 'Fully', label: 'Insured' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 'var(--radius-lg)', padding: '24px 18px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewsStrip />

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p className="section-label">❓ FAQ</p>
            <h2>Common moving questions</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <FAQAccordion limit={6} />
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/faq" style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>See all 10 questions →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas strip */}
      <ServiceAreas />

      {/* Quote CTA */}
      <section id="quote" className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{
            background: '#fff', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)',
            padding: '48px 40px', maxWidth: 860, margin: '0 auto',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>🚛 Free Quote</p>
              <h2 style={{ marginBottom: 10 }}>Ready to move?</h2>
              <p>Get your binding flat-rate quote in under 60 seconds. A real person calls you back — usually within the hour.</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

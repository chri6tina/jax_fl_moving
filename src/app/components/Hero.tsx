import Image from 'next/image';
import QuoteForm from '@/app/components/QuoteForm';



export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--color-dark)',
      paddingTop: 'var(--nav-height)',
      overflow: 'hidden',
    }}>
      {/* Photo background */}
      <Image
        src="/hero.png"
        alt="Jax Moving crew at a Jacksonville home"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.45 }}
        sizes="100vw"
      />
      {/* Dark gradient — heavier on right so form is readable */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(13,31,60,0.7) 0%, rgba(13,31,60,0.8) 55%, rgba(13,31,60,0.9) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 48,
          alignItems: 'center',
          padding: '64px 24px 56px',
        }}>
          {/* ── Left: Copy ── */}
          <div>
            {/* Google rating row */}
            <div className="animate-fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, padding: '8px 14px', marginBottom: 28,
            }}>
              <span style={{ color: '#FCD34D', fontSize: '0.9rem' }}>★★★★★</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>4.9 · 183 Google Reviews</span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: 10 }}>Jacksonville, FL</span>
            </div>

            <h1 className="animate-fade-up-delay-1" style={{
              color: '#fff',
              fontFamily: 'var(--font-display)',
              lineHeight: 1.15,
              marginBottom: 6,
            }}>
              Jacksonville&apos;s Most
            </h1>
            <h1 className="animate-fade-up-delay-1" style={{
              color: '#E8631A',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              Trusted Movers
            </h1>

            <p className="animate-fade-up-delay-2" style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 480,
              marginBottom: 32,
              lineHeight: 1.75,
            }}>
              Flat-rate pricing, no surprise charges, and a crew that shows up on time.
              We&apos;ve been moving Jacksonville families since day one — and we treat every home like it&apos;s our own.
            </p>

            {/* Trust triple */}
            <div className="animate-fade-up-delay-2" style={{
              display: 'flex', alignItems: 'center', gap: 0,
              marginBottom: 32,
            }}>
              {['Licensed', 'Bonded', 'Insured'].map((t, i) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4ADE80', letterSpacing: '0.03em' }}>✓ {t}</span>
                  {i < 2 && <span style={{ margin: '0 14px', color: 'rgba(255,255,255,0.2)', fontSize: '0.9rem' }}>|</span>}
                </span>
              ))}
            </div>



            {/* License line */}
            <p style={{ marginTop: 20, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
              FL IM # TBD · USDOT # TBD · Registered with Florida DACS
            </p>
          </div>

          {/* ── Right: Quote form ── */}
          <div className="animate-fade-up-delay-2" style={{
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 24px',
            boxShadow: '0 12px 48px rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ marginBottom: 20 }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                color: 'var(--color-text)',
                marginBottom: 4,
              }}>
                Get a Free Quote
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', margin: 0 }}>
                Binding flat-rate price. Response within 1 hour.
              </p>
            </div>
            <QuoteForm compact />
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{
        position: 'relative', zIndex: 2,
        background: 'rgba(13,31,60,0.9)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
            padding: '14px 0', gap: 8,
          }}>
            {[
              '🏠 Family-Owned & Operated',
              '📋 FL Licensed Mover',
              '💰 Flat-Rate — No Hidden Fees',
              '⏱ On-Time Guarantee',
              '🔒 Fully Insured',
            ].map((item) => (
              <span key={item} style={{
                fontSize: '0.75rem', fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.02em',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-form { display: none; }
        }
      `}</style>
    </section>
  );
}

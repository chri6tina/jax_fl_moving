import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services, getService } from '@/app/data/services';
import QuoteForm from '@/app/components/QuoteForm';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline + ' ' + service.description.slice(0, 80) + '…',
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Custom Service Hero */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 64px)',
        paddingBottom: 80,
        background: 'var(--color-dark)',
        position: 'relative',
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
        {/* Dark gradient overlay */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, rgba(13,31,60,0.7) 0%, rgba(13,31,60,0.8) 55%, rgba(13,31,60,0.9) 100%)',
          pointerEvents: 'none',
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center'
          }}>
            {/* Left: Text & Trust */}
            <div>
              <p style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: '#FB923C', marginBottom: 16,
              }}>
                {service.icon} {service.shortTitle}
              </p>
              <h1 style={{ color: '#fff', marginBottom: 20, lineHeight: 1.15, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                {service.title}
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 32 }}>
                {service.tagline}
              </p>
              
              {/* Trust badges */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {['Licensed & Insured', 'Flat-Rate Pricing', 'Locally Owned'].map(badge => (
                  <span key={badge} style={{
                    fontSize: '0.8rem', fontWeight: 600, color: '#FB923C',
                    background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)',
                    padding: '6px 14px', borderRadius: 100,
                  }}>
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Service Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', maxHeight: 540, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.3)' }}>
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            
            {/* Left: Rich Content Stream */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              
              {/* 1. Description */}
              <div>
                <h2 style={{ marginBottom: 24, fontSize: '2.2rem' }}>The Jax Moving Difference</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-2)' }}>
                  {service.description}
                </p>
              </div>

              {/* 2. Value Props Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                {service.valueProps.map((prop, idx) => (
                  <div key={idx} style={{ background: '#fff', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 12 }}>{prop.icon}</div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: 8, color: 'var(--color-text)' }}>{prop.title}</h4>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-muted)', lineHeight: 1.5 }}>{prop.desc}</p>
                  </div>
                ))}
              </div>

              {/* 3. Local Hook Highlight Box */}
              <div style={{ background: 'rgba(232,99,26,0.05)', borderLeft: '4px solid var(--color-accent)', padding: '32px 40px', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 12, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1.5rem' }}>🌴</span> Jacksonville's Own
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-2)', margin: 0 }}>
                  {service.localHook}
                </p>
              </div>

              {/* 4. Secondary Image (Branded Truck) */}
              <div style={{ position: 'relative', width: '100%', height: 360, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <Image 
                  src="/images/jax_truck.png"
                  alt="Jax Moving professional moving truck"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 5. Real Local Testimonial */}
              <div style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '3rem', color: 'rgba(232,99,26,0.2)', lineHeight: 0.5, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--color-text)', marginBottom: 24, fontWeight: 500 }}>
                  {service.testimonial.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                    {service.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{service.testimonial.author}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{service.testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* 6. What's Included */}
              <div>
                <h3 style={{ marginBottom: 24, fontSize: '1.6rem' }}>What's included in every job</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0 }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <span style={{ color: 'var(--color-success)', fontWeight: 700, flexShrink: 0, marginTop: 2, background: 'rgba(74,222,128,0.15)', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>✓</span>
                      <span style={{ fontSize: '1.1rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right: Sticky Quote Form */}
            <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }}>
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '36px 32px', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: 8 }}>Get your free quote</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', margin: 0 }}>Binding flat-rate price. Response within 1 hour.</p>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ marginBottom: 48, textAlign: 'center', fontSize: '2.2rem' }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {service.faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: 28, border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 12, color: 'var(--color-text)' }}>{faq.q}</h3>
                <p style={{ margin: 0, fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 40, fontSize: '1.8rem' }}>Explore other services</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="pill" style={{ fontSize: '0.95rem', padding: '10px 20px' }}>
                {s.icon} {s.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mobile styling override for grid */}
      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          .container > div[style*="grid-template-columns: 1.3fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}

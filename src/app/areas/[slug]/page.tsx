import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { areas, getArea } from '@/app/data/areas';
import { services } from '@/app/data/services';
import PageHero from '@/app/components/PageHero';
import QuoteForm from '@/app/components/QuoteForm';

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `${area.name} Movers — Jax Moving`,
    description: `Local moving in ${area.name}, ${area.county} County. Flat-rate pricing, same-day quotes. ${area.description.slice(0, 80)}…`,
    keywords: [`movers in ${area.name}`, `${area.name} moving company`, `${area.name} FL movers`],
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`📍 ${area.county} County`}
        title={`${area.name} Movers`}
        titleHighlight="Who Know the Neighborhood"
        subtitle={`Flat-rate moving in ${area.name} — no surprises, no overtime charges, just a crew that knows your streets.`}
        ctaLabel="Get My Free Quote"
      />

      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            
            {/* Left: Rich Content Stream */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              
              {/* 1. Area Description */}
              <div>
                <h2 style={{ marginBottom: 24, fontSize: '2.2rem' }}>Moving in {area.name}</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-2)' }}>
                  {area.description}
                </p>
              </div>

              {/* 2. Local Tip Box */}
              <div style={{ background: 'rgba(255,190,11,0.06)', borderLeft: '4px solid #FFBE0B', padding: '32px 40px', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 12, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1.5rem' }}>💡</span> Local Tip
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-2)', margin: 0 }}>
                  {area.movingTips}
                </p>
              </div>

              {/* 3. Area Photo */}
              <div style={{ position: 'relative', width: '100%', height: 360, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <Image 
                  src={area.image}
                  alt={`Moving services in ${area.name}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 4. Why neighbors pick us */}
              <div>
                <h3 style={{ marginBottom: 24, fontSize: '1.6rem' }}>Why neighbors pick Jax Moving</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0 }}>
                  {area.highlights.map((h) => (
                    <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <span style={{ color: 'var(--color-success)', fontWeight: 700, flexShrink: 0, marginTop: 2, background: 'rgba(74,222,128,0.15)', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>✓</span>
                      <span style={{ fontSize: '1.1rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Real Local Testimonial */}
              <div style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '3rem', color: 'rgba(232,99,26,0.2)', lineHeight: 0.5, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--color-text)', marginBottom: 24, fontWeight: 500 }}>
                  {area.testimonial.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                    {area.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{area.testimonial.author}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{area.testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* 6. Neighborhood FAQs */}
              <div>
                <h3 style={{ marginBottom: 24, fontSize: '1.6rem' }}>{area.name} Moving FAQs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {area.faqs.map((faq, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: 24, border: '1px solid var(--color-border)' }}>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: 10, color: 'var(--color-text)' }}>{faq.q}</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Sticky Quote Form */}
            <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }}>
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '36px 32px', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: 8 }}>Get a {area.name} quote</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', margin: 0 }}>Binding flat-rate price. Response within 1 hour.</p>
                </div>
                <QuoteForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 48, fontSize: '2.2rem' }}>Services offered in {area.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {services.slice(0, 3).map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug} style={{ display: 'block', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', transition: 'all 0.2s ease', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1.4rem' }}>{s.icon}</span> {s.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', margin: 0 }}>{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="section-sm">
        <div className="container">
          <p style={{ textAlign: 'center', fontWeight: 600, marginBottom: 20, color: 'var(--color-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Other Areas We Serve</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {otherAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="pill" style={{ padding: '10px 20px' }}>{a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile styling override for grid */}
      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns: 1.3fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}

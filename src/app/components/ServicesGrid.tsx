import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/app/data/services';

export default function ServicesGrid() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p className="section-label">🚛 Our Services</p>
          <h2>Everything you need to move</h2>
          <p className="section-sub" style={{ margin: '12px auto 0' }}>
            From a studio apartment to an office building — flat-rate pricing on every job.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ 
                height: '100%', cursor: 'pointer', padding: 0, overflow: 'hidden',
                display: 'flex', flexDirection: 'column' 
              }}>
                {/* Photo top half */}
                <div style={{ position: 'relative', width: '100%', height: 200 }}>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  {/* Emoji badge overlay (optional, keeps a bit of character) */}
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '1.2rem'
                  }}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Content bottom half */}
                <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ marginBottom: 8, fontSize: '1.2rem', color: 'var(--color-text)' }}>{service.shortTitle}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: 20, color: 'var(--color-muted)', flex: 1 }}>{service.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                    See details <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

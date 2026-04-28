import Link from 'next/link';
import { areas } from '@/app/data/areas';

export default function ServiceAreas() {
  return (
    <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p className="section-label">📍 Coverage Area</p>
          <h2>Neighborhoods we serve</h2>
          <p className="section-sub" style={{ margin: '12px auto 0' }}>
            From Riverside to Nocatee — if you&apos;re in Northeast Florida, we come to you.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          {areas.map((area) => (
            <Link key={area.slug} href={`/areas/${area.slug}`} className="pill">
              {area.name}
              <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', marginLeft: 5 }}>{area.county} Co.</span>
            </Link>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 28, fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          Don&apos;t see your neighborhood?{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>We probably cover it.</span>
        </p>
      </div>
    </section>
  );
}

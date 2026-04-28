'use client';

import Link from 'next/link';

const NEIGHBORHOOD_SPOTS = [
  { name: 'Riverside', emoji: '🏛️', note: 'Historic bungalows, tight streets, stair crews ready' },
  { name: 'Mandarin', emoji: '🌴', note: 'Large family homes, HOA coordination included' },
  { name: 'Jax Beach', emoji: '🌊', note: 'Condo elevators, parking logistics handled' },
  { name: 'San Marco', emoji: '☕', note: 'Near the Square — we know every staging spot' },
  { name: 'Southside', emoji: '🏢', note: 'Apt complexes, move-out windows respected' },
  { name: 'Orange Park', emoji: '🌿', note: 'No county-line surcharge to Clay County' },
];

export default function NeighborhoodSpotlight() {
  return (
    <section className="section" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p className="section-label">🗺️ Local Know-How</p>
          <h2>We know your neighborhood</h2>
          <p className="section-sub" style={{ margin: '10px auto 0' }}>
            Each Jacksonville area has its own quirks. We&apos;ve moved in all of them.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {NEIGHBORHOOD_SPOTS.map((n) => (
            <Link key={n.name} href={`/areas/${n.name.toLowerCase().replace(' ', '-')}`}
              style={{
                display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none',
                background: '#fff', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)', padding: '20px 22px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = 'var(--shadow-md)';
                el.style.borderColor = 'var(--color-primary-l)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = '';
                el.style.boxShadow = 'var(--shadow-sm)';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{n.emoji}</span>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-text)', margin: '0 0 4px', fontSize: '0.97rem' }}>{n.name}</p>
                <p style={{ fontSize: '0.82rem', margin: 0, color: 'var(--color-muted)' }}>{n.note}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link href="/areas/riverside" style={{
            fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            See all neighborhoods we serve →
          </Link>
        </div>
      </div>
    </section>
  );
}

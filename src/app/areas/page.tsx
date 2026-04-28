import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/app/components/PageHero';
import { areas } from '@/app/data/areas';

export const metadata: Metadata = {
  title: 'Areas We Serve | Jax Moving',
  description: 'Jax Moving provides flat-rate local and long-distance moving services across all of Duval, Clay, and St. Johns counties.',
};

export default function AreasIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Areas We Serve"
        subtitle="From historic Riverside bungalows to new builds in Nocatee, our local crews know every neighborhood in Northeast Florida."
      />
      
      <section className="section" style={{ background: '#FEFCF8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', padding: '32px 24px', textAlign: 'center', transition: 'all 0.2s ease' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 16 }}>📍</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8, color: 'var(--color-text)' }}>{area.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', margin: 0 }}>
                    {area.county} County
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

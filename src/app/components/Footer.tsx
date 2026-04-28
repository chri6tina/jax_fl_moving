'use client';

import Link from 'next/link';
import { services } from '@/app/data/services';
import { areas } from '@/app/data/areas';


const YEAR = 2025;

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 52 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🚛</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                Jax <span style={{ color: '#F97316' }}>Moving</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: 18, maxWidth: 200, margin: '0 0 18px' }}>
              Jacksonville&apos;s local moving company. Flat-rate pricing. Locally owned.
            </p>

            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['FL Licensed', 'Insured', 'Flat-Rate'].map((b) => (
                <span key={b} style={{ fontSize: '0.7rem', fontWeight: 700, background: 'rgba(249,115,22,0.12)', color: '#FB923C', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 100, padding: '3px 10px' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Service Areas</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[{ label: 'About Us', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'FAQ', href: '/faq' }, { label: 'Get a Quote', href: '/quote' }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {YEAR}{" "}Jax Moving. Locally owned &amp; operated in Jacksonville, FL. Serving Duval, Clay &amp; St. Johns counties.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            FL Mover Registration # TBD · USDOT # TBD
          </p>
        </div>
      </div>
    </footer>
  );
}

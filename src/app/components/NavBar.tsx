'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';



const navLinks = [
  { label: 'Services', href: '/services/local' },
  { label: 'Areas We Serve', href: '/areas/riverside' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHeroPage = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isTransparent = isHeroPage && !scrolled && !open;

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0, right: 0, zIndex: 100,
        background: isTransparent ? 'rgba(13,31,60,0.6)' : '#fff',
        backdropFilter: isTransparent ? 'blur(12px)' : 'none',
        borderBottom: isTransparent ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--color-border)',
        boxShadow: isTransparent ? 'none' : 'var(--shadow-sm)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top strip - always visible, non-hero pages until scrolled */}
        {!isHeroPage && !scrolled && (
          <div style={{
            background: 'var(--color-primary)',
            color: '#fff', fontSize: '0.78rem', fontWeight: 500,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '6px 24px',
            height: '32px',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>
              Locally owned · Serving Jacksonville &amp; Northeast FL since day one
            </span>
          </div>
        )}

        <div className="container" style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
                color: isTransparent ? '#fff' : 'var(--color-text)',
                transition: 'color 0.3s', lineHeight: 1.1,
              }}>
                Jax Moving
              </div>
              <div style={{ fontSize: '0.62rem', color: isTransparent ? 'rgba(255,255,255,0.55)' : 'var(--color-muted)', fontWeight: 500 }}>
                Jacksonville, FL · Est. 2020
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            {navLinks.map((link) => {
              const active = pathname.startsWith('/' + link.href.split('/')[1]);
              return (
                <Link key={link.href} href={link.href} style={{
                  padding: '8px 13px', borderRadius: 8, fontSize: '0.88rem', fontWeight: 500,
                  color: active
                    ? 'var(--color-accent)'
                    : isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-2)',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="desktop-nav">
            <Link href="/quote" className="btn btn-primary btn-sm">
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="mobile-menu-btn" aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: 8, color: isTransparent ? '#fff' : 'var(--color-text)' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open
                ? <><line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
                : <><line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99, background: '#fff',
          paddingTop: 'calc(var(--nav-height) + 16px)',
          paddingLeft: 24, paddingRight: 24, overflowY: 'auto',
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'block', fontSize: '1.3rem', fontFamily: 'var(--font-display)',
              fontWeight: 600, color: 'var(--color-text)',
              padding: '16px 0', borderBottom: '1px solid var(--color-border)',
            }}>{link.label}</Link>
          ))}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/quote" className="btn btn-primary btn-lg" style={{ textAlign: 'center' }}>Get Free Quote</Link>
          </div>
          <div style={{ marginTop: 28, padding: '20px 0', borderTop: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
              ✓ Licensed &amp; Insured &nbsp;·&nbsp; ✓ Flat-Rate Pricing<br />
              ✓ Family-Owned &nbsp;·&nbsp; ✓ Mon–Sun 7am–8pm
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

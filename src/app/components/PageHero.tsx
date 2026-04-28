import Link from 'next/link';
import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  centered?: boolean;
}

export default function PageHero({ eyebrow, title, titleHighlight, subtitle, ctaLabel, ctaHref = '/quote', centered = true }: PageHeroProps) {
  return (
    <section style={{
      paddingTop: 'calc(var(--nav-height) + 56px)',
      paddingBottom: 56,
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
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
      }} />
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? 800 : undefined,
      }}>
        {eyebrow && (
          <p style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#FB923C', marginBottom: 14,
            justifyContent: centered ? 'center' : 'flex-start',
          }}>{eyebrow}</p>
        )}
        <h1 style={{ color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
          {title}
          {titleHighlight && <> <span style={{ color: '#FB923C' }}>{titleHighlight}</span></>}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: centered ? '0 auto' : undefined }}>{subtitle}</p>
        )}
        {ctaLabel && (
          <div style={{ marginTop: 28 }}>
            <Link href={ctaHref} className="btn btn-primary btn-lg">{ctaLabel}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

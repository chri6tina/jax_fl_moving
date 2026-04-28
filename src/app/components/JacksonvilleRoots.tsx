import Image from 'next/image';

export default function JacksonvilleRoots() {
  return (
    <section className="section" style={{ background: '#FEFCF8', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48,
          alignItems: 'center'
        }}>
          {/* Text Side */}
          <div>
            <p className="section-label">🌴 Jacksonville's Own</p>
            <h2 style={{ fontSize: '2.4rem', marginBottom: 20 }}>Born and raised in the 904.</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: 20 }}>
              We aren't a national franchise or a Silicon Valley lead-gen site. We're a local Jacksonville business through and through. Our crews live here, we know the traffic patterns on I-95, and we know exactly how to navigate those tight historic Riverside streets.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: 32 }}>
              When you hire us, you're hiring your neighbors. We take pride in moving our community safely, affordably, and with a smile.
            </p>
            
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 4px', fontFamily: 'var(--font-display)' }}>5k+</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Local Moves</p>
              </div>
              <div>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 4px', fontFamily: 'var(--font-display)' }}>100%</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Locally Owned</p>
              </div>
            </div>
          </div>
          
          {/* Photo Side */}
          <div style={{ position: 'relative', height: 460, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/images/jax_skyline.png"
              alt="Jacksonville Florida Skyline at Sunset"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

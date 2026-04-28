const REVIEWS = [
  {
    name: 'Marcus T.',
    location: 'Riverside',
    initial: 'M',
    color: '#1D4ED8',
    rating: 5,
    timeAgo: '2 weeks ago',
    text: 'Showed up on time, wrapped every piece of furniture, and had us completely moved in 4 hours flat. The price they quoted was the price we paid — not a penny more. Highly recommend.',
  },
  {
    name: 'Priya L.',
    location: 'Mandarin',
    initial: 'P',
    color: '#7C3AED',
    rating: 5,
    timeAgo: '1 month ago',
    text: 'We had a piano and a 600-lb gun safe. Both moved without a scratch. The crew was professional and somehow cheerful about hauling it all down a flight of stairs. Will use again.',
  },
  {
    name: 'Sandra R.',
    location: 'Jacksonville Beach',
    initial: 'S',
    color: '#059669',
    rating: 5,
    timeAgo: '3 weeks ago',
    text: 'Condo move from the 7th floor. They coordinated the elevator reservation, protected the hallway floors, and were done before noon. Best moving experience I\'ve had.',
  },
];

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M46.145 24.5c0-1.636-.145-3.208-.418-4.727H24v9.02h12.436c-.545 2.89-2.163 5.335-4.6 6.982v5.818h7.455c4.363-4.018 6.854-9.936 6.854-17.09z"/>
      <path fill="#34A853" d="M24 48c6.236 0 11.455-2.073 15.29-5.618l-7.454-5.818c-2.064 1.382-4.7 2.2-7.836 2.2-6.027 0-11.127-4.073-12.945-9.545H3.382v6.018C7.2 42.818 15.055 48 24 48z"/>
      <path fill="#FBBC05" d="M11.055 29.218a14.39 14.39 0 0 1-.764-4.636c0-1.618.273-3.182.764-4.636v-6.018H3.382A23.987 23.987 0 0 0 0 24c0 3.873.927 7.545 2.564 10.782l7.527-5.818-.036.254z"/>
      <path fill="#EA4335" d="M24 9.545c3.382 0 6.418 1.163 8.8 3.455l6.6-6.6C35.455 2.418 30.236 0 24 0 15.055 0 7.2 5.182 3.382 12.764l7.673 5.818C12.873 13.618 17.973 9.545 24 9.545z"/>
    </svg>
  );
}

export default function ReviewsStrip() {
  return (
    <section className="section" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Header with aggregate rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <div>
            <p className="section-label">Customer Reviews</p>
            <h2>What Jacksonville neighbors say</h2>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            background: '#fff', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: '14px 20px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <GoogleIcon />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1 }}>4.9</span>
                <span style={{ color: '#FCD34D', fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-muted)', margin: '2px 0 0' }}>183 Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards — Google style */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {REVIEWS.map((r) => (
            <div key={r.name} style={{
              background: '#fff', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)', padding: '22px 24px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              {/* Reviewer row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: r.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1rem', flexShrink: 0,
                }}>
                  {r.initial}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)', margin: 0 }}>{r.name}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-muted)', margin: '2px 0 0' }}>📍 {r.location} · {r.timeAgo}</p>
                </div>
                <GoogleIcon />
              </div>
              {/* Stars */}
              <div style={{ color: '#FCD34D', fontSize: '0.9rem', marginBottom: 10 }}>{'★'.repeat(r.rating)}</div>
              {/* Text */}
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-2)', lineHeight: 1.65, margin: 0 }}>&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-muted)', marginTop: 20 }}>
          Sample reviews shown. Verified Google Business reviews will appear here upon launch.
        </p>
      </div>
    </section>
  );
}

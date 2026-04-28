'use client';

import { useState } from 'react';

const moveSizes = ['Studio / 1-bed', '2-Bedroom', '3-Bedroom', '4+ Bedroom', 'Office / Commercial'];

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 16px' }}>
        <div style={{ fontSize: '2.4rem', marginBottom: 12 }}>🎉</div>
        <h3 style={{ marginBottom: 10, fontSize: '1.15rem' }}>Quote Request Received!</h3>
        <p style={{ fontSize: '0.88rem', marginBottom: 20 }}>We&apos;ll have your flat-rate quote back within the hour.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <label htmlFor="c-name" className="label">Your Name</label>
          <input id="c-name" className="input" type="text" placeholder="Your name" required style={{ fontSize: '0.88rem', padding: '10px 12px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label htmlFor="c-from" className="label">From (zip)</label>
            <input id="c-from" className="input" type="text" placeholder="32207" maxLength={10} required style={{ fontSize: '0.88rem', padding: '10px 12px' }} />
          </div>
          <div>
            <label htmlFor="c-to" className="label">To (zip)</label>
            <input id="c-to" className="input" type="text" placeholder="32256" maxLength={10} required style={{ fontSize: '0.88rem', padding: '10px 12px' }} />
          </div>
        </div>
        <div>
          <label htmlFor="c-date" className="label">Move Date</label>
          <input id="c-date" className="input" type="date" required style={{ fontSize: '0.88rem', padding: '10px 12px' }} />
        </div>
        <div>
          <label htmlFor="c-size" className="label">Home Size</label>
          <select id="c-size" className="input" required style={{ fontSize: '0.88rem', padding: '10px 12px' }}>
            <option value="">Select…</option>
            {moveSizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}
          style={{ width: '100%', marginTop: 4, fontSize: '0.92rem' }}>
          {loading ? 'Sending…' : 'Get My Free Quote →'}
        </button>
        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-muted)', margin: '2px 0 0' }}>
          No obligation · We respond within 60 minutes
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        <div>
          <label htmlFor="q-name" className="label">Full Name</label>
          <input id="q-name" className="input" type="text" placeholder="Your name" required />
        </div>

        <div>
          <label htmlFor="q-date" className="label">Move Date</label>
          <input id="q-date" className="input" type="date" required />
        </div>
        <div>
          <label htmlFor="q-from" className="label">Moving From (Zip)</label>
          <input id="q-from" className="input" type="text" placeholder="32207" maxLength={10} required />
        </div>
        <div>
          <label htmlFor="q-to" className="label">Moving To (Zip)</label>
          <input id="q-to" className="input" type="text" placeholder="32256" maxLength={10} required />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <label htmlFor="q-size" className="label">Home / Move Size</label>
          <select id="q-size" className="input" required>
            <option value="">Select size…</option>
            {moveSizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <label htmlFor="q-notes" className="label">Anything special? (optional)</label>
        <textarea id="q-notes" className="input" placeholder="Piano, gun safe, long distance, stairs, elevator…" rows={3} style={{ resize: 'vertical' }} />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 20, width: '100%' }} disabled={loading}>
        {loading ? 'Sending…' : 'Get My Free Flat-Rate Quote →'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.78rem', marginTop: 10, color: 'var(--color-muted)' }}>
        No spam. No obligation. We respond within 60 minutes during business hours.
      </p>
    </form>
  );
}

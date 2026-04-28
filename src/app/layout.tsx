import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Jax Moving — Jacksonville Movers Done Right', template: '%s | Jax Moving' },
  description: 'Jacksonville\'s most transparent moving company. Flat-rate pricing, 60-second quotes, local crews who treat your belongings like their own.',
  keywords: ['Jacksonville movers', 'moving company Jacksonville FL', 'local movers Jacksonville', 'long distance movers Jacksonville', 'packing services Jacksonville'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jax Moving',
    title: 'Jax Moving — Jacksonville Movers Done Right',
    description: 'Flat-rate moving in Jacksonville, FL. Same-day quotes. Licensed & insured.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Jax Moving',
  description: 'Jacksonville\'s most transparent moving company with flat-rate pricing.',
  // telephone: '+19045550100',
  areaServed: ['Jacksonville', 'Riverside', 'Mandarin', 'Southside', 'San Marco', 'Jacksonville Beach', 'Atlantic Beach', 'Orange Park', 'Nocatee'],
  address: { '@type': 'PostalAddress', addressLocality: 'Jacksonville', addressRegion: 'FL', addressCountry: 'US' },
  priceRange: '$$',
  openingHours: 'Mo-Su 07:00-20:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <NavBar />
        <main style={{ paddingBottom: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Truck, Rocket, Package, Hand, Building2, Boxes, ChevronRight, Star, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Moving Services in Jacksonville, FL | Jacksonville Movers',
  description:
    'Local and long distance moving, packing, loading/unloading, office moves, and specialty item handling in Jacksonville, FL.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Moving Services in Jacksonville, FL | Jacksonville Movers',
    description:
      'Local moves, long distance, packing, loading/unloading, office moves, and specialty items.',
    type: 'website',
    locale: 'en_US',
  },
};

const SERVICES = [
  { title: 'Local Moves', icon: Truck, desc: 'Across Jacksonville with careful, on-time crews.', href: '/services/local-moves' },
  { title: 'Long Distance', icon: Rocket, desc: 'Statewide & beyond with clear timelines.', href: '/services/long-distance' },
  { title: 'Packing', icon: Package, desc: 'Full/partial packing with quality materials.', href: '/services/packing' },
  { title: 'Loading / Unloading', icon: Hand, desc: 'Pods, rental trucks, and storage units.', href: '/services/loading-unloading' },
  { title: 'Office Moves', icon: Building2, desc: 'Organized commercial moves with minimal downtime.', href: '/services/office-moves' },
  { title: 'Specialty Items', icon: Boxes, desc: 'Pianos, safes, antiques, and oversized items.', href: '/services/specialty-items' },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
            <Star className="h-3.5 w-3.5 text-amber-500" /> Jacksonville Moving Services
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Services that fit your move
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Licensed & insured local pros for homes, apartments, offices, and specialty items — with transparent pricing and friendly communication.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm">
            <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-slate-700 ring-1 ring-slate-200">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="font-semibold text-slate-900">4.9</span>
              <span className="text-slate-600">from 200+ moves</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-slate-700 ring-1 ring-slate-200">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              Licensed & Insured
            </div>
          </div>
          <div className="mt-6">
            <Link href="/#quote">
              <Button className="bg-teal-600 hover:bg-teal-700">Get a fast quote</Button>
            </Link>
          </div>
        </header>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, icon: Icon, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-2xl"
              aria-label={`Learn more about ${title}`}
            >
              <Card className="transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-700">{desc}</CardDescription>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-700">
                    Learn more
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}


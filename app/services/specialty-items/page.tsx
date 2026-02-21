import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../../components/section';
import { QuoteForm } from '../../../components/quote-form';
import { ShieldCheck, Star, Package } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { CostEstimator } from '../../../components/cost-estimator';

export const metadata: Metadata = {
  title: 'Specialty Item Movers | Pianos, Safes, Antiques',
  description:
    'Experienced handling for pianos, safes, antiques, and other specialty items in Jacksonville. Proper equipment, trained crews.',
  alternates: { canonical: '/services/specialty-items' },
};

export default function SpecialtyItemsPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-900">Specialty Items</li>
          </ol>
        </nav>
        <div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200">
          <div className="absolute inset-0 bg-[url('/Jacksonville_movers_hero.png')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
          <div className="relative grid items-start gap-8 p-4 sm:p-6 lg:p-10 lg:grid-cols-[1.15fr_.85fr]">
          <header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
              Specialty Moving
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Experts for pianos, safes, and antiques
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Proper equipment and techniques to move your most delicate or heavy items safely.
            </p>
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 text-sm">
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
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="w-full sm:w-auto" href="#quote">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Get specialty item quote</Button>
              </Link>
              <a className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50" href="tel:19045550123">
                Call (904) 555-0123
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Pianos & organs</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Gun safes</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Antiques</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Oversized items</li>
            </ul>
          </header>
          <div id="quote" className="w-full max-w-md lg:ml-auto"><QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" /></div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Specialty item ballpark</h2>
          <p className="mt-2 text-slate-700">Include pianos/safes to preview time/cost with proper handling.</p>
          <div className="mt-4">
            <CostEstimator service="specialty" />
          </div>
        </div>
      </Section>
      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Handled with expertise</h2>
            <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
              <li>Piano boards, straps, and pads</li>
              <li>Safe dollies & stair strategies</li>
              <li>Protective wrapping for antiques</li>
              <li>Clear path prep and placement</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Get a fast quote</h2>
            <p className="mt-2 text-slate-700">
              Tell us the item type, approximate dimensions/weight, stairs/elevators, and addresses for accurate pricing.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}


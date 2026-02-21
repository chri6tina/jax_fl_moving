import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../../components/section';
import { QuoteForm } from '../../../components/quote-form';
import { ShieldCheck, Package, Star } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { CostEstimator } from '../../../components/cost-estimator';

export const metadata: Metadata = {
  title: 'Packing Services | Professional Packers in Jacksonville',
  description:
    'Full or partial packing by trained Jacksonville movers. Quality materials, organized labeling, and careful protection.',
  alternates: { canonical: '/services/packing' },
};

export default function PackingPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-900">Packing</li>
          </ol>
        </nav>

        <div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200">
          <div className="absolute inset-0 bg-[url('/Jacksonville_movers_hero.png')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
          <div className="relative grid items-start gap-8 p-4 sm:p-6 lg:p-10 lg:grid-cols-[1.15fr_.85fr]">
            <header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
                Professional Packing
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Packing done right—organized and protected
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Full or partial packing with quality materials and clear labeling so unpacking is easy.
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
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Get my packing quote</Button>
                </Link>
                <a className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50" href="tel:19045550123">
                  Call (904) 555-0123
                </a>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Quality materials</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><ShieldCheck className="h-4 w-4 text-teal-600" /> Trained packers</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Wardrobe boxes</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><Package className="h-4 w-4 text-teal-600" /> Labeling</li>
              </ul>
            </header>
            <div id="quote" className="w-full max-w-md lg:ml-auto"><QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" /></div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Packing time & cost ballpark</h2>
          <p className="mt-2 text-slate-700">Adjust for home size and options to preview typical time/cost.</p>
          <div className="mt-4">
            <CostEstimator service="packing" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Packing time & cost ballpark</h2>
          <p className="mt-2 text-slate-700">Adjust for home size and options to preview typical time/cost.</p>
          <div className="mt-4">
            <CostEstimator service="packing" />
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
            <ol className="mt-3 space-y-3 text-slate-700">
              <li>Tell us what needs packing and your timeline</li>
              <li>We bring the right materials and pack efficiently</li>
              <li>Labeled boxes so unpacking is simple</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">What’s included</h2>
            <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
              <li>Boxes, paper, tape, and wardrobe boxes</li>
              <li>Careful dish/glass wrapping</li>
              <li>Shrink wrap and padding for furniture</li>
              <li>Optional partial packing</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}


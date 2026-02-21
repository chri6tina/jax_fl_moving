import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../../components/section';
import { QuoteForm } from '../../../components/quote-form';
import { Building2, ShieldCheck, Star, Clock } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { CostEstimator } from '../../../components/cost-estimator';

export const metadata: Metadata = {
  title: 'Office Movers | Jacksonville Commercial Moving',
  description:
    'Organized, on-time office moves with minimal downtime. Clear labeling, IT coordination, and careful handling.',
  alternates: { canonical: '/services/office-moves' },
};

export default function OfficeMovesPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-900">Office Moves</li>
          </ol>
        </nav>
        <div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200">
          <div className="absolute inset-0 bg-[url('/Jacksonville_movers_hero.png')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
          <div className="relative grid items-start gap-8 p-4 sm:p-6 lg:p-10 lg:grid-cols-[1.15fr_.85fr]">
          <header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
              Commercial moving
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Office moves with minimal downtime
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Organized plans, clear labeling, and coordination to keep your team productive.
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
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Get my office move quote</Button>
              </Link>
              <a className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50" href="tel:19045550123">
                Call (904) 555-0123
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <li className="flex items-center gap-2 text-sm text-slate-700"><Building2 className="h-4 w-4 text-teal-600" /> Conference rooms</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Clock className="h-4 w-4 text-teal-600" /> After-hours options</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><ShieldCheck className="h-4 w-4 text-teal-600" /> COIs on request</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Building2 className="h-4 w-4 text-teal-600" /> Multi-floor moves</li>
            </ul>
          </header>
          <div id="quote" className="w-full max-w-md lg:ml-auto"><QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" /></div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Office move ballpark</h2>
          <p className="mt-2 text-slate-700">Estimate crew/time for your office move. We’ll refine after a walkthrough.</p>
          <div className="mt-4">
            <CostEstimator service="office" />
          </div>
        </div>
      </Section>
      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">What’s included</h2>
            <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
              <li>Pre-move plan & labeling</li>
              <li>Furniture disassembly/reassembly</li>
              <li>IT coordination (as needed)</li>
              <li>After-hours options</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
            <ol className="mt-3 space-y-3 text-slate-700">
              <li>Walkthrough and tailored plan</li>
              <li>Labeled packing and staging</li>
              <li>On-time move with minimal downtime</li>
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}


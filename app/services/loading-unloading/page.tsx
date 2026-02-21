import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../../components/section';
import { QuoteForm } from '../../../components/quote-form';
import { Hand, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { CostEstimator } from '../../../components/cost-estimator';

export const metadata: Metadata = {
  title: 'Loading & Unloading Help | Pods, Trucks, and Storage',
  description:
    'Hire movers just to load or unload your pod, truck, or storage unit. Careful handling and efficient crews.',
  alternates: { canonical: '/services/loading-unloading' },
};

export default function LoadingUnloadingPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-900">Loading & Unloading</li>
          </ol>
        </nav>
        <div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200">
          <div className="absolute inset-0 bg-[url('/Jacksonville_movers_hero.png')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
          <div className="relative grid items-start gap-8 p-4 sm:p-6 lg:p-10 lg:grid-cols-[1.15fr_.85fr]">
          <header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
              Day labor, done right
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Loading & unloading help when you need it
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Efficient crews to load/unload pods, rental trucks, and storage units with care.
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
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Get loading/unloading quote</Button>
              </Link>
              <a className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50" href="tel:19045550123">
                Call (904) 555-0123
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <li className="flex items-center gap-2 text-sm text-slate-700"><Hand className="h-4 w-4 text-teal-600" /> Pods & containers</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Hand className="h-4 w-4 text-teal-600" /> Rental trucks</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Hand className="h-4 w-4 text-teal-600" /> Storage units</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><Hand className="h-4 w-4 text-teal-600" /> Stairs/elevators</li>
            </ul>
          </header>
          <div id="quote" className="w-full max-w-md lg:ml-auto"><QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" /></div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Loading & unloading ballpark</h2>
          <p className="mt-2 text-slate-700">Preview time/cost for pods, trucks, and storage moves.</p>
          <div className="mt-4">
            <CostEstimator service="loading-unloading" />
          </div>
        </div>
      </Section>
      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Common jobs</h2>
            <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
              <li>Pods & containers</li>
              <li>Rental trucks</li>
              <li>Storage units</li>
              <li>Stairs/elevators</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
            <ol className="mt-3 space-y-3 text-slate-700">
              <li>Tell us your location and access details</li>
              <li>We arrive on time with the right equipment</li>
              <li>Careful loading/unloading and placement</li>
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}


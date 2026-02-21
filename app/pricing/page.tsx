import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../components/section';
import { CostEstimator } from '../../components/cost-estimator';
import { Button } from '../../components/ui/button';
import { BadgeCheck, ShieldCheck, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Jacksonville Movers',
  description:
    'Transparent moving prices in Jacksonville, FL. Use our instant estimator to get a rough ballpark, then send photos for a precise quote.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-8 sm:pt-10 lg:pt-12">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
            <BadgeCheck className="h-3.5 w-3.5 text-teal-600" /> Transparent Pricing
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Simple, honest Jacksonville moving prices
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            We tailor your quote to your inventory, distance, and access — and we explain the why behind every line.
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
        </header>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Instant ballpark estimator</h2>
          <p className="mt-2 text-slate-700">
            Adjust a few options to preview typical time and cost in Jacksonville. This is a rough estimate — for a precise,
            itemized quote, send a few photos or a short video walkthrough using the quote form.
          </p>
          <div className="mt-4">
            <CostEstimator service="local" />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Disclosure: This calculator is for guidance only and is not a binding quote. Actual pricing depends on confirmed
            inventory, access (stairs/elevators/parking), distance, and chosen packing services. The quickest way to firm up
            your price is to share photos or a short video in the quote form notes — we usually respond within minutes.
          </p>
          <div className="mt-4">
            <Link href="/#quote">
              <Button className="bg-teal-600 hover:bg-teal-700">Send photos for an exact quote</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">What affects your price</h3>
            <ul className="mt-3 grid gap-2 text-slate-700">
              <li>Home size and inventory (furniture count, box count, fragile/special items)</li>
              <li>Access at both addresses (stairs, elevator, long carry, loading distance)</li>
              <li>Travel distance/time between addresses (and back to yard for local)</li>
              <li>Packing services (full, partial, or fragile‑only) and supplied materials</li>
              <li>Weekend/after‑hours windows and building restrictions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">How we keep it predictable</h3>
            <ul className="mt-3 grid gap-2 text-slate-700">
              <li>Upfront, itemized quotes with the why behind each line</li>
              <li>Right‑sized crews to balance speed and care</li>
              <li>Clear prep list to save you time and money</li>
              <li>Realistic arrival windows with on‑the‑way texts</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}


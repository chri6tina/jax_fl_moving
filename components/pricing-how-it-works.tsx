'use client';
import * as React from 'react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';

function scrollToId(id: string) {
	if (typeof window === 'undefined') return;
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function PricingHowItWorks() {
	return (
		<Section id="pricing">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					How it works
				</h2>
				<p className="mt-3 text-slate-700">Simple, honest, and efficient.</p>
			</div>
			<ol className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
				<li className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
						1
					</div>
					<p className="text-base font-semibold text-slate-900">Tell us about your move</p>
					<p className="mt-1 text-sm text-slate-700">
						Share the basics—where, when, and what we’re moving.
					</p>
				</li>
				<li className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
						2
					</div>
					<p className="text-base font-semibold text-slate-900">Get a clear quote</p>
					<p className="mt-1 text-sm text-slate-700">
						Transparent pricing based on size, distance, stairs, and packing.
					</p>
				</li>
				<li className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
						3
					</div>
					<p className="text-base font-semibold text-slate-900">Moving day, done</p>
					<p className="mt-1 text-sm text-slate-700">
						We show up on time, protect your items, and get you settled.
					</p>
				</li>
			</ol>

			<Card className="mx-auto mt-8 max-w-4xl">
				<CardHeader>
					<CardTitle>Pricing, honestly</CardTitle>
					<CardDescription>
						Every move is different. Your quote depends on inventory size, travel
						distance, access (stairs/elevator), and packing needs. We’ll walk you
						through it before we start—no surprise fees.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col items-center gap-4 pt-0 sm:flex-row sm:justify-between">
					<p className="text-sm text-slate-700">
						Want a number? We can usually estimate within minutes.
					</p>
					<Button
						className="bg-teal-600 hover:bg-teal-700"
						onClick={() => scrollToId('quote')}
					>
						Get My Quote
					</Button>
				</CardContent>
			</Card>
		</Section>
	);
}



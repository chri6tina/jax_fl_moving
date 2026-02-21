'use client';
import * as React from 'react';
import { Button } from './ui/button';
import { QuoteForm } from './quote-form';
import { Section } from './section';
import { ShieldCheck, Clock, BadgeCheck, Truck, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function scrollToId(id: string) {
	if (typeof window === 'undefined') return;
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
	return (
		<Section className="pt-6 sm:pt-8 lg:pt-10">
			<div className="relative overflow-hidden rounded-2xl border border-slate-200">
				<div
					className="absolute inset-0 bg-[url('/Jacksonville_movers_hero.png')] bg-cover bg-center"
					aria-hidden="true"
				/>
				<div className="absolute inset-0 bg-slate-900/90" aria-hidden="true" />

				<div className="relative grid items-start gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:p-12">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8"
					>
						<div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
							Local Jacksonville Movers
						</div>
						<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
							Stress-free moving in Jacksonville, FL
						</h1>
						<p className="mt-4 text-lg text-slate-700">
							Licensed & insured local pros. Transparent pricing. Friendly crews who
							care about your stuff and your time.
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
							<Button
								onClick={() => scrollToId('quote')}
								className="bg-teal-600 hover:bg-teal-700"
								aria-label="Get a Fast Quote"
							>
								Get a Fast Quote
							</Button>
							<a
								href="tel:19045550123"
								className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50"
								aria-label="Call (904) 555-0123"
							>
								<Phone className="mr-2 h-4 w-4" />
								Call (904) 555-0123
							</a>
						</div>

						<ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
							<li className="flex items-center gap-2 text-sm text-slate-700">
								<ShieldCheck className="h-4 w-4 text-teal-600" />
								Licensed & Insured
							</li>
							<li className="flex items-center gap-2 text-sm text-slate-700">
								<Clock className="h-4 w-4 text-teal-600" />
								Same-Day Available
							</li>
							<li className="flex items-center gap-2 text-sm text-slate-700">
								<BadgeCheck className="h-4 w-4 text-teal-600" />
								No Hidden Fees
							</li>
							<li className="flex items-center gap-2 text-sm text-slate-700">
								<Truck className="h-4 w-4 text-teal-600" />
								Local JAX Team
							</li>
						</ul>
					</motion.div>

					<div className="grid gap-6">
						<div id="quote" className="order-2 lg:order-1">
							<QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" />
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}



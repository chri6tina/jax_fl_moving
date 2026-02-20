'use client';
import * as React from 'react';
import { Button } from './ui/button';
import { QuoteForm } from './quote-form';
import { Section } from './section';
import { ShieldCheck, Clock, BadgeCheck, Truck, Phone } from 'lucide-react';
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

				<div className="relative grid items-start gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="max-w-xl"
				>
					<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-200 ring-1 ring-inset ring-white/20">
						Local Jacksonville Movers
					</div>
					<h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						Stress-free moving in Jacksonville, FL
					</h1>
					<p className="mt-4 text-lg text-slate-100">
						Licensed & insured local pros. Transparent pricing. Friendly crews who
						care about your stuff and your time.
					</p>
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
							className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur hover:bg-white/15"
							aria-label="Call (904) 555-0123"
						>
							<Phone className="mr-2 h-4 w-4" />
							Call (904) 555-0123
						</a>
					</div>

					<ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
						<li className="flex items-center gap-2 text-sm text-slate-100">
							<ShieldCheck className="h-4 w-4 text-teal-400" />
							Licensed & Insured
						</li>
						<li className="flex items-center gap-2 text-sm text-slate-100">
							<Clock className="h-4 w-4 text-teal-400" />
							Same-Day Available
						</li>
						<li className="flex items-center gap-2 text-sm text-slate-100">
							<BadgeCheck className="h-4 w-4 text-teal-400" />
							No Hidden Fees
						</li>
						<li className="flex items-center gap-2 text-sm text-slate-100">
							<Truck className="h-4 w-4 text-teal-400" />
							Local JAX Team
						</li>
					</ul>
				</motion.div>

				<div className="grid gap-6">
					<div id="quote" className="order-2 lg:order-1">
						<QuoteForm />
					</div>
				</div>
				</div>
			</div>
		</Section>
	);
}



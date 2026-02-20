'use client';
import * as React from 'react';
import { Section } from './section';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

function scrollToId(id: string) {
	if (typeof window === 'undefined') return;
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FinalCTA() {
	return (
		<Section className="py-12">
			<div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm sm:p-10">
				<div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
					<div>
						<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
							Ready to move the easy way?
						</h2>
						<p className="mt-2 text-slate-700">
							Get a fast, friendly quote from Jacksonville movers who care.
						</p>
					</div>
					<div className="flex flex-col items-stretch gap-3 sm:flex-row">
						<Button
							className="bg-teal-600 hover:bg-teal-700"
							onClick={() => scrollToId('quote')}
						>
							Request a Quote
						</Button>
						<a
							href="tel:19045550123"
							className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50"
							aria-label="Call (904) 555-0123"
						>
							<Phone className="mr-2 h-4 w-4" />
							(904) 555-0123
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
}



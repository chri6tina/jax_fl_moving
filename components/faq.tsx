'use client';
import * as React from 'react';
import { Section } from './section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQS = [
	{
		q: 'How is pricing calculated?',
		a:
			'Pricing is based on your inventory size, travel distance, access (stairs/elevator), and whether you need packing. Local moves include a straightforward travel charge and an hourly crew rate; long-distance moves are quoted as a clear flat estimate. Every quote is itemized so you know exactly what to expect—no hidden fees.',
	},
	{
		q: 'Do you require a deposit?',
		a: 'Yes—a small deposit reserves your crew and truck. It’s applied to your final balance and is refundable per our 48‑hour reschedule/cancellation policy.',
	},
	{
		q: 'Is travel time billed?',
		a:
			'For local moves we include a simple travel fee that covers driving to your origin, between stops, and back to our yard. You’ll see this called out on your quote so there are no surprises.',
	},
	{
		q: 'Do you provide packing materials?',
		a:
			'Absolutely. We offer boxes, paper, tape, bubble, and wardrobe boxes. We can bring supplies on moving day or drop them off ahead of time—ask about supply bundles.',
	},
	{
		q: 'Are you licensed and insured?',
		a:
			'Yes—fully licensed and insured for residential and commercial moves. Certificates of insurance are available upon request for apartments/HOAs.',
	},
	{
		q: 'What’s your cancellation policy?',
		a:
			'You can reschedule or cancel up to 48 hours before your move without a fee. Inside 48 hours, the deposit may be forfeited because we’ve reserved the crew and truck for you.',
	},
	{
		q: 'Do you work weekends?',
		a:
			'Yes—Saturdays fill up first, and limited Sunday slots are available. If you need a specific day or morning window, book early for the best selection.',
	},
	{
		q: 'What areas do you serve?',
		a:
			'All of Jacksonville plus nearby: JAX Beach, Orange Park, Ponte Vedra, St. Johns, Atlantic/Neptune Beach, Mandarin, Arlington, and Riverside. Not sure about your address? Ask—we’ll confirm in minutes.',
	},
];

export function FAQ() {
	return (
		<Section id="faq">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Frequently asked questions
				</h2>
				<p className="mt-3 text-slate-700">
					Short answers to help you plan a smooth move.
				</p>
			</div>
			<div className="mx-auto mt-8 max-w-3xl">
				<Accordion type="single" collapsible>
					{FAQS.map((f, i) => (
						<AccordionItem key={i} value={`faq-${i}`}>
							<AccordionTrigger>{f.q}</AccordionTrigger>
							<AccordionContent>{f.a}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Section>
	);
}



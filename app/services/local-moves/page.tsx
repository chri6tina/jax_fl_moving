import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../../components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { ShieldCheck, Clock, BadgeCheck, MapPin, Star, Check } from 'lucide-react';
import { QuoteForm } from '../../../components/quote-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { ScrollTicker } from '../../../components/scroll-ticker';

export const metadata: Metadata = {
	title: 'Local Movers in Jacksonville, FL | Jacksonville Movers',
	description:
		'Local Jacksonville movers for apartments, homes, and townhomes. Licensed, insured, and friendly crews with transparent pricing and great communication.',
	openGraph: {
		title: 'Local Movers in Jacksonville, FL | Jacksonville Movers',
		description:
			'Local Jacksonville movers for apartments, homes, and townhomes. Licensed, insured, transparent pricing.',
		type: 'article',
		locale: 'en_US',
	},
	alternates: {
		canonical: '/services/local-moves',
	},
	robots: {
		index: true,
		follow: true,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Local Movers in Jacksonville, FL | Jacksonville Movers',
		description:
			'Friendly, careful local movers in Jacksonville with transparent pricing and great communication.',
	},
};

export default function LocalMovesPage() {
	const orgLd = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Jacksonville Movers',
		areaServed: 'Jacksonville, FL',
		telephone: '+1-904-555-0123',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Jacksonville',
			addressRegion: 'FL',
			addressCountry: 'US',
		},
	};

	const breadcrumbLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: '/',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Local Moves',
				item: '/services/local-moves',
			},
		],
	};

	const serviceLd = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		serviceType: 'Local moving',
		areaServed: [
			'Jacksonville, FL',
			'Jacksonville Beach, FL',
			'Ponte Vedra, FL',
			'St. Johns, FL',
			'Orange Park, FL',
			'Mandarin, FL',
			'Arlington, FL',
			'Riverside, FL',
		],
		provider: {
			'@type': 'LocalBusiness',
			name: 'Jacksonville Movers',
			telephone: '+1-904-555-0123',
		},
	};

	const faqLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'How do you price local moves in Jacksonville?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'Local moves are quoted based on inventory size, crew size, access (stairs/elevator), travel time, and any packing needs. We provide a clear itemized estimate with no hidden fees.',
				},
			},
			{
				'@type': 'Question',
				name: 'What’s included with a local move?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'Professional movers, moving truck, pads and shrink wrap, furniture protection and placement, basic assembly/disassembly, and floor protection where needed.',
				},
			},
			{
				'@type': 'Question',
				name: 'How soon can I book?',
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						'We often have same-week and some same-day availability. Saturdays book first—reach out early to lock in your preferred window.',
				},
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
			/>

			<Section className="pt-8 sm:pt-10 lg:pt-12">
				<nav aria-label="Breadcrumb" className="text-sm text-slate-600">
					<ol className="flex flex-wrap items-center gap-2">
						<li>
							<Link href="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li aria-hidden="true" className="text-slate-400">
							/
						</li>
						<li className="text-slate-900 font-medium">Local Moves</li>
					</ol>
				</nav>

				<div className="mt-4 relative overflow-hidden rounded-2xl border border-slate-200">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: "url('/Jax_local_movers.png')" }}
						aria-hidden="true"
					/>
					<div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
					<div className="relative grid items-start gap-8 p-4 sm:p-6 lg:p-10 lg:grid-cols-[1.15fr_.85fr]">
						<header className="max-w-2xl rounded-2xl bg-white/95 p-6 shadow-md ring-1 ring-slate-200 backdrop-blur-sm sm:p-8">
							<div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
								Local Jacksonville Movers
							</div>
							<h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
								Local Movers in Jacksonville, FL
							</h1>
							<p className="mt-4 text-lg text-slate-700">
								Friendly, careful crews for apartments, homes, and townhomes across JAX.
								Licensed and insured, with transparent estimates and great communication.
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
									<Button className="w-full bg-teal-600 hover:bg-teal-700">
										Get my local move quote
									</Button>
								</Link>
								<a
									className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50"
									aria-label="Call (904) 555-0123"
									href="tel:19045550123"
								>
									Call (904) 555-0123
								</a>
							</div>
						</header>

						<div id="quote" className="w-full max-w-md lg:ml-auto">
							<QuoteForm actionUrl="https://formspree.io/f/mqedkwyy" />
						</div>
					</div>
				</div>
			</Section>

      {/* Horizontal scroller: popular services */}
      <ScrollTicker
        items={[
          'Residential moving',
          'Commercial moving',
          'Junk removal',
          'College moving',
          'Packing service',
          'Loading & unloading',
          'Apartment moves',
          'Same-day available',
        ]}
        className="mt-0"
        speedSeconds={26}
      />

			<Section className="bg-slate-50">
				<div className="grid gap-10">
					<div>
						<h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
						<ol className="mt-4 grid gap-4 sm:grid-cols-3">
							<li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
								<span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">1</span>
								<p className="text-slate-700">
									Tell us the basics—where you’re moving, the date, and what we’re moving.
								</p>
							</li>
							<li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
								<span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">2</span>
								<p className="text-slate-700">
									We send a clear estimate based on size, access, distance, and packing.
								</p>
							</li>
							<li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
								<span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">3</span>
								<p className="text-slate-700">
									Moving day: we arrive on time, protect your items, and get you settled.
								</p>
							</li>
						</ol>
					</div>

					<div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
						<h2 className="text-lg font-semibold text-teal-900">Included with your local move</h2>
						<ul className="mt-3 grid gap-2 text-teal-900 sm:grid-cols-2">
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Professional movers + equipped truck
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Furniture pads and shrink wrap
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Basic assembly/disassembly
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Room-by-room placement
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Clear timelines and communication
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-teal-700" />
								Floor/doorway protection as needed
							</li>
						</ul>
						<p className="mt-3 text-sm text-teal-900/90">
							Service areas: Jacksonville, JAX Beach, Ponte Vedra, St. Johns, Orange Park, Mandarin, Arlington, Riverside.
						</p>
					</div>
				</div>
			</Section>

			<Section id="areas" className="bg-slate-100">
				<div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
					<div>
						<h2 className="text-2xl font-semibold text-slate-900">Neighborhoods we serve</h2>
						<p className="mt-2 text-slate-700">
							We handle local moves all across Jacksonville and nearby communities.
							Here are a few common routes we do every week:
						</p>
						<ul className="mt-4 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
							<li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Riverside ⇄ San Marco</li>
							<li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Mandarin ⇄ St. Johns</li>
							<li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Ponte Vedra ⇄ JAX Beach</li>
							<li className="rounded-lg border border-slate-200 bg-white px-3 py-2">Arlington ⇄ Downtown</li>
						</ul>
						<p className="mt-3 text-sm text-slate-700">
							Not on this list?{' '}
							<Link href="/#quote" className="font-medium text-teal-700 underline">
								Ask us—we’ll confirm in minutes.
							</Link>
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-5">
						<h3 className="text-lg font-semibold text-slate-900">ZIP codes we often serve</h3>
						<p className="mt-2 text-sm text-slate-700">
							A sampling to help searchers find us—don’t worry if yours isn’t listed.
						</p>
						<ul className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-800 sm:grid-cols-4">
							<li className="rounded-md border border-slate-200 px-2 py-1">32204</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32207</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32210</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32224</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32225</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32246</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32250</li>
							<li className="rounded-md border border-slate-200 px-2 py-1">32081</li>
						</ul>
					</div>
				</div>
			</Section>

			<Section id="pricing" className="bg-slate-50">
				<div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
					<div>
						<h2 className="text-2xl font-semibold text-slate-900">Transparent local pricing</h2>
						<p className="mt-2 text-slate-700">
							Every move is different. Your quote depends on inventory size, travel distance,
							access (stairs/elevator), and any packing needs. We provide a clear estimate
							before we start—no hidden fees.
						</p>
						<ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
							<li className="flex items-center gap-2">
								<BadgeCheck className="h-4 w-4 text-teal-600" />
								Itemized estimates—easy to understand
							</li>
							<li className="flex items-center gap-2">
								<BadgeCheck className="h-4 w-4 text-teal-600" />
								Travel time called out separately
							</li>
							<li className="flex items-center gap-2">
								<BadgeCheck className="h-4 w-4 text-teal-600" />
								Options for packing supplies
							</li>
							<li className="flex items-center gap-2">
								<BadgeCheck className="h-4 w-4 text-teal-600" />
								No hidden fees—ever
							</li>
						</ul>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-5">
						<h3 className="text-lg font-semibold text-slate-900">Ready for a fast number?</h3>
						<p className="mt-1 text-sm text-slate-700">
							We can usually estimate within minutes during business hours.
						</p>
						<div className="mt-4 flex flex-col gap-3 sm:flex-row">
							<Link href="/#quote" className="w-full sm:w-auto">
								<Button className="w-full bg-teal-600 hover:bg-teal-700">Get my quote</Button>
							</Link>
							<a
								href="tel:19045550123"
								className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 hover:bg-slate-50"
							>
								Call (904) 555-0123
							</a>
						</div>
					</div>
				</div>
			</Section>

			<Section id="faq" className="bg-slate-100">
				<div className="mx-auto max-w-3xl">
					<h2 className="text-2xl font-semibold text-slate-900">Local moving FAQ</h2>
					<p className="mt-2 text-slate-700">Quick answers for Jacksonville moves.</p>
					<div className="mt-6">
						<Accordion type="single" collapsible>
							<AccordionItem value="lm-1">
								<AccordionTrigger>Can you help with packing too?</AccordionTrigger>
								<AccordionContent>
									Yes—full or partial packing is available. We supply boxes, paper, tape, and wardrobe boxes.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="lm-2">
								<AccordionTrigger>Do apartments or HOAs need insurance certificates?</AccordionTrigger>
								<AccordionContent>
									Often, yes. We&apos;re licensed and insured and can provide COIs on request.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="lm-3">
								<AccordionTrigger>What if my building has stairs or an elevator?</AccordionTrigger>
								<AccordionContent>
									No problem—just let us know beforehand. Access factors into your quote so it stays accurate.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="lm-4">
								<AccordionTrigger>How far in advance should I book?</AccordionTrigger>
								<AccordionContent>
									Saturdays fill first; weekdays are flexible. Book as early as you can for your preferred window.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Section>
			{/* Removed testimonial block to keep layout minimal and airy */}

			<Section className="pt-4">
				<div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
						<div>
							<h2 className="text-xl font-semibold text-slate-900">
								Ready to get your local move on the books?
							</h2>
							<p className="mt-1 text-sm text-slate-700">
								It takes about a minute—tell us the basics and we’ll send a clear estimate.
							</p>
						</div>
						<Link href="/#quote">
							<Button className="bg-teal-600 hover:bg-teal-700">Get my quote</Button>
						</Link>
					</div>
				</div>
			</Section>
		</>
	);
}



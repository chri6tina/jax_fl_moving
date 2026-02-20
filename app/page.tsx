import * as React from 'react';
import type { Metadata } from 'next';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { WhyChooseUs } from '../components/why-choose-us';
import { Reviews } from '../components/reviews';
import { PricingHowItWorks } from '../components/pricing-how-it-works';
import { FAQ } from '../components/faq';
import { ServiceArea } from '../components/service-area';
import { FinalCTA } from '../components/final-cta';

export const metadata: Metadata = {
	title: 'River City Moving Co. | Jacksonville Movers | Stress-free Moving',
	description:
		'Licensed & insured Jacksonville moving company offering local moves, packing, loading/unloading, office moves, and more. Transparent pricing, on-time crews, great communication.',
	openGraph: {
		title: 'River City Moving Co. | Jacksonville Movers',
		description:
			'Licensed & insured Jacksonville moving company with transparent pricing.',
		type: 'website',
		locale: 'en_US',
	},
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<main id="main-content">
				<Hero />
				<Services />
				<WhyChooseUs />
				<Reviews />
				<PricingHowItWorks />
				<FAQ />
				<ServiceArea />
				<FinalCTA />
			</main>
		</div>
	);
}



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
import { ScrollTicker } from '../components/scroll-ticker';

export const metadata: Metadata = {
	title: 'Jacksonville Movers | Stress-free Moving in Jacksonville, FL',
	description:
		'Licensed & insured Jacksonville moving company for local moves, packing, loading/unloading, and office moves. Transparent pricing, on-time crews, great communication.',
	openGraph: {
		title: 'Jacksonville Movers | Stress-free Moving',
		description:
			'Licensed & insured Jacksonville moving company with transparent pricing and friendly local crews.',
		type: 'website',
		locale: 'en_US',
	},
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<main id="main-content">
				<Hero />
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
					speedSeconds={26}
				/>
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



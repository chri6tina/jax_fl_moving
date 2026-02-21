import * as React from 'react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import {
	Truck,
	Rocket,
	Package,
	Hand,
	Building2,
	Boxes,
	ChevronRight,
} from 'lucide-react';

const SERVICES = [
	{
		title: 'Local Moves',
		icon: Truck,
		desc: 'Across Jacksonville or down the street. Efficient and careful.',
	},
	{
		title: 'Long Distance',
		icon: Rocket,
		desc: 'Statewide and beyond with clear timelines and updates.',
	},
	{
		title: 'Packing',
		icon: Package,
		desc: 'Full or partial packing with quality materials.',
	},
	{
		title: 'Loading / Unloading',
		icon: Hand,
		desc: 'Help with pods, trucks, and storage units.',
	},
	{
		title: 'Office Moves',
		icon: Building2,
		desc: 'Minimal downtime with organized, on-time crews.',
	},
	{
		title: 'Specialty Items',
		icon: Boxes,
		desc: 'Safely move pianos, safes, antiques, and more.',
	},
] as const;

const slugs: Record<string, string> = {
	'Local Moves': '/services/local-moves',
	'Long Distance': '/services/long-distance',
	Packing: '/services/packing',
	'Loading / Unloading': '/services/loading-unloading',
	'Office Moves': '/services/office-moves',
	'Specialty Items': '/services/specialty-items',
};

export function Services() {
	return (
		<Section id="services">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Moving services that fit your move
				</h2>
				<p className="mt-3 text-slate-700">
					From apartments to offices, we tailor our approach to your needs.
				</p>
			</div>
			<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{SERVICES.map(({ title, icon: Icon, desc }) => {
					const href = slugs[title];
					const cardInner = (
						<Card className="transition-shadow group-hover:shadow-md">
							<CardHeader>
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle>{title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="pt-0">
								<p className="text-sm text-slate-700">{desc}</p>
								<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-700">
									Learn more
									<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</div>
							</CardContent>
						</Card>
					);
					return href ? (
						<Link
							key={title}
							href={href}
							className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-2xl"
							aria-label={`Learn more about ${title}`}
						>
							{cardInner}
						</Link>
					) : (
						<div key={title}>{cardInner}</div>
					);
				})}
			</div>
		</Section>
	);
}



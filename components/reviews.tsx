import * as React from 'react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star } from 'lucide-react';

type Review = {
	name: string;
	neighborhood: string;
	rating: number;
	quote: string;
};

const REVIEWS: Review[] = [
	{
		name: 'Alyssa M.',
		neighborhood: 'Riverside',
		rating: 5,
		quote:
			'They were fast, careful, and so friendly. Best move I’ve had in JAX!',
	},
	{
		name: 'Marcus D.',
		neighborhood: 'San Marco',
		rating: 5,
		quote:
			'Transparent pricing and on-time. Wrapped everything and handled stairs like pros.',
	},
	{
		name: 'Priya S.',
		neighborhood: 'Mandarin',
		rating: 5,
		quote:
			'Great communication from start to finish. Will use again and recommend.',
	},
];

export function Reviews() {
	return (
		<Section id="reviews">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Jacksonville moves, happy customers
				</h2>
				<p className="mt-2 text-sm text-slate-600">
					<span className="font-semibold text-slate-900">4.9</span> average from{' '}
					<span className="font-semibold text-slate-900">200+</span> moves (mock)
				</p>
			</div>
			<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{REVIEWS.map((r) => (
					<Card key={r.name} className="h-full">
						<CardHeader>
							<CardTitle className="text-base">{r.name}</CardTitle>
							<p className="text-sm text-slate-600">{r.neighborhood}</p>
						</CardHeader>
						<CardContent className="pt-0">
							<div className="mb-2 flex items-center gap-1 text-amber-500">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										className={`h-4 w-4 ${i < r.rating ? 'fill-current' : 'opacity-30'}`}
									/>
								))}
							</div>
							<p className="text-sm text-slate-700">“{r.quote}”</p>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}



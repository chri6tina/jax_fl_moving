'use client';
import * as React from 'react';
import { Section } from './section';
import { MapPin } from 'lucide-react';

const AREAS = [
	'Jacksonville',
	'Jacksonville Beach',
	'Orange Park',
	'Ponte Vedra',
	'St. Johns',
	'Atlantic Beach',
	'Neptune Beach',
	'Mandarin',
	'Arlington',
	'Riverside',
];

export function ServiceArea() {
	return (
		<Section>
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Service area
				</h2>
				<p className="mt-3 text-slate-700">
					If you’re near Jacksonville, we’ve got you covered.
				</p>
			</div>
			<div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-2">
				<div
					className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner"
					aria-label="Map placeholder"
				>
					<div className="flex h-full items-center justify-center text-slate-500">
						<MapPin className="mr-2 h-5 w-5" />
						Map placeholder
					</div>
				</div>
				<div>
					<ul className="grid grid-cols-2 gap-3 text-sm text-slate-800 sm:grid-cols-3">
						{AREAS.map((a) => (
							<li key={a} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
								{a}
							</li>
						))}
					</ul>
					<p className="mt-3 text-sm text-slate-700">
						Not sure if we cover you? <button onClick={() => {
							if (typeof window === 'undefined') return;
							document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
						}} className="font-medium text-teal-700 underline">Ask.</button>
					</p>
				</div>
			</div>
		</Section>
	);
}



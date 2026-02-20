import * as React from 'react';
import { Section } from './section';
import { ShieldCheck, Clock, Hand, MessageSquare } from 'lucide-react';

const ITEMS = [
	{
		title: 'Transparent estimates',
		icon: ShieldCheck,
		desc: 'Clear, upfront pricing with no surprises.',
	},
	{
		title: 'Careful handling',
		icon: Hand,
		desc: 'Blankets, shrink wrap, and trained pros for every item.',
	},
	{
		title: 'On-time crews',
		icon: Clock,
		desc: 'We respect your schedule and arrive ready to work.',
	},
	{
		title: 'Great communication',
		icon: MessageSquare,
		desc: 'Status updates from booking to finish.',
	},
];

export function WhyChooseUs() {
	return (
		<Section>
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Why choose River City Moving
				</h2>
				<p className="mt-3 text-slate-700">
					Local, friendly, and focused on making your move the easiest part of
					your day.
				</p>
			</div>
			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{ITEMS.map(({ title, icon: Icon, desc }) => (
					<div
						key={title}
						className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
					>
						<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200">
							<Icon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
						<p className="mt-2 text-sm text-slate-700">{desc}</p>
					</div>
				))}
			</div>
			<div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-teal-200 bg-teal-50 p-4 text-center text-sm text-teal-800">
				Fully licensed & insured. DOT documentation available on request.
			</div>
		</Section>
	);
}



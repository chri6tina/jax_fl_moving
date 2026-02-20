import * as React from 'react';

export function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-slate-200 bg-white" id="contact">
			<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<h4 className="text-sm font-semibold text-slate-900">Company</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-700">
							<li>River City Moving Co.</li>
							<li>Jacksonville, FL</li>
							<li>Mon–Sat: 8am–6pm</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-slate-900">Services</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-700">
							<li>Local Moves</li>
							<li>Long Distance</li>
							<li>Packing</li>
							<li>Loading/Unloading</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-slate-900">Support</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-700">
							<li>FAQs</li>
							<li>Licensing & Insurance</li>
							<li>Pricing Policy</li>
							<li>Service Area</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-slate-900">Contact</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-700">
							<li>Phone: (904) 555-0123</li>
							<li>Email: hello@rivercitymoving.example</li>
							<li>Address: 123 Main St, Jacksonville, FL</li>
						</ul>
					</div>
				</div>
				<p className="mt-10 text-xs text-slate-500">
					© {year} River City Moving Co. All rights reserved.
				</p>
			</div>
		</footer>
	);
}



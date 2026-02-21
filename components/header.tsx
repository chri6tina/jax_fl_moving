'use client';
import * as React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';

function scrollToId(id: string) {
	if (typeof window === 'undefined') return;
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const NAV = [
	{ label: 'Services', href: '/services' as const },
	{ label: 'Pricing', href: '/pricing' as const },
	{ label: 'Reviews', id: 'reviews' as const },
	{ label: 'FAQ', id: 'faq' as const },
	{ label: 'Contact', id: 'contact' as const },
];

export function Header() {
	const [open, setOpen] = React.useState(false);
	React.useEffect(() => {
		function onResize() {
			if (window.innerWidth >= 1024) setOpen(false);
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
				<div className="flex items-center gap-6">
					<button
						className="inline-flex items-center gap-2 lg:hidden"
						aria-label="Toggle menu"
						onClick={() => setOpen((s) => !s)}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-900">
							<path
								fill="currentColor"
								d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"
							/>
						</svg>
					</button>
					<Link
						href="/"
						aria-label="Go to homepage"
						className="text-lg font-semibold tracking-tight text-slate-900 hover:opacity-90"
					>
						Jacksonville Movers
					</Link>
				</div>
				<nav className="hidden items-center gap-8 lg:flex">
					{NAV.map((item) =>
						item.href ? (
							<Link
								key={item.label}
								href={item.href}
								className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
							>
								{item.label}
							</Link>
						) : (
							<button
								key={item.id}
								onClick={() => scrollToId(item.id!)}
								className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
							>
								{item.label}
							</button>
						)
					)}
				</nav>
				<div className="hidden lg:block">
					<Button onClick={() => scrollToId('quote')} className="bg-teal-600 hover:bg-teal-700">
						Get a Quote
					</Button>
				</div>
				<a
					href="tel:19045550123"
					className="ml-3 inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 lg:ml-6 lg:hidden"
					aria-label="Call (904) 555-0123"
				>
					<Phone className="h-4 w-4" />
					(904) 555-0123
				</a>
			</div>
			<div
				className={cn(
					'border-t border-slate-200 bg-white lg:hidden',
					open ? 'block' : 'hidden'
				)}
			>
				<div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
					<nav className="grid gap-4">
						{NAV.map((item) =>
							item.href ? (
								<Link
									key={item.label}
									href={item.href}
									onClick={() => setOpen(false)}
									className="w-full rounded-lg px-2 py-2 text-left text-base font-medium text-slate-800 hover:bg-slate-50"
								>
									{item.label}
								</Link>
							) : (
								<button
									key={item.id}
									onClick={() => {
										scrollToId(item.id!);
										setOpen(false);
									}}
									className="w-full rounded-lg px-2 py-2 text-left text-base font-medium text-slate-800 hover:bg-slate-50"
								>
									{item.label}
								</button>
							)
						)}
						<Button
							className="mt-2 w-full bg-teal-600 hover:bg-teal-700"
							onClick={() => {
								scrollToId('quote');
								setOpen(false);
							}}
						>
							Get a Quote
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}



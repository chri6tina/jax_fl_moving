'use client';
import * as React from 'react';
import { Button } from './ui/button';

function scrollToId(id: string) {
	if (typeof window === 'undefined') return;
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function MobileCTA() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
			<Button
				className="w-full bg-teal-600 hover:bg-teal-700"
				onClick={() => scrollToId('quote')}
				aria-label="Get a Quote"
			>
				Get a Quote
			</Button>
		</div>
	);
}



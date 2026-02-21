import './globals.css';
import type { Metadata } from 'next';
import * as React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { MobileCTA } from '../components/mobile-cta';

export const metadata: Metadata = {
	title: { default: 'Jacksonville Movers', template: '%s | Jacksonville Movers' },
	description: 'Jacksonville movers — local, licensed & insured, transparent pricing.',
	metadataBase: new URL('https://jaxflmovers.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen antialiased">
				<div className="min-h-screen bg-white text-slate-900">
					<Header />
					{children}
					<Footer />
					<MobileCTA />
				</div>
			</body>
		</html>
	);
}



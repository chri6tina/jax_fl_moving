'use client';
import * as React from 'react';
import { cn } from '../lib/utils';

export function Section({
	className,
	containerClassName,
	...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string }) {
	return (
		<section className={cn('py-14 sm:py-16 lg:py-20', className)} {...props}>
			<div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', containerClassName)}>
				{props.children}
			</div>
		</section>
	);
}



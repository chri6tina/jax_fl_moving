import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	function Select({ className, children, ...props }, ref) {
		return (
			<div className="relative">
				<select
					ref={ref}
					className={cn(
						'flex h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className
					)}
					{...props}
				>
					{children}
				</select>
				<span
					aria-hidden="true"
					className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400"
				>
					<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
						<path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
					</svg>
				</span>
			</div>
		);
	}
);



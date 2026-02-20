import * as React from 'react';
import { cn } from '../../lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'secondary' | 'outline' | 'ghost';
	size?: 'default' | 'sm' | 'lg';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button({ className, variant = 'default', size = 'default', ...props }, ref) {
		const base =
			'inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white';
		const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
			default:
				'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400',
			secondary:
				'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400',
			outline:
				'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400',
			ghost:
				'bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
		};
		const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
			default: 'h-11 px-5 text-sm',
			sm: 'h-9 px-3 text-sm',
			lg: 'h-12 px-6 text-base',
		};
		return (
			<button
				ref={ref}
				className={cn(base, variants[variant], sizes[size], className)}
				{...props}
			/>
		);
	}
);



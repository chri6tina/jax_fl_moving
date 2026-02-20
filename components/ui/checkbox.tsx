import * as React from 'react';
import { cn } from '../../lib/utils';

export interface CheckboxProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox({ className, ...props }, ref) {
		return (
			<label className="inline-flex cursor-pointer items-center gap-3">
				<input
					ref={ref}
					type="checkbox"
					className={cn(
						'peer h-5 w-5 appearance-none rounded-md border border-slate-300 transition-colors',
						'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
						'checked:border-teal-600 checked:bg-teal-600',
						className
					)}
					{...props}
				/>
				<span className="pointer-events-none relative -ml-8 inline-flex h-5 w-5 items-center justify-center text-white peer-checked:opacity-100">
					<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
						<path d="M16.704 6.29a1 1 0 00-1.408-1.42l-6.58 6.53-2.01-1.99a1 1 0 10-1.41 1.42l2.71 2.67a1 1 0 001.41 0l7.29-7.21z" />
					</svg>
				</span>
			</label>
		);
	}
);



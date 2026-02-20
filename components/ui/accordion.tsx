'use client';
import * as React from 'react';
import { cn } from '../../lib/utils';

type AccordionType = 'single' | 'multiple';

export interface AccordionProps {
	type?: AccordionType;
	collapsible?: boolean;
	className?: string;
	children: React.ReactNode;
}

const AccordionContext = React.createContext<{
	type: AccordionType;
	collapsible: boolean;
	openItems: string[];
	setOpenItems: React.Dispatch<React.SetStateAction<string[]>>;
} | null>(null);

const AccordionItemContext = React.createContext<{ value: string } | null>(null);

export function Accordion({
	type = 'single',
	collapsible = true,
	className,
	children,
}: AccordionProps) {
	const [openItems, setOpenItems] = React.useState<string[]>([]);

	const context = React.useMemo(
		() => ({
			type,
			collapsible,
			openItems,
			setOpenItems,
		}),
		[type, collapsible, openItems]
	);

	return (
		<div className={cn('space-y-3', className)}>
			<AccordionContext.Provider value={context}>
				{children}
			</AccordionContext.Provider>
		</div>
	);
}

export interface AccordionItemProps {
	value: string;
	className?: string;
	children: React.ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
	return (
		<div
			data-accordion-item={value}
			className={cn('overflow-hidden rounded-xl border border-slate-200', className)}
		>
			<AccordionItemContext.Provider value={{ value }}>
				{children}
			</AccordionItemContext.Provider>
		</div>
	);
}

export interface AccordionTriggerProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function AccordionTrigger({
	className,
	children,
	...props
}: AccordionTriggerProps) {
	const ctx = React.useContext(AccordionContext);
	const itemCtx = React.useContext(AccordionItemContext);
	if (!ctx) throw new Error('AccordionTrigger must be used within Accordion');
	if (!itemCtx) throw new Error('AccordionTrigger must be used within AccordionItem');

	const itemValue = itemCtx.value;
	const isOpen = ctx.openItems.includes(itemValue);

	function toggle() {
		ctx.setOpenItems((prev) => {
			if (ctx.type === 'single') {
				if (isOpen) {
					return ctx.collapsible ? [] : prev;
				}
				return [itemValue];
			}
			// multiple
			if (isOpen) {
				return prev.filter((v) => v !== itemValue);
			}
			return [...prev, itemValue];
		});
	}

	const contentId = `accordion-content-${itemValue}`;

	return (
		<button
			type="button"
			aria-expanded={isOpen}
			aria-controls={contentId}
			className={cn(
				'flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left text-base font-medium text-slate-900',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500',
				className
			)}
			onClick={toggle}
			{...props}
		>
			<span>{children}</span>
			<span
				aria-hidden="true"
				className={cn(
					'transition-transform',
					isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'
				)}
			>
				<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
					<path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
				</svg>
			</span>
		</button>
	);
}

export interface AccordionContentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function AccordionContent({
	className,
	children,
	...props
}: AccordionContentProps) {
	const ctx = React.useContext(AccordionContext);
	const itemCtx = React.useContext(AccordionItemContext);
	if (!ctx) throw new Error('AccordionContent must be used within Accordion');
	if (!itemCtx) throw new Error('AccordionContent must be used within AccordionItem');

	const itemValue = itemCtx.value;
	const isOpen = ctx.openItems.includes(itemValue);
	const contentId = `accordion-content-${itemValue}`;

	return (
		<div
			id={contentId}
			role="region"
			aria-hidden={!isOpen}
			className={cn(
				'grid grid-rows-[0fr] px-5 transition-all duration-200',
				isOpen && 'grid-rows-[1fr] pb-4',
				className
			)}
			{...props}
		>
			<div className="overflow-hidden text-slate-700">{children}</div>
		</div>
	);
}



'use client';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

type FormState = {
	fullName: string;
	phone: string;
	email: string;
	moveDate: string;
	moveType: string;
	fromZip: string;
	toZip: string;
	bedrooms: string;
	stairs: string;
	notes: string;
	consent: boolean;
};

const initialState: FormState = {
	fullName: '',
	phone: '',
	email: '',
	moveDate: '',
	moveType: '',
	fromZip: '',
	toZip: '',
	bedrooms: '',
	stairs: '',
	notes: '',
	consent: false,
};

export function QuoteForm({
	className,
	actionUrl,
}: {
	className?: string;
	actionUrl?: string;
}) {
	const [data, setData] = React.useState<FormState>(initialState);
	const [errors, setErrors] = React.useState<Record<string, string>>({});
	const [submitted, setSubmitted] = React.useState(false);
	const [submitting, setSubmitting] = React.useState(false);
	const [submitError, setSubmitError] = React.useState<string>('');

	function handleChange<T extends keyof FormState>(key: T, value: FormState[T]) {
		setData((d) => ({ ...d, [key]: value }));
		setErrors((e) => ({ ...e, [key as string]: '' }));
		setSubmitError('');
	}

	function validate(): boolean {
		const e: Record<string, string> = {};
		if (!data.fullName.trim()) e.fullName = 'Please enter your full name';
		if (!data.phone.trim() && !data.email.trim()) {
			e.phone = 'Phone or email required';
			e.email = 'Phone or email required';
		}
		if (!data.moveDate) e.moveDate = 'Select your move date';
		if (!data.fromZip.trim()) e.fromZip = 'From ZIP is required';
		if (data.phone && !/^\+?[\d\s().-]{7,}$/.test(data.phone))
			e.phone = 'Enter a valid phone';
		if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
			e.email = 'Enter a valid email';
		if (data.fromZip && !/^\d{5}$/.test(data.fromZip)) e.fromZip = '5-digit ZIP';
		if (data.toZip && !/^\d{5}$/.test(data.toZip)) e.toZip = '5-digit ZIP';
		setErrors(e);
		return Object.keys(e).length === 0;
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!validate()) return;
		setSubmitting(true);
		setSubmitError('');
		try {
			if (actionUrl) {
				const payload = {
					...data,
					formName: 'Local Moves Quote',
					pageUrl:
						typeof window !== 'undefined' ? window.location.href : '/services/local-moves',
				};
				const res = await fetch(actionUrl, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				});
				if (!res.ok) {
					try {
						const j = await res.json();
						setSubmitError(
							j?.error || 'Something went wrong sending your request. Please try again.'
						);
					} catch {
						setSubmitError(
							'Something went wrong sending your request. Please try again.'
						);
					}
					return;
				}
				setSubmitted(true);
			} else {
				// Default behavior: log payload
				console.log('Quote Request:', data);
				await new Promise((res) => setTimeout(res, 600));
				setSubmitted(true);
			}
		} finally {
			setSubmitting(false);
		}
	}

	if (submitted) {
		return (
			<Card className={cn('shadow-md', className)} aria-live="polite">
				<CardHeader>
					<CardTitle>Thanks! We received your request.</CardTitle>
				</CardHeader>
				<CardContent className="pt-2">
					<p className="text-slate-700">
						We respond within 15 minutes during business hours. Keep your phone
						nearby in case we have a quick question.
					</p>
					<Button
						variant="secondary"
						className="mt-6"
						onClick={() => {
							setSubmitted(false);
							setData(initialState);
						}}
					>
						Submit another request
					</Button>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className={cn('shadow-md', className)}>
			<CardHeader>
				<CardTitle>Get your fast, free quote</CardTitle>
			</CardHeader>
			<CardContent className="pt-2">
				<form onSubmit={onSubmit} noValidate>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<Label htmlFor="fullName">Full name</Label>
							<Input
								id="fullName"
								name="fullName"
								autoComplete="name"
								value={data.fullName}
								onChange={(e) => handleChange('fullName', e.target.value)}
								aria-invalid={!!errors.fullName}
								aria-describedby={errors.fullName ? 'fullName-error' : undefined}
							/>
							{errors.fullName && (
								<p id="fullName-error" className="mt-1 text-sm text-red-600">
									{errors.fullName}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="phone">Phone</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								autoComplete="tel"
								placeholder="(904) 555-0123"
								value={data.phone}
								onChange={(e) => handleChange('phone', e.target.value)}
								aria-invalid={!!errors.phone}
								aria-describedby={errors.phone ? 'phone-error' : undefined}
							/>
							{errors.phone && (
								<p id="phone-error" className="mt-1 text-sm text-red-600">
									{errors.phone}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								placeholder="you@example.com"
								value={data.email}
								onChange={(e) => handleChange('email', e.target.value)}
								aria-invalid={!!errors.email}
								aria-describedby={errors.email ? 'email-error' : undefined}
							/>
							{errors.email && (
								<p id="email-error" className="mt-1 text-sm text-red-600">
									{errors.email}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="moveDate">Move date</Label>
							<Input
								id="moveDate"
								name="moveDate"
								type="date"
								value={data.moveDate}
								onChange={(e) => handleChange('moveDate', e.target.value)}
								aria-invalid={!!errors.moveDate}
								aria-describedby={errors.moveDate ? 'moveDate-error' : undefined}
							/>
							{errors.moveDate && (
								<p id="moveDate-error" className="mt-1 text-sm text-red-600">
									{errors.moveDate}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="moveType">Move type</Label>
							<Select
								id="moveType"
								name="moveType"
								value={data.moveType}
								onChange={(e) => handleChange('moveType', e.target.value)}
							>
								<option value="">Select</option>
								<option>Apartment</option>
								<option>House</option>
								<option>Office/Commercial</option>
								<option>Storage</option>
								<option>Other</option>
							</Select>
						</div>
						<div>
							<Label htmlFor="fromZip">From ZIP</Label>
							<Input
								id="fromZip"
								name="fromZip"
								inputMode="numeric"
								pattern="[0-9]*"
								placeholder="32202"
								value={data.fromZip}
								onChange={(e) => handleChange('fromZip', e.target.value)}
								aria-invalid={!!errors.fromZip}
								aria-describedby={errors.fromZip ? 'fromZip-error' : undefined}
							/>
							{errors.fromZip && (
								<p id="fromZip-error" className="mt-1 text-sm text-red-600">
									{errors.fromZip}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="toZip">To ZIP</Label>
							<Input
								id="toZip"
								name="toZip"
								inputMode="numeric"
								pattern="[0-9]*"
								placeholder="32207"
								value={data.toZip}
								onChange={(e) => handleChange('toZip', e.target.value)}
								aria-invalid={!!errors.toZip}
								aria-describedby={errors.toZip ? 'toZip-error' : undefined}
							/>
							{errors.toZip && (
								<p id="toZip-error" className="mt-1 text-sm text-red-600">
									{errors.toZip}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="bedrooms">Bedrooms/size</Label>
							<Select
								id="bedrooms"
								name="bedrooms"
								value={data.bedrooms}
								onChange={(e) => handleChange('bedrooms', e.target.value)}
							>
								<option value="">Select</option>
								<option>Studio</option>
								<option>1BR</option>
								<option>2BR</option>
								<option>3BR</option>
								<option>4+BR</option>
							</Select>
						</div>
						<div>
							<Label htmlFor="stairs">Stairs / elevator</Label>
							<Select
								id="stairs"
								name="stairs"
								value={data.stairs}
								onChange={(e) => handleChange('stairs', e.target.value)}
							>
								<option value="">Select</option>
								<option>No stairs</option>
								<option>1 flight</option>
								<option>2+ flights</option>
								<option>Elevator</option>
							</Select>
						</div>
						<div className="sm:col-span-2">
							<Label htmlFor="notes">Notes (optional)</Label>
							<Textarea
								id="notes"
								name="notes"
								rows={3}
								placeholder="Any special items, parking details, gate codes, etc."
								value={data.notes}
								onChange={(e) => handleChange('notes', e.target.value)}
							/>
						</div>
						<div className="sm:col-span-2">
							<div className="flex items-start gap-3">
								<Checkbox
									id="consent"
									checked={data.consent}
									onChange={(e) => handleChange('consent', e.target.checked)}
									aria-describedby="consent-hint"
								/>
								<label htmlFor="consent" className="text-sm text-slate-700">
									Text me updates about my quote
								</label>
							</div>
							<p id="consent-hint" className="sr-only">
								Optional SMS updates
							</p>
						</div>
					</div>
					<Button
						type="submit"
						className="mt-5 w-full bg-teal-600 hover:bg-teal-700"
						disabled={submitting}
						aria-label="Request My Quote"
					>
						{submitting ? 'Submitting...' : 'Request My Quote'}
					</Button>
					{submitError && (
						<p className="mt-2 text-center text-sm text-red-600">{submitError}</p>
					)}
					<p className="mt-2 text-center text-xs text-slate-500">
						We respond within 15 minutes during business hours.
					</p>
				</form>
			</CardContent>
		</Card>
	);
}



'use client';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

type ServiceKind =
  | 'local'
  | 'long-distance'
  | 'packing'
  | 'loading-unloading'
  | 'office'
  | 'specialty';

type EstimatorProps = {
  className?: string;
  service?: ServiceKind;
};

type Size = 'Studio' | '1BR' | '2BR' | '3BR' | '4+BR';
type Access = 'None' | '1 flight' | '2+ flights' | 'Elevator';
type Packing = 'None' | 'Kitchen only' | 'Whole home';

export function CostEstimator({ className, service = 'local' }: EstimatorProps) {
  const [size, setSize] = React.useState<Size>('2BR');
  const [distanceMiles, setDistanceMiles] = React.useState<number>(service === 'long-distance' ? 250 : 8);
  const [access, setAccess] = React.useState<Access>('None');
  const [packing, setPacking] = React.useState<Packing>('None');
  const [piano, setPiano] = React.useState(false);
  const [safe, setSafe] = React.useState(false);
  const [bulky, setBulky] = React.useState(false);
  const [weekend, setWeekend] = React.useState(false);
  React.useEffect(() => {
    setDistanceMiles(service === 'long-distance' ? 250 : 8);
  }, [service]);

  const baseHoursBySize: Record<Size, number> = {
    Studio: 3,
    '1BR': 4,
    '2BR': 6,
    '3BR': 8,
    '4+BR': 10,
  };

  const hourlyRates = {
    two: 139, // Typical Jacksonville 2026 market snapshot
    three: 179,
    four: 219,
  };

  const accessMultiplier: Record<Access, number> = {
    None: 1,
    '1 flight': 1.1,
    '2+ flights': 1.2,
    Elevator: 1.12,
  };

  const packingHours: Record<Packing, number> = {
    None: 0,
    'Kitchen only': 2,
    'Whole home': size === 'Studio' || size === '1BR' ? 3.5 : size === '2BR' ? 5 : 6.5,
  };

  // Travel baseline (round trip/load-out/load-in) for local
  function travelHoursLocal(miles: number): number {
    if (miles <= 10) return 1; // common local policy
    if (miles <= 20) return 1.25;
    if (miles <= 40) return 1.5;
    if (miles <= 60) return 1.75;
    return 2;
  }

  const specialItemHours =
    (piano ? 1.25 : 0) + (safe ? 0.75 : 0) + (bulky ? 0.5 : 0);

  // Base work hours
  const baseWorkHours = baseHoursBySize[size] * accessMultiplier[access] + packingHours[packing] + specialItemHours;

  // Recommend crew
  function recommendCrew(hours: number, s: Size) {
    if (s === '4+BR' || hours >= 9) return 4;
    if (s === '3BR' || hours >= 7) return 3;
    return 2;
  }
  const suggestedCrew = recommendCrew(baseWorkHours, size);

  // Rate by crew
  const rate =
    suggestedCrew === 4
      ? hourlyRates.four
      : suggestedCrew === 3
      ? hourlyRates.three
      : hourlyRates.two;

  // Total hours with travel (for local); for long-distance, present blended placeholder
  let travelHours = 0;
  if (service === 'local' || service === 'loading-unloading' || service === 'packing' || service === 'specialty' || service === 'office') {
    travelHours = travelHoursLocal(distanceMiles);
  }

  const subtotalHours = baseWorkHours + travelHours;
  const weekendMultiplier = weekend ? 1.1 : 1;
  const totalCost = subtotalHours * rate * weekendMultiplier;

  const low = Math.max(0, totalCost * 0.9);
  const high = totalCost * 1.1;

  // Long-distance note (very rough blended: load/unload hours + per-mile)
  const perMile = 2.2; // indicative linehaul placeholder per mile (excludes lodging/tolls/fuel surcharges)
  const longDistanceBlend =
    (baseWorkHours + 2 /* destination setup buffer */) * rate +
    Math.max(distanceMiles, 100) * perMile;

  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader>
        <CardTitle>Instant ballpark estimate</CardTitle>
        <CardDescription>Adjust a few options to preview typical time and cost.</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <Label htmlFor="size">Home size</Label>
            <Select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value as Size)}
            >
              <option>Studio</option>
              <option>1BR</option>
              <option>2BR</option>
              <option>3BR</option>
              <option>4+BR</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="distance">{service === 'long-distance' ? 'Approx distance (miles)' : 'Distance (miles)'}</Label>
            <Input
              id="distance"
              type="number"
              min={0}
              max={600}
              value={distanceMiles}
              onChange={(e) => setDistanceMiles(parseFloat(e.target.value || '0'))}
            />
          </div>
          <div>
            <Label htmlFor="access">Access</Label>
            <Select
              id="access"
              value={access}
              onChange={(e) => setAccess(e.target.value as Access)}
            >
              <option>None</option>
              <option>1 flight</option>
              <option>2+ flights</option>
              <option>Elevator</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="packing">Packing help</Label>
            <Select
              id="packing"
              value={packing}
              onChange={(e) => setPacking(e.target.value as Packing)}
            >
              <option>None</option>
              <option>Kitchen only</option>
              <option>Whole home</option>
            </Select>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="piano"
                  checked={piano}
                  onChange={(e) => setPiano(e.target.checked)}
                />
                <label htmlFor="piano" className="text-sm text-slate-700">
                  Piano
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="safe"
                  checked={safe}
                  onChange={(e) => setSafe(e.target.checked)}
                />
                <label htmlFor="safe" className="text-sm text-slate-700">
                  Gun safe
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="bulky"
                  checked={bulky}
                  onChange={(e) => setBulky(e.target.checked)}
                />
                <label htmlFor="bulky" className="text-sm text-slate-700">
                  Extra bulky item
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="weekend"
              checked={weekend}
              onChange={(e) => setWeekend(e.target.checked)}
            />
            <label htmlFor="weekend" className="text-sm text-slate-700">
              Weekend move
            </label>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Suggested crew</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{suggestedCrew} movers</p>
            <p className="text-xs text-slate-500">${rate}/hr</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Estimated hours</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {Math.max(2, Math.round((baseWorkHours + Number.EPSILON) * 10) / 10)}h
              {service !== 'long-distance' ? ` + ${travelHours}h travel` : ''}
            </p>
            <p className="text-xs text-slate-500">Varies with access and packing.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">{service === 'long-distance' ? 'Linehaul estimate' : 'Estimated total'}</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {service === 'long-distance'
                ? `$${Math.round(longDistanceBlend * 0.9).toLocaleString()}–$${Math.round(
                    longDistanceBlend * 1.1
                  ).toLocaleString()}`
                : `$${Math.round(low).toLocaleString()}–$${Math.round(high).toLocaleString()}`}
            </p>
            <p className="text-xs text-slate-500">Not a binding quote.</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={() => {
              if (typeof window === 'undefined') return;
              document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lock in my exact quote
          </Button>
          <p className="text-xs text-slate-500 sm:ml-2">We’ll review details and finalize a clear, itemized estimate.</p>
        </div>
      </CardContent>
    </Card>
  );
}


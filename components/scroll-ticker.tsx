'use client';
import * as React from 'react';
import { cn } from '../lib/utils';

type TickerProps = {
  items: string[];
  className?: string;
  speedSeconds?: number; // total loop duration
};

export function ScrollTicker({
  items,
  className,
  speedSeconds = 28,
}: TickerProps) {
  const trackStyle: React.CSSProperties = {
    animation: `ticker-right ${speedSeconds}s linear infinite`,
  };
  // Duplicate items to create a seamless loop
  const loopItems = [...items, ...items];

  return (
    <div
      className={cn(
        'relative overflow-hidden border-y border-slate-200 bg-white mask-fade-x',
        className
      )}
      role="region"
      aria-label="Popular moving services"
    >
      <div className="pointer-events-none whitespace-nowrap">
        <div
          className="inline-flex w-[200%] items-center gap-8 py-4 pl-4 sm:gap-12 sm:py-5 sm:pl-6"
          style={trackStyle}
          aria-hidden="true"
        >
          {loopItems.map((label, idx) => (
            <span
              key={`${label}-${idx}`}
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-slate-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              <span className="whitespace-nowrap">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


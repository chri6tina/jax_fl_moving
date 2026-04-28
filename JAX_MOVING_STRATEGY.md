# Jax Moving — Strategy & Daily Notes

This is the persistent memory for the daily Claude run on this project. Read this file FIRST every run, then read `DAILY_LOG.md` (last 7 entries), then do today's work, then update both files.

---

## Mission

Make Jax Moving the best moving company website in Jacksonville. Beat
the established players by being **modern, fast, transparent, and
hyper-local**. The site is the lead-generation engine — every change
should either increase trust, reduce friction to a quote, or improve
local search ranking.

---

## Brand basics (fill in as decisions get made)

- Business name: **Jax Moving** (working name)
- Phone: TBD — placeholder used in code: `(904) 555-0100`
- Email: TBD
- Service area: Jacksonville, FL + surrounding (Duval, Clay, St. Johns, Nassau)
- License #: TBD (Florida Mover Registration / IM number)
- USDOT #: TBD (for long-distance)
- Years in business: NEW (this is a real weakness vs. competitors —
  lean into "built for the modern Jacksonville move" instead of heritage)

> **Action for Christina:** confirm/replace these as soon as you have them.

---

## Competitive landscape (April 2026)

Top Jacksonville moving competitors and their angles:

| Company | Angle | Strength | Weakness we can exploit |
|---|---|---|---|
| Suddath | 100+ year heritage (since 1919) | Trust, scale | Old-feeling site, slow quote process |
| Two Men and a Truck | National brand, 28+ yrs in Jax | Recognition | Generic, not local-feeling |
| Helping Hands Movers | Veteran & family-owned, 23+ yrs | Authenticity | Site is dated |
| Skinner Moving | 130+ Google reviews, 2,000+ moves/yr | Volume, reviews | Heavy DIY-feel design |
| Smooth Moves | Licensed/insured emphasis | Compliance trust | Limited content |
| Jacksonville Elite Movers (jaxmov.com) | Since 2013 | Established | Direct competitor — similar name |
| On Time Moving & Storage | 177 reviews, 74.6% positive | Volume | Mediocre rating leaves room |

### Our positioning
**"The fastest, clearest way to book a Jacksonville move."**
- Instant online quote (under 60 seconds)
- Flat-rate transparent pricing displayed BEFORE the form
- Modern site that looks 2026, not 2010
- Focus on Jacksonville neighborhoods specifically (Riverside, Mandarin,
  Southside, San Marco, Avondale, Ortega, the Beaches, Northside)

### Direct-name conflict to watch
`jaxmov.com` is "Jacksonville Elite Movers" — we MUST differentiate.
Use full "Jax Moving" wordmark, not "JaxMov."

---

## SEO target keywords (from research)

Primary:
- "Jacksonville movers"
- "Jacksonville moving company"
- "movers in Jacksonville FL"

Secondary:
- "local movers Jacksonville"
- "long distance movers Jacksonville"
- "packing services Jacksonville"
- "furniture movers Jacksonville FL"
- "apartment movers Jacksonville"
- "office movers Jacksonville"

Hyper-local (huge opportunity — competitors don't do this well):
- "movers in Riverside Jacksonville"
- "Mandarin FL movers"
- "Southside Jacksonville moving company"
- "San Marco movers"
- "Jacksonville Beach movers"
- "Ortega FL moving company"
- "Northside Jacksonville movers"
- "Atlantic Beach movers"

> **Strategy:** create one neighborhood landing page per area (long-form,
> 800–1200 words, real local references). Daily run can build these out
> one at a time.

---

## Site architecture (target state)

```
/                          → Hero + services + booking + trust + FAQ
/services/local             → Local moves
/services/long-distance     → Long distance
/services/packing           → Packing services
/services/storage           → Storage
/services/commercial        → Office/commercial
/areas/riverside            → Neighborhood landing pages (one per area)
/areas/mandarin
/areas/southside
/areas/san-marco
/areas/jacksonville-beach
/areas/atlantic-beach
/areas/ortega
/areas/northside
/areas/orange-park           (Clay County)
/areas/st-johns              (St. Johns County)
/about                      → Single about page (kill the duplicate /about-us)
/contact                    → Contact + phone + form
/quote                      → Booking form (rename from /book-a-move)
/blog                       → Blog index
/blog/[slug]                → Posts
/faq                        → Single FAQ page (kill duplicate)
/reviews                    → Reviews page
```

Things to delete or merge:
- `/about-us` (duplicate of `/about`)
- `/homepage` (duplicate of `/home` and root)
- `/home` (duplicate of root `/`)
- Either `FAQ.tsx` or `FAQs.tsx` (one is dead)
- Either `Reviews.tsx` or `ReviewsCarousel.tsx`
- Either `Testimonials.tsx` or `TestimonialsCarousel.tsx`

---

## Trust signals to add (in priority order)

1. Phone number in header + footer (tappable on mobile)
2. License + insurance badges
3. Free quote CTA above the fold
4. Real customer reviews (Google embed once we have them)
5. Local Business JSON-LD schema (for rich snippets in search)
6. Service area map
7. "Get a quote in 60 seconds" timer/badge
8. Trust row: "Licensed • Insured • Local • Same-Day Quotes"

---

## Conversion priorities

1. **Phone CTA** — top right of every page, tap-to-call on mobile
2. **Quote form** — one above the fold, one before the footer
3. **Address-to-address quote** — eventually, "From: [zip] To: [zip] →
   instant ballpark estimate" (this would crush competitors)
4. **WhatsApp / SMS option** — Jacksonville locals love texting

---

## Things to NEVER do on this site

- Never use stock photos that obviously aren't Jacksonville
- Never claim certifications/licenses we don't have (legal exposure)
- Never write fake reviews
- Never quote prices the business can't honor
- Never auto-deploy without Christina seeing the diff first

---

## What's been done (changelog — append, don't rewrite)

### 2026-04-28 — Initial setup run
- Created this strategy file
- Created DAILY_LOG.md
- Audited current site state, identified duplicate pages, broken nav links,
  default metadata
- Researched top 7 Jacksonville moving competitors
- Identified hyper-local neighborhood pages as biggest SEO opportunity
- Fixed `layout.tsx` metadata (title, description, OpenGraph)
- Expanded `services.ts` with full service set + Jacksonville-specific copy
- Rewrote home page hero with phone CTA, trust row, service area
- Added phone number placeholder `(904) 555-0100` (Christina to replace)

### Things tried that didn't work
*(empty — first run)*

### Things to try next run
- Add `JSON-LD LocalBusiness` schema to `layout.tsx`
- Build out first neighborhood page: `/areas/riverside`
- Resolve duplicate pages (decide which to keep, delete the others)
- Wire NavMenu links to actual existing pages (kill broken links)
- Replace `WhyChooseUs.tsx`'s fake "100+ reviews" with honest copy

---

## Open questions for Christina (answer in `daily-claude-instructions.txt`)

- Real phone number?
- Real service email?
- Domain registered? Where deployed (Vercel)?
- Florida Mover Registration #? USDOT # if doing long-distance?
- Logo files? Brand colors?
- Any real customer reviews yet, or is this pre-launch?
- Pricing model: hourly, flat-rate, or both?
- Crew size and truck count (for "About" page authenticity)?


### 2026-04-28 (session 2) - Local SEO foundation
- Built first neighborhood landing page: /areas/riverside (~700+ words,
  Riverside-specific landmarks, internal links, full Metadata)
- Added MovingCompany JSON-LD schema to layout.tsx (LocalBusiness type
  with areaServed for 6 cities, geo coords, opening hours)
- Fixed NavMenu: removed 3 broken links, points only to real pages,
  added primary "Get a Quote" CTA, mobile menu closes on tap
- All edited files typecheck clean

### Pattern established for neighborhood pages
Each /areas/[neighborhood]/page.tsx should include:
1. Page-specific Metadata (title, description, keywords, canonical)
2. H1 with "[Neighborhood] Movers Who Know the Neighborhood"
3. ~4 neighborhood-specific facts/challenges (parking, history, stairs, etc.)
4. List of "common moves we do here"
5. ~2 paragraphs of neighborhood color (real landmarks, never generic)
6. "Why neighbors pick Jax Moving" section
7. CTA box with quote button + phone
8. Footer with sibling neighborhoods (internal linking)

### Next-priority neighborhood pages (in order)
1. Mandarin (large suburb, lots of family moves)
2. Jacksonville Beach (high search volume)
3. San Marco (San Marco Square = strong landmark angle)
4. Avondale (paired with Riverside, same vibe)
5. Atlantic Beach
6. Southside
7. Orange Park (Clay County crossover)
8. Northside
9. Ortega
10. St. Johns / Nocatee


### 2026-04-28 (session 3) - Global rule added
- New rule from Christina: NEVER mention the founder, owner, or any
  specific person behind the business. No "meet the team," no "our
  story" framed around an individual, no signed letters, no founder
  photos. Speak as the company, not as a person inside it.
- This applies to ALL projects, not just Jax Moving. See
  C:\Users\chri6\OneDrive\Desktop\GLOBAL_PROJECT_RULES.md for full
  ruleset that applies across every business.
- Action for next run: audit existing pages on this site for any
  "owner/founder" voice and rewrite to company voice.

# CONTENT TODO — Ceramic Pro North West Website

**Complete all items below before going live. Items marked [BLOCKER] will cause visible placeholder text or broken functionality on the live site.**

---

## Photography & Media [BLOCKER]

- [ ] **Hero image** — high-quality photo of a car being coated or a finished coated car. Used as: `/public/images/hero-bg.jpg` (referenced in homepage hero section)
- [ ] **Default OG image** (1200×630px) — for social sharing previews. Used as: `/public/images/og-default.jpg`
- [ ] **Logo file** — SVG or PNG. Replace the "CP" text logo in `Header.tsx` and `Footer.tsx`
- [ ] **Workshop/team photo** — for the About page (`/about`)
- [ ] **Before & after gallery photos** (minimum 12 images, ideally 24+) — replace placeholder cards in `/gallery`. Each needs: before image, after image, vehicle name, service type
- [ ] **Team member photos** — for About page staff section
- [ ] **Individual service hero images** — for each service page (ceramic coating, PPF, detailing, leather)
- [ ] **Blog article header images** — one per article (6 articles)
- [ ] **Favicon** — `favicon.ico` in `/public` or `/src/app`

---

## Business Details [BLOCKER]

- [ ] **Year established** — confirm exact year the business was founded. Currently shown as `[PLACEHOLDER: year]` in About page and Footer
- [ ] **Opening hours confirmation** — the hours in `src/lib/business.ts` are assumed (Mon–Fri 9am–5:30pm, Sat 9am–2pm, closed Sun). Confirm all hours before launch
- [ ] **Email address** — currently `[PLACEHOLDER: info@ceramicpronorthwest.co.uk]`. Confirm the correct email address and update in `src/lib/business.ts`
- [ ] **Number of cars coated** — for stats banner (`BUSINESS.carsCoated`). Update in `src/lib/business.ts`
- [ ] **Warranty period** — confirm the warranty offered on ceramic coating jobs and update in `src/lib/business.ts`
- [ ] **Insurance details** — confirm the business is fully insured and what the coverage is (public liability, treatment risk, etc.) for the About page and trust signals

---

## Pricing [BLOCKER]

All prices below appear as `[PLACEHOLDER]` on the live site. These MUST be confirmed before launch.

- [ ] **Ceramic coating packages** — confirm exact package names (currently Bronze/Silver/Gold tiers assumed), inclusions, and prices for each vehicle size tier (small/medium/large/XL)
- [ ] **PPF packages** — confirm pricing for: high-impact zones, front end package, full vehicle. Prices per vehicle category
- [ ] **Car detailing packages** — confirm exact package names (currently Bronze/Silver/Gold assumed) and prices per vehicle size
- [ ] **Leather/interior protection** — confirm pricing
- [ ] **Combination packages** (PPF + ceramic coating, detail + coating) — confirm if offered and pricing

**File to update:** Pricing is displayed inline in each service page. Search for `[PLACEHOLDER]` across all files in `src/app/(site)/services/`.

---

## Reviews & Testimonials [BLOCKER]

- [ ] **Permission for real testimonials** — the reviews displayed on the site (`/reviews`, homepage, service pages) are paraphrased/fictional placeholders. Get written permission from real customers before using their names, quotes, or photos
- [ ] **Real customer names and quotes** — once permission is obtained, replace the fictional reviews in `src/app/(site)/reviews/page.tsx` and `src/app/(site)/page.tsx`
- [ ] **Google review link** — add the actual Google Review link where `[PLACEHOLDER: Google review link]` appears in `src/app/(site)/reviews/page.tsx`
- [ ] **Review count** — currently 15 Google reviews. Update `BUSINESS.rating.google.count` in `src/lib/business.ts` when this changes

---

## Social Media & External Links [BLOCKER]

Update `src/lib/business.ts` with the correct URLs:

- [ ] **Facebook URL** — currently `[PLACEHOLDER: https://facebook.com/ceramicpronorthwest]`
- [ ] **Instagram URL** — currently `[PLACEHOLDER: https://instagram.com/ceramicpronorthwest]`
- [ ] **Google Business Profile URL** — currently `[PLACEHOLDER: https://g.page/ceramicpronorthwest]`
- [ ] **WhatsApp number** — confirm `441204435933` is the correct WhatsApp number

---

## Technical Setup [BLOCKER]

- [ ] **Domain / production URL** — update `BUSINESS.url` in `src/lib/business.ts` from `https://www.ceramicpronorthwest.co.uk` to the actual production domain once confirmed
- [ ] **Google Analytics 4** — add your GA4 measurement ID. Set environment variable `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel project settings and wire up in `src/app/layout.tsx`
- [ ] **Google Tag Manager** — optional, set `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` environment variable
- [ ] **Contact form email service** — wire up an email sending service in `src/app/api/contact/route.ts`. Options: Resend (recommended), SendGrid, or Nodemailer. See comments in that file for setup instructions
- [ ] **Cloudflare Turnstile** (optional) — for additional bot protection on the contact form. Add Turnstile widget key to BookingForm and verify token server-side
- [ ] **Google Maps** — the map currently uses a free iframe embed. If you want custom styled maps or want to remove the Google branding, upgrade to Google Maps Embed API with an API key

---

## Content [IMPORTANT]

- [ ] **Blog articles** — 4 of the 6 blog articles have stub content only. Full articles needed for: `ppf-vs-ceramic-coating-which-is-right-for-you`, `paint-correction-before-ceramic-coating`, `best-car-detailer-bolton`, `winter-car-protection-greater-manchester`. Add content in `src/app/(site)/blog/[slug]/page.tsx` in the `FULL_CONTENT` object
- [ ] **Team bios** — replace `[PLACEHOLDER: Name]` and `[PLACEHOLDER: short bio]` in the About page
- [ ] **Certifications** — confirm exact wording of Ceramic Pro certification title, certificate number if applicable, and any other industry memberships/accreditations
- [ ] **Service area confirmation** — confirm whether all 7 service areas listed are accurate: Bolton, Farnworth, Manchester, Bury, Salford, Wigan, Chorley. Add or remove as needed in `src/lib/business.ts`
- [ ] **Privacy Policy page** — currently linked in the footer (`/privacy`) but the page doesn't exist. Create it before launch (required for GDPR compliance and form use)
- [ ] **Press/awards coverage** — if the business has been featured in local press, awards, or trade publications, add these to the About page for E-E-A-T signals

---

## SEO Checks Before Launch

- [ ] Verify `BUSINESS.url` matches the actual live domain in `src/lib/business.ts`
- [ ] Submit sitemap to Google Search Console: `[live-domain]/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile is claimed and the NAP (Name, Address, Phone) exactly matches what's on the website
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Test Core Web Vitals on PageSpeed Insights (mobile) — target LCP <2.5s, CLS <0.1
- [ ] Test on real mobile devices at 375px width
- [ ] Confirm all `[PLACEHOLDER]` strings have been replaced — run a project-wide search for `PLACEHOLDER` before going live

---

## Post-Launch

- [ ] Set up Google Search Console and monitor search performance
- [ ] Set up Google Business Profile posts with before/after photos monthly
- [ ] Gather real customer reviews and add to the website with permission
- [ ] Add real before/after gallery images as they accumulate
- [ ] Consider adding a WhatsApp Business API integration for the chat button

---

*Last updated: Initial site build. Keep this file updated as items are completed.*

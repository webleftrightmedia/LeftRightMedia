# Left Right Media — Complete Build Roadmap
### Task-wise, Antigravity-ready build plan for a production-grade DOOH platform website

---

## How to use this with Antigravity

Antigravity works best on **discrete, verifiable tasks** — not one giant prompt. Feed it one task at a time (or one phase at a time for simple scaffolding tasks), and use these autonomy levels:

| Task type | Recommended mode |
|---|---|
| Boilerplate, config, folder scaffolding, styling | Full autonomy — let it run and review the diff |
| Component logic, forms, API routes, DB schemas | Checkpoint mode — approve at key steps |
| Auth, payments, anything touching real user data | Manual approval on every step |

Each task below is written so you can paste it almost directly as a prompt. Acceptance criteria are included so you (or the agent) can self-verify before moving to the next task.

---

## PHASE 0 — Foundations & Environment Setup

**0.1 Repo & monorepo structure**
- Initialize a monorepo: `/client` (React+Vite), `/server` (Node+Express), `/docs`.
- Set up root `.gitignore`, `README.md`, `.editorconfig`, `.nvmrc`.
- ✅ Acceptance: `npm install` works from both `/client` and `/server` independently; repo pushed to GitHub with a clean initial commit.

**0.2 Vite + React + Tailwind init**
```bash
npm create vite@latest client -- --template react
cd client
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom axios react-hook-form zod @hookform/resolvers lucide-react
```
- ✅ Acceptance: `npm run dev` shows default Vite page with Tailwind classes rendering correctly (test with `bg-red-500`).

**0.3 Express + MongoDB init**
```bash
mkdir server && cd server
npm init -y
npm install express mongoose cors dotenv helmet express-rate-limit morgan zod
npm install -D nodemon
```
- Create `.env` with `PORT`, `MONGO_URI`, `CLIENT_ORIGIN`.
- ✅ Acceptance: `npm run dev` starts server, `/health` route returns `200 { status: "ok" }`.

**0.4 MongoDB Atlas setup**
- Create free-tier cluster, IP allowlist, DB user.
- Connect via Mongoose in `server/src/config/db.js`.
- ✅ Acceptance: Server logs "MongoDB connected" on boot.

**0.5 Environment separation**
- `.env.development`, `.env.production` for both client and server.
- ✅ Acceptance: Switching `NODE_ENV` changes API base URL and Mongo URI correctly.

---

## PHASE 1 — Design System Implementation

**1.1 `tailwind.config.js` — Industrial Minimalist tokens**
- `borderRadius: { none: '0px', DEFAULT: '0px' }` — force zero everywhere.
- Custom colors: `concrete` (zinc-50 family), `ink` (near-black), `accent` (Transit Yellow `#F2C300` or Cobalt `#0047AB` — pick ONE as primary, keep the other as secondary/hover state only).
- Custom font family: `Space Grotesk` / `Inter` via `@fontsource` or Google Fonts import.
- Custom letter-spacing scale for tracked-out utility text (`tracking-widest`, custom `tracking-[0.2em]`).
- Disable `boxShadow` defaults or override to `none`.
- ✅ Acceptance: A test div with `rounded-2xl shadow-lg` renders with **zero** radius and **zero** shadow (proves the override works globally, not just via manual `rounded-none` on every element).

**1.2 Global CSS reset**
- `index.css`: import font, set base `bg-concrete text-ink antialiased`, remove Tailwind's default focus-ring softness and replace with a hard 2px offset outline (still accessible, but "mechanical" not "glowy").
- ✅ Acceptance: Lighthouse accessibility score unaffected by the custom focus style.

**1.3 Design tokens doc**
- Create `/docs/design-tokens.md` documenting exact hex codes, spacing scale, typography scale, and the "hover = invert" button rule so any future dev (or agent) doesn't drift back to generic SaaS styling.
- ✅ Acceptance: Doc exists and matches actual Tailwind config values (no drift).

**1.4 Shared UI primitives**
- Build `<Button variant="solid|outline" />`, `<Badge />` (for "LIVE" status), `<SectionDivider />` (1px black border component), `<Container />` (max-width wrapper).
- Hover states must be instant (`transition-none` or `duration-75`), not soft fades.
- ✅ Acceptance: All primitives used consistently — no raw `<button>` tags scattered in later components.

---

## PHASE 2 — Landing Page Components

**2.1 `<Navbar />`**
- Sticky, 1px bottom border, left text logo, right bifurcated CTAs ("Explore Ad Inventory" solid, "Monetize Your Screen" outline).
- Mobile: hamburger → full-screen sharp-edged overlay menu (no slide-fade, instant toggle).
- ✅ Acceptance: Sticky on scroll, both CTAs link (even if placeholder anchors for now), fully keyboard-navigable.

**2.2 `<Hero />`**
- Asymmetrical 50/50 grid. Left: massive headline + subhead + dual CTA. Right: square-cornered image frame (Smart TV in a real café).
- Use a real (licensed/stock) image or a placeholder with correct aspect ratio + `object-cover`.
- ✅ Acceptance: Responsive — stacks vertically on mobile with image below text; no layout shift (set explicit image dimensions or aspect-ratio).

**2.3 `<SplitArchitectureDemo />`**
- CSS grid locked to 16:9, visually split into 80% Host Content / 20% Ad Zone, each labeled.
- Consider a subtle live "cycling" effect (setInterval swapping sample menu/ad content) to demonstrate the concept — optional but high value for two-sided marketplace explanation.
- ✅ Acceptance: Ratio holds at all breakpoints; the 80/20 split is visually exact, not approximate.

**2.4 `<ValueProps />` (new — needed, not in original list)**
- Two-column comparison: "For Hosts" vs "For Advertisers" — since this is a two-sided marketplace, the landing page needs to speak to both audiences with separate, scannable benefit blocks.
- ✅ Acceptance: Each side has 3 concrete benefits + one CTA matching that audience's flow.

**2.5 `<ActiveNodes />`**
- Responsive grid (1 col mobile → 3 col desktop) of venue cards.
- CSS-animated pulsing green dot (`@keyframes pulse` — Tailwind's built-in `animate-pulse` on a `bg-green-500` dot works, or a custom ring-expand animation for more "hardware monitoring" feel).
- Data should come from a static JSON/array now, structured so it can later be swapped for a live API call to `/api/screens`.
- ✅ Acceptance: Card data is in a separate `data/nodes.js` file, not hardcoded inline — proves it's ready for backend swap later.

**2.6 `<PricingSnapshot />` (new — needed)**
- Simple, blunt pricing block: "₹500 / 2-hour slot" for advertisers, "Free" for hosts. Matches the industrial/no-nonsense tone — avoid SaaS-style tiered pricing tables with gradients.
- ✅ Acceptance: Numbers are configurable via a constants file (`pricing.config.js`) — not magic strings — so pricing can change without touching JSX.

**2.7 `<LeadCaptureForm />` — dual mode (Host / Advertiser)**
- Toggle or tabs: "I want to host a screen" / "I want to advertise."
- Fields: name, business name, city (default Nadiad/Surat dropdown), phone, email, and a conditional field (screen count for hosts / ad budget range for advertisers).
- Validation via `react-hook-form` + `zod`.
- ✅ Acceptance: Client-side validation blocks bad submissions with clear inline errors (no browser default alerts); form disables submit button during POST to prevent double submission.

**2.8 `<Testimonials />` / `<TrustSignals />` (new — needed for "trustworthy" brand pillar)**
- Since pilot cities are named (Nadiad, Surat) and trust is a stated design goal, add a section with either early pilot venue logos/names, or a "Why local businesses trust us" trio of trust badges (e.g. "No hardware needed," "Cancel anytime," "Local support team").
- ✅ Acceptance: Section renders even with zero real testimonials yet (use trust badges as fallback, don't fabricate fake quotes/reviews).

**2.9 `<FAQ />` (new — needed)**
- Accordion, sharp corners, 1px borders between items, instant expand/collapse (no slow animation).
- Cover: "How does the 80/20 split work?", "What TVs are compatible?", "How do I get paid?", "How is ad content moderated?"
- ✅ Acceptance: Accessible accordion (proper `aria-expanded`, keyboard operable).

**2.10 `<Footer />`
- Multi-column: Product, Company, Legal (Privacy/Terms — even placeholder), Contact, social links.
- ✅ Acceptance: All links either work or point to real placeholder routes (no dead `#`).

---

## PHASE 3 — Frontend Application Logic

**3.1 Routing**
- `react-router-dom`: `/` (landing), `/privacy`, `/terms`, `/thank-you` (post-lead-submit confirmation page).
- ✅ Acceptance: Direct URL access to each route works (no 404 on refresh — confirm hosting config, see Phase 10).

**3.2 Form submission flow**
- On submit → POST to `/api/leads` → on success, redirect to `/thank-you`; on failure, show inline error banner (not a silent console fail).
- ✅ Acceptance: Network tab shows correct payload shape matching backend schema (Phase 5).

**3.3 Global state / context (if needed)**
- Likely unnecessary for a landing page — avoid Redux/heavy state libs. Use local component state + React Context only if the Host/Advertiser toggle needs to be shared across sections (e.g. CTA buttons in Navbar scroll-to and pre-select the right form tab).
- ✅ Acceptance: No unused state library installed "just in case."

**3.4 Analytics event hooks**
- Fire events (via a thin wrapper, GA4-ready) on: CTA clicks, form start, form submit success, form submit failure.
- ✅ Acceptance: Events visible in browser console in dev mode (stub logger before wiring real GA4 in Phase 11).

---

## PHASE 4 — Backend API (Node + Express)

**4.1 Project structure**
```
server/src/
  config/db.js
  models/
  routes/
  controllers/
  middleware/
  utils/
  server.js
```
- ✅ Acceptance: No business logic inside route files — routes call controllers only.

**4.2 `/api/leads` endpoints**
- `POST /api/leads` — create a lead (host or advertiser).
- `GET /api/leads` — admin-only, paginated, filterable by type/city (protect in Phase 4.4).
- Validate payload with `zod` server-side too (never trust client validation alone).
- ✅ Acceptance: Sending malformed data returns `400` with field-level error messages; valid data returns `201` with the created document.

**4.3 `/api/screens` endpoint (forward-looking, matches `<ActiveNodes />` data shape)**
- `GET /api/screens` — returns active node data, matching the shape currently hardcoded in `data/nodes.js`.
- ✅ Acceptance: Swapping the frontend to fetch this instead of the static file requires zero shape changes to `<ActiveNodes />`.

**4.4 Basic admin auth scaffold**
- Even at MVP stage, protect `GET /api/leads` with a simple bearer-token or session check (env-var admin key is fine for pilot phase, but structure it so it's swappable for real auth later).
- ✅ Acceptance: Unauthenticated request to admin routes returns `401`, not raw data.

**4.5 Security middleware**
- `helmet`, `cors` (locked to your actual client origin, not `*`), `express-rate-limit` on `/api/leads` (prevent spam submissions).
- ✅ Acceptance: Hitting `/api/leads` 20+ times rapidly from a script triggers a `429`.

**4.6 Error handling**
- Centralized error-handling middleware; consistent JSON error shape `{ success: false, message, errors? }`.
- ✅ Acceptance: Throwing an unexpected error anywhere doesn't leak a stack trace to the client in production mode.

**4.7 Logging**
- `morgan` for request logs (dev), structured JSON logging in production (even a simple wrapper is fine at this stage).
- ✅ Acceptance: Logs are readable and don't log full lead PII (phone/email) in plaintext to a shared log stream without reason.

---

## PHASE 5 — Database (MongoDB / Mongoose Schemas)

**5.1 `Lead` schema**
- Fields: `type` (host|advertiser), `name`, `businessName`, `city`, `phone`, `email`, `screenCount` or `budgetRange`, `status` (new|contacted|converted), `createdAt`.
- ✅ Acceptance: Schema-level validation rejects invalid `type` enum values.

**5.2 `Screen` schema** (forward-looking, for future host dashboard)
- Fields: `venueName`, `venueType`, `city`, `status` (live|offline|pending), `location` (lat/lng optional), `hostId` (ref, nullable for now).
- ✅ Acceptance: Seed script populates 6–9 sample screens matching the `<ActiveNodes />` UI cards.

**5.3 `Campaign` / `Playlist` schemas** (forward-looking, planned per your brief)
- `Campaign`: advertiser ref, screen(s) targeted, slot duration, start/end time, creative asset URL, status.
- `Playlist`: ordered list of campaign items assigned to a screen, with priority/rotation logic fields.
- ✅ Acceptance: Schemas exist and are documented even if no UI consumes them yet — this fulfills "flexible JSON schema" requirement from your original architecture notes without over-building the UI prematurely.

**5.4 Indexes**
- Index `Lead.email`, `Screen.city`, `Campaign.status` for query performance as data grows.
- ✅ Acceptance: `db.collection.getIndexes()` shows the expected indexes.

**5.5 Seed scripts**
- `server/scripts/seed.js` to populate sample screens/leads for demo purposes.
- ✅ Acceptance: Running seed script twice doesn't duplicate data (upsert or clear-then-insert pattern).

---

## PHASE 6 — Integration & Notifications

**6.1 Wire lead form → live API**
- Replace any mock submit handler with real `axios.post`.
- ✅ Acceptance: A real submission appears in MongoDB Atlas within seconds.

**6.2 Email/Slack notification on new lead**
- On successful lead creation, fire a notification (Nodemailer + a transactional email service like Resend/SendGrid, or a Slack webhook) so you don't have to manually poll the DB during the pilot phase.
- ✅ Acceptance: Test lead submission triggers a real notification within 30 seconds.

**6.3 `<ActiveNodes />` live data swap**
- Point the component at `/api/screens` instead of the static file.
- ✅ Acceptance: Adding a new screen via the seed script or a manual DB insert reflects on the live page after refresh.

---

## PHASE 7 — SEO & Performance

**7.1 Meta tags & Open Graph**
- Title, description, OG image (a clean screenshot of the Hero section works well), favicon, `robots.txt`, `sitemap.xml`.
- ✅ Acceptance: Sharing the URL in WhatsApp/LinkedIn shows a correct rich preview card.

**7.2 Image optimization**
- Serve WebP/AVIF where possible, explicit width/height to prevent CLS, lazy-load below-the-fold images.
- ✅ Acceptance: Lighthouse Performance ≥ 90 on mobile.

**7.3 Font loading strategy**
- `font-display: swap`, preload the primary weight used in the Hero headline.
- ✅ Acceptance: No FOIT (flash of invisible text) on slow 3G throttling test.

**7.4 Code splitting**
- Lazy-load below-the-fold sections (`FAQ`, `Testimonials`) with `React.lazy` + `Suspense` if bundle size warrants it.
- ✅ Acceptance: Initial JS bundle stays lean; check with `vite build --report` or `rollup-plugin-visualizer`.

**7.5 Local SEO**
- Since this targets Tier 2/3 Gujarat cities specifically, include city names (Nadiad, Surat) naturally in headings/meta — not stuffed, but present — and consider a simple `/nadiad` and `/surat` landing variant later (Phase 12).
- ✅ Acceptance: City names appear in at least one H1/H2 and the meta description.

---

## PHASE 8 — Accessibility & Cross-Device QA

**8.1 Accessibility audit**
- Color contrast check (black on `zinc-50` is fine; verify accent-color-on-accent-color combos like white text on Transit Yellow buttons — yellow often fails contrast with white text, may need black text on yellow buttons instead).
- ✅ Acceptance: Lighthouse Accessibility ≥ 95; no contrast failures on any button state.

**8.2 Keyboard & screen reader pass**
- Tab through the entire page; all interactive elements reachable and announced correctly.
- ✅ Acceptance: Form errors are announced via `aria-live`, not just visually shown.

**8.3 Responsive QA matrix**
- Test at 375px (mobile), 768px (tablet), 1024px, 1440px, 1920px.
- ✅ Acceptance: No horizontal scroll, no overlapping text, `<SplitArchitectureDemo />` ratio holds at every breakpoint.

**8.4 Cross-browser check**
- Chrome, Safari (iOS especially, since local business owners likely browse on mobile Safari/Chrome Android), Firefox.
- ✅ Acceptance: Sticky navbar and pulsing-dot animation both render correctly on Safari (known for animation quirks).

---

## PHASE 9 — Testing

**9.1 Frontend unit tests**
- Vitest + React Testing Library for `<LeadCaptureForm />` validation logic, `<Navbar />` mobile toggle, `<FAQ />` accordion behavior.
- ✅ Acceptance: `npm run test` passes with meaningful coverage on interactive components (not just snapshot tests of static markup).

**9.2 Backend unit/integration tests**
- Jest/Supertest for `/api/leads` (valid, invalid, rate-limited cases) and `/api/screens`.
- ✅ Acceptance: Tests run against a test MongoDB instance (in-memory via `mongodb-memory-server`), not your real Atlas DB.

**9.3 End-to-end test**
- Playwright: full user journey — land on page → fill lead form → submit → see thank-you page.
- ✅ Acceptance: E2E suite runs headless in CI (Phase 10) and fails the build if the core conversion flow breaks.

---

## PHASE 10 — Deployment & CI/CD

**10.1 Frontend hosting**
- Deploy `/client` to Vercel or Netlify. Configure SPA fallback (rewrite all routes to `index.html`) so direct URL access to `/thank-you` etc. doesn't 404.
- ✅ Acceptance: Production URL loads, all routes work on direct access and refresh.

**10.2 Backend hosting**
- Deploy `/server` to Render/Railway. Set production env vars (Mongo URI, CORS origin, admin key).
- ✅ Acceptance: Production API responds correctly from the deployed frontend (no CORS errors in console).

**10.3 Custom domain + SSL**
- Point your domain to the frontend host, configure DNS, verify HTTPS.
- ✅ Acceptance: `https://leftrightmedia.com` (or your actual domain) resolves with a valid cert, no mixed-content warnings.

**10.4 CI/CD pipeline**
- GitHub Actions: on push to `main` → run lint + tests → deploy on pass.
- ✅ Acceptance: A deliberately broken test blocks deployment; a passing build deploys automatically.

**10.5 Environment secrets**
- All secrets in host platform's env var manager — none committed to git, ever (double-check `.env` is gitignored from commit #1).
- ✅ Acceptance: `git log -p | grep MONGO_URI` returns nothing.

---

## PHASE 11 — Analytics & Post-Launch Ops

**11.1 GA4 / privacy-friendly analytics**
- Wire the event hooks from Phase 3.4 into real GA4 (or a privacy-first alternative like Plausible, given India's data-sensitivity climate).
- ✅ Acceptance: Real-time GA dashboard shows a test session when you browse the live site.

**11.2 Session recording (optional but useful for a new conversion-focused page)**
- Microsoft Clarity (free) to watch how first users actually interact with the dual-CTA structure.
- ✅ Acceptance: Recordings appear in Clarity dashboard within an hour of enabling.

**11.3 Simple internal admin view**
- A minimal, password-gated `/admin` page (or just query the DB directly via Compass/Atlas UI at this stage) to review incoming leads without needing a full dashboard yet.
- ✅ Acceptance: You can see and mark leads as "contacted" without opening a DB shell.

**11.4 Uptime monitoring**
- UptimeRobot or similar, pinging both frontend and `/health` on the backend.
- ✅ Acceptance: You get an alert within 5 minutes if the backend goes down.

---

## PHASE 12 — What Comes After the Landing Page (Roadmap, Not Immediate Build)

These are **not** part of the current landing-page sprint, but worth sequencing now so nothing architectural blocks them later:

1. **Host Portal** — venue owners log in, see their screen's live status, upload menu content, view earnings.
2. **Advertiser Self-Serve Booking** — pick a screen/city, pick a 2-hour slot, upload creative, pay (Razorpay/PayU integration for the Indian market), campaign goes live.
3. **Screen Player App** — the actual software running on the Smart TV (likely a simple web app in kiosk/fullscreen browser mode reading from the `Playlist` schema you already stubbed in Phase 5.3).
4. **Content moderation queue** — since local ads are user-submitted, you'll need at least manual approval before anything airs publicly.
5. **City-specific landing pages** — `/nadiad`, `/surat`, and future cities, reusing all Phase 2 components with swapped copy/data.

---

## Quick-Reference Checklist Summary

- [ ] Phase 0 — Environment & repo
- [ ] Phase 1 — Design system / Tailwind
- [ ] Phase 2 — All 10 landing page components
- [ ] Phase 3 — Frontend logic & routing
- [ ] Phase 4 — Express API
- [ ] Phase 5 — MongoDB schemas
- [ ] Phase 6 — Integration & notifications
- [ ] Phase 7 — SEO & performance
- [ ] Phase 8 — Accessibility & QA
- [ ] Phase 9 — Testing
- [ ] Phase 10 — Deployment & CI/CD
- [ ] Phase 11 — Analytics & ops
- [ ] Phase 12 — Post-launch roadmap (reference only)


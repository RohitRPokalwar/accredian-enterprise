# Accredian Enterprise — Landing Page Clone

A pixel-faithful, fully responsive clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo

🔗 **[https://accredian-enterprise-peach.vercel.app/](https://accredian-enterprise-peach.vercel.app/)**

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Runtime | React 19 |
| API | Next.js Route Handlers |
| Deployment | Vercel |

---

## ✅ Features Implemented

### Landing Page Sections
- **Navbar** — Sticky top navigation with smooth scroll links and a prominent _Enquire Now_ CTA button
- **Hero Section** — Full-width headline, sub-copy, and dual CTAs with a background gradient
- **Stats Section** — Animated counters showcasing key impact numbers (learners, companies, etc.)
- **Clients Section** — Auto-scrolling marquee of trusted enterprise client logos
- **Accredian Edge Section** — USP cards highlighting what differentiates Accredian
- **Domain Expertise Section** — Card grid covering all supported learning domains
- **Course Segmentation Section** — Tabbed course categories with card details
- **CAT Section** — Custom Assessment & Training highlight block with gradient background
- **How It Works Section** — Step-by-step process cards
- **FAQs Section** — Accordion-style frequently asked questions
- **Testimonials Section** — Horizontally scrollable testimonial cards
- **Contact Banner** — Full-width CTA banner driving users to enquire
- **Footer** — Multi-column footer with links, social icons, and copyright

### Lead Capture Form (Bonus ✅)
- **Enquire Now modal** — Triggered from Navbar, Hero, FAQs, Contact Banner, and Footer
- Fields: Name, Email, Phone (with country dial-code selector), Company, Domain, No. of Candidates, Mode of Delivery, Location
- **Country phone selector** (`CountryPhoneSelect`) — searchable dropdown with 200+ country dial codes and ISO flags
- Form submission calls the `/api/enquire` Next.js API route

### API Integration (Bonus ✅)
- `POST /api/enquire` — validates required fields, persists submission to `enquiries.json` on disk with a timestamp
- `GET /api/enquire` — returns all stored enquiries with a count (useful for admin dashboards)
- Handles error states gracefully; the UI shows a success screen on completion

### Responsiveness
- Mobile-first breakpoints throughout
- Navbar collapses gracefully on small screens
- All grids and flex layouts reflow for tablet and mobile
- Modal is full-screen on mobile, split-panel on desktop

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── src/
│   └── app/
│       ├── page.tsx                  # Root page — assembles all sections + Enquire modal
│       ├── layout.tsx                # Global layout, metadata, font loading
│       ├── globals.css               # Global Tailwind & custom CSS utilities
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── HeroSection.tsx
│       │   ├── StatsSection.tsx
│       │   ├── ClientsSection.tsx
│       │   ├── AccredianEdgeSection.tsx
│       │   ├── DomainExpertiseSection.tsx
│       │   ├── CourseSegmentationSection.tsx
│       │   ├── CATSection.tsx
│       │   ├── HowItWorksSection.tsx
│       │   ├── FAQsSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   ├── ContactBanner.tsx
│       │   ├── Footer.tsx
│       │   └── CountryPhoneSelect.tsx
│       ├── api/
│       │   └── enquire/
│       │       └── route.ts          # POST + GET API route for lead capture
│       └── data/
│           └── countries.ts          # Country dial-code dataset
├── public/
│   └── images/                       # Static assets (logos, hero image, etc.)
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js ≥ 18.x
- npm ≥ 9.x (or pnpm / yarn)

### 1 — Clone the repository

```bash
git clone https://github.com/<your-username>/accredian-enterprise.git
cd accredian-enterprise
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4 — Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deployment on Vercel

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Vercel auto-detects Next.js — no additional configuration needed.
4. Click **Deploy**.

> **Note:** The `/api/enquire` route writes to `enquiries.json` on the local filesystem. On Vercel's serverless environment, the filesystem is ephemeral. For persistent storage in production, replace the `fs.writeFile` call in `src/app/api/enquire/route.ts` with a database write (e.g., Supabase, PlanetScale, or MongoDB Atlas).

---

## 🤖 AI Usage Explanation

AI tools (specifically **Antigravity** by Google DeepMind) were used throughout this project as an intelligent coding partner.

### Where AI Assisted

| Area | How AI Helped |
|---|---|
| **Component scaffolding** | Generated initial JSX structure for repetitive sections (Stats, Clients, How It Works, FAQs) based on visual reference |
| **CountryPhoneSelect** | AI drafted the searchable dropdown with dial-code filtering logic |
| **API Route** | AI generated the `POST /api/enquire` handler skeleton with validation and JSON persistence |
| **Responsive layout** | AI suggested Tailwind breakpoint patterns for the modal split-panel and grid reflows |
| **Enquire modal** | AI scaffolded the full modal markup, overlay click-to-close, and success state |
| **CSS utilities** | AI proposed custom utility classes in `globals.css` (e.g., `btn-primary`, `page-section`, `section-container`) |

### What I Reviewed, Modified & Improved Manually

- **Visual fidelity** — Compared each section side-by-side with the live site and adjusted spacing, typography sizes, colors, and border styles until they matched closely
- **CountryPhoneSelect UX** — Added keyboard-navigation hints and improved the flag/dial-code rendering beyond the AI draft
- **Enquiry form fields** — Extended the AI-generated form with additional fields (Domain, No. of Candidates, Mode of Delivery, Location) to match the real Accredian form
- **Clients marquee animation** — Replaced a static grid with a CSS `@keyframes` continuous scroll animation
- **API validation logic** — Strengthened field validation and added a `submittedAt` timestamp to persisted records
- **Section ordering & IDs** — Manually structured anchor IDs (`#home`, `#stats`, `#clients`, etc.) for smooth-scroll navigation from the Navbar
- **Code clean-up** — Removed AI-generated redundancies, added TypeScript types throughout, and ensured ESLint compliance

---

## 🔮 Improvements With More Time

1. **Database integration** — Replace the JSON file store with a proper DB (e.g., Supabase + Postgres) so enquiries survive serverless restarts on Vercel
2. **Email notification** — Send an auto-acknowledgement email to the user and an internal alert to the sales team (via Resend or SendGrid) on every enquiry submission
3. **Admin dashboard** — A protected `/admin` page to view, filter, and export all captured leads
4. **Animations** — Add scroll-triggered entrance animations (Framer Motion or CSS Intersection Observer) for each section
5. **SEO & OG tags** — Add Open Graph images, Twitter card meta, and a `sitemap.xml` for better discoverability
6. **Unit & integration tests** — Jest + React Testing Library for component tests; Playwright for end-to-end form submission flow
7. **Internationalisation** — Multi-language support given Accredian's global learner base
8. **Performance** — Lazy-load off-screen sections with `React.lazy` + `Suspense`, optimise images using `next/image` with CDN URLs
9. **Dark mode** — Respect `prefers-color-scheme` and add a manual toggle

---

## 📄 License

This project was built as a take-home assignment. All brand assets, logos, and copy belong to Accredian.

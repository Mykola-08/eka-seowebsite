# EKA SEO Website - AI Coding Instructions

## Project Overview
This is a full-stack application built with **Next.js** (Frontend) and **Cloudflare Workers** (Backend).
- **Frontend:** `src/app` (Next.js App Router), `src/components`, `src/contexts`, `src/hooks`, `src/lib`.
- **Backend:** `src/worker` (Hono, Cloudflare D1, R2, Vercel Blob)
- **Shared:** `src/shared` (Types, Zod schemas, constants)
- **Database:** Cloudflare D1 (SQLite) for data.
- **Deployment:** Vercel.
- **Design System:** `design.md/design-system.md` — single source of truth for all design guidelines.
- **UI Components:** shadcn/ui pattern (`src/components/ui/`) with CVA + Radix. Config in `components.json`.

## Architecture & Patterns

### 1. Frontend (Next.js)
- **Entry Point:** `src/app/layout.tsx`
- **Routing:** Next.js App Router. Routes defined in `src/app`.
- **Styling:** Tailwind CSS with CSS variables. Use utility classes. `cn()` helper from `src/lib/utils.ts`.
- **Animations:** Framer Motion (`framer-motion`). See `design.md/design-system.md` for guidelines.
- **Icons:** HugeIcons (`@hugeicons/react` + `@hugeicons/core-free-icons`). Usage: `import { HugeiconsIcon } from '@hugeicons/react'; import { StarIcon } from '@hugeicons/core-free-icons'; <HugeiconsIcon icon={StarIcon} size={24} />`.
- **State Management:** React Context (`LanguageContext`, `DiscountContext`, `BookingProvider`).
- **Internationalization (i18n):**
  - Managed via `LanguageContext` in `src/contexts/LanguageContext.tsx`.
  - Translation extensions in `src/contexts/` (e.g., `AgenyzTranslations.ts`, `BentoTranslations.ts`, `Revision360Translations.ts`, `TechniqueTranslations.ts`).
  - **CRITICAL:** All UI text must be translatable. Add keys for **Catalan (ca), English (en), Spanish (es), and Russian (ru)**.
  - Usage: `const { t } = useLanguage(); ... {t('key.name')}`.
- **Components:** All components in `src/components`. UI primitives (Button, Card, Input, Textarea) in `src/components/ui/`.

### 2. Backend (Cloudflare Workers + Hono)
- **Framework:** Hono (`hono`).
- **Entry Point:** `src/worker/index.ts`.
- **Database:** Cloudflare D1 (SQLite). Accessed via `env.DB`.
- **Storage:** 
  - Cloudflare R2 (`env.R2_BUCKET`).
  - Vercel Blob (`env.BLOB_READ_WRITE_TOKEN`).
- **Validation:** Use `zod` and `@hono/zod-validator`.
- **AI Integration:** OpenAI and Perplexity APIs are configured in bindings.

### 3. Shared Code
- **Location:** `src/shared/types.ts`, `src/shared/constants.ts`.
- **Pattern:** Define Zod schemas here and export inferred types.
- **Usage:** Import these types in both frontend and `src/worker` to ensure type safety across the network boundary.

### 4. Utilities
- **`cn()` helper:** `src/lib/utils.ts` — uses `clsx` + `tailwind-merge`. **Only** import from `@/lib/utils`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Runs Next.js).
- **Build:** `npm run build` (Runs `next build`).
- **Lint:** `npm run lint`.
- **Add UI Component:** `npx shadcn add <component>` (configured in `components.json`).
- **Database Migrations:** SQL files are in `migrations/`. Use Wrangler to apply them (e.g., `npx wrangler d1 migrations apply`).

## Coding Conventions
- **Imports:** Use the `@` alias to refer to the `src` directory (e.g., `import { ... } from "@/shared/types"`).
- **Types:** Prefer strict TypeScript types. Avoid `any`.
- **Component Structure:** Keep components small and focused.
- **Styling:** Use `cn()` from `@/lib/utils` for conditional class merging. Use CVA for component variants.

## Key Files
- `components.json`: shadcn/ui configuration.
- `wrangler.json`: Cloudflare Worker configuration (D1, R2 bindings).
- `next.config.mjs`: Next.js configuration.
- `src/contexts/LanguageContext.tsx`: Core i18n logic and translations.
- `src/worker/index.ts`: Backend API routes.
- `src/app/layout.tsx`: Main application layout.
- `design.md/design-system.md`: Unified design guidelines.

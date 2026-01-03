# EKA SEO Website - AI Coding Instructions

## Project Overview
This is a full-stack application built with **React 18** (Frontend) and **Cloudflare Workers** (Backend), managed by **Vite**.
- **Frontend:** `src/react-app` (React, Tailwind, Framer Motion)
- **Backend:** `src/worker` (Hono, Cloudflare D1, R2, Vercel Blob)
- **Shared:** `src/shared` (Types, Zod schemas)
- **Database:** Cloudflare D1 (SQLite) for data, Supabase for Authentication.
- **Deployment:** Vercel.

## Architecture & Patterns

### 1. Frontend (React + Vite)
- **Entry Point:** `src/react-app/main.tsx`
- **Routing:** `react-router` (v7). Routes defined in `src/react-app/App.tsx`.
- **Styling:** Tailwind CSS. Use utility classes.
- **Animations:** Framer Motion (`framer-motion`).
- **Icons:** Lucide React (`lucide-react`) and Phosphor React (`phosphor-react`).
- **State Management:** React Context (`LanguageContext`, `SupabaseAuthContext`, `BookingProvider`).
- **Internationalization (i18n):**
  - Managed via `LanguageContext` in `src/react-app/contexts/LanguageContext.tsx`.
  - **CRITICAL:** All UI text must be translatable. Add keys to the `translations` object in `LanguageContext.tsx` for **Catalan (ca), English (en), Spanish (es), and Russian (ru)**.
  - Usage: `const { t } = useLanguage(); ... {t('key.name')}`.

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
- **Location:** `src/shared/types.ts`.
- **Pattern:** Define Zod schemas here and export inferred types.
- **Usage:** Import these types in both `src/react-app` and `src/worker` to ensure type safety across the network boundary.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Runs Vite).
- **Build:** `npm run build` (Runs `vercel build --prod`).
- **Lint:** `npm run lint`.
- **Database Migrations:** SQL files are in `migrations/`. Use Wrangler to apply them (e.g., `npx wrangler d1 migrations apply`).

## Coding Conventions
- **Imports:** Use the `@` alias to refer to the `src` directory (e.g., `import { ... } from "@/shared/types"`).
- **Types:** Prefer strict TypeScript types. Avoid `any`.
- **Component Structure:** Keep components small and focused. Extract reusable parts to `src/react-app/components`.
- **Auth:** Use `useSupabaseAuth` hook for accessing user session and auth state.

## Key Files
- `wrangler.json`: Cloudflare Worker configuration (D1, R2 bindings).
- `vite.config.ts`: Vite configuration (plugins, aliases).
- `src/react-app/contexts/LanguageContext.tsx`: Core i18n logic and translations.
- `src/worker/index.ts`: Backend API routes.
- `src/react-app/App.tsx`: Main application routing and providers.

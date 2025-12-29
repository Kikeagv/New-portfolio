# AI Agent Development Guidelines

This document outlines best practices and conventions for AI agents working with this Next.js + tRPC + TypeScript + Tailwind + Bun portfolio website.

## Project Overview

This is a modern portfolio website for a UX/UI designer featuring:
- **Dual-mode interface**: Toggle between human-readable portfolio and AI-optimized markdown format
- **Real-time integrations**: Weather widget (Open-Meteo API) and Spotify integration
- **Interactive components**: Research tools, parallax effects, animated transitions
- **Type-safe API**: End-to-end type safety with tRPC
- **Performance optimized**: Next.js 15 with App Router, server/client components

## Tech Stack

- **Runtime**: Bun (package manager - **ALWAYS use `bun` commands**)
- **Framework**: Next.js 15 with App Router
- **API Layer**: tRPC v11 for type-safe client-server communication
- **Language**: TypeScript with strict configuration and `noUncheckedIndexedAccess`
- **Styling**: Tailwind CSS v4 with `@import` syntax and `@theme` directive
- **State Management**: TanStack Query (React Query) v5 with SuperJSON serialization
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React for consistent iconography
- **Validation**: Zod schemas for runtime validation
- **Environment**: @t3-oss/env-nextjs for type-safe environment variables
- **Linting**: ESLint 9 with Flat Config and TypeScript ESLint
- **Formatting**: Prettier with Tailwind CSS plugin

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── _components/         # Page-specific components
│   │   ├── Hero.tsx         # Landing section with version toggle
│   │   ├── HeroWrapper.tsx  # Container for Hero component
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── About.tsx        # Personal introduction
│   │   ├── Experience.tsx   # Professional timeline
│   │   ├── Contact.tsx      # Contact information
│   │   ├── WeatherBox.tsx   # Real-time weather widget
│   │   ├── SpotifyBox.tsx   # Spotify integration (mock)
│   │   ├── AIVersion.tsx    # AI-optimized markdown view
│   │   ├── post.tsx         # Post component example
│   │   ├── figma/           # Figma-related components
│   │   └── research/        # Research tools (affinity mapping, etc.)
│   ├── api/trpc/           # tRPC Next.js API route
│   ├── layout.tsx          # Root layout with TRPCReactProvider
│   ├── page.tsx            # Home page with version toggle logic
│   └── projects/           # Individual project pages
│       ├── page.tsx
│       └── ruta-sv/        # Project-specific subpages
├── server/                 # Server-side code
│   └── api/
│       ├── trpc.ts         # tRPC server configuration
│       ├── root.ts         # Root router (MUST add new routers here)
│       └── routers/        # API route handlers
│           ├── post.ts     # Example router
│           └── weather.ts  # Open-Meteo weather integration
├── trpc/                   # tRPC client setup
│   ├── server.ts           # Server-side tRPC caller (server-only)
│   ├── react.tsx           # Client-side tRPC React integration
│   └── query-client.ts     # React Query configuration
├── styles/                 # Global styles
│   └── globals.css         # Tailwind @import and @theme
└── env.js                  # Environment variable validation

Root configuration files:
├── next.config.js          # Next.js config (imports env.js)
├── tsconfig.json           # TypeScript config with ~/* paths
├── eslint.config.js        # ESLint Flat Config
├── prettier.config.js      # Prettier with Tailwind plugin
├── postcss.config.js       # PostCSS with @tailwindcss/postcss
└── package.json            # Dependencies and scripts
```

## Development Workflow

### Package Management
- **CRITICAL**: Always use Bun for all package operations:
  ```bash
  bun add <package>                  # Add dependency
  bun add -D <dev-package>           # Add dev dependency
  bun run <script>                   # Run npm script
  bun dev                            # Start dev server
  bun build                          # Build for production
  bun install                        # Install dependencies
  ```

### Development Commands
```bash
# Development server (with Turbo for faster builds)
bun dev                    # Start development server

# Building
bun build                  # Build for production
bun start                  # Start production server
bun preview                # Build and start production server

# Code quality ( ALWAYS run these before committing)
bun run check              # Run linting and type checking (recommended)
bun run typecheck          # Run TypeScript type checking only
bun run lint               # Run ESLint only
bun run lint:fix           # Fix linting issues automatically

# Formatting
bun run format:check       # Check code formatting with Prettier
bun run format:write       # Auto-format code with Prettier
```

### Development Environment Notes
- **Dev Server Speed**: Uses `--turbo` flag (Turbopack) significantly faster hot reload
- **Port**: Default is 3000 (configure with PORT env var)
- **Hot Reload**: Automatic for both code and Tailwind classes
- **Type Checking**: Runs independently - doesn't block dev server

## Configuration Files

### TypeScript (tsconfig.json)
- **Path Alias**: Use `~/` prefix for all src imports (e.g., `~/server/api/trpc`)
- **Strict Mode**: Enabled with `noUncheckedIndexedAccess` for safer array access
- **Target**: ES2022 with Next.js plugin
- **Module System**: ESNext with Bundler resolution

**Example imports**:
```typescript
// ✅ Correct - use ~/ alias
import { api } from "~/trpc/react";
import { createTRPCRouter } from "~/server/api/trpc";

// ❌ Wrong - don't use relative imports
import { api } from "../../trpc/react";
```

### Tailwind CSS v4 (src/styles/globals.css)
- **New Syntax**: Uses `@import "tailwindcss"` instead of directives
- **Theme Definition**: Custom font defined via `@theme` directive
- **Integration**: PostCSS plugin handles all processing

```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

### Environment Variables (src/env.js)
- **Validation**: Uses @t3-oss/env-nextjs for runtime type safety
- **Empty Strings**: `emptyStringAsUndefined: true` - treats `""` as undefined
- **Skip Validation**: Use `SKIP_ENV_VALIDATION=1` for Docker builds
- **Next.js Import**: `next.config.js` imports env.js for validation

**Current minimal setup**:
```javascript
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
```

### Next.js (next.config.js)
- **Image Optimization**: Configured for Unsplash images (https://images.unsplash.com)
- **Env Validation**: Imports env.js to validate at build time

## Best Practices

### 1. TypeScript Patterns

**Type Imports**: Prefer inline type imports for better tree-shaking and clarity
```typescript
// ✅ Recommended
import { useState } from "react";
import type { MouseEventHandler } from "react";

// ❌ Avoid
import { useState, type MouseEventHandler } from "react";
```

**Path Aliases**: Always use `~/` for internal imports
```typescript
// ✅ Correct
import { api } from "~/trpc/react";
import { type AppRouter } from "~/server/api/root";

// ❌ Wrong
import { api } from "../trpc/react";
```

**Strict Mode Compliance**: Handle potentially undefined values
```typescript
// With noUncheckedIndexedAccess, arrays can return undefined
const myArray: string[] = ["a", "b"];
const item = myArray[5]; // Type is string | undefined
```

### 2. tRPC Development

**Server Setup** (src/server/api/trpc.ts):
- **Context**: `createTRPCContext` provides request context (headers)
- **Transformer**: SuperJSON for full JavaScript serialization
- **Error Formatting**: Zod errors formatted for frontend access
- **Timing Middleware**: Development-only artificial delay (100-500ms) + logs
- **Procedures**: `publicProcedure` includes timing middleware automatically

**Creating New Routers**:
```typescript
// 1. Create router in src/server/api/routers/weather.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const weatherRouter = createTRPCRouter({
  getCurrent: publicProcedure
    .query(async () => {
      // Your logic here
      return { data: "result" };
    }),
});

// 2. MUST add to root router in src/server/api/root.ts
import { weatherRouter } from "~/server/api/routers/weather";

export const appRouter = createTRPCRouter({
  post: postRouter,
  weather: weatherRouter, // ← CRITICAL: Add this line
});
```

**Procedure Types in Components**:
```typescript
// Server Components (src/trpc/server.ts)
import { api, HydrateClient } from "~/trpc/server";

export default function ServerComponent() {
  const data = await api.weather.getCurrent();
  return <HydrateClient><ClientComponent /></HydrateClient>;
}

// Client Components ("use client")
"use client";
import { api } from "~/trpc/react";

export function ClientComponent() {
  const { data, isLoading, error } = api.weather.getCurrent.useQuery(undefined, {
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.condition}</div>;
}
```

**Input Validation**: Always use Zod schemas
```typescript
export const exampleRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({
      name: z.string().min(2).max(50),
      email: z.string().email(),
    }))
    .mutation(async ({ input }) => {
      // input is fully typed and validated
      return { id: 1, ...input };
    }),
});
```

### 3. Component Patterns

**Server vs Client Components**:
```typescript
// Server Component (default) - no "use client" directive
// Use for: data fetching, simple rendering, no interactivity
export function ServerComponent() {
  const data = await fetchData(); // Can use async/await
  return <div>{data}</div>;
}

// Client Component - requires "use client" directive
"use client";
import { useState } from "react";

export function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Component Organization**:
- Keep components in `src/app/_components/` when page-specific
- Use meaningful names that describe their purpose
- Add interfaces for complex props

**Animation with Framer Motion**:
```typescript
"use client";
import { motion } from "framer-motion";

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Content
    </motion.div>
  );
}
```

**Icons with Lucide React**:
```typescript
import { Sun, Cloud, CloudRain, Wind } from "lucide-react";

export function WeatherIcon({ type }: { type: "sun" | "cloud" | "rain" }) {
  const icons = {
    sun: Sun,
    cloud: Cloud,
    rain: CloudRain,
  };
  const Icon = icons[type];
  return <Icon className="h-6 w-6" />;
}
```

### 4. External API Integration

Follow the Weather API pattern (src/server/api/routers/weather.ts):
- **Timeouts**: Use `AbortController` with reasonable timeout (5s suggested)
- **User-Agent**: Set meaningful User-Agent header
- **Validation**: Parse and validate external API responses with Zod
- **Error Handling**: Return fallback data on error, don't crash
- **Logging**: Log errors for debugging

```typescript
export const externalApiRouter = createTRPCRouter({
  getData: publicProcedure
    .query(async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch("https://api.example.com/data", {
          signal: controller.signal,
          headers: { 'User-Agent': 'Your-App/1.0' },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API failed: ${response.status}`);
        }

        const rawData = await response.json();
        const validatedData = DataSchema.parse(rawData); // Zod validation

        return transformData(validatedData);
      } catch (error) {
        console.error("External API error:", error);
        return getFallbackData(); // Graceful degradation
      }
    }),
});
```

### 5. Styling with Tailwind CSS v4

**Utilities**: Use utility classes over custom CSS
```typescript
// ✅ Recommended
<div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-lg">
  Content
</div>

// ❌ Avoid - use utility classes instead
<div className="custom-card">
  Content
</div>
```

**Responsive Design**: Mobile-first approach
```typescript
<div className="w-full md:w-1/2 lg:w-1/3">
  Mobile full width, tablet half, desktop third
</div>
```

**Conditional Classes**: Use template literals
```typescript
const isActive = true;
<div className={`base-class ${isActive ? 'active-class' : 'inactive-class'}`}>
  {isActive ? 'Active' : 'Inactive'}
</div>
```

### 6. React Query Configuration

**Query Client** (src/trpc/query-client.ts):
- **SuperJSON**: Serializes/deserializes data (Date, Map, Set, etc.)
- **staleTime**: Default 30 seconds to avoid immediate refetch
- **Hydration**: Includes pending queries in server data

**Custom Query Options**:
```typescript
const { data } = api.example.getData.useQuery(undefined, {
  staleTime: 10 * 60 * 1000,      // Cache for 10 minutes
  gcTime: 15 * 60 * 1000,         // Keep in cache for 15 minutes
  refetchOnWindowFocus: false,    // Don't refetch on tab switch
  retry: 3,                       // Retry failed requests 3 times
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
});
```

### 7. Image Handling

**Optimized Images**: Use Next.js Image for all images
```typescript
import Image from "next/image";

// Internal images (in public/)
<Image src="/logo.png" alt="Logo" width={100} height={100} />

// External images (require domain in next.config.js)
<Image
  src="https://images.unsplash.com/photo-..."
  alt="Description"
  fill
  unoptimized // Uses `unoptimized` for dynamic Unsplash URLs
  className="object-cover"
/>
```

**Current Configuration**: Unsplash domains already whitelisted in next.config.js

### 8. Dual-Mode Pattern

**Version Toggle**: Implemented in src/app/page.tsx
```typescript
const [selectedVersion, setSelectedVersion] = useState<"human" | "ai">("human");

const handleVersionChange = (version: "human" | "ai") => {
  setSelectedVersion(version);
  if (version === "ai") {
    // Auto-scroll to AI version component
    document.getElementById("ai-version")?.scrollIntoView({ behavior: "smooth" });
  }
};

// Conditional rendering
{selectedVersion === "human" ? (
  <HumanContent />
) : (
  <AIVersion />
)}
```

**AIVersion Component**: Contains markdown content optimized for AI parsing

## File Naming Conventions

- **Components**: PascalCase (`WeatherBox.tsx`, `HeroWrapper.tsx`)
- **Routers**: camelCase (`weather.ts`, `post.ts`)
- **Hooks**: camelCase starting with `use` if exported (`useWeather.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types/Interfaces**: PascalCase in separate files or inline (`WeatherData.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

## Import Organization

**Standard order** (ESLint enforces this with warnings):
1. React and Next.js imports
2. Third-party library imports
3. Internal `~/` imports
4. Relative imports (rare - prefer ~/ aliases)
5. Type imports (using `import type` syntax)

```typescript
import { useState, useEffect } from "react"; // React
import Image from "next/image"; // Next.js
import { motion } from "framer-motion"; // Third-party
import { api } from "~/trpc/react"; // Internal
import type { WeatherData } from "~/types/weather"; // Type import
```

## ESLint Configuration

**Flat Config** (eslint.config.js):
- Uses `typescript-eslint` Flat Config format
- Extends Next.js core web vitals
- Enabled rules:
  - `@typescript-eslint/consistent-type-imports`: Prefers inline type imports
  - `@typescript-eslint/no-unused-vars`: Warns on unused args with `^_` prefix pattern
  - `@typescript-eslint/require-await`: Off (allows async for future expansion)
  - `@typescript-eslint/no-misused-promises`: Error on void-return promises (disabled for attributes)

**Common lint fixes**:
```bash
bun run lint:fix  # Auto-fixes imports, unused vars, formatting
```

## Common Patterns

### Adding a New API Integration

1. **Create schema** (if validating external response):
```typescript
const ExternalDataSchema = z.object({
  id: z.number(),
  name: z.string(),
});
```

2. **Create procedure**:
```typescript
export const apiRouter = createTRPCRouter({
  fetchExternal: publicProcedure
    .query(async () => {
      // Fetch, validate, transform, return
    }),
});
```

3. **Add to root router** (CRITICAL - don't forget this step):
```typescript
export const appRouter = createTRPCRouter({
  weather: weatherRouter,
  api: apiRouter, // ← Add this
});
```

4. **Use in component**:
```typescript
const { data, isLoading } = api.api.fetchExternal.useQuery();
```

### Creating a Client Component with State

```typescript
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

export function InteractiveComponent({ title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>{title}</h3>
      {isOpen && <div>Expanded content</div>}
    </motion.div>
  );
}
```

### Adding Environment Variable

1. **Add to .env.example**:
```
OPENAI_API_KEY=your_key_here
```

2. **Update src/env.js**:
```javascript
server: {
  OPENAI_API_KEY: z.string().min(1),
},
runtimeEnv: {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
},
```

3. **Use in procedure**:
```typescript
const apiKey = env.OPENAI_API_KEY;
```

### Creating a New Page

1. **Create file in src/app/**:
```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return <div>About page content</div>;
}
```

2. **For project pages**, use src/app/projects/[slug]/page.tsx pattern

## Development Tips

### Debugging
- **tRPC Logs**: Development mode logs all tRPC procedure execution time to console
- **Next.js Dev Overlay**: Shows errors and warnings in browser
- **Type Errors**: Address TypeScript errors before running - they catch bugs
- **React DevTools**: Use browser extension for component inspection

### Performance
- **Server Components**: Default to server components, only use client when needed
- **Image Optimization**: Always use Next.js Image component
- **Query Caching**: Set appropriate staleTime for API calls
- **Code Splitting**: Next.js automatically splits by route and component
- **Bundle Size**: Monitor with `bun run build` output

### Common Gotchas

1. **Forgetting to add router to root.ts**: Creating a router but not adding it to `appRouter` in src/server/api/root.ts will make it inaccessible

2. **Mixing server/client components**: Can't pass server data directly to client component without serialization

3. **Relative imports**: Always use `~/` alias instead of relative paths for internal imports

4. **Using Bun commands**: Using `npm` or `yarn` instead of `bun` can cause inconsistencies

5. **External images**: Must configure next.config.js for external image domains or use `unoptimized`

6. **Async components**: Server components can be async, but must return a React element (not just data)

7. **Environment variables**: Client-side env vars must have `NEXT_PUBLIC_` prefix and are exposed to browser

8. **Framer Motion**: Must use "use client" directive for components using Framer Motion

9. **Type imports**: ESLint prefers inline type imports, but may need to import for type inference in some cases

10. **Empty env vars**: Using `emptyStringAsUndefined: true` means `VAR=""` is treated as undefined

## Git Workflow

### Pre-commit Workflow
```bash
bun run check           # Type check and lint
bun run format:write    # Format code
git add .               # Stage changes
git commit -m "message" # Commit
```

### Branching Pattern
- Use feature branches: `feature/weather-widget`
- Keep main branch clean
- Small, focused commits

## Deployment Considerations

### Environment Variables
- Add all production env vars to platform (Vercel, etc.)
- Don't commit `.env` file (already in .gitignore)
- Keep `.env.example` updated (without secrets)

### Build Process
```bash
# Full build workflow
bun run check        # Verify code quality
bun build            # Build production bundle
```

### Platform Specifics
- **Vercel**: Next.js native, supports environment variables edge
- **Docker**: Use `SKIP_ENV_VALIDATION=1` for builds
- **Image optimization**: Ensure external domains are whitelisted

## Agent Checklist

Before committing changes:
- [ ] Ran `bun run typecheck` (no errors)
- [ ] Ran `bun run lint` (or fixed with `lint:fix`)
- [ ] Ran `bun run format:write` for code formatting
- [ ] Used `~/` alias for all internal imports
- [ ] Added new routers to src/server/api/root.ts
- [ ] Validated inputs with Zod schemas
- [ ] Used "use client" directive only for interactive components
- [ ] Set appropriate staleTime for React Query caches
- [ ] Used Bun for package operations (`bun add` not `npm install`)
- [ ] Updated environment variables for new external services

## Key Commands Summary

```bash
# Essential
bun dev                    # Start development
bun run check              # Verify code quality
bun build                  # Production build

# Dependencies
bun add <pkg>              # Add package
bun add -D <pkg>           # Add dev package

# Quality
bun run typecheck          # TypeScript only
bun run lint               # ESLint only
bun run lint:fix           # Auto-fix ESLint issues
bun run format:write       # Prettier format
```

This portfolio application prioritizes type safety, developer experience, and performance. Follow these patterns to ensure consistent, maintainable code that leverages the full power of the modern T3 Stack with Bun.
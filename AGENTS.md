# AI Agent Development Guidelines

This document outlines best practices and conventions for AI agents working with this Next.js + tRPC + TypeScript + Tailwind + Bun project.

## Tech Stack Overview

- **Runtime**: Bun (package manager and runtime)
- **Framework**: Next.js 15 with App Router
- **API Layer**: tRPC for type-safe API calls
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack Query (React Query)
- **Validation**: Zod schemas
- **Environment**: @t3-oss/env-nextjs for type-safe environment variables
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier with Tailwind plugin

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes (tRPC)
│   ├── _components/    # Page-specific components
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── server/             # Server-side code
│   └── api/           # tRPC routers and procedures
├── trpc/              # tRPC client setup
├── styles/            # Global styles
└── env.js             # Environment variable validation
```

## Development Workflow

### Package Management
- **Always use Bun** for package operations:
  ```bash
  bun add <package>
  bun add -D <dev-package>
  bun run <script>
  bun dev
  bun build
  ```

### Code Quality Commands
```bash
# Type checking
bun run typecheck

# Linting
bun run lint
bun run lint:fix

# Formatting
bun run format:check
bun run format:write

# Full check (lint + typecheck)
bun run check
```

## Best Practices

### 1. TypeScript Configuration
- **Path Aliases**: Use `~/` prefix for src imports (`~/server/api/trpc`)
- **Strict Mode**: Project uses strict TypeScript with `noUncheckedIndexedAccess`
- **Type Imports**: Prefer inline type imports for better tree-shaking

### 2. tRPC Development
- **Router Organization**: Each domain gets its own router in `src/server/api/routers/`
- **Procedure Types**: Use `publicProcedure` for unauthenticated endpoints
- **Input Validation**: Always validate inputs with Zod schemas
- **Error Handling**: Leverage built-in Zod error formatting

Example router procedure:
```typescript
export const exampleRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(({ input }) => {
      return { message: `Hello, ${input.name}!` };
    }),
});
```

### 3. Client-Side tRPC Usage
- **Hooks**: Use generated hooks from tRPC React Query integration
- **Type Safety**: Leverage `RouterInputs` and `RouterOutputs` types
- **Error Handling**: Implement proper error boundaries and loading states

Example usage:
```typescript
const { data, isLoading, error } = api.post.getLatest.useQuery();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
```

### 4. Component Structure
- **Server Components**: Default for App Router (no "use client")
- **Client Components**: Add `"use client";` directive only when needed
- **Component Organization**: Keep components close to where they're used
- **Props**: Use TypeScript interfaces for prop typing

### 5. Styling with Tailwind CSS
- **Utility-First**: Prefer utility classes over custom CSS
- **Responsive Design**: Use mobile-first responsive prefixes
- **Component Variants**: Use conditional classes or CSS-in-JS for variants
- **Dark Mode**: Implement using Tailwind's dark mode utilities

### 6. Environment Variables
- **Type Safety**: Define all environment variables in `src/env.js`
- **Server vs Client**: Separate server and client environment variables
- **Validation**: All variables are validated at build time
- **Prefixing**: Client variables must start with `NEXT_PUBLIC_`

Example adding new env var:
```javascript
// src/env.js
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
```

### 7. File Naming Conventions
- **Components**: PascalCase (`PostCard.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)
- **Types/Interfaces**: PascalCase with descriptive names (`UserProfile.ts`)

### 8. Import Organization
- **Absolute Imports**: Use `~/` alias for all internal imports
- **Type Imports**: Use `import type` for type-only imports
- **Third-party**: Group external dependencies separately
- **Order**: External → Internal → Type imports

### 9. Error Handling
- **tRPC Errors**: Use built-in error formatting with Zod validation
- **React Error Boundaries**: Implement for client-side error handling
- **Server Errors**: Use proper HTTP status codes in API routes
- **Logging**: Use console logging for development errors

### 10. Performance Considerations
- **Code Splitting**: Leverage Next.js automatic code splitting
- **React Query**: Use proper caching and invalidation strategies
- **Images**: Use Next.js Image component for optimization
- **Bundle Size**: Monitor bundle size with Next.js bundle analyzer

## Common Patterns

### Adding New tRPC Procedures

1. **Create Router** (if new domain):
   ```typescript
   // src/server/api/routers/user.ts
   export const userRouter = createTRPCRouter({
     // procedures here
   });
   ```

2. **Add to Root Router**:
   ```typescript
   // src/server/api/root.ts
   export const appRouter = createTRPCRouter({
     post: postRouter,
     user: userRouter, // Add this line
   });
   ```

3. **Use in Component**:
   ```typescript
   const { data } = api.user.getProfile.useQuery();
   ```

### Creating Reusable Components

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-md font-medium';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Environment Setup for New Features

1. **Add to .env.example**:
   ```
   NEW_FEATURE_API_KEY=your_api_key_here
   ```

2. **Update env.js**:
   ```javascript
   server: {
     NEW_FEATURE_API_KEY: z.string().min(1),
   },
   runtimeEnv: {
     NEW_FEATURE_API_KEY: process.env.NEW_FEATURE_API_KEY,
   },
   ```

3. **Use in Code**:
   ```typescript
   const apiKey = env.NEW_FEATURE_API_KEY;
   ```

## Development Tips

### Debugging
- **tRPC**: Enable tRPC logger link in development (already configured)
- **Next.js**: Use Next.js debugging tools and dev overlay
- **TypeScript**: Pay attention to type errors, they prevent runtime issues

### Testing Strategy
- **Unit Tests**: Test utility functions and business logic
- **Integration Tests**: Test tRPC procedures
- **E2E Tests**: Test complete user flows
- **Type Safety**: Rely on TypeScript for compile-time checks

### Deployment Considerations
- **Environment Variables**: Ensure all required env vars are set in production
- **Build Process**: Run `bun run check` before building
- **Bundle Analysis**: Use `bun run build` to analyze bundle size
- **Performance**: Monitor Core Web Vitals in production

## Agent Guidelines

When working on this codebase:

1. **Always run type checking** before committing changes
2. **Use Bun** for all package operations
3. **Follow the established patterns** for tRPC, components, and styling
4. **Update environment variables** when adding new external services
5. **Maintain type safety** throughout the application
6. **Use absolute imports** with the `~/` alias
7. **Format code** before committing (`bun run format:write`)
8. **Add new routers** to the root router explicitly
9. **Validate all inputs** using Zod schemas
10. **Consider performance** implications of new features

This stack prioritizes type safety, developer experience, and performance. Following these guidelines will ensure consistent, maintainable code that leverages the full power of the T3 Stack with Bun.

# Personal Portfolio Website

A modern, interactive portfolio website built with the T3 Stack, featuring dynamic content, real-time weather integration, and an AI-optimized version for automated systems.

## ✨ Features

### Core Portfolio Sections
- **Hero Section**: Engaging introduction with version toggle between human and AI views
- **Projects**: Showcase of personal and professional work with dedicated project pages
- **About**: Personal introduction and background information
- **Experience**: Professional timeline and career highlights
- **Contact**: Easy ways to get in touch

### Advanced Features
- **Dual Mode Interface**: Switch between human-readable portfolio and AI-optimized markdown format
- **Real-time Weather Widget**: Displays current weather in San Salvador using Open-Meteo API
- **Spotify Integration**: Shows recently played music with interactive controls
- **Project-specific Pages**: Dedicated pages for detailed project showcases
- **Research Components**: Interactive research tools like affinity mapping

### Technical Highlights
- **Type-safe API**: tRPC for end-to-end type safety between client and server
- **Modern UI**: Tailwind CSS with custom dark theme and smooth animations
- **Performance Optimized**: Next.js 15 with App Router and server/client component optimization
- **Developer Experience**: TypeScript, ESLint, Prettier, and comprehensive tooling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with custom dark theme
- **API Layer**: tRPC for type-safe client-server communication
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Package Manager**: Bun for fast dependency management
- **Validation**: Zod for schema validation
- **Environment**: @t3-oss/env-nextjs for type-safe environment variables

## 📁 Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── _components/         # Page-specific components
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── SpotifyBox.tsx
│   │   ├── WeatherBox.tsx
│   │   └── AIVersion.tsx
│   ├── api/trpc/           # tRPC API routes
│   └── projects/           # Individual project pages
├── server/                 # Server-side code
│   └── api/
│       ├── trpc.ts         # tRPC configuration
│       └── routers/        # API route handlers
│           ├── post.ts
│           └── weather.ts  # Weather API integration
├── trpc/                   # tRPC client setup
└── styles/                 # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new_portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   (Currently minimal configuration required - see `src/env.js`)

4. **Start the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Development
bun dev              # Start development server with Turbo

# Building
bun build            # Build for production
bun start            # Start production server

# Code Quality
bun run check        # Run linting and type checking
bun run lint         # Run ESLint
bun run lint:fix     # Fix linting issues
bun run typecheck    # Run TypeScript type checking

# Formatting
bun run format:check # Check code formatting
bun run format:write # Format code with Prettier
```

## 🌐 External Integrations

### Weather API
- **Service**: Open-Meteo Weather API
- **Location**: San Salvador, El Salvador
- **Features**: Current temperature, conditions, and wind speed
- **Fallback**: Graceful degradation with default values

### Spotify Integration
- **Status**: Mock implementation with placeholder data
- **Features**: Recently played tracks, playback controls
- **Ready for**: Spotify API integration

## 🎨 Design System

### Color Palette
- **Primary**: Neutral dark theme (900-950 range)
- **Accent**: Green for interactive elements
- **Text**: White for primary, neutral variants for secondary

### Typography
- **Headings**: Clean, modern sans-serif
- **Body**: Highly readable with proper contrast
- **Code**: Monospace with syntax highlighting

### Components
- **Animations**: Smooth transitions using Framer Motion
- **Responsive**: Mobile-first design approach
- **Interactive**: Hover states, micro-interactions
- **Accessible**: Proper ARIA labels and keyboard navigation

## 📱 Responsive Design

- **Mobile**: Optimized for devices ≥ 375px
- **Tablet**: Enhanced layouts for 768px+
- **Desktop**: Full experience for 1024px+
- **Large**: Optimized for 1440px+ displays

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

### Docker
```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Other Platforms
This project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
Currently minimal configuration is required. See `src/env.js` for available options:

```javascript
// Server-side variables
NODE_ENV: "development" | "production"

// Client-side variables (prefix with NEXT_PUBLIC_)
// NEXT_PUBLIC_EXAMPLE: z.string(),
```

### Adding New Features

1. **New tRPC Routes**:
   ```typescript
   // src/server/api/routers/new-feature.ts
   export const newFeatureRouter = createTRPCRouter({
     // procedures here
   });
   ```

2. **Add to Root Router**:
   ```typescript
   // src/server/api/root.ts
   export const appRouter = createTRPCRouter({
     existing: existingRouter,
     newFeature: newFeatureRouter, // Add this
   });
   ```

3. **Use in Components**:
   ```typescript
   const { data } = api.newFeature.procedure.useQuery();
   ```

## 🧪 Testing

The project is set up for testing with:
- **Type Safety**: TypeScript compilation
- **Linting**: ESLint with Next.js rules
- **Formatting**: Prettier with Tailwind plugin

Run full quality checks:
```bash
bun run check
```

## 📈 Performance

- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Loading**: Strategic loading states and suspense boundaries
- **Images**: Next.js Image optimization
- **Caching**: React Query for efficient data fetching

**Built with ❤️ using the T3 Stack and modern web technologies**

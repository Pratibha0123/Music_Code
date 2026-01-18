# Copilot Instructions for Music_Code

## Project Overview
This is a **Next.js 14 music learning platform** showcasing featured courses and category-based navigation. Built with TypeScript, Tailwind CSS, and Framer Motion for animations. The app uses a static JSON data source with no backend API.

## Architecture & Key Patterns

### Component Organization
- **Page components**: `src/app/` (layout.tsx, page.tsx) - Root layout wraps all pages with Navbar + Footer
- **Feature components**: `src/components/` - Major UI sections (FeaturedCourses, HeroSection, Testimonials)
- **Category folders**: Basic/, Advanced-Composition/, Music Production/, Songwriting/ - Organize category-specific content
- **UI primitives**: `src/components/ui/` - Reusable animated components (Spotlight, BackgroundGradient, InfiniteMovingCards, NavbarMenu, StickyScrollReveal, MovingBorder)

### Data Flow
```
src/data/music_courses.json → FeaturedCourses.tsx (filters isFeatured: true)
                           → Other components (map over courseData.courses)
```
- Course schema: `id, title, slug, description, price, instructor, isFeatured, image`
- Components filter courses client-side; no database queries

### Styling Approach
- **Tailwind CSS** with dark mode enabled (`dark` class on `<html>`)
- **Class merging utility**: `cn()` from `@/utils/cn.ts` uses `clsx` + `tailwind-merge` to prevent conflicting Tailwind classes
- **Example**: `className={cn("fixed top-10", isActive && "top-20")}` - use this pattern in all dynamic className merges
- Custom CSS: `src/app/globals.css` for global styles

### Client vs Server Components
- Components with `'use client'` directive: Navbar, FeaturedCourses (use state/useState)
- Server components: HeroSection, Footer, page.tsx (no interactivity)
- Default to server components; only add `'use client'` when state/hooks are needed

### Animation Components (Framer Motion-based)
- **Spotlight**: Gradient background spotlight effect, used in HeroSection
- **BackgroundGradient**: Card wrapper with gradient border animation
- **InfiniteMovingCards**: Auto-scrolling card carousel (likely used in Testimonials)
- **MovingBorder**: Button with animated border, used in HeroSection CTA
- **StickyScrollReveal**: Content reveal on scroll

## Development Workflow

### Commands
```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Next.js production build
pnpm start      # Run production server
pnpm lint       # ESLint check
```

### Project-Specific Conventions
1. **Import paths**: Use `@/` alias (configured in tsconfig.json) instead of relative paths
   - ✅ `import Navbar from "@/components/Navbar"`
   - ❌ `import Navbar from "../components/Navbar"`

2. **Component interfaces**: Define inline for simple props (see FeaturedCourses.tsx)
   - Use `interface Course` for typed course objects

3. **Dark mode**: HTML tag has `className="dark"` - all dark-prefixed Tailwind utilities work

4. **Course links**: Use `slug` field for routing: `href={/courses/${course.slug}}`

## Key Files Reference
- **Entry point**: `src/app/layout.tsx` - Sets metadata, wraps with Navbar/Footer
- **Data source**: `src/data/music_courses.json` - Single source of truth for courses
- **Utility helpers**: `src/utils/cn.ts` - Always use for conditional classNames
- **Shared UI components**: `src/components/ui/*` - Review before creating new animated UI
- **Config**: `next.config.mjs` (minimal), `tailwind.config.ts`, `tsconfig.json`

## Integration Points
- **Navigation**: Navbar uses Next.js Link for internal routes; course categories in dropdown
- **Course card links**: Routes to `/courses/{slug}` (pages not yet created, add as needed)
- **Sound assets**: `public/Sound/` directory ready for audio files

## Common Tasks

### Adding a new course feature
1. Add to `music_courses.json` with required schema
2. Filter/map in relevant component using TypeScript `interface Course`
3. Use `cn()` for conditional styling in cards
4. Import animations from `@/components/ui/` for visual consistency

### Creating new page/route
1. Create `.tsx` in `src/app/[route]/page.tsx`
2. Server component by default (no `'use client'`)
3. Wrap with existing layout - Navbar/Footer apply globally
4. Use course `slug` for dynamic routes

### Styling guidelines
- Use Tailwind + `dark:` prefix for dark mode support
- Avoid inline styles; leverage utility classes
- Merge conflicting classes with `cn()` utility

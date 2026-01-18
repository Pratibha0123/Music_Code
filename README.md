# 🎵 Music Mastery Academy

A cutting-edge, premium music education platform built to 2026 web standards. This application leverages the power of Next.js App Router, TypeScript, and Tailwind CSS to deliver an immersive, cinematic learning experience.

![Project Banner](https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop)

## 🌟 Key Features

### 🖥️ Immersive User Experience
- **Cinematic Dark UI**: deeply immersive dark theme with glassmorphism, glowing accents, and smooth gradients.
- **Scroll-Triggered Audio**: The "Discover Your Sound" section features ambient audio that fades in/out based on scroll position (`IntersectionObserver` + `HTML5 Audio`).
- **Reactive Visuals**: Dynamic audio waveforms and floating particle effects synced to the user's journey.

### 🧭 Advanced Navigation Architecture
- **Name-Based Registry**: Centralized `PAGE_REGISTRY` system (`src/utils/navigation.tsx`) decoupling UI routing from hardcoded strings.
- **Dynamic Routing**:
  - `/courses/[category]`: Filtered course listings based on slugs.
  - `/course/[slug]`: Rich, dedicated course detail pages with distinct visual themes.

### 🎨 Dynamic Visual Themes
The platform intelligently adapts its color palette based on the course content:
- **🟨 Gold Theme**: For *Advanced Composition* (Academic, Elite).
- **🟪 Neon Theme**: For *Electronic Music Production* (Futuristic, Cyber).
- **🟥 Rose Theme**: For *Songwriting* (Emotional, Expressive).
- **🟦 Teal Theme**: For *Beginner Theory* (Approachable, Clean).

### 🛒 Localized Pricing
- **INR Integration**: All course pricing is localized to Indian Rupees (₹) with appropriate formatting (e.g., ₹7,999).

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: `clsx`, `tailwind-merge`

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── about/            # About Us page
│   ├── contact/          # Contact page
│   ├── course/           # Dynamic Course Details [slug]
│   ├── courses/          # Course Category listings
│   └── page.tsx          # Homepage
├── components/
│   ├── ui/               # Reusable primitives (Aceternity UI etc.)
│   ├── CourseCard.tsx    # Standardized course display component
│   ├── DiscoverSection.tsx # Audio-reactive immersive section
│   └── Navbar.tsx        # Registry-driven navigation
├── data/
│   └── music_courses.json # Rich data source (Curriculum, Reviews, Bios)
└── utils/
    └── navigation.tsx    # Central Page Registry & types
```

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/music-mastery-academy.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the application**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contribution

Contributions are welcome! Please ensure any new pages added to the `app` directory are also registered in `src/utils/navigation.tsx` to maintain the robust routing architecture.

---

**© 2026 Music Mastery Academy.**
 *Master the Art of Sound.*
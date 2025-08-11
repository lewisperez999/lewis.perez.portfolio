# Lewis Perez Portfolio - Complete Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Styling System](#styling-system)
6. [Interactive Features](#interactive-features)
7. [Development Commands](#development-commands)
8. [Deployment](#deployment)
9. [Component Details](#component-details)
10. [Custom CSS Animations](#custom-css-animations)

---

## Project Overview

**Lewis Perez Portfolio** is a modern, responsive personal portfolio website built with Next.js 15.4.6 and React 19. It showcases professional experience, technical skills, projects, and educational background with a focus on interactivity and professional presentation.

### Key Features
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ✨ Interactive animations and hover effects
- 🎠 Mobile carousel for projects
- 🔗 Professional navigation
- 📧 Contact form integration
- 🎨 Modern glassmorphism design

---

## Technology Stack

### Core Framework
- **Next.js 15.4.6** - React-based full-stack framework with App Router
- **React 19** - Latest React version for component-based UI
- **TypeScript** - Type-safe JavaScript for better development experience

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Variables** - Dynamic theming system
- **Custom CSS** - Advanced animations and glassmorphism effects
- **PostCSS** - CSS processing and optimization

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PNPM** - Fast, disk space efficient package manager
- **Git** - Version control system

---

## Project Structure

```
my-online-portfolio/
├── app/                        # Next.js App Router directory
│   ├── favicon.ico            # Website favicon
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page component
├── components/                # Reusable React components
│   ├── Contact.tsx            # Contact form and information
│   ├── Education.tsx          # Educational background
│   ├── Experience.tsx         # Professional experience timeline
│   ├── Footer.tsx             # Footer with social links
│   ├── Header.tsx             # Navigation and theme toggle
│   ├── Hero.tsx               # Landing section
│   ├── Projects.tsx           # Project showcase with carousel
│   ├── Skills.tsx             # Technical skills grid
│   ├── Testimonials.tsx       # Client testimonials (optional)
│   └── ThemeToggle.tsx        # Dark/light theme switcher
├── public/                    # Static assets
│   ├── gintuan-homepage.jpg   # Project screenshot
│   └── *.svg                  # Icon files
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

---

## Component Architecture

### 1. **Layout Components**

#### `app/layout.tsx` - Root Layout
```tsx
// Root layout with theme script injection
// Handles HTML structure, fonts, and early theme loading
// Includes meta tags and viewport configuration
```

#### `components/Header.tsx` - Navigation Header
- **Purpose**: Fixed navigation bar with theme toggle
- **Features**: 
  - Responsive mobile menu
  - Smooth scroll navigation
  - Interactive animations
  - Theme toggle integration
- **Styling**: Black background with white text (excluded from theme changes)

#### `components/Footer.tsx` - Site Footer
- **Purpose**: Social media links and copyright
- **Features**: 
  - Professional SVG icons (LinkedIn, GitHub, Gmail)
  - Hover animations
  - Black background (excluded from theme changes)

### 2. **Content Components**

#### `components/Hero.tsx` - Landing Section
- **Purpose**: First impression and call-to-action
- **Features**:
  - Animated text with staggered delays
  - Interactive buttons with hover effects
  - Professional summary display
  - Floating background elements
- **Animations**: Fade-in-up with custom delays

#### `components/Skills.tsx` - Technical Skills
- **Purpose**: Showcase technical expertise
- **Features**:
  - 8 categorized skill groups
  - Frontend/Backend separation
  - Interactive skill tags
  - 4-column responsive grid
- **Categories**:
  1. Programming Languages
  2. Frontend Frameworks
  3. Backend Frameworks
  4. Databases
  5. Cloud & DevOps
  6. Security & APIs
  7. E-commerce & CMS
  8. Development Practices

#### `components/Projects.tsx` - Project Showcase
- **Purpose**: Display key projects with interactive elements
- **Features**:
  - Desktop: 2-column grid layout
  - Mobile: Touch-friendly carousel
  - Live demo and GitHub links
  - Project screenshots
  - Interactive hover effects
- **Projects**:
  1. gintuanatbp.com (Shopify e-commerce)
  2. Enterprise API Orchestration (ING)
  3. ElasticSearch Migration Tool (IBM)

#### `components/Experience.tsx` - Professional Timeline
- **Purpose**: Chronological work experience
- **Features**:
  - Flexbox timeline layout
  - Interactive timeline dots
  - Hover animations
  - Professional formatting
- **Structure**: Two-column flex design with timeline numbers and content

#### `components/Education.tsx` - Educational Background
- **Purpose**: Academic qualifications
- **Features**:
  - Card-based layout
  - Staggered animations
  - Interactive hover effects

#### `components/Contact.tsx` - Contact Information
- **Purpose**: Contact form and professional details
- **Features**:
  - 3-column responsive layout
  - Contact form with email integration
  - Direct contact information
  - Social media links
  - Interactive form elements

### 3. **Utility Components**

#### `components/ThemeToggle.tsx` - Theme Switcher
- **Purpose**: Dark/light mode toggle
- **Features**:
  - Local storage persistence
  - Smooth transitions
  - Icon swapping animation
  - HTML class manipulation

---

## Styling System

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
{
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Class-based dark mode
  theme: {
    extend: {
      // Custom color palette
      // Animation extensions
      // Typography scales
    }
  }
}
```

### CSS Variables System
```css
/* Light Mode */
:root {
  --background: #ffffff;
  --foreground: #171717;
  --bg-rgb: 255,255,255;
}

/* Dark Mode */
html.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --bg-rgb: 10,10,10;
}
```

### Border Visibility System
```css
/* Custom CSS with high specificity to override Tailwind resets */
.border.border-black,
div.border.border-black {
  border: 1px solid #000000 !important;
}

html.dark .border.dark\:border-white\/25,
html.dark div.border.dark\:border-white\/25 {
  border-color: rgba(255, 255, 255, 0.25) !important;
}
```

---

## Interactive Features

### 1. **Animation System**
```css
/* Custom Keyframes */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Animation Classes */
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animation-delay-200 { animation-delay: 0.2s; }
```

### 2. **Hover Effects**
- **Scale Animations**: `hover:scale-105`, `hover:scale-110`
- **Color Transitions**: Smooth color changes on hover
- **Translation Effects**: `hover:translate-x-1`, `hover:translate-y-2`
- **Shadow Effects**: Dynamic shadow changes

### 3. **Responsive Carousel**
```tsx
// Mobile carousel implementation
const [currentIndex, setCurrentIndex] = useState(0);
const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
```

### 4. **Theme Toggle Logic**
```tsx
// Theme persistence and switching
const [theme, setTheme] = useState<'light' | 'dark'>('light');
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  // Theme application logic
}, []);
```

---

## Development Commands

### Package Manager: PNPM
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev              # Starts development server on http://localhost:3000

# Production build
pnpm build            # Creates optimized production build
pnpm start            # Starts production server

# Code quality
pnpm lint             # Runs ESLint for code quality checks
pnpm lint --fix       # Automatically fixes ESLint issues

# Type checking
pnpm type-check       # Runs TypeScript compiler for type checking
```

### Git Commands Used
```bash
# Repository setup
git init
git remote add origin https://github.com/lewisperez999/my-online-portfolio.git

# Branch management
git branch -m master main    # Renamed master to main branch
git push -u origin main      # Push and set upstream

# Development workflow
git add .
git commit -m "message"
git push
```

---

## Component Details

### Header Component Features
```tsx
// Navigation items configuration
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Mobile menu state
const [open, setOpen] = useState(false);
```

### Hero Component Animations
```tsx
// Staggered animation implementation
<div className="animate-fade-in-up animation-delay-200">
<div className="animate-fade-in-up animation-delay-400">
<div className="animate-fade-in-up animation-delay-600">
```

### Skills Component Structure
```tsx
// Skill groupings
const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", items: ["Java 8+", "Python", "JavaScript"] },
  { title: "Frontend Frameworks", items: ["React", "Next.js", "Tailwind CSS"] },
  // ... 6 more categories
];
```

### Projects Carousel Logic
```tsx
// Responsive rendering
{/* Desktop Grid View */}
<div className="hidden lg:grid gap-8 md:grid-cols-2">

{/* Mobile Carousel View */}
<div className="lg:hidden relative">
  <div className="overflow-hidden">
    <div className="flex transition-transform duration-500" 
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
```

### Experience Timeline Design
```tsx
// Flexbox timeline structure
<div className="flex gap-6">
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="h-10 w-10 rounded-full bg-blue-600">
      {idx + 1}
    </div>
    {/* Connecting line */}
    <div className="w-px h-16 bg-black dark:bg-white/10"></div>
  </div>
  <div className="flex-1 pt-1">
    {/* Content */}
  </div>
</div>
```

### Contact Form Integration
```tsx
// Email form handler
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  
  window.location.href = `mailto:lewisperez12152017@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(String(name))}&body=${encodeURIComponent(String(message))}`;
}
```

---

## Custom CSS Animations

### 1. **Fade In Up Animation**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 2. **Floating Elements**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### 3. **Glow Effects**
```css
@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(37, 99, 235, 0.5); }
  50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.8); }
}
```

### 4. **Animation Delays**
```css
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-1000 { animation-delay: 1s; }
```

---

## Performance Optimizations

### 1. **Image Optimization**
- Next.js Image component with automatic optimization
- WebP format conversion
- Responsive image loading
- Lazy loading for non-critical images

### 2. **CSS Optimization**
- Tailwind CSS purging unused styles
- CSS minification in production
- Critical CSS inlining

### 3. **JavaScript Optimization**
- Tree shaking for unused code
- Code splitting with dynamic imports
- Bundle analysis and optimization

### 4. **Loading Performance**
- Early theme script injection
- Font optimization
- Asset preloading

---

## Deployment

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment
```bash
# Build production version
pnpm build

# Static export (if needed)
pnpm build && pnpm export
```

### Environment Setup
```bash
# Node.js version
node --version  # Should be 18+ for Next.js 15

# Package manager
pnpm --version  # Fast, efficient package manager
```

---

## Browser Support

### Modern Browsers
- **Chrome 90+**: Full feature support
- **Firefox 88+**: Full feature support
- **Safari 14+**: Full feature support
- **Edge 90+**: Full feature support

### Features Used
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- ES2020+ JavaScript features
- Modern React features (hooks, suspense)

---

## SEO and Accessibility

### SEO Features
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

---

## Future Enhancements

### Planned Features
1. **Blog Section**: Technical articles and tutorials
2. **Admin Panel**: Content management system
3. **Analytics**: Visitor tracking and insights
4. **Internationalization**: Multi-language support
5. **PWA Features**: Offline functionality
6. **Advanced Animations**: GSAP integration

### Performance Improvements
1. **Edge Functions**: Serverless API endpoints
2. **CDN Optimization**: Global content delivery
3. **Caching Strategies**: Redis/Vercel KV integration
4. **Database Integration**: PostgreSQL for dynamic content

---

## Troubleshooting

### Common Issues

#### ESLint Errors
```bash
# Fix unescaped quotes
# Change: "text"
# To: &ldquo;text&rdquo; or &quot;text&quot;

# Fix unused imports
# Remove unused import statements
```

#### Border Visibility
```css
/* Custom CSS with !important to override Tailwind resets */
.border.border-black { border: 1px solid #000 !important; }
```

#### Theme Toggle Issues
```tsx
// Ensure script is in head for early execution
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {}
    })()
  `
}} />
```

---

## Contact and Support

**Developer**: Lewis Perez  
**Email**: lewisperez12152017@gmail.com  
**LinkedIn**: [linkedin.com/in/lewis-perez](https://linkedin.com/in/lewis-perez)  
**GitHub**: [github.com/lewisperez999](https://github.com/lewisperez999)  
**Live Site**: [Portfolio URL when deployed]

---

*This documentation covers the complete technical implementation of the Lewis Perez Portfolio website. For specific implementation details or customization requests, please refer to the component source code or contact the developer.*

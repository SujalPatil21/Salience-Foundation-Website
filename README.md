# Salience Foundation — Cinematic Website

A modern, cinematic storytelling website built for the Salience Foundation, a non-profit focused on empowering rural talent in India through sports and quality education.

---

## 1. Project Overview

This project transforms a traditional NGO website into a high-impact digital experience using storytelling, smooth animations, and real-world visuals. The design language emphasizes spacious grids, premium typography, and a cohesive brand identity that showcases grassroots athletic drive and community transformation.

---

## 2. Key Features

- **Multi-Page SPA Architecture**: Seamless routing for all core pages, including:
  - **Home**: Narrative index introducing our mission.
  - **About**: Governance principles, organizational goals, and background.
  - **Programs**: YuvaGati Sports Academy and Girls Football Initiative details.
  - **Gallery**: Responsive media grid with category filters and an interactive fullscreen Lightbox.
  - **Achievements**: Vertical milestone timeline and placeholder stats.
  - **Students**: Nurtured skills matrix and student journey timelines.
  - **Events**: Filterable upcoming activities calendar and past archives.
  - **Policies**: Legal guidelines, Child Protection safeguarding grids, and FAQs.
  - **Contact**: Interactive React Leaflet map (OpenStreetMap tiles) and validation-ready forms.
  - **Partner With Us**: Clear corporate partnerships timeline and process steps.
- **Scroll-Linked Navbar**: Smooth transition from transparent to solid white, persistence across route changes to prevent flashes.
- **Animated Page Transitions**: Wait-state route fades utilizing Framer Motion.
- **Responsive Layout**: Fluid column adaptations across Desktop, Tablet, and Mobile viewports.

---

## 3. Technology Stack

- **Framework**: React 18 & Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Navigation**: React Router v7
- **Mapping**: React Leaflet v4 & Leaflet v1

---

## 4. Getting Started

### Local Installation

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies (resolves legacy peer dependencies for React 18 maps compatibility):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Production Build

Create optimized static assets:
```bash
npm run build
```

Preview the build locally:
```bash
npm run preview
```

---

## 5. Directory Structure

- `Frontend/src/assets/`: Visual media assets.
- `Frontend/src/components/layout/`: Global persisted layout blocks (Navbar, Footer, Layout).
- `Frontend/src/components/maps/`: React Leaflet coordinate integrations.
- `Frontend/src/components/ui/`: Reusable buttons, page heroes, and container layouts.
- `Frontend/src/constants/`: Centralized content files for text editing.
- `Frontend/src/pages/`: Main page components.

---

## 6. Developer Documentation

For detailed information on design specs, animation rules, and components, consult the files in our developer documentation folder:
- **[Architecture Guide](file:///c:/Github/Salience-Foundation-Website/docs/ARCHITECTURE.md)**
- **[Design System](file:///c:/Github/Salience-Foundation-Website/docs/DESIGN_SYSTEM.md)**
- **[Component Guide](file:///c:/Github/Salience-Foundation-Website/docs/COMPONENT_GUIDE.md)**
- **[Folder Structure](file:///c:/Github/Salience-Foundation-Website/docs/FOLDER_STRUCTURE.md)**
- **[Animations Guide](file:///c:/Github/Salience-Foundation-Website/docs/ANIMATIONS.md)**
- **[Content Guide](file:///c:/Github/Salience-Foundation-Website/docs/CONTENT_GUIDE.md)**
- **[Development Onboarding](file:///c:/Github/Salience-Foundation-Website/docs/DEVELOPMENT.md)**
- **[Deployment Manual](file:///c:/Github/Salience-Foundation-Website/docs/DEPLOYMENT.md)**
- **[AI Context Map](file:///c:/Github/Salience-Foundation-Website/docs/LLM_CONTEXT.md)**

# LLM Context Map (System Guide)

This document provides system-level coordinates and configurations for AI coding assistants working on the Salience Foundation codebase. Use these guidelines to maintain visual and functional consistency.

---

## 1. Project Parameters

- **Context**: Premium, modern, cinematic NGO/corporate website for Salience Foundation.
- **Visual Tone**: Professional, spacious, clean, corporate, high-impact storytelling.
- **Core Technology Stack**: React 18, Vite 5, Tailwind CSS 3, Framer Motion 11, React Router 7, React Leaflet 4.

---

## 2. Design Tokens Reference

- **Fonts**:
  - Headings: `Plus Jakarta Sans`
  - Body: `Inter`
- **Colors**:
  - Primary Accent Yellow: `#F3EA00`
  - Secondary Accent Olive: `#B6B137`
  - Dark Theme Background: `#111111`
  - Main Body Text: `#575757`
  - Light Background: `#FAFAFA`
  - Borders: `#ECECEC`
- **Borders & Radii**:
  - Cards: `rounded-2xl` (`16px`/`20px`)
  - Inputs & Buttons: `rounded-xl` (`12px`)
- **Spacing Guidelines**:
  - Section Padding: Standardize vertical bounds with `py-24` (96px) to maintain a spacious layout.

---

## 3. Persistent Layout (Crucial Rule)

- The global `Navbar` and `Footer` components are mounted **only once** in `src/components/layout/Layout.jsx` around the router outlet.
- Do not import `Navbar` or `Footer` inside page components, as this will break persistence and cause transitions to flash.
- **Scroll-Linked Navbar Transitions**:
  - Register any page that features a full-screen hero banner (`100svh`) in `Navbar.jsx` inside the `isScrollLinkedPage` check.
  - This configures the navbar to load transparently and transition to solid white at `150px` scroll height.
  - Pages without a hero banner will render the solid white navbar state directly.

---

## 4. Coding Standards

- **Lazy Loading**:
  - Lazy load `InteractiveMap` in `ContactPage.jsx` using `React.lazy()` and `React.Suspense` to optimize bundles.
  - Render a fallback skeleton card to prevent layout shifts during async loads.
- **Leaflet & React 18 Compatibility**:
  - Use `react-leaflet@4.2.1` and `leaflet@1.9.4` for React 18 compatibility.
  - Do not use `react-leaflet@5.0.0`, as its context API is incompatible with React 18 and causes runtime errors.
  - Implement a `mounted` state check inside `useEffect` before rendering mapping containers to protect hydration.
  - Do not wrap the map container with motion components.
- **Custom Vector Icons**:
  - Do not use emoji characters in lists or contact details. Use inline SVGs styled to match Lucide metrics (size `18px`-`24px`, stroke-width `1.8`).
- **Content Isolation**:
  - All copy, lists, and FAQs are located in `src/constants/` (e.g. `galleryData.jsx`, `eventsData.jsx`).
  - Modify constants files to update text or content. Do not hardcode content in page components.

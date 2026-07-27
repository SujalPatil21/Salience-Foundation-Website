# Animations Guide

This document describes the Framer Motion rules, custom transition keys, and HMR guidelines used to create the premium, cinematic experience on the Salience Foundation website.

---

## 1. Page Transitions

We implement clean fade transitions between page routes.
- **Trigger**: `<AnimatePresence mode="wait">` in `src/App.jsx`.
- **Details**:
  - `initial={{ opacity: 0 }}`
  - `animate={{ opacity: 1 }}`
  - `exit={{ opacity: 0 }}`
  - `transition={{ duration: 0.35, ease: 'easeInOut' }}`
- **Framer Motion Key Rule**: Each wrapper `<Routes>` node must carry the active route path `key={location.pathname}` so that exit transitions trigger correctly upon navigation.

---

## 2. Scroll-Linked Navbar Interpolation

The navbar gradually transitions from transparent to solid white as the user scrolls.
- **Scroll Value Hooks**:
  - `useScroll()` fetches the browser scroll position.
  - `useTransform(scrollY, [0, 150], [0, 0.95])` maps the background opacity.
  - `useTransform(scrollY, [0, 150], ['#FFFFFF', '#575757'])` transitions the text color.
- **Animation Bounds**: The transition completes over the first `150px` of vertical scroll.

---

## 3. Element Entrances & Staggers

- **Cards Entrance**: Cards fade in and lift slightly (`y: [20, 0]`) using `whileInView` with a `once: true` viewport trigger, keeping scroll experiences clean.
- **Image Zoom**: Hero images trigger a subtle scale expansion (`scale: [1.05, 1]`) on load to feel immersive and alive.

---

## 4. Performance Guidelines

- **Animate Transform/Opacity Only**: Avoid animating raw width, height, or padding values. Use scale, opacity, and translate (X/Y) to run animations on the GPU.
- **Do Not Animate MapContainer**: The React Leaflet container manages its own internal canvas/DOM layers. Do not wrap map containers with motion components, as it will break the canvas rendering.

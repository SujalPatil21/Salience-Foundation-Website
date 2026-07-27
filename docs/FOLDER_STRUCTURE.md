# Folder Structure Guide

This document describes the directory organization and responsibility layers of the Salience Foundation codebase.

---

## High-Level Tree Overview

```text
c:/Github/Salience-Foundation-Website/
├── docs/                      # Developer and AI assistant guidelines
└── Frontend/
    ├── src/
    │   ├── assets/            # Images, video reels, and brand logos
    │   ├── components/        # Layout and reusable UI wrappers
    │   │   ├── layout/        # Persisted wrappers (Navbar, Footer, Layout)
    │   │   ├── maps/          # React Leaflet coordinate components
    │   │   └── ui/            # Buttons, Accordions, Containers
    │   ├── constants/         # Static page content arrays and lists
    │   ├── pages/             # Route views (Home, Programs, Contact, etc.)
    │   ├── App.jsx            # Routing definitions and page transitions
    │   ├── index.css          # Tailwind setup and core styles
    │   └── main.jsx           # App entry point
    ├── package.json           # Module dependencies configuration
    └── vite.config.js         # Bundler parameters
```

---

## Directory Responsibilities

### `src/assets/`
Holds static visual assets (e.g. `Girls.jpeg`, `Team.jpeg`). Assets are imported directly inside page components so that the Vite build optimizer compression pipeline tracks them during compiling.

### `src/components/layout/`
Preserved global elements. These components do not remount during route updates, which preserves the transition animations and states (like scroll offsets in the navbar).

### `src/components/maps/`
Dedicated map integrations. Keeps interactive Leaflet layers isolated from visual route files, preventing build breaks in server or hydration environments.

### `src/constants/`
Single source of truth for text copy, lists, and values. Keeps visual JSX markup clean and easily editable.

### `src/pages/`
View managers. Corresponds directly to route addresses defined in `App.jsx`.

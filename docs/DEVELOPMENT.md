# Developer Onboarding Guide

Welcome to the Salience Foundation codebase. This document outlines onboarding steps, environment details, and coding conventions.

---

## 1. Local Environment Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
1. Clone the repository.
2. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
   ```bash
   npm run dev
   ```
The development server will run at `http://localhost:5173`.

---

## 2. Coding Conventions

- **Component Creation**:
  - Place page views inside `src/pages/`.
  - Place reusable visual wrappers inside `src/components/ui/`.
  - Keep components modular, focused, and responsive.
- **Icon Implementation**:
  - Do not use emoji icons for contact or info cards. Use outlines matching the Lucide SVG specifications with a standard stroke-width (`1.8`) and sizing bounds (`18px`–`24px`).
- **Imports Alignment**:
  - Always clean up unused imports and debug logs before committing changes.

---

## 3. Hydration Protection

If writing components that rely on browser globals (like `window` or `document` inside Leaflet maps), always wrap their mounting lifecycle inside `useEffect` hooks:
```javascript
const [mounted, setMounted] = useState(false);
useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return <LoadingFallback />;
// Render interactive element
```
This protects the build from hydration discrepancies.

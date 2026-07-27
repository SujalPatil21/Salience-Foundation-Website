# Design System

This document outlines the UI tokens, styling parameters, and Tailwind configurations used to build the premium, consistent visual identity of the Salience Foundation website.

---

## 1. Typography

The system uses standard Google Fonts loaded inside `index.html`:
- **Headings Font**: `Plus Jakarta Sans`, sans-serif (used for all section badges, titles, and card headers).
- **Body Font**: `Inter`, sans-serif (used for paragraph descriptions, labels, navigation items, and button labels).

---

## 2. Color Palette

```text
┌──────────────────┬─────────────────┬────────────────────────────────────────┐
│ Token            │ Value           │ Primary Usage                          │
├──────────────────┼─────────────────┼────────────────────────────────────────┤
│ Primary Yellow   │ #F3EA00         │ Active navigation, CTA buttons, icons  │
│ Secondary Olive  │ #B6B137         │ Secondary indicators, subtle borders   │
│ Near Black       │ #111111         │ Dark section backgrounds, titles       │
│ Dark text        │ #575757         │ Secondary descriptions, paragraph text │
│ Border Grey      │ #ECECEC         │ Cards, table dividers, input borders   │
│ Light Section bg │ #FAFAFA         │ Alternating section backgrounds        │
└──────────────────┴─────────────────┴────────────────────────────────────────┘
```

---

## 3. UI Token Configurations

### Border Radius
Defined in `src/constants/design.jsx`:
- **Card Radius**: `rounded-2xl` (`16px` / `20px` for premium maps and galleries).
- **Button Radius**: `rounded-xl` (`12px`) or `rounded-full` for badges/chips.
- **Input Radius**: `rounded-xl` (`12px`).

### Shadows
- **Card Shadow**: Subtle soft shadow `shadow-sm` transitioning to `shadow-md` on hover.
- **Header Shadow**: Soft shadow `shadow-sm` applied to the solid white navbar state.

### Spacing Metrics
- **Section Padding**: Standard vertical padding `py-24` (96px) to maintain a spacious, professional look.
- **Grid Gap**: standard `gap-8` (32px) or `gap-12` (48px) for larger layouts.

---

## 4. UI Components

### Buttons
- **Primary**: Bold yellow background (`#F3EA00`) with black text, hover scaling, and rounded-xl edges.
- **Secondary**: Dark transparent border with clean black text, transitioning to light backgrounds.
- **Secondary White**: White border with white text, designed for hero overlays.

### Cards
- **Hover Lift**: Animate elements upwards (`hover:-translate-y-1`) with smooth transition curves (`duration-[280ms]`).
- **Masonry Grid**: Varied card heights in the Gallery page layout to feel modern and premium.

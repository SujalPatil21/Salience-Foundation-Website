# Content Guide

This document describes how to update the website's copy, program descriptions, FAQ lists, and media metadata without editing page components.

---

## 1. Single Source of Truth

All copy is isolated inside the `src/constants/` directory. If you need to edit text, lists, or question blocks, update the constants files directly:

```text
┌─────────────────────────┬──────────────────────────────────────────┐
│ Content Source File     │ Controlled Information                   │
├─────────────────────────┼──────────────────────────────────────────┤
│ contactData.jsx         │ Contact info card lists, contact FAQs    │
│ achievementsData.jsx    │ Milestones timeline, stats, awards       │
│ eventsData.jsx          │ Category filters, upcoming/past lists    │
│ galleryData.jsx         │ Media metadata, active highlights list   │
│ policiesData.jsx        │ Document grid list, transparency cards   │
│ studentsData.jsx        │ Student journey stages, skill cards      │
│ navigation.jsx          │ Global navbar item links and labels      │
└─────────────────────────┴──────────────────────────────────────────┘
```

---

## 2. Example: Updating an Event Card

To add or modify an upcoming event card, edit the `UPCOMING_EVENTS` array in `src/constants/eventsData.jsx`:

```javascript
export const UPCOMING_EVENTS = [
  { 
    title: 'New Scouting Cup', 
    category: 'Football', 
    date: 'Date: Oct 12, 2026', 
    location: 'Location: Ranchi Academy', 
    desc: 'Official details for the upcoming selection matches.' 
  },
  // ...other events
];
```

The `EventsPage.jsx` component will automatically pick up the new item, render it with the correct category filter tags, and update the UI.

---

## 3. Adding New Categories

To add a new category filter to the Events or Gallery page:
1. Open the corresponding data file (e.g. `eventsData.jsx`).
2. Add the category string to the category array:
   ```javascript
   export const EVENT_CATEGORIES = [
     'All',
     'Football',
     'New Category', // Added category
     // ...
   ];
   ```
3. Assign this category string to any event object's `category` property.

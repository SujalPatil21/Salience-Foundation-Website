# Component Guide

This document describes the reusable components built for the Salience Foundation website, including props, styling parameters, and example usages.

---

## 1. PageHero

- **Purpose**: Provides a full-screen hero banner (`100svh`) with a dark overlay, transparent navbar transition hooks, main heading, badge, paragraph, CTA buttons, and a scroll down indicator.
- **Props**:
  - `bgImage` (string, required): Asset source path.
  - `badge` (string): Text shown inside the top pill.
  - `title` (string): Main page header text.
  - `description` (string): Supporting paragraph copy.
  - `primaryBtnText` (string) & `primaryBtnAction` (function).
  - `secondaryBtnText` (string) & `secondaryBtnLink` (string).
- **Example Usage**:
  ```jsx
  <PageHero 
    bgImage={heroImg}
    badge="Impact"
    title="Explore our Milestones"
    description="Details regarding youth development."
    primaryBtnText="Explore"
    primaryBtnAction={handleScroll}
  />
  ```

---

## 2. FAQAccordion

- **Purpose**: A collapsible, animated accordion block built using Framer Motion to display frequently asked questions.
- **Props**:
  - `items` (array of objects, required):
    - `question` (string)
    - `answer` (string)
- **Example Usage**:
  ```jsx
  <FAQAccordion items={FAQS} />
  ```

---

## 3. Container

- **Purpose**: Centers layout components horizontally and aligns margins across all screen widths.
- **Props**:
  - `children` (React Node)
  - `className` (string)
- **Example Usage**:
  ```jsx
  <Container className="py-12">
    <div>Page Content</div>
  </Container>
  ```

---

## 4. SectionHeading

- **Purpose**: Consistent typography header used for all main section introductions.
- **Props**:
  - `badge` (string)
  - `title` (string)
  - `subtitle` (string)
  - `align` (string: `'left'` | `'center'`)
- **Example Usage**:
  ```jsx
  <SectionHeading 
    badge="Compliance" 
    title="Transparency Policy" 
    align="center" 
  />
  ```

---

## 5. InteractiveMap

- **Purpose**: Production-ready React Leaflet map wrapper centered on Ranchi coordinates.
- **Props**: None.
- **Dependencies**: `react-leaflet@4.2.1`, `leaflet@1.9.4`.

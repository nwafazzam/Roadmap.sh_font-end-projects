# Changelog Component

A modern, responsive, and interactive Changelog Component built with semantic HTML, custom CSS, and dynamic JavaScript date calculations. Developed as part of the roadmap.sh frontend development projects.

## 🚀 Features

* **Semantic HTML5 Structure:** Uses modern structural tags such as `<header>`, `<main>`, `<article>`, `<time>`, and `<footer>` for optimal document architecture and accessibility.
* **Dual-Column Timeline Layout:** A centered timeline design with alternating items on both sides, complete with custom CSS pseudo-elements (`::before` and `::after`) for timeline nodes and lines.
* **Dynamic Date-Based Status (JavaScript):** Automatically calculates the age of each project update relative to the current date using JavaScript. Updates created within the last 10 days are dynamically flagged as new (`is-new`) while older updates are categorized as (`is-old`).
* **Interactive Hover Effects:** Distinct hover color transitions and visual depth (`text-shadow`) tailored for recent versus older updates on desktop viewports.
* **Clean CSS Variables (`:root`):** Easily manageable global design tokens for theme colors, backgrounds, borders, and typography.

---

## 🛠️ Technologies Used

* **HTML5** (Semantic layout and structure)
* **CSS3** (Flexbox layout, variables, custom pseudo-element shapes, media queries, and transition effects)
* **JavaScript (Vanilla)** (`DOMContentLoaded` lifecycle handling, `window.matchMedia`, date arithmetic, and class manipulation)

---

## 📂 Project Structure

```text
changelog-component/
│
├── index.html          # Main HTML markup structure
├── style.css           # Global styles, variables, timeline layout, and hover states
└── project-status.js   # Dynamic JavaScript logic for date calculation and status assignment
```

## links

* Roadmap.sh project: [Project URL!](https://roadmap.sh/projects/changelog-component)

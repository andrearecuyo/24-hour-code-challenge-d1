# 24-Hour Code Challenge | D1 Ecommerce Page

Live:  [https://andrearecuyo.github.io/24-hour-code-challenge-d1](https://andrearecuyo.github.io/24-hour-code-challenge-d1)

## Project Overview
This project is a 24-hour code challenge to recreate a D1 ecommerce page for my application for Ecommerce Developer. The goal was to analyze the design, organize assets, implement responsive layouts using the Foundation framework, and build a maintainable and semantic HTML/CSS structure.

The page includes sections for hero, products, daily benefits, routine, reviews, results, and footer.

---

## Folder Structure

├── README.md
├── index.html
├── public
│ └── favicon.ico
└── src
├── fonts
│ ├── Aktiv-Grotesk
│ ├── Gellix
│ └── Goldplay
├── images
│ ├── daily-benefits
│ ├── footer
│ ├── header
│ ├── hero
│ ├── icons
│ ├── ingredients
│ ├── logo
│ ├── product-set-cta
│ ├── products
│ ├── results
│ ├── reviews
│ ├── routine
│ └── steps
├── js
│ ├── nav.js
│ ├── reviews.js
│ └── routineFeatures.js
├── styles
│ ├── base
│ ├── components
│ ├── layout
│ ├── sections
│ ├── main.scss
│ ├── main.css
│ └── styles.css
├── previews
│ └── preview.png


---

## What I Did

1. **Project Setup**
   - Created the project folder and organized initial structure.
   - Added `index.html`.
   - Added `public/` folder for `favicon.ico`.

2. **Assets Management**
   - Downloaded all assets, removed unnecessary files.
   - Renamed images for clarity and organized them in `src/images/` by section.
   - Converted logo to favicon using [favicon.io](https://favicon.io/favicon-converter/).

3. **Fonts Setup**
   - Added Aktiv-Grotesk, Gellix, and Goldplay font files under `src/fonts/`.
   - Prepared fonts for SCSS integration.

4. **JavaScript**
   - Added scripts under `src/js/`:
     - `nav.js` → Navigation
     - `reviews.js` → Reviews interactions
     - `routineFeatures.js` → Routine features

5. **SCSS / CSS Organization**
   - Structured SCSS files:
     - `base/` → fonts, mixins, reset, typography, utility, variables
     - `components/` → buttons, nav
     - `layout/` → header, footer
     - `sections/` → hero, products, routine, reviews, etc.
   - Compiled `main.scss` to `main.css` for use in `index.html`.

6. **HTML Structure**
   - Used semantic HTML with `<section>` tags to divide the page.
   - Linked CSS files and favicon in `<head>`.

7. **Framework Integration**
   - Used Foundation framework for responsive layouts.
   - Explored Foundation eCommerce boilerplate for layout inspiration.

8. **Design & Styling**
   - Extracted colors and typography from design mockup.
   - Applied consistent SCSS variables for colors, fonts, and weight.
   - Styled all sections according to the design.

9. **Testing & Refinement**
   - Checked responsiveness across devices.
   - Verified correct image placement, font usage, and semantic HTML.

10. **Additional Files**
    - `previews/preview.png` → Quick preview

---

## How to Run

1. Clone the repository https://github.com/andrearecuyo/24-hour-code-challenge-d1.git or download the project.
2. Open `index.html` in a web browser.
3. Ensure `main.css` is compiled and linked properly for styling.
4. Interact with the page sections and features implemented with JavaScript.

---

## Tools & Resources Used
- **Framework**: Foundation
- **Fonts**: Inter, Roboto Mono, Aktiv-Grotesk, Gellix, Goldplay
- **Favicon Generator**: [favicon.io](https://favicon.io/favicon-converter/)
- **SCSS Compiler**: Extension to compile `main.scss` → `main.css`
- **Semantic HTML** for better accessibility and maintainability

---

## Outcome
- Fully structured and styled ecommerce page.
- Organized and maintainable folder structure.
- Responsive and visually aligned with the original design mockup.

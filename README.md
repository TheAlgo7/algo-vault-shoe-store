<div align="center">

  <img src="https://img.shields.io/badge/Algo%20Vault-👟-0a0a0a?style=for-the-badge&labelColor=111111" alt="Algo Vault Shoe Store" />

  # Algo Vault — Shoe Store

  **A dynamic, interactive shoe collection demo — built to flex premium kicks with real-time theming and a slick category browser.**

  <p align="center">
    <a href="https://algo-vault-shoe-store.vercel.app">
      <img src="https://img.shields.io/badge/Live%20Site-algo--vault--shoe--store.vercel.app-0a0a0a?style=flat-square&logo=vercel&logoColor=white&labelColor=111111" alt="Live Site" />
    </a>
    <img src="https://img.shields.io/badge/Stack-Vanilla%20HTML%2FCSS%2FJS-0a0a0a?style=flat-square&labelColor=111111" alt="Vanilla Stack" />
    <img src="https://img.shields.io/badge/Shoes-19%20Pairs-0a0a0a?style=flat-square&labelColor=111111" alt="19 Pairs" />
    <img src="https://img.shields.io/badge/Built%20by-The%20Algothrim-0a0a0a?style=flat-square&labelColor=111111" alt="Built by The Algothrim" />
  </p>

</div>

---

## ⚡ Overview

**Algo Vault** is an interactive shoe store UI built as a frontend showcase. It presents a curated collection of 19 real sneakers, boots, and limited-edition grails — each with its own dynamic background, accent colour, and copy — all powered by a Swiper.js slider with creative 3D transitions.

There is no backend. No cart. No checkout. Just a beautifully crafted, fully responsive UI that makes shoes feel like they belong in a gallery.

---

## ✨ Features

- **🎨 Dynamic theming** — Every slide switches the page background, gradient, and button colours to match the shoe's palette in real-time.
- **👟 19 curated pairs** — Nike, Jordan, Dior, Timberland, Converse, and more — split across Sneakers, Boots, and Limited Edition.
- **🗂️ Category browser** — Tap Sneakers, Boots, or Limited in the nav to open a modal listing all pairs in that category. Click any to jump directly.
- **🔍 Image viewer** — Click "View Pair" to open a full modal with a clean image preview of the selected shoe.
- **📱 Fully responsive** — Works cleanly from 320px to 4K.
- **⌨️ Keyboard navigable** — Arrow keys cycle through slides; Escape closes modals.
- **⚡ Zero build step** — Pure static. Open `index.html` and go.

---

## 🗂️ Collection

| Category | Count | Brands |
|---|---|---|
| **Limited Edition** | 5 | Nike x Travis, Dior, Jordan, Nike |
| **Sneakers** | 10 | Nike SB, Jordan, Converse, HRX, American Eagle, Lee Cooper, Aadi, Sparx |
| **Boots** | 4 | Timberland, Roadster, Freacksters, Afrojack |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | Semantic HTML5 |
| **Styling** | Vanilla CSS with CSS custom properties |
| **Slider** | [Swiper.js](https://swiperjs.com/) — Creative Effect + dynamic pagination |
| **Icons** | [Remixicon 4.6](https://remixicon.com/) (CDN) |
| **Hosting** | [Vercel](https://vercel.com/) — static deployment |

---

## 🚀 Getting Started

No build step. Just serve the files.

```bash
# Clone the repo
git clone https://github.com/TheAlgo7/algo-vault-shoe-store.git
cd algo-vault-shoe-store

# Option 1 — Open directly
start index.html

# Option 2 — Local dev server
npx serve .
# or
python -m http.server 8080
```

---

## 📂 Project Structure

```text
algo-vault-shoe-store/
├── index.html
├── assets/
│   ├── css/
│   │   ├── shoe.css
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── shoe.js
│   │   ├── swiper-bundle.min.js
│   │   └── consent.js
│   └── img/
│       └── shoe/
│           ├── favicon.svg
│           ├── shoe-1.png → shoe-19.png
├── .gitignore
├── vercel.json
└── README.md
```

---

## 🎨 Design Language

- **Dark-first.** The default experience is black — the shoes do the talking.
- **Shoe-driven theming.** Each pair sets its own background, gradient, and accent. The UI adapts to the product, not the other way around.
- **Minimal chrome.** One page, one section, no distractions — just the collection.
- **Motion with purpose.** The 3D creative swipe effect makes browsing feel tactile without being gimmicky.

---

<div align="center">
  Designed &amp; developed by <b><a href="https://github.com/TheAlgo7">The Algothrim</a></b>.
</div>

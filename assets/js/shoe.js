/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU TOGGLE (tap to open/close) =====*/
if (navToggle) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show-menu");
    const isOpen = navMenu.classList.contains("show-menu");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/*===== CLOSE ON OUTSIDE CLICK =====*/
document.addEventListener("click", (e) => {
  if (navMenu && !navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
    navMenu.classList.remove("show-menu");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
});

/*===== MENU HIDDEN (close button fallback) =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  });
}

/*=============== THE ALGO VAULT: MASTER COLLECTION ===============*/
const wardrobe = [
  /* GRAILS (Limited) */
  {
    category: "limited",
    brand: "NIKE x TRAVIS",
    name: "AIR JORDAN 1 LOW<br>BLACK PHANTOM",
    desc: "The ultimate stealth grail. Premium black suede with contrast white stitching and the signature reverse Swoosh.",
    img: "assets/img/shoe/shoe-1.png",
    theme: "dark",
    bgColor: "#0a0a0a",
    gradient: "linear-gradient(180deg, #1f1f1f 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#f0f0f0",
    btnTextColor: "#000000",
  },
  {
    category: "limited",
    brand: "DIOR",
    name: "B23 HIGH TOP<br>OBLIQUE BLACK",
    desc: "High-fashion transparency. Technical canvas featuring the classic Dior Oblique motif and translucent paneling.",
    img: "assets/img/shoe/shoe-2.png",
    theme: "light",
    bgColor: "#e8e8e8",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#1a1a1a",
    btnTextColor: "#ffffff",
  },
  {
    category: "limited",
    brand: "JORDAN",
    name: "HIGH '85<br>PANDA",
    desc: "The original 1985 cut. Timeless high-contrast Black and White colorway that defined an era.",
    img: "assets/img/shoe/shoe-3.png",
    theme: "light",
    bgColor: "#f0f0f0",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#000000",
    btnTextColor: "#ffffff",
  },
  {
    category: "limited",
    brand: "NIKE",
    name: "RETRO HIGH<br>EQUALITY",
    desc: "Statement piece. Full black upper featuring bold typography on the heels and fresh white soles.",
    img: "assets/img/shoe/shoe-4.png",
    theme: "dark",
    bgColor: "#121212",
    gradient: "linear-gradient(180deg, #333333 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#ffffff",
    btnTextColor: "#000000",
  },
  {
    category: "limited",
    brand: "NIKE",
    name: "DUNK LOW<br>YEAR OF RABBIT",
    desc: "Lunar New Year special. Premium Fossil Stone suede with chenille swooshes and intricate details.",
    img: "assets/img/shoe/shoe-5.png",
    theme: "light",
    bgColor: "#e3dccb",
    gradient: "linear-gradient(180deg, #f5f0e1 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#5d4037",
    btnTextColor: "#ffffff",
  },

  /* SNEAKERS */
  {
    category: "sneaker",
    brand: "NIKE SB",
    name: "DUNK LOW PRO<br>WOLF GREY",
    desc: "Skateboarding essential. Clean Wolf Grey leather upper sitting on a classic gum outsole.",
    img: "assets/img/shoe/shoe-6.png",
    theme: "light",
    bgColor: "#cfcfcf",
    gradient: "linear-gradient(180deg, #e0e0e0 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#d97706",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "JORDAN",
    name: "JUMPMAN MVP<br>WHITE BLACK",
    desc: "A modern hybrid. Fusing elements from the AJ6, 7, and 8 into a versatile court classic.",
    img: "assets/img/shoe/shoe-7.png",
    theme: "light",
    bgColor: "#fafafa",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#000000",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "CONVERSE",
    name: "CHUCK TAYLOR<br>ALL STAR",
    desc: "The undisputed icon. White canvas upper, diamond pattern outsole, and the patch that started it all.",
    img: "assets/img/shoe/shoe-8.png",
    theme: "dark",
    bgColor: "#1a1a1a",
    gradient: "linear-gradient(180deg, #333333 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#ffffff",
    btnTextColor: "#000000",
  },
  {
    category: "sneaker",
    brand: "CONVERSE",
    name: "RUN STAR<br>HIKE PLATFORM",
    desc: "The remix. A futuristic twist on the Chuck Taylor featuring a jagged rubber sole and platform lift.",
    img: "assets/img/shoe/shoe-9.png",
    theme: "dark",
    bgColor: "#222222",
    gradient: "linear-gradient(180deg, #444444 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#ffffff",
    btnTextColor: "#000000",
  },
  {
    category: "sneaker",
    brand: "HRX",
    name: "LIFESTYLE<br>CHUNKY RUNNER",
    desc: "Bold silhouette. Heavy-duty sole unit for that modern dad-shoe aesthetic and all-day comfort.",
    img: "assets/img/shoe/shoe-10.png",
    theme: "light",
    bgColor: "#edf2f7",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#000000",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "AMERICAN EAGLE",
    name: "X-RAY KNIT<br>CLUB SNEAKER",
    desc: "Breathable knit upper. Lightweight comfort engineered for all-day urban exploration.",
    img: "assets/img/shoe/shoe-11.png",
    theme: "light",
    bgColor: "#f5f5f5",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#000000",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "LEE COOPER",
    name: "TAN CASUAL<br>LOAFERS",
    desc: "Refined casual. Smooth tan leather finish with stitched detailing perfect for semi-formal fits.",
    img: "assets/img/shoe/shoe-12.png",
    theme: "light",
    bgColor: "#e6ccb2",
    gradient: "linear-gradient(180deg, #f5ebe0 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#8b4513",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "AADI",
    name: "WOVEN DESIGN<br>LIGHTWEIGHT",
    desc: "Intricate woven texture in a monochrome palette. Maximum breathability and feather-light feel.",
    img: "assets/img/shoe/shoe-13.png",
    theme: "dark",
    bgColor: "#2d3748",
    gradient: "linear-gradient(180deg, #4a5568 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#cbd5e0",
    btnTextColor: "#000000",
  },
  {
    category: "sneaker",
    brand: "SPARX",
    name: "SM-241<br>RUNNING SHOE",
    desc: "Performance ready. White mesh construction with navy accents and responsive cushioning.",
    img: "assets/img/shoe/shoe-14.png",
    theme: "light",
    bgColor: "#f0f9ff",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#1e3a8a",
    btnTextColor: "#ffffff",
  },
  {
    category: "sneaker",
    brand: "SPARKS",
    name: "ATHLETIC<br>TRAINERS",
    desc: "All-black utility. Stealth black knit with subtle gold hits on the inner lining.",
    img: "assets/img/shoe/shoe-15.png",
    theme: "dark",
    bgColor: "#0f0f0f",
    gradient: "linear-gradient(180deg, #262626 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#fbbf24",
    btnTextColor: "#000000",
  },

  /* BOOTS */
  {
    category: "boot",
    brand: "TIMBERLAND",
    name: "PREMIUM<br>6-INCH BOOT",
    desc: "The remix. White textured leather construction with a contrasting dark leather collar.",
    img: "assets/img/shoe/shoe-16.png",
    theme: "light",
    bgColor: "#e2e8f0",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#3e2723",
    btnTextColor: "#ffffff",
  },
  {
    category: "boot",
    brand: "ROADSTER",
    name: "MID-TOP<br>CHELSEA WHITE",
    desc: "Urban edge. Clean white Chelsea silhouette featuring a distinct buckle strap and black elastic.",
    img: "assets/img/shoe/shoe-17.png",
    theme: "light",
    bgColor: "#f3f4f6",
    gradient: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
    accentColor: "#111827",
    btnTextColor: "#ffffff",
  },
  {
    category: "boot",
    brand: "FREACKSTERS",
    name: "SUEDE<br>CHELSEA BOOT",
    desc: "Classic sophistication. Deep black suede upper sitting on a contrasting gum sole.",
    img: "assets/img/shoe/shoe-18.png",
    theme: "dark",
    bgColor: "#1c1917",
    gradient: "linear-gradient(180deg, #292524 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#d4a373",
    btnTextColor: "#000000",
  },
  {
    category: "boot",
    brand: "AFROJACK",
    name: "ROUND TOE<br>MID-TOP",
    desc: "Rugged elegance. Sleek black leather mid-top construction with a robust round toe profile.",
    img: "assets/img/shoe/shoe-19.png",
    theme: "dark",
    bgColor: "#111111",
    gradient: "linear-gradient(180deg, #333333 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#ffffff",
    btnTextColor: "#000000",
  },
];

/*=============== SLIDER GENERATOR ===============*/
const swiperWrapper = document.getElementById("swiper-wrapper");
swiperWrapper.innerHTML = "";

wardrobe.forEach((shoe, index) => {
  const slide = document.createElement("div");
  slide.classList.add("home__article", "swiper-slide");

  const picture = document.createElement("picture");

  const source = document.createElement("source");
  source.srcset = shoe.img.replace(".png", ".webp");
  source.type = "image/webp";

  const img = document.createElement("img");
  img.src = shoe.img;
  img.alt = shoe.name.replace(/<br>/g, " ");
  img.className = "home__shoe";
  img.loading = index < 3 ? "eager" : "lazy";
  img.decoding = "async";
  img.width = 1001;
  img.height = 886;

  picture.appendChild(source);
  picture.appendChild(img);
  slide.appendChild(picture);
  swiperWrapper.appendChild(slide);
});

/*=============== SWIPER CONFIG ===============*/
let swiperShoes = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  simulateTouch: true,
  allowTouchMove: true,
  effect: "creative",
  creativeEffect: {
    prev: { translate: [-100, 0, -500], opacity: 0 },
    next: { translate: [100, 0, -500], opacity: 0 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: { enabled: true, onlyInViewport: false },
  observer: true,
  observeParents: true,
});

/*=============== DYNAMIC ENGINE ===============*/
const body = document.body;
const brandTag = document.getElementById("shoe-brand");
const nameTag = document.getElementById("shoe-name");
const descTag = document.getElementById("shoe-desc");
const bgCircle = document.getElementById("bg-circle");
const buyBtn = document.getElementById("buy-btn");

const FADE_DELAY = 250;

function updateContent() {
  const realIndex = swiperShoes.realIndex;
  const shoe = wardrobe[realIndex];

  const smoothCurve = "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
  nameTag.style.transition = smoothCurve;
  descTag.style.transition = smoothCurve;
  brandTag.style.transition = smoothCurve;

  // 1. Fade Text
  nameTag.style.opacity = 0;
  descTag.style.opacity = 0;
  brandTag.style.opacity = 0;

  // 2. Theme
  if (shoe.theme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

  // 3. Background
  body.style.setProperty("--dynamic-bg", shoe.bgColor);
  bgCircle.style.background = shoe.gradient;

  // 4. Update Text
  setTimeout(() => {
    brandTag.textContent = shoe.brand;
    nameTag.innerHTML = shoe.name;
    descTag.textContent = shoe.desc;

    nameTag.style.opacity = 1;
    descTag.style.opacity = 1;
    brandTag.style.opacity = 1;
  }, FADE_DELAY);

  // 5. Button
  buyBtn.style.backgroundColor = shoe.accentColor;
  buyBtn.style.color = shoe.btnTextColor;
  buyBtn.style.setProperty("--btn-glow", `${shoe.accentColor}66`);
}

swiperShoes.on("slideChange", updateContent);
updateContent();

/* =========================================
   FOCUS TRAP UTILITY
   ========================================= */
function createFocusTrap(modal) {
  const FOCUSABLE = 'button:not([disabled]), [href], [tabindex="0"]';

  function handleKeydown(e) {
    if (e.key !== "Tab") return;
    const els = [...modal.querySelectorAll(FOCUSABLE)];
    if (!els.length) return;
    const first = els[0];
    const last = els[els.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  return {
    activate() { modal.addEventListener("keydown", handleKeydown); },
    deactivate() { modal.removeEventListener("keydown", handleKeydown); },
  };
}

/* =========================================
   MODAL LOGIC (INTERACTIVITY)
   ========================================= */
const viewPairBtn = document.getElementById("buy-btn");
const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-img-title");
const closeImageModal = document.getElementById("close-image-modal");
const imageModalTrap = createFocusTrap(imageModal);

viewPairBtn.addEventListener("click", () => {
  const currentShoe = wardrobe[swiperShoes.realIndex];
  modalImg.src = currentShoe.img.replace(".png", ".webp");
  modalImg.alt = currentShoe.name.replace(/<br>/g, " ");
  modalTitle.innerHTML = currentShoe.name.replace(/<br>/g, " ");
  imageModal.classList.add("active-modal");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  imageModalTrap.activate();
  closeImageModal.focus();
});

closeImageModal.addEventListener("click", () => {
  imageModal.classList.remove("active-modal");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  imageModalTrap.deactivate();
  viewPairBtn.focus();
});

const catModal = document.getElementById("category-modal");
const catList = document.getElementById("category-list");
const catTitle = document.getElementById("category-title");
const closeCatModal = document.getElementById("close-cat-modal");
const catModalTrap = createFocusTrap(catModal);

const navSneakers = document.getElementById("nav-sneakers");
const navBoots = document.getElementById("nav-boots");
const navLimited = document.getElementById("nav-limited");

function openCategory(categoryType, title) {
  catList.innerHTML = "";
  catTitle.textContent = title;

  wardrobe.forEach((shoe, index) => {
    if (shoe.category === categoryType) {
      const li = document.createElement("li");
      li.classList.add("modal__item");
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");
      li.textContent = shoe.name.replace(/<br>/g, " ");

      const selectShoe = () => {
        swiperShoes.slideToLoop(index);
        catModal.classList.remove("active-modal");
        catModal.setAttribute("aria-hidden", "true");
        navMenu.classList.remove("show-menu");
        document.body.style.overflow = "";
      };

      li.addEventListener("click", selectShoe);
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectShoe();
        }
      });

      catList.appendChild(li);
    }
  });

  catModal.classList.add("active-modal");
  catModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  catModalTrap.activate();
  closeCatModal.focus();
}

navSneakers.addEventListener("click", () =>
  openCategory("sneaker", "SNEAKERS"),
);
navBoots.addEventListener("click", () => openCategory("boot", "BOOTS"));
navLimited.addEventListener("click", () =>
  openCategory("limited", "LIMITED EDITION"),
);

closeCatModal.addEventListener("click", () => {
  catModal.classList.remove("active-modal");
  catModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  catModalTrap.deactivate();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__blur-bg")) {
    imageModal.classList.remove("active-modal");
    imageModal.setAttribute("aria-hidden", "true");
    imageModalTrap.deactivate();
    catModal.classList.remove("active-modal");
    catModal.setAttribute("aria-hidden", "true");
    catModalTrap.deactivate();
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageModal.classList.remove("active-modal");
    imageModal.setAttribute("aria-hidden", "true");
    imageModalTrap.deactivate();
    catModal.classList.remove("active-modal");
    catModal.setAttribute("aria-hidden", "true");
    catModalTrap.deactivate();
    document.body.style.overflow = "";
  }
});

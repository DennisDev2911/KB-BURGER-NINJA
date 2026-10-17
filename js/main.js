// ============================================
// Menu Mobile Toggle
// ============================================

const initMobileMenu = () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const drawer = document.querySelector("[data-menu]");
  const drawerClose = document.querySelector(".drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  if (!menuToggle || !drawer) return;

  // Abre/fecha drawer ao clicar no botão hamburguer
  menuToggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Previne scroll do body quando drawer aberto
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Fecha drawer ao clicar no botão X
  if (drawerClose) {
    drawerClose.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      menuToggle.focus();
    });
  }

  // Fecha drawer ao clicar em um link
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Fecha drawer ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      drawer.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      menuToggle.focus();
    }
  });
};

// ============================================
// King em Dobro — Counters & Letter Animation
// ============================================

const easeOut = (t) => 1 - Math.pow(1 - t, 4);

const animateNumber = (element, endValue, duration, pad2 = false) => {
  const startTime = performance.now();
  const update = (now) => {
    const elapsed = Math.min(now - startTime, duration);
    const val = Math.round(easeOut(elapsed / duration) * endValue);
    element.textContent = pad2 ? String(val).padStart(2, "0") : val;
    if (elapsed < duration) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const wrapLetters = (el, letterClass, baseDelay = 0, perChar = 55) => {
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = "";
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.className = letterClass;
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${baseDelay + i * perChar}ms`;
    el.appendChild(span);
  });
};

const runAnimations = (
  kingText,
  kingCard,
  kingLabel,
  burgersLabel,
  kingSubtitle,
  kingNum,
  kingPrice,
  kingCents,
) => {
  // 1. Slide + fade do bloco principal
  kingText.classList.add("is-visible");

  // 2. Inicia os contadores e as frases junto com o slide/fade
  animateNumber(kingNum, 2, 1400);
  animateNumber(kingPrice, 25, 1800);
  animateNumber(kingCents, 90, 2000, true); // "00" → "90"

  wrapLetters(kingLabel, "king-label-letter", 0, 55); // "King em dobro"
  wrapLetters(burgersLabel, "burgers-label-letter", 180, 60); // "BURGERS"
  wrapLetters(kingSubtitle, "subtitle-letter", 340, 55); // "A partir de"

  // 3. Card slide esquerda → direita
  kingCard.classList.add("is-visible");

  kingCard.querySelectorAll(".king-mini-item").forEach((item) => {
    item.classList.add("is-visible");
  });
};

const initKing = () => {
  const kingText = document.querySelector("#kingText");
  const kingCard = document.querySelector("#kingCard");
  const kingLabel = document.querySelector("#kingLabel");
  const burgersLabel = document.querySelector("#burgersLabel");
  const kingSubtitle = document.querySelector("#kingSubtitle");
  const kingNum = document.querySelector("#kingNum");
  const kingPrice = document.querySelector("#kingPrice");
  const kingCents = document.querySelector("#kingCents");

  if (!kingText || !kingCard || !kingLabel) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runAnimations(
          kingText,
          kingCard,
          kingLabel,
          burgersLabel,
          kingSubtitle,
          kingNum,
          kingPrice,
          kingCents,
        );
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -20px 0px",
    },
  );

  observer.observe(kingText);
};

//teste-novo
// king-card.js
// Usa IntersectionObserver para disparar as animações quando
// a seção .king-card entrar na viewport.

(function () {
  const MINI_CARD_DELAY_BASE = 1000; // ms após o king-card virar visível
  const MINI_CARD_STAGGER = 200; // ms de delay entre cada mini card

  const kingCard = document.getElementById("kingCard");
  const miniCards = document.querySelectorAll(".king-mini-item");

  if (!kingCard) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // 1. King card: slide da esquerda + fade in
        kingCard.classList.add("is-visible");

        // 2. Mini cards: fade + bounce, um de cada vez, com stagger de 0.2s
        miniCards.forEach((card, index) => {
          const delay = MINI_CARD_DELAY_BASE + index * MINI_CARD_STAGGER;

          setTimeout(() => {
            card.classList.add("is-visible");
          }, delay);
        });

        // Para de observar após disparar (animação acontece só uma vez)
        observer.unobserve(kingCard);
      });
    },
    {
      threshold: 0.2, // dispara quando 20% do card está visível
    },
  );

  observer.observe(kingCard);
})();

// ============================================
// Scroll Animations — IntersectionObserver
// ============================================

const initScrollAnimations = () => {
  const elements = document.querySelectorAll("[data-animate]");
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
};

// ============================================
// Ninja Carousel — Kids Menu Carousel
// ============================================

const initNinjaCarousel = () => {
  const carousel = document.querySelector(".ninja-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".ninja-carousel-image");
  const prevBtn = carousel.querySelector(".ninja-carousel-nav-prev");
  const nextBtn = carousel.querySelector(".ninja-carousel-nav-next");

  let currentSlide = 0;

  const showSlide = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
  };

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      restartAutoPlay();
    });
  }

  // Auto-play a cada 3 segundos e pausa no hover
  let autoPlayInterval = null;

  const startAutoPlay = () => {
    if (autoPlayInterval) return;
    autoPlayInterval = setInterval(nextSlide, 3000);
  };

  const stopAutoPlay = () => {
    if (!autoPlayInterval) return;
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  };

  const restartAutoPlay = () => {
    stopAutoPlay();
    // reinicia após pequeno atraso para evitar troca imediata
    setTimeout(startAutoPlay, 500);
  };

  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
  // Para dispositivos touch, interrompe ao tocar
  carousel.addEventListener("touchstart", stopAutoPlay, { passive: true });

  // Inicia autoplay se houver mais de 1 slide
  if (images.length > 1) startAutoPlay();
};

// ============================================
// Menu Flip Cards
// ============================================

const initMenuFlip = () => {
  const cards = document.querySelectorAll(".menu-card");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Flip effect on card click
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        if (filter === "todos" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
};

// ============================================
// HMM Section — Product Title, Description & Badges
// ============================================

const initHmmSection = () => {
  const hmmTextBlock = document.querySelector(".hmm-text-block");
  const hmmBadges = document.querySelector(".hmm-badges");

  if (!hmmTextBlock) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Adiciona is-visible ao product-title e description (slide da direita pra esquerda)
        const productTitle = hmmTextBlock.querySelector(".hmm-product-title");
        const description = hmmTextBlock.querySelector(".hmm-description");

        if (productTitle) productTitle.classList.add("is-visible");
        if (description) description.classList.add("is-visible");

        // Após ~0.8s (quando title/description terminarem), ativa os badges com bounce
        if (hmmBadges) {
          setTimeout(() => {
            hmmBadges.classList.add("is-visible");
          }, 800);
        }

        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  observer.observe(hmmTextBlock);
};

// ============================================
// Smooth Scroll para âncoras internas
// ============================================

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

// ============================================
// Inicialização — DOMContentLoaded
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initKing();
  initScrollAnimations();
  initNinjaCarousel();
  initMenuFlip();
  initSmoothScroll();
  initHmmSection();
});

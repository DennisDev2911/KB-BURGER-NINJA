# Copilot Instructions — HTML + CSS + JavaScript

> Projeto construído com **HTML5 semântico**, **CSS puro com Custom Properties** e **JavaScript vanilla ES6+**. Sem frameworks ou bibliotecas externas.

## Stack & Filosofia

- **HTML5 semântico** (tags apropriadas, nunca divs desnecessários)
- **CSS puro com Custom Properties** (variáveis, sem preprocessadores)
- **JavaScript vanilla ES6+** (sem jQuery, React, Vue ou libs)
- **Mobile-first + Progressive Enhancement**
- **Performance:** 90+ no Lighthouse, animações a 60fps
- **Acessibilidade:** WCAG 2.1 AA (keyboard navigation, screen readers, ARIA)

---

## Estrutura de Pastas (Projeto do Zero)

Use esta estrutura mínima ao iniciar um projeto novo:

```txt
projeto/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── public/
  └── images/
```

Regras:
- `index.html` fica na raiz do projeto.
- A estrutura inicial do `index.html` pode ser **simples** (ex.: `header`, `main`, `footer`) e evoluir por etapas.
- Se necessário, comece no nível mais básico: apenas `html`, `head` e `body`, e adicione seções semânticas depois.
- `css/styles.css` contém estilos globais e animações.
- `js/main.js` contém interações em JavaScript vanilla.
- Assets visuais devem ficar em `public/images/`.

---



## HTML — Estrutura Semântica

### Regras de HTML

- ✅ **Usar HTML5 semântico:** `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<aside>`
- ✅ **IDs descritivos em kebab-case:** `id="hero-section"`, `id="nosso-menu"`
- ✅ **Classes em kebab-case:** `class="btn-primary"`, `class="card-feature"`
- ✅ **Atributos de acessibilidade:** `aria-label`, `alt`, `role`, `aria-current`
- ✅ **Data attributes para JS/animações:** `data-animate="fade-up"`, `data-delay="200"`, `data-category="burgers"`
- ❌ **Nunca usar `<div>` onde existe tag semântica**
- ❌ **Nunca omitir `alt` em imagens** (usar `alt=""` se decorativa)

---

## CSS — Design System com Custom Properties

### Sistema de Tokens (`:root`)

**Sempre usar variáveis CSS**, nunca valores hardcoded. Organizar por categorias.

```css
:root {
  /* === Cores === */
  --color-primary: #0066CC;
  --color-primary-dark: #004499;
  --color-primary-light: #3399FF;
  --color-secondary: #333333;
  --color-accent: #F5F5F5;
  --color-bg: #FFFFFF;
  --color-bg-dark: #1A1A1A;
  --color-bg-surface: #F0F0F0;
  --color-text: #1A1A1A;
  --color-text-light: #FFFFFF;
  --color-text-muted: #666666;
  --color-border: rgba(0, 0, 0, 0.1);
  --color-shadow: rgba(0, 0, 0, 0.15);

  /* === Tipografia === */
  --font-display: 'Titan One', cursive;  /* Headings grandes */
  --font-body: 'Open Sans', sans-serif;  /* Corpo de texto */
  
  /* Tamanhos de fonte (fluidos com clamp) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
  --text-3xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
  --text-4xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  --text-5xl: clamp(3rem, 2.5rem + 2.5vw, 5rem);
  
  /* Pesos de fonte */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
  
  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;

  /* === Espaçamento === */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* === Layout === */
  --container-max: 1200px;
  --container-padding: clamp(1rem, 5vw, 3rem);
  --grid-gap: clamp(1rem, 3vw, 2rem);

  /* === Bordas === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  --border-width: 2px;

  /* === Sombras === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 32px rgba(214, 35, 0, 0.3);

  /* === Transições === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Z-index === */
  --z-below: -1;
  --z-base: 0;
  --z-raised: 10;
  --z-sticky: 50;
  --z-overlay: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

### Regras de Escrita CSS

1. **Ordem de propriedades** (sempre nesta sequência):
```css
.componente {
  /* 1. Posicionamento */
  position: relative;
  top: 0;
  z-index: var(--z-raised);

  /* 2. Display & Box Model */
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: var(--container-max);
  padding: var(--space-6);
  margin: 0 auto;

  /* 3. Tipografia */
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  text-align: left;

  /* 4. Visual */
  color: var(--color-text);
  background-color: var(--color-bg);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  /* 5. Animação */
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  will-change: transform;
}
```

2. **Mobile-first responsivo:**
```css
/* Base = Mobile (<640px) */
.container {
  padding: var(--space-4);
}

/* Tablet (≥640px) */
@media (min-width: 640px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
  }
}

/* Wide (≥1280px) */
@media (min-width: 1280px) {
  .container {
    padding: var(--space-12);
  }
}
```

3. **Preferências de espaçamento:**
```css
/* ✅ Usar gap em vez de margin entre filhos */
.grid {
  display: grid;
  gap: var(--space-6);
}

/* ❌ Evitar */
.grid-item {
  margin-right: 1.5rem;
}
```

4. **Tipografia fluida com clamp:**
```css
.hero-title {
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
}
```

5. **Aspect ratio para imagens/vídeos:**
```css
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-lg);
}
```

---

## Animações CSS — Performance e Fluidez

### Princípios de Animação

1. **Apenas animar propriedades GPU-accelerated:**
   - ✅ `transform` (translate, scale, rotate)
   - ✅ `opacity`
   - ✅ `filter` (com moderação)
   - ❌ `width`, `height`, `margin`, `padding`, `top`, `left` (causam reflow)

2. **Sempre incluir `will-change`** em elementos que vão animar (mas remover após animação):
```css
.animating {
  will-change: transform, opacity;
}
```

3. **Respeitar preferências do usuário:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Page Transitions

```css
/* === Wrapper de transição entre páginas/seções === */
.page-transition {
  animation: page-enter var(--transition-slow) ease-out forwards;
}

@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes page-exit {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-16px);
  }
}
```

---

## JavaScript — Vanilla ES6+

### Regras Gerais

- ✅ **JavaScript puro** (sem jQuery, React, Vue, Angular)
- ✅ **ES6+ features:** arrow functions, destructuring, spread, template literals
- ✅ **`const` por padrão**, `let` apenas quando valor muda, **nunca `var`**
- ✅ **Naming conventions:** camelCase para variáveis/funções, PascalCase para classes
- ✅ **Arrow functions** para callbacks curtos, **funções nomeadas** para lógica principal
- ✅ **Comentários descritivos** com separadores `// ============`
- ❌ **Nunca usar `var`**
- ❌ **Nunca modificar prototypes nativos** (`Array.prototype`, etc.)
- ❌ **Nunca usar `eval()` ou `Function()` constructor**

### Estrutura de Código

```js
// ============================================
// Scroll Animations — IntersectionObserver
// ============================================

const initScrollAnimations = () => {
  const elements = document.querySelectorAll('[data-animate]');
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  elements.forEach((el) => observer.observe(el));
};

// ============================================
// Smooth Scroll para âncoras internas
// ============================================

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// ============================================
// Menu Mobile Toggle
// ============================================

const initMobileMenu = () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  
  if (!menuToggle || !menu) return;
  
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    
    // Previne scroll do body quando menu aberto
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Fecha menu ao clicar em link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
};


// ============================================
// Inicialização — DOMContentLoaded
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSmoothScroll();
  initMobileMenu();
});
```

### Seletores DOM — Boas Práticas

```js
// ✅ Correto — querySelector/querySelectorAll
const hero = document.querySelector('.hero');
const cards = document.querySelectorAll('.card');

// ✅ Correto — Verificar existência
const menu = document.querySelector('.menu');
if (menu) menu.classList.add('active');

// ❌ Evitar — getElementsByClassName (retorna HTMLCollection live)
const items = document.getElementsByClassName('item');
```

### Event Listeners — Performance

```js
// ✅ Correto — Event delegation
const list = document.querySelector('.list');
list.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item clicked');
  }
});

// ✅ Correto — Passive listeners para scroll
window.addEventListener('scroll', handler, { passive: true });

// ❌ Evitar — Listeners em cada item
items.forEach((item) => {
  item.addEventListener('click', handler); // Ruim para grandes listas
});
```



## Acessibilidade — WCAG 2.1 AA

### Checklist de Acessibilidade

- ✅ **Toda imagem informativa tem `alt` descritivo**
- ✅ **Imagens decorativas têm `alt=""`**
- ✅ **Botões sem texto visível têm `aria-label`**
- ✅ **Ordem de headings lógica:** `h1` → `h2` → `h3` (nunca pular níveis)
- ✅ **Links indicam página/seção atual:** `aria-current="page"`
- ✅ **Foco visível nunca removido** (outline customizado mas presente)
- ✅ **Navegação por teclado funciona** (Tab, Enter, Esc)
- ✅ **Contraste mínimo 4.5:1** para texto normal, 3:1 para texto grande
- ✅ **Sem dependência de cor apenas** (usar ícones + texto)
- ✅ **Formulários com `<label>` associados ou `aria-label`**
- ✅ **Estado de elementos interativos claro** (hover, focus, active, disabled)

### Exemplos de Código Acessível

```html
<!-- ✅ Imagem informativa -->
<img src="burger.jpg" alt="Hambúrguer artesanal com queijo cheddar derretido">

<!-- ✅ Imagem decorativa -->
<img src="pattern.png" alt="" role="presentation">

<!-- ✅ Botão de ícone com label -->
<button class="btn-icon" aria-label="Fechar menu">
  <svg>...</svg>
</button>

<!-- ✅ Link atual na navegação -->
<nav>
  <a href="/" aria-current="page">Home</a>
  <a href="/menu">Menu</a>
</nav>

<!-- ✅ Formulário com label explícito -->
<label for="email">E-mail</label>
<input type="email" id="email" name="email" required>

<!-- ✅ Ou com aria-label -->
<input 
  type="search" 
  placeholder="Buscar..." 
  aria-label="Buscar no cardápio"
>

<!-- ✅ Estado de loading -->
<button class="btn" aria-busy="true" disabled>
  <span class="sr-only">Carregando...</span>
  <svg class="spinner">...</svg>
</button>
```

### CSS para Acessibilidade

```css
/* ============================================ */
/* Focus visível customizado                    */
/* ============================================ */

*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ============================================ */
/* Screen reader only (oculta visualmente)      */
/* ============================================ */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ============================================ */
/* Skip to main content                         */
/* ============================================ */

.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  padding: var(--space-3) var(--space-4);
  background: var(--color-primary);
  color: var(--color-text-light);
  text-decoration: none;
  z-index: var(--z-modal);
}

.skip-link:focus {
  top: 0;
}
```

---

## Figma MCP — Sincronizando Design com Código

Se o projeto usa **Figma para designs**, use o MCP Figma para manter alinhamento:

### Fluxo Recomendado

1. **Design no Figma:** Use variáveis/componentes do Figma para definir design tokens
2. **Exporte com MCP Figma:** Extraia cores, tipografia, espaçamento, componentes
3. **Mapeie para CSS:** Converta tokens Figma → CSS variables (`:root`)
4. **Implemente:** Use Copilot com referência ao design Figma

### Exemplos de Uso

```
"Extraia as cores primária e secundária do Figma e gere CSS variables para :root"
"Use o componente 'Card' do Figma para gerar HTML semanticamente"
"Converta a tipografia do Figma (heading, body) em CSS variables"
"Implemente o layout 'Hero Section' do Figma usando CSS Grid"
```

### Benefícios

- ✅ **Consistência:** Design → Código sincronizados
- ✅ **Produtividade:** Evita manual copy-paste de valores
- ✅ **Manutenção:** Mudanças no Figma refletem automaticamente em variáveis
- ✅ **Documentação:** Design tokens salvos no código

---

## O que NÃO fazer — Anti-patterns

### CSS

- ❌ **Nunca usar `!important`** (exceto em reset e `prefers-reduced-motion`)
- ❌ **Nunca animar `width`, `height`, `margin`, `padding`, `top`, `left`**
- ❌ **Nunca usar valores hardcoded de cor, fonte ou espaçamento** (sempre variáveis)
- ❌ **Nunca misturar inline styles com classes CSS**
- ❌ **Nunca remover `outline` sem substituir por alternativa visível**
- ❌ **Nunca criar arquivos CSS > 300 linhas sem modularizar**
- ❌ **Nunca usar `float` para layout** (usar flexbox ou grid)
- ❌ **Nunca usar `px` para fontes** (usar `rem` ou variáveis fluidas)

### JavaScript

- ❌ **Nunca usar `var`** (sempre `const` ou `let`)
- ❌ **Nunca modificar prototypes nativos** (`Array.prototype.foo = ...`)
- ❌ **Nunca usar `eval()`, `Function()` constructor ou `innerHTML` com dados não sanitizados**
- ❌ **Nunca criar event listeners em loops sem delegation**
- ❌ **Nunca bloquear a thread principal** (usar Web Workers para processamento pesado)
- ❌ **Nunca depender de `setTimeout` para animações** (usar `requestAnimationFrame`)

### HTML

- ❌ **Nunca usar `<div>` onde existe tag semântica adequada**
- ❌ **Nunca omitir `alt` em imagens**
- ❌ **Nunca usar `<br>` para espaçamento** (usar CSS)
- ❌ **Nunca pular níveis de heading** (`h1` → `h3`)
- ❌ **Nunca usar mais de um `<h1>` por página**
- ❌ **Nunca usar `<button type="submit">` fora de `<form>`**



## Convenções de Commit (Conventional Commits)

```bash
# Features
git commit -m "feat: adiciona seção de depoimentos com carousel"
git commit -m "feat(menu): implementa filtro de categorias"

# Fixes
git commit -m "fix: corrige overflow horizontal no mobile"
git commit -m "fix(animations): resolve janky scroll no Safari"

# Styles
git commit -m "style: ajusta espaçamento do footer"
git commit -m "style(header): melhora contraste dos links"

# Refactor
git commit -m "refactor: converte valores hardcoded em variáveis"
git commit -m "refactor(js): extrai função initCarousel para módulo"

# Docs
git commit -m "docs: atualiza README com instruções de build"
git commit -m "docs(css): adiciona comentários aos tokens"

# Performance
git commit -m "perf: otimiza imagens convertendo para WebP"
git commit -m "perf(animations): usa will-change apenas ao animar"

# Accessibility
git commit -m "a11y: adiciona aria-labels aos botões de ícone"
git commit -m "a11y(forms): associa labels aos inputs"

# Chore
git commit -m "chore: atualiza .gitignore"
git commit -m "chore: remove arquivos não utilizados"
```

---

**Última atualização:** 2025
**Versão:** 2.0 — Genericizada
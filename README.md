# KB Burger Ninja

Landing page promocional da KB Burger, construída com **HTML5**, **CSS** e **JavaScript vanilla**.

## Problema que o projeto resolve

O cliente precisa de um canal digital claro e atrativo para apresentar seus produtos e campanhas. Sem uma página centralizada, promoções, novidades, opções do menu e informações sobre o aplicativo ficam dispersas, dificultando que o público descubra o que a marca oferece e encontre o próximo passo.

O projeto reúne esses conteúdos em uma única experiência responsiva: destaca o combo KB Ninja, organiza o acesso ao menu, às promoções e ao Kids Menu e apresenta o aplicativo da marca. Assim, a comunicação da campanha fica mais fácil de encontrar e de navegar em dispositivos móveis e desktop.

## Prévia

![Prévia da landing page KB Burger Ninja](./img/king%20burger%20ninja.JPG)

## 🚀 Stack

- **HTML5 semântico** (tags apropriadas, sem divs desnecessários)
- **CSS puro com Custom Properties** (variáveis, sem preprocessadores)
- **JavaScript vanilla ES6+** (sem bibliotecas externas)
- **Mobile-first + Progressive Enhancement**
- **WCAG 2.1 AA** (acessibilidade)

## 📁 Estrutura do Projeto

```
KB BURGER NINJA/
├── index.html          # Página principal
├── css/                # Estilos da página e componentes
├── js/                 # Interações JavaScript
├── public/
│   └── images/         # Imagens e ícones usados na página
├── img/                # Imagem de prévia para este README
├── .gitignore         # Arquivos a ignorar no git
└── README.md           # Documentação do projeto
```

## ⚡ Início Rápido

1. **Clonar ou baixar o projeto**
   ```bash
   git clone <repo-url>
   cd "KB BURGER NINJA"
   ```

2. **Abrir no navegador**
   - Abra `index.html` diretamente no navegador
   - Ou use um servidor local: `python -m http.server 8000` (Python 3)

## 🎨 Design System

### Tokens CSS (Custom Properties)

Todos os valores de cor, tipografia, espaçamento e animações são definidos em `:root`:

- **Cores:** Primária, secundária, backgrounds, textos
- **Tipografia:** Fonts, tamanhos fluidos, pesos, line-heights
- **Espaçamento:** Escala de 0.25rem a 8rem
- **Sombras:** De xs até xl + glow effect
- **Transições:** Fast, base, slow, spring
- **Z-index:** Hierarquia visual clara

### Variáveis Principais

```css
:root {
  --color-primary: #0066CC;
  --color-secondary: #D62300;
  --font-display: 'Titan One', cursive;
  --font-body: 'Open Sans', sans-serif;
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  /* ... mais variáveis */
}
```

## 🛠️ Desenvolvimento

### CSS Classes & Naming

- **BEM-like:** `.block__element--modifier`
- **kebab-case:** `.header-nav`, `.btn-primary`
- **Prefixos semânticos:** `.btn-`, `.card-`, `.hero-`

### JavaScript

- **ES6+:** Arrow functions, destructuring, template literals
- **Vanilla puro:** Sem jQuery, React, Vue
- **DRY:** Funções modulares e reutilizáveis
- **Acessibilidade:** ARIA labels, keyboard navigation

### Acessibilidade

- ✅ Navegação por teclado (Tab, Enter, Esc)
- ✅ ARIA labels em botões de ícone
- ✅ Contraste 4.5:1 para texto
- ✅ Focus visível sempre presente
- ✅ Screen reader friendly
- ✅ Imagens com `alt` descritivo

## 📱 Responsividade

Breakpoints (mobile-first):

- **Mobile:** < 640px (padrão)
- **Tablet:** ≥ 640px
- **Desktop:** ≥ 1024px
- **Wide:** ≥ 1280px

```css
/* Base = Mobile */
.container { padding: 1rem; }

/* Desktop */
@media (min-width: 1024px) {
  .container { padding: 2rem; }
}
```

## 🎬 Animações

Apenas **GPU-accelerated properties**:

- ✅ `transform` (translate, scale, rotate)
- ✅ `opacity`
- ✅ `filter`
- ❌ `width`, `height`, `margin`, `padding`, `top`, `left`

**IntersectionObserver** para scroll animations com `[data-animate]`.

## 📝 Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: adiciona seção de menu com grid responsivo"
git commit -m "fix: corrige overflow no mobile"
git commit -m "style: ajusta espaçamento do hero"
git commit -m "a11y: melhora contraste dos links"
```

## 📊 Performance

- **Lighthouse:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Animações:** 60fps (GPU accelerated)
- **Sem bloqueios:** `will-change`, `contain` estratégicos
- **Imagens otimizadas:** WebP com fallback

## 🤝 Contribuindo

1. Crie uma branch: `git checkout -b feature/sua-feature`
2. Commit com mensagens claras
3. Push: `git push origin feature/sua-feature`
4. Abra um Pull Request

## 📜 Licença

MIT

---

**Desenvolvido com ❤️ para hambúrgueres de qualidade.**

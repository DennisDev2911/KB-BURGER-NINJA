(function () {
  const section = document.querySelector(".ingredients-section");
  const title = section?.querySelector(".ingredients-title");
  const subtitle = section?.querySelector(".ingredients-subtitle");
  const cards = section ? Array.from(section.querySelectorAll(".card")) : [];

  if (!section || !title || !subtitle) return;

  // Fallback: navegadores sem IntersectionObserver mostram tudo imediatamente
  if (!("IntersectionObserver" in window)) {
    title.classList.add("is-visible");
    subtitle.classList.add("is-visible");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.12}s`;
      card.classList.add("is-visible");
    });
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        title.classList.add("is-visible");
        subtitle.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -20px 0px",
    },
  );

  sectionObserver.observe(section);

  const cardObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        const index = cards.indexOf(card);
        card.style.animationDelay = `${index * 0.12}s`;
        card.classList.add("is-visible");
        obs.unobserve(card);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -20px 0px",
    },
  );

  cards.forEach((card) => cardObserver.observe(card));
})();

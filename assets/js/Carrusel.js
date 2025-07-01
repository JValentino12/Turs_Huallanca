function iniciarCarrusel() {
  // === Carrusel Principal (Hero Section) ===
  const heroSlides = document.querySelectorAll(".hero-section .slide");
  const heroDots = document.querySelectorAll(".hero-pagination .dot");
  const heroPrev = document.querySelector(".hero-prev");
  const heroNext = document.querySelector(".hero-next");
  let heroIndex = 0;
  let heroInterval;

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      heroDots[i].classList.toggle("active", i === index);
    });
  }

  function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function prevHeroSlide() {
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function startHeroAutoSlide() {
    heroInterval = setInterval(nextHeroSlide, 4000);
  }

  function stopHeroAutoSlide() {
    clearInterval(heroInterval);
  }

  heroNext?.addEventListener("click", () => {
    stopHeroAutoSlide();
    nextHeroSlide();
    startHeroAutoSlide();
  });

  heroPrev?.addEventListener("click", () => {
    stopHeroAutoSlide();
    prevHeroSlide();
    startHeroAutoSlide();
  });

  heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopHeroAutoSlide();
      heroIndex = i;
      showHeroSlide(heroIndex);
      startHeroAutoSlide();
    });
  });

  if (heroSlides.length) {
    showHeroSlide(heroIndex);
    startHeroAutoSlide();
  }

  // === Carrusel de Historia y Cultura ===
  const historySlides = document.querySelectorAll(".carousel-history .slide-history");
  const historyDots = document.querySelectorAll(".history-pagination .dot");
  const historyPrev = document.querySelector(".history-prev");
  const historyNext = document.querySelector(".history-next");
  let historyIndex = 0;
  let historyInterval;

  function showHistorySlide(index) {
    historySlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      historyDots[i].classList.toggle("active", i === index);
    });
  }

  function nextHistorySlide() {
    historyIndex = (historyIndex + 1) % historySlides.length;
    showHistorySlide(historyIndex);
  }

  function prevHistorySlide() {
    historyIndex = (historyIndex - 1 + historySlides.length) % historySlides.length;
    showHistorySlide(historyIndex);
  }

  function startHistoryAutoSlide() {
    historyInterval = setInterval(nextHistorySlide, 5000);
  }

  function stopHistoryAutoSlide() {
    clearInterval(historyInterval);
  }

  historyNext?.addEventListener("click", () => {
    stopHistoryAutoSlide();
    nextHistorySlide();
    startHistoryAutoSlide();
  });

  historyPrev?.addEventListener("click", () => {
    stopHistoryAutoSlide();
    prevHistorySlide();
    startHistoryAutoSlide();
  });

  historyDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopHistoryAutoSlide();
      historyIndex = i;
      showHistorySlide(historyIndex);
      startHistoryAutoSlide();
    });
  });

  if (historySlides.length) {
    showHistorySlide(historyIndex);
    startHistoryAutoSlide();
  }
}

// Escuchar el evento de carga del header y ejecutar el carrusel
document.addEventListener("component-loaded-header-component", iniciarCarrusel);

// Por si acaso el header ya está cargado antes de que este JS se cargue
if (document.getElementById("header-component")?.innerHTML.trim()) {
  iniciarCarrusel();
}

const sectionHerEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    } else if (ent.isIntersecting) {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

observer.observe(sectionHerEl);

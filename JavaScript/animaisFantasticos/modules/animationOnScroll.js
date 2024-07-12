export default function animationOnScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length <= 0) return;

  const windowRef = window.innerHeight * 0.6;

  function animationScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowRef < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }

  animationScroll();

  window.addEventListener("scroll", animationScroll);
}

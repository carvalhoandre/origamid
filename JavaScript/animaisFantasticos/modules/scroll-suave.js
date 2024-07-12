export default function initScrollSuave() {
  const internalLinks = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  if (!internalLinks.length) return;

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* forma alternativa */
    //  const offsetTop = section.offsetTop;
    // window.scrollTo({
    //   top: offsetTop,
    //   behavior: "smooth",
    // });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

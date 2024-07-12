function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });

      const direction = tabContent[index].dataset.anime;

      tabContent[index].classList.add("ativo", direction);
    }

    tabMenu.forEach((tab, index) =>
      tab.addEventListener("click", () => activeTab(index))
    );
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const active = "ativo";

  if (!accordionList.length) return;

  accordionList[0].classList.toggle(active);
  accordionList[0].nextElementSibling.classList.toggle(active);

  function activeAccordion() {
    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

function initScrollSuave() {
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

const sections = document.querySelectorAll("[data-anime='scroll']");

function animationOnScroll() {
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

initTabNav();
initAccordion();
initScrollSuave();
animationOnScroll();

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((tab, index) =>
      tab.addEventListener("click", () => activeTab(index))
    );
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
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

initTabNav();
initAccordion();

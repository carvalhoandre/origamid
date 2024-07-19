export default function initAccordion() {
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

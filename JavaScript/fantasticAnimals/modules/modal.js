export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (buttonOpen && buttonClose && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("active");
    }

    function clickOutside(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    buttonOpen.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickOutside);
  }
}

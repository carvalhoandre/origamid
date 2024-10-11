export default class Modal {
  constructor(buttonOpen, buttonClose, modalContainer) {
    this.buttonOpen = buttonOpen;
    this.buttonClose = buttonClose;
    this.modalContainer = modalContainer;

    //bind para a callback
    this.clickOutside = this.clickOutside.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("active");
  }

  eventToggleModal(event) {
    event.preventDefault();

    this.toggleModal();
  }

  clickOutside(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addModalEvent() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutside);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.modalContainer) {
      this.addModalEvent();
    }

    return this;
  }
}

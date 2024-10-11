import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);

    this.events = events || ["click", "touchstart"];
    this.active = "active";

    this.addDropdownMenuEvent = this.addDropdownMenuEvent.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const element = event.currentTarget;

    element.classList.toggle(this.active);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.active);
    });
  }

  addDropdownMenuEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (!this.dropDownMenus.length > 0) return;

    this.addDropdownMenuEvent();

    return this;
  }
}

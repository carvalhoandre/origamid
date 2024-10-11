import outsideClick from "./outsideClick.js";

export default class MobileMenu {
  constructor(events, menuButton, menuList) {
    this.events = events || ["click", "touchstart"];
    this.menuButton = menuButton;

    this.active = "active";

    this.menuList = menuList;

    this.addMenuMobileEvents = this.addMenuMobileEvents.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);

    outsideClick(this.menuList, events, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (!this.menuButton || !this.menuList) return;

    addMenuMobileEvents();

    return this;
  }
}

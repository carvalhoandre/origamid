import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  const events = ["click", "touchstart"];

  function handleClick(event) {
    event.preventDefault();

    this.classList.toggle("active");

    outsideClick(this, events, () => {
      this.classList.remove("active");
    });
  }

  if (dropDownMenus.length > 0) {
    dropDownMenus.forEach((menu) => {
      events.forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  const events = ["click", "touchstart"];

  if (dropDownMenus.length > 0) {
    function handleClick(event) {
      event.preventDefault();

      this.classList.toogle("active");
    }

    dropDownMenus.forEach((menu) => {
      events.forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}

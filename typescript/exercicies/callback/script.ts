// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

function activeMenu(menu: HTMLElement) {
  menu.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-label", "Fechar Menu");
}

function inactiveMenu(menu: HTMLElement) {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Abrir Menu");
}

function toggleMenu(event: PointerEvent) {
  const nav = document.getElementById("nav");
  const button = event.currentTarget;

  if (!nav) return;

  const isActiveMenu = nav.classList.contains("active");

  nav.classList.toggle("ativo");

  if (button instanceof HTMLElement) {
    isActiveMenu ? inactiveMenu(button) : activeMenu(button);
  }
}

const button = document.getElementById("btn-mobile");

if (button) button.addEventListener("pointerdown", toggleMenu);

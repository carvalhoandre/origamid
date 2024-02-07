// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const url = location.href;

  if (url.includes(link.href)) {
    link.classList.add("active");
  }
});

// Ativar items do orcamento
const params = new URLSearchParams(location.search);

params.forEach((param) => {
  const element = document.getElementById(param);

  if (element) element.checked = true;
});

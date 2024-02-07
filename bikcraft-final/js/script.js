const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const url = location.href;

  if (url.includes(link.href)) {
    link.classList.add("active");
  }
});

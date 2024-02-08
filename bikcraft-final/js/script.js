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

// questions
const questions = document.querySelectorAll(".questions button");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const questionEvent = event.currentTarget;
    const controls = questionEvent.getAttribute("aria-controls");
    const response = document.getElementById(controls);

    response.classList.toggle('active');
    const isActive = response.classList.contains('active');
    questionEvent.setAttribute('aria-expanded', isActive);
  });
});


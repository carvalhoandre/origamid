export default function initNumbers() {
  function animaNumbers() {
    const allNumbers = document.querySelectorAll("[data-number]");

    allNumbers.forEach((number) => {
      const sun = +number.innerText;
      const increment = Math.floor(sun / 100);
      let start = 0;

      const timer = setInterval(() => {
        start = start + increment;

        number.innerText = start;

        if (start > sun) {
          number.innerText = sun;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}

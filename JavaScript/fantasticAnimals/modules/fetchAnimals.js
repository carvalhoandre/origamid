import AnimaNumbers from "./numbers.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnmails(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);

        numbersGrid.appendChild(divAnimal);
      });

      const animaNumbers = new AnimaNumbers();
      animaNumbers.init("[data-number]", ".numbers", "ativo");
      initNumbers();
    } catch (error) {
      console.warn(error);
    }
  }

  fetchAnmails(
    "http://127.0.0.1:5500/JavaScript/automation/modules/animals.json"
  );
}

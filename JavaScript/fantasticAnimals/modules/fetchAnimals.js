import AnimaNumbers from "./numbers.js";

export default function fetchAnimals(url, target) {
  function createSunAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  const numbersGrid = document.querySelector(target);

  function toFillAnimals(animal) {
    const divAnimal = createSunAnimal(animal);

    numbersGrid.appendChild(divAnimal);
  }

  function animaAnimalsNumbers() {
    const animaNumbers = new AnimaNumbers();
    animaNumbers.init("[data-number]", ".numbers", "ativo");
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => toFillAnimals(animal));

      animaAnimalsNumbers();
      initNumbers();
    } catch (error) {
      console.warn(error);
    }
  }

  return createAnimals();
}

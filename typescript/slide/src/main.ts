import Slide from "./Slide";

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elemets");
const controls = document.getElementById("slide-elemets");

if (container && elements && elements.children.length && controls) {
  const newSlide = new Slide(
    container,
    Array.from(elements.children),
    controls,
    3000
  );
}

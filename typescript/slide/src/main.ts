import Slide from "./classes/Slide";

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");

if (container && elements && elements.children.length && controls) {
  new Slide(container, Array.from(elements.children), controls, 3000);
}

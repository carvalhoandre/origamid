export default class Slide {
  container: Element;
  slides: Array<Element>;
  controls: Element;
  time: number;
  index: number;
  slide: Element;

  constructor(
    container: Element,
    slides: Array<Element>,
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.index = 0;
    this.slide = this.slides[this.index];

    this.init();
  }

  hideElement(element: Element) {
    element.classList.remove("active");
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];

    this.slides.forEach((slide) => this.hideElement(slide));

    this.slide.classList.add("active");
  }

  private next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;

    this.show(next);
  }

  private prev() {
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;

    this.show(prev);
  }

  private addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    prevButton.innerText = "Slide Anterior";
    nextButton.innerText = "Próximo Slide";

    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);

    nextButton.addEventListener("pointerup", () => this.next());
    prevButton.addEventListener("pointerup", () => this.prev());
  }

  private init() {
    this.addControls();

    this.show(this.index);
  }
}

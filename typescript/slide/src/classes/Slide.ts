import Timeout from "./Timeout";

export default class Slide {
  container: Element;
  slides: Array<Element>;
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  pausedTimeout: Timeout | null;
  paused: boolean;

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
    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;

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

    this.auto(this.time);
  }

  auto(time: number) {
    this.timeout?.clear();

    this.timeout = new Timeout(() => this.next(), time);
  }

  private next() {
    if (this.paused) return;

    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;

    this.show(next);
  }

  private prev() {
    if (this.paused) return;

    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;

    this.show(prev);
  }

  private pause() {
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause();
      this.paused = true;
    }, 300);
  }

  private continue() {
    this.pausedTimeout?.clear();

    if (this.paused) {
      this.paused = false;
      this.timeout?.continue();
    }
  }

  private addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    prevButton.innerText = "Slide Anterior";
    nextButton.innerText = "Próximo Slide";

    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);

    this.controls.addEventListener("pointerdown", () => this.pause());
    this.controls.addEventListener("pointerup", () => this.continue());

    nextButton.addEventListener("pointerup", () => this.next());
    prevButton.addEventListener("pointerup", () => this.prev());
  }

  private init() {
    this.addControls();

    this.show(this.index);
  }
}

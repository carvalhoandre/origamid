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

    this.show(this.index);
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
}

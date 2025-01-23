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
  thumbItems: Array<HTMLElement> | null;
  thumb: HTMLElement | null;

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

    this.index = Number(localStorage.getItem("activeSlide")) || 0;
    this.slide = this.slides[this.index];
    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;
    this.thumbItems = [];
    this.thumb = null;

    this.init();
  }

  hideElement(element: Element) {
    element.classList.remove("active");

    if (element instanceof HTMLVideoElement) {
      element.pause();
      element.currentTime = 0;
    }
  }

  autoVideo(video: HTMLVideoElement) {
    video.muted = true;
    video.play();

    let firstPlay = true;

    video.addEventListener("playing", () => {
      if (firstPlay) this.auto(video.duration * 1000);

      firstPlay = false;
    });
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    localStorage.setItem("activeSlide", String(this.index));

    if (this.thumbItems) {
      this.thumb = this.thumbItems[this.index];
      this.thumbItems.forEach((el) => el.classList.remove("active"));
      this.thumb.classList.add("active");
    }

    this.slides.forEach((slide) => this.hideElement(slide));

    this.slide.classList.add("active");

    if (this.slide instanceof HTMLVideoElement) {
      return this.autoVideo(this.slide);
    }

    this.auto(this.time);
  }

  auto(time: number) {
    this.timeout?.clear();

    this.timeout = new Timeout(() => this.next(), time);

    if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
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
      this.thumb?.classList.add("paused");

      if (this.slide instanceof HTMLVideoElement) this.slide.pause();
    }, 300);
  }

  private continue() {
    this.pausedTimeout?.clear();

    if (this.paused) {
      this.paused = false;
      this.timeout?.continue();
      this.thumb?.classList.remove("paused");

      if (this.slide instanceof HTMLVideoElement) this.slide.play();
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

  private addThumbItems() {
    const thumbContainer = document.createElement("div");
    thumbContainer.id = "slide-thumb";

    for (let i = 0; i < this.slides.length; i++) {
      thumbContainer.innerHTML += `<span><span class="thumb-item"></span></span>`;
    }

    this.controls.appendChild(thumbContainer);
    this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
  }

  private init() {
    this.addControls();
    this.addThumbItems();
    this.show(this.index);
  }
}

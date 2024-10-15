import debounce from "./debounce.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
      movePosition: 0,
    };
    this.activeSlideIndex = 0;
    this.slidesArray = [];
    this.activeClass = "active";
    this.slideChangeThreshold = 120; // Configurable movement threshold for slide change
  }

  // Handles slide transition with configurable speed
  transition(active, duration = 0.3) {
    this.slide.style.transition = active ? `transform ${duration}s` : "";
  }

  // Moves the slide to the given X position
  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  // Updates the slide's position based on pointer movement
  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  // Handles the start of the slide movement (mousedown or touchstart)
  onStart(event) {
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      this.wrapper.addEventListener("mousemove", this.onMove);
    } else {
      event.preventDefault();
      this.dist.startX = event.changedTouches[0].clientX;
      this.wrapper.addEventListener("touchmove", this.onMove);
    }

    this.transition(false); // Disable transition during movement
  }

  // Handles the slide movement (mousemove or touchmove)
  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;

    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  // Handles the end of the slide movement (mouseup or touchend)
  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;

    this.transition(true); // Re-enable transition
    this.changeSlideOnEnd();
  }

  // Determines whether to change slide based on movement
  changeSlideOnEnd() {
    if (
      this.dist.movement > this.slideChangeThreshold &&
      this.index.next !== undefined
    ) {
      this.activeNextSlide();
    } else if (
      this.dist.movement < -this.slideChangeThreshold &&
      this.index.prev !== undefined
    ) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  // Adds slide event listeners for both mouse and touch events
  addSlideEvents() {
    ["mousedown", "touchstart"].forEach((event) => {
      this.wrapper.addEventListener(event, this.onStart);
    });
    ["mouseup", "touchend"].forEach((event) => {
      this.wrapper.addEventListener(event, this.onEnd);
    });
  }

  // Calculates the central position of a slide
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  // Configures all slides and calculates their positions
  slidesConfig() {
    this.slidesArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { element, position };
    });
  }

  // Updates the slide index navigation
  slideIndexNav(index) {
    const last = this.slidesArray.length - 1;
    this.index = {
      prev: index > 0 ? index - 1 : undefined,
      active: index,
      next: index < last ? index + 1 : undefined,
    };
  }

  // Changes the active slide
  changeSlide(index) {
    const activeSlide = this.slidesArray[index];
    this.moveSlide(activeSlide.position);

    this.slideIndexNav(index);

    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
  }

  // Updates the active class on slides
  changeActiveClass() {
    this.slidesArray.forEach((item) =>
      item.element.classList.remove(this.activeClass)
    );
    this.slidesArray[this.index.active].element.classList.add(this.activeClass);
  }

  // Activates the previous slide
  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  // Activates the next slide
  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  // Binds the event handler functions to the current context
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 50);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
  }

  // Initializes the slide functionality
  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.transition(true); // Initial transition on
    this.slidesConfig();
    this.changeSlide(this.activeSlideIndex); // Start at the active slide
    this.changeSlide(0);
    return this;
  }
}

export class SlideNav extends Slide {
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);

    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }
}

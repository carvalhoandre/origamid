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
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
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
      this.dist.startX = event.changedTouches[0].clientX;
      this.wrapper.addEventListener("touchmove", this.onMove);
    }

    this.transition(false);
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

    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < 120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  // Adds slide event listeners for both mouse and touch events
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  // Binds the event handler functions to the current context
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
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

  slideIndexNav(index) {
    const last = this.slidesArray.length - 1;

    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slidesArray[index];
    this.moveSlide(activeSlide.position);

    this.slideIndexNav(index);

    this.dist.finalPosition = activeSlide.position;
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  // Initializes the slide functionality
  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.transition(true);
    this.slidesConfig();
    this.moveSlide(this.slidesArray[this.activeSlideIndex].position);
    return this;
  }
}

import debounce from "./debounce";

export default class animationOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowRef = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.windowRef),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (!this.sections.length) return;

    this.getDistance();

    this.checkDistance();

    window.addEventListener("scroll", this.checkDistance);

    return this;
  }

  stop() {
    window.remove("scroll", this.checkDistance);
  }
}

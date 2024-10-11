export default class initTooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";

    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();

    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipsEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }

    return this;
  }
}

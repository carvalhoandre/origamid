export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips.length > 0) {
    function createTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");

      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;

      document.body.appendChild(tooltipBox);

      return tooltipBox;
    }

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.tooltipBox.removeEventListener("mouseleave", onMouseLeave);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
        this.tooltipBox.removeEventListener("mousemove", onMouseMove);
      },
    };

    function onMouseOver(event) {
      const tooltipBox = createTooltipBox(this);

      onMouseLeave.element = this;
      onMouseLeave.tooltipBox = tooltipBox;
      this.addEventListener("mouseleave", onMouseLeave);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);
    }

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}

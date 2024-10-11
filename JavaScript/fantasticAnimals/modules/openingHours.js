export default class OpeningHours {
  constructor(opening, activeClass) {
    this.activeClass = activeClass || "open";
    this.opening = opening;

    this.activeOpen = this.activeOpen.bind(this);
  }

  dataOpening() {
    this.daysWeek = this.opening.dataset.week.split(",").map(Number);
    this.hourWeek = this.opening.dataset.hour.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = dateNow.getDay();
    this.hourNow = dateNow.getUTCHours() - 3;
  }

  isOpen() {
    this.isWeekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;

    this.isHourOpen =
      this.hourNow >= this.hourWeek[0] && this.hourNow < this.hourWeek[1];

    return this.isWeekOpen && this.isHourOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.opening.classList.add(this.activeClass);
    }
  }

  init() {
    if (!this.opening) return;

    this.dataOpening();
    this.dataNow();
    this.activeOpen();

    return this;
  }
}

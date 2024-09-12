export default function openingHours() {
  const opening = document.querySelector("[data-week]");

  if (!opening) return;

  const daysWeek = opening.dataset.week.split(",").map(Number);
  const hourWeek = opening.dataset.hour.split(",").map(Number);

  const dateNow = new Date();

  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const isWeekOpen = daysWeek.indexOf(dayNow) !== -1;

  const isHourOpen = hourNow >= hourWeek[0] && hourNow < hourWeek[1];

  if (isHourOpen && isWeekOpen) {
    opening.classList.add("open");
  }
}

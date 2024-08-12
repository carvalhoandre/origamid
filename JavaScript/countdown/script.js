import Countdown from "./countdown.js";

const timeUntilChristmas = new Countdown("24 December 2024 23:59:59 GMT-0300");

setInterval(() => {
  console.log(timeUntilChristmas._total);
}, 1000);

import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import TabNav from "./modules/initTabNav.js";
import initMobileMenu from "./modules/mobileMenu.js";
import openingHours from "./modules/openingHours.js";
import Accordion from "./modules/initiAccordion.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import animationOnScroll from "./modules/animationOnScroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimals(
  "http://127.0.0.1:5500/JavaScript/automation/modules/animals.json",
  ".numeros-grid"
);

openingHours();
initMobileMenu();
initDropdownMenu();
initFetchBitcoin();
initFetchAnimals();
animationOnScroll();

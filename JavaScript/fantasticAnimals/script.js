import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import TabNav from "./modules/initTabNav.js";
import MobileMenu from "./modules/mobileMenu.js";
import openingHours from "./modules/openingHours.js";
import Accordion from "./modules/initiAccordion.js";
import ScrollSuave from "./modules/scrollSuave.js";
import DropdownMenu from "./modules/dropdownMenu.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import ScrollAnima from "./modules/scrollAnima.js";

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

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-anime='scroll']");
dropdownMenu.init("[data-dropdown]", ["click", "touchstart"]);

const mobileMenu = new MobileMenu("[data-anime='scroll']");
mobileMenu.init(
  ["click", "touchstart"],
  '[data-menu="button"]',
  '[data-menu="list"]'
);

fetchAnimals(
  "http://127.0.0.1:5500/JavaScript/automation/modules/animals.json",
  ".numeros-grid"
);

fetchBitcoin("https://blockchain.info/ticker", ".btc-price");

openingHours();

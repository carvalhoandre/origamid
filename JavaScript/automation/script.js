import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initTabNav from "./modules/initTabNav.js";
import initMobileMenu from "./modules/mobileMenu.js";
import openingHours from "./modules/openingHours.js";
import initAccordion from "./modules/initiAccordion.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import initFetchAnimals from "./modules/fetchAnimals.js";
import animationOnScroll from "./modules/animationOnScroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initModal();
initTabNav();
initTooltip();
openingHours();
initAccordion();
initMobileMenu();
initScrollSuave();
initDropdownMenu();
initFetchBitcoin();
initFetchAnimals();
animationOnScroll();

import {vhFix} from './modules/vh-fix';
import {initHeaderThemeChange} from './modules/init-change-header-bg';
import {initExhibitionsSlider} from './modules/exhibitions-slider.js';
import {initIntroSlider} from './modules/intro-slider.js';
import {initYMaps} from './modules/ymaps.js';
import {initArtPictureAnimation} from './modules/art-picture-animation';
import {initParallax} from './modules/parallax';
import {scrollToBlock} from './modules/scroll-to-block';
import {initSmoothScroller} from './modules/smooth-scroller.js';
import {initSplitting} from './modules/splitting.js';
import {initLampInstallationAnimation} from './modules/lamp-installation-animation.js';

// ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {
export function renderContent() {

  // Utils
  // ---------------------------------
  vhFix();

  // Modules
  // ---------------------------------


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  scrollToBlock();
  initIntroSlider();
  initSmoothScroller();
  initExhibitionsSlider();
  initSplitting();
  initHeaderThemeChange();

  initArtPictureAnimation();
  initParallax();
  initLampInstallationAnimation();
  initYMaps();
  // });
}

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

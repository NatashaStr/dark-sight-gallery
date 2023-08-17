import {renderContent} from '../main.js';
import {vhFix} from './vh-fix.js';
import {gsap} from '../vendor/gsap.min.js';

const container = document.querySelector('[data-page-loader]');
const pageScroller = document.querySelector('body');

vhFix();

const initPreloader = () => {
  if (!container) {
    return;
  }

  let timeline = null;

  const setAnimation = () => {

    timeline = gsap.timeline({repeat: -1});
    timeline.to('.preloader__image-wrapper', {scaleX: 1.64, rotation: 0.05, duration: 2, ease: 'none'});
    timeline.to('.preloader__image-wrapper', {scaleX: 1, rotation: 0.05, duration: 2, ease: 'none'});
    timeline.to('.preloader__image-wrapper', {rotate: -180, rotation: 0.01, duration: 2, ease: 'none'});
  };

  document.querySelector('.preloader__image-wrapper').style.opacity = 1;
  setAnimation();

  const resize = () => {
    timeline.seek(0); // обязательно отматываем анимацию к началу, т.к. инлайновые значения останутся и сломают новую инициализацию
    timeline.kill(); // убиваем таймлайн
    setAnimation(); // инициализируем таймлайн заново
  };

  const resizeObserver = new ResizeObserver(() => resize()); // создаем обсервер. При срабатывании будет вызываться функция resize()
  resizeObserver.observe(document.documentElement); // обсервер будет отсматривать изменения document.documentElement (тег html)
};

const off = () => {
  setTimeout(() => {
    pageScroller.classList.remove('scroll-lock-ios');
    container.classList.add('is-hidden');
    renderContent();
  }, 6000);
};
window.addEventListener('load', off);

setTimeout(() => {
  initPreloader();
}, 100
);

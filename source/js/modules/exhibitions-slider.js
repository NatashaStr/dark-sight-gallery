import Swiper from '../vendor/swiper.js';
import {gsap} from '../vendor/gsap.min.js';
import {ScrollTrigger} from '../vendor/scroll-trigger.min.js';

const MAX_TABLET_WIDTH = 1023;
let mySwiper = null;
let scrollAnimation = null;

const breakpoint = window.matchMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`);
const sectionWrapper = document.querySelector('.main-events');

const getDesktopSlider = () => {
  if (scrollAnimation) {
    scrollAnimation.kill();
  }
  gsap.registerPlugin(ScrollTrigger);
  if (sectionWrapper) {
    const section = sectionWrapper.querySelector('[data-section="horizontal"]');
    const content = section.querySelector('[data-section="content"]');

    const contentRect = content.getBoundingClientRect();
    sectionWrapper.style.minHeight = contentRect.width + 'px';
    sectionWrapper.querySelector('.main-events__container').style.top = '2.5rem';

    const horizontalTween = gsap.to(content, {
      x: () => -contentRect.width / 2 - 10,
      ease: 'ease',
    });

    scrollAnimation = ScrollTrigger.create({
      trigger: sectionWrapper,
      start: '20% 200px',
      end: '100% bottom-=200px',
      scrub: true,
      animation: horizontalTween,
    });
  }
};

const initMobileSlider = () => {
  if (sectionWrapper) {
    sectionWrapper.style.minHeight = 'auto';
    mySwiper = new Swiper('.main-events__list-wrapper', {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.main-events__button--next',
        prevEl: '.main-events__button--prev',
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },
    });
  }
};

const initExhibitionsSlider = () => {
  if (breakpoint.matches) {
    window.removeEventListener('resize', getDesktopSlider);
    if (scrollAnimation) {
      scrollAnimation.kill();
    }
    initMobileSlider();
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
    getDesktopSlider();
    window.addEventListener('resize', getDesktopSlider);
  }
};

breakpoint.addEventListener('change', initExhibitionsSlider);

export {initExhibitionsSlider};

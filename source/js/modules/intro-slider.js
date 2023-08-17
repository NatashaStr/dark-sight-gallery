import Swiper from '../vendor/swiper.js';
import {removeBurgerColorClass, addBurgerColorClass} from './change-burger-class.js';
import {removeLogoColorClass, addLogoColorClass} from './change-logo-class.js';

const introSwiper = document.querySelector('.intro__swiper');
const introTextContainer = document.querySelector('.intro__text-container');

const addIntroTextContainerColorClass = () => {
  if (introTextContainer) {
    introTextContainer.classList.add('intro__text-container--bright');
  }
};

const removeIntroTextContainerColorClass = () => {
  if (introTextContainer && introTextContainer.classList.contains('intro__text-container--bright')) {
    introTextContainer.classList.remove('intro__text-container--bright');
  }
};

export const initIntroSlider = () => {
  return new Swiper(introSwiper, {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.intro__swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      clickable: true,
    },
    on: {
      slideNextTransitionStart() {
        const activeSlideIndex = this.activeIndex;
        if (activeSlideIndex === 3 || activeSlideIndex === 6) {
          addBurgerColorClass('white');
          addLogoColorClass('white');
          addIntroTextContainerColorClass();
        } else {
          removeBurgerColorClass('white');
          removeLogoColorClass('white');
          removeIntroTextContainerColorClass();
        }
      },
      slidePrevTransitionStart() {
        const activeSlideIndex = this.activeIndex;
        if (activeSlideIndex === 3 || activeSlideIndex === 6 || activeSlideIndex === 0) {
          addBurgerColorClass('white');
          addLogoColorClass('white');
          addIntroTextContainerColorClass();
        } else {
          removeBurgerColorClass('white');
          removeLogoColorClass('white');
          removeIntroTextContainerColorClass();
        }
      },
    },
  });
};

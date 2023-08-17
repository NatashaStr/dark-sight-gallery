import {Burger} from './burger';


export const scrollToBlock = () => {
  const anchorElements = document.querySelectorAll('[data-scroll-to-block]');

  const burger = new Burger();
  burger.init();


  if (anchorElements) {
    anchorElements.forEach((anchor) => {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault();
        let href = anchor.getAttribute('href');

        const scrollTarget = document.querySelector(href);
        if (scrollTarget && window.innerWidth < 1023) {
          burger._closeMenu();
          scrollTarget.style.scrollMarginTop = '0.6667rem';
          if (href === '#exhibitions') {
            scrollTarget.style.scrollMarginTop = '0';
            if (window.innerWidth < 767) {
              scrollTarget.style.scrollMarginTop = '4vw';
            }
          }
          scrollTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else if (scrollTarget) {
          scrollTarget.style.scrollMarginTop = '-3rem';
          if (href === '#exhibitions') {
            const contentRect = scrollTarget.getBoundingClientRect();
            scrollTarget.style.scrollMarginTop = '-' + (contentRect.width / 2 - 440) + 'px';
          }
          if (href === '#map') {
            scrollTarget.style.scrollMarginTop = '-2.4rem';
          }
          scrollTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }
};

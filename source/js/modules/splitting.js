import Splitting from '../vendor/splitting.min.js';

const MAX_WIDTHS = {
  TABLET: 1023,
  MOBILE: 767,
};
const ANIMATION_STYLE_CLASSES = {
  MOBILE: 'splitting-block-mobile-animated',
  TABLET: 'splitting-block-tablet-animated',
  DESKTOP: 'splitting-block-desktop-animated',
};
const mobileBreakpoint = window.matchMedia(`(max-width: ${MAX_WIDTHS.MOBILE}px)`);
const tabletBreakpoint = window.matchMedia(`(min-width: ${MAX_WIDTHS.MOBILE + 1}px) and (max-width: ${MAX_WIDTHS.TABLET}px)`);

const splittingBlock = document.querySelector('.splitting-block');

const initSplitting = () => {
  if (splittingBlock) {
  // eslint-disable-next-line
    Splitting({
      target: '[data-splitting]',
      by: 'chars',
      key: null,
    });
    splittingBlock.classList.remove(...Object.values(ANIMATION_STYLE_CLASSES));
    if (mobileBreakpoint.matches) {
      splittingBlock.classList.add(ANIMATION_STYLE_CLASSES.MOBILE);
    } else if (tabletBreakpoint.matches) {
      splittingBlock.classList.add(ANIMATION_STYLE_CLASSES.TABLET);
    } else {
      splittingBlock.classList.add(ANIMATION_STYLE_CLASSES.DESKTOP);
    }
  }
};

mobileBreakpoint.addEventListener('change', initSplitting);
tabletBreakpoint.addEventListener('change', initSplitting);

export {initSplitting};

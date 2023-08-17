import {gsap} from '../vendor/gsap.min.js';
import {ScrollTrigger} from '../vendor/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const isElementInViewport = (el) => {
  const elementTop = el.offsetTop;
  const viewportTop = document.documentElement.scrollTop;
  const viewportHeight = document.documentElement.clientHeight;
  return elementTop <= viewportTop + viewportHeight;
};

const getMaxWidth = (blocks) => {
  let maxWidth = 0;
  blocks.forEach((block) => {
    maxWidth += block.offsetWidth;
  });
  return maxWidth;
};

const getObjectFromString = (str) => {
  if (str.indexOf('clipPath') !== -1) {
    const arr = str.split(':');
    return {clipPath: arr[1]};
  }
  return str.split(',').map((keyVal) => {
    return keyVal.split(':').map((_) => _.trim());
  }).reduce((accumulator, currentValue) => {
    accumulator[currentValue[0]] = isNaN(Number(currentValue[1])) ? currentValue[1] : Number(currentValue[1]);
    return accumulator;
  }, {});
};

function getAnimationObject(el) {
  const obj = {};
  obj.direction = el.dataset.animationDirection;
  obj.duration = +el.dataset.animationDuration || 1;
  obj.delay = +el.dataset.animationDelay || 0;
  obj.position = el.dataset.position;
  obj.element = el;
  obj.animation = getObjectFromString(el.dataset.animation.toString());
  return obj;
}

const initSmoothScroller = () => {
  const sections = Array.from(document.querySelectorAll('[data-section-animation]'));
  if (isElementInViewport(sections[0])) {
    sections.splice(0, 1);
  }

  sections.forEach((section) => {
    const blocks = gsap.utils.toArray(section.querySelectorAll('[data-animation]')).sort((a, b) => {
      const aIndex = +a.dataset.index || 1;
      const bIndex = +b.dataset.index || 1;
      return aIndex - bIndex;
    });

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: section.dataset.start,
        end: section.hasAttribute('data-end') ? section.dataset.end : () => `+=${getMaxWidth(blocks)}`,
        scrub: section.dataset.scrub ? Number(section.dataset.scrub) : 1.5,
        pin: section.hasAttribute('data-pin'),
        pinSpacing: section.hasAttribute('data-pin-spacing'),
      },
    });

    blocks.forEach((block) => {
      const obj = getAnimationObject(block);
      if (obj.position) {
        tl[obj.direction](obj.element, Object.assign({
          duration: obj.duration,
          delay: obj.delay,
        }, obj.animation), obj.position);
      } else {
        tl[obj.direction](obj.element, Object.assign({duration: obj.duration, delay: obj.delay}, obj.animation));
      }
    });
  });
};

export {initSmoothScroller};

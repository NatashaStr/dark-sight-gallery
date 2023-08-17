import {gsap} from '../vendor/gsap.min.js';

const bustWrapper = document.querySelector('.sculptures__bust-wrapper');
const handWrapper = document.querySelector('.sculptures__hand-wrapper');

const initParallax = () => {
  if (bustWrapper && handWrapper) {

    let timeline = null;

    const setAnimation = () => {
      timeline = gsap.timeline({repeat: -1});
      timeline.fromTo(bustWrapper, {
        y: '70%',
      },
      {
        y: '-70%',
        scrollTrigger: {
          trigger: bustWrapper,
          start: 'top-=70% bottom',
          end: 'bottom+=70% top',
          scrub: 1,
        },
      });

      timeline.fromTo(handWrapper, {
        y: '-50%',
      },
      {
        y: '110%',
        scrollTrigger: {
          trigger: handWrapper,
          start: 'center bottom',
          end: 'bottom+=230% top',
          scrub: 1,
        },
      });
    };

    setAnimation();

    const resize = () => {
      if (timeline) {
        timeline.seek(0).kill();
        gsap.set(timeline, {clearProps: 'transform'});
        timeline = null;
      }
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(document.documentElement);
  }
};

export {initParallax};

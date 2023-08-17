import {gsap} from '../vendor/gsap.min.js';

const parallaxImageWrapper = document.querySelector('.art-picture__parallax-image-wrapper');
const image = document.querySelector('.art-picture__parallax-image-wrapper img');

export const initArtPictureAnimation = () => {
  if (parallaxImageWrapper && image) {
    const parallax = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxImageWrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    parallax.to(image, {scale: 1.05, y: '-15%'});
  }
};

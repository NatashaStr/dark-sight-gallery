import {gsap} from '../vendor/gsap.min.js';

const artLampInstallationWrapper = document.querySelector('.art__lamp-installation-wrapper');
const lamps = document.querySelector('.art__lamp-installation-wrapper svg');
const MAX_TABLET_WIDTH = 1023;
let mouseCords = {
  x: 0,
  y: 0,
};

const handleMouseMove = (e) => {
  mouseCords.x = e.clientX - window.innerWidth / 2;
  mouseCords.y = e.clientY - window.innerHeight / 2;
};

export const initLampInstallationAnimation = () => {
  if (window.innerWidth > MAX_TABLET_WIDTH) {
    if (artLampInstallationWrapper && lamps) {
      artLampInstallationWrapper.addEventListener('mousemove', handleMouseMove);

      const lampsMovement = lamps.dataset.movement;
      const lampsMovementDuration = lamps.dataset.duration;

      gsap.to(lamps, {
        x: mouseCords.x / lampsMovement,
        y: mouseCords.y / lampsMovement,
        duration: lampsMovementDuration,
        ease: 'power1.out',
      });
    }
  }
};

gsap.ticker.add(initLampInstallationAnimation);

const headerLogo = document.querySelector('[data-header-logo]');

export const addLogoColorClass = (color) => {
  if (headerLogo) {
    headerLogo.classList.add(`is-${color}`);
  }
};

export const removeLogoColorClass = (color) => {
  if (headerLogo) {
    headerLogo.classList.remove(`is-${color}`);
  }
};

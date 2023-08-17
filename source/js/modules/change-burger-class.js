const burgerMenuIcon = document.querySelector('[data-burger]');

export const addBurgerColorClass = (color) => {
  if (burgerMenuIcon) {
    burgerMenuIcon.classList.add(`is-${color}`);
  }
};

export const removeBurgerColorClass = (color) => {
  if (burgerMenuIcon) {
    burgerMenuIcon.classList.remove(`is-${color}`);
  }
};

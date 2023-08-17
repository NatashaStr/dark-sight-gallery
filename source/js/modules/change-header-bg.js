export class HeaderTheme {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._burger = document.querySelector('[data-burger]');
    this._logo = document.querySelector('[data-header-logo]');

    this._themeItems = document.querySelectorAll('[data-header-theme-class]');
    this._activeTheme = null;

    this._colorToggleItems = document.querySelectorAll('[data-toggle-color-class]');
    this._activeToggleColor = null;

    this._colorTextItems = document.querySelectorAll('[data-toggle-color-class]');
    this._activeTextColor = null;

    this._onWindowScroll = this._onWindowScroll.bind(this);
  }

  init() {
    if (!this._header) {
      return;
    }
    this._checkTheme();
    this._checkLogoColor();
    this._checkBurgerColor();
    window.addEventListener('scroll', this._onWindowScroll);
  }

  _onWindowScroll() {
    this._checkTheme();
    this._checkLogoColor();
    this._checkBurgerColor();
  }

  _checkTheme() {
    this._themeItems.forEach((item) => {
      if (item.getBoundingClientRect().top <= this._header.offsetHeight && item.getBoundingClientRect().height + item.getBoundingClientRect().top > this._header.offsetHeight) {
        if (this._activeTheme === item.dataset.headerThemeClass) {
          return;
        }
        this._header.classList.remove(this._activeTheme);
        this._activeTheme = item.dataset.headerThemeClass;
        this._header.classList.add(this._activeTheme);
      }
    });
  }

  _checkLogoColor() {
    this._colorTextItems.forEach((item) => {
      if (item.getBoundingClientRect().top <= this._header.offsetHeight && item.getBoundingClientRect().height + item.getBoundingClientRect().top > this._header.offsetHeight) {
        if (this._activeTextColor === item.dataset.toggleColorClass) {
          return;
        }
        if (this._logo) {
          this._logo.classList.remove(this._activeTextColor);
          this._activeTextColor = item.dataset.toggleColorClass;
          this._logo.classList.add(this._activeTextColor);
        }
      }
    });
  }
  _checkBurgerColor() {
    this._colorToggleItems.forEach((item) => {
      if (item.getBoundingClientRect().top <= this._header.offsetHeight && item.getBoundingClientRect().height + item.getBoundingClientRect().top > this._header.offsetHeight) {
        if (this._activeToggleColor === item.dataset.toggleColorClass) {
          return;
        }
        if (this._burger) {
          this._burger.classList.remove(this._activeToggleColor);
          this._activeToggleColor = item.dataset.toggleColorClass;
          this._burger.classList.add(this._activeToggleColor);
        }
      }
    });
  }
}

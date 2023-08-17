/* eslint-disable no-undef */
export const initYMaps = () => {
  const yandexMapsContainer = document.querySelector('#ymap');

  if (yandexMapsContainer) {
    ymaps.ready(() => {
      let myMap = new ymaps.Map(yandexMapsContainer, {
        center: [60.157620, 24.935076],
        zoom: 14,
        controls: [],
      },
      {
        suppressMapOpenBlock: true,
      });

      let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Dark Sight Art Gallery',
        balloonContent: 'Dark Sight Gallery',
        balloonContentHeader: '<a>Dark Sight Gallery</a>',
        balloonContentBody: '<img class="map__balloon-img" src="img/sprite/logo.svg">',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/pin-icon.svg',
        iconImageSize: [45, 45],
        iconImageOffset: [-19, -45],
      });

      let myPlacemarkMedium = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Dark Sight Art Gallery',
        balloonContent: 'Dark Sight Gallery',
        balloonContentHeader: '<a>Dark Sight Gallery</a>',
        balloonContentBody: '<img class="map__balloon-img" src="img/sprite/logo.svg">',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/pin-icon.svg',
        iconImageSize: [26, 30],
        iconImageOffset: [-13, -30],
      });

      let myPlacemarkSmall = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Dark Sight Art Gallery',
        balloonContent: 'Dark Sight Gallery',
        balloonContentBody: '<img class="map__balloon-img" src="img/sprite/logo.svg">',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/pin-icon.svg',
        iconImageSize: [26, 30],
        iconImageOffset: [-13, -30],
      });

      myPlacemark.events.add('balloonclose', function (e) {
        e.get('target').options.set('iconImageHref', 'img/svg/pin-icon.svg');
      });

      myPlacemark.events.add('mouseenter', function (e) {
        e.get('target').options.set('iconImageHref', 'img/svg/pin-icon-hover.svg');
      });

      myPlacemark.events.add('mouseleave', function (e) {
        e.get('target').options.set('iconImageHref', 'img/svg/pin-icon.svg');
      });

      myPlacemark.events.add('mousedown', function (e) {
        e.get('target').options.set('iconImageHref', 'img/svg/pin-icon-active.svg');
      });


      if (window.innerWidth > 1023) {
        return myMap.geoObjects.add(myPlacemark);
      } else if (window.innerWidth < 375) {
        return myMap.geoObjects.add(myPlacemarkSmall);
      } else {
        return myMap.geoObjects.add(myPlacemarkMedium);
      }
    });
  }
};

const $1 = document.querySelector.bind(document);
const $$1 = document.querySelectorAll.bind(document);
const menuList = $$1('.menu__item');
menuList.forEach((menuItem, index) => {
  menuItem.onclick = function () {
    $1('.menu__item--active').classList.remove(
      'menu__item--active'
    );
    this.classList.add('menu__item--active');
  };
});

const preBtnSlider = $1('.slider__prev');
const nextBtnSlider = $1('.slider__next');
const sliderShow = $1('.slider');
const listTopping = $$1('.slider-item');
let countDx = 0;
const numberListTopping = listTopping.length;
const scrollFirst =
  listTopping[0].getBoundingClientRect().left;
const width = listTopping[0].getBoundingClientRect().right - listTopping[0].getBoundingClientRect().left + 8;
nextBtnSlider.onclick = function () {
  if (
    listTopping[
      numberListTopping - 4
    ].getBoundingClientRect().left >= scrollFirst
  ) {
    countDx = countDx - width;
    sliderShow.style.transform = `translate3d( ${countDx}px, 0px, 0px )`;
  }
};
preBtnSlider.onclick = function () {
  if (
    listTopping[0].getBoundingClientRect().left <
    scrollFirst
  ) {
    countDx = countDx + width;
    sliderShow.style.transform = `translate3d( ${countDx}px, 0px, 0px )`;
  }
};
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
const preBtnSlider = $1('.slider__previus');
const nextBtnSlider = $1('.slider__next');
const sliderShow = $1('.slider');
const listTopping = $$1('.slider-item');
let countDx = -10;
const numberListTopping = listTopping.length;
const scrollFirst =
  listTopping[0].getBoundingClientRect().left;
preBtnSlider.onclick = function () {
  if (
    listTopping[
      numberListTopping - 3
    ].getBoundingClientRect().left >= scrollFirst
  ) {
    countDx = countDx - 94;
    sliderShow.style.transform = `translate3d( ${countDx}px, 0px, 0px )`;
  }
};
nextBtnSlider.onclick = function () {
  if (
    listTopping[0].getBoundingClientRect().left <
    scrollFirst
  ) {
    countDx = countDx + 94;
    sliderShow.style.transform = `translate3d( ${countDx}px, 0px, 0px )`;
    console.log(
      listTopping[0].getBoundingClientRect().left
    );
    console.log(scrollFirst);
  }
};

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

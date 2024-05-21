/* в этот файл добавляет скрипты*/
// решение в лоб... научусь переделаю...
const menuList = document.querySelector('.navigation__list');
const menuButton = document.querySelector('.page-header__button');

const pageWidth = document.documentElement.clientWidth;

menuList.classList.remove('navigation__list--no-js');
menuButton.classList.remove('page-header__button--no-js');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('navigation__list--closed');
  menuButton.classList.toggle('page-header__button--closed');
});

// задача при изменении ширины экрана убирать класс "navigation__list--closed" решаю...
if (pageWidth > 768) {
  menuList.classList.add('navigation__list--no-js');
  menuButton.classList.add('page-header__button--no-js');
}

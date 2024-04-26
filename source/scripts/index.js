/* в этот файл добавляет скрипты*/
// решение в лоб... научусь переделаю...
const menuList = document.querySelector('.navigation__list');
const menuButton = document.querySelector('.page-header__button');

menuList.classList.remove('navigation__list--no-js');
menuButton.classList.remove('page-header__button--no-js');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('navigation__list--closed');
});

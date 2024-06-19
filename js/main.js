function onStopScroll() {
  const body = document.querySelector('body')
  body.classList.toggle('stop-scroll')
}

function offStopScroll() {
  const body = document.querySelector('body')
  body.classList.remove('stop-scroll')
}

function offnav() {
  document.querySelector('.burger__btn').classList.remove('burger__btn--active')
  document.querySelector('.header__nav').classList.remove('header__nav--active')
  offStopScroll()
}

function openNav(el) {
  el.classList.toggle('burger__btn--active');
  document.querySelector('.header__nav').classList.toggle('header__nav--active');
  onStopScroll()
}

const linkNav = document.querySelectorAll('.header__link');

linkNav.forEach(function (elem) {
  elem.addEventListener('click', function() {
    offnav()
    offStopScroll()
  })
});
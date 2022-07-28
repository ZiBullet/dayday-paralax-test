const header = document.querySelector('.header-heading')
let intro = document.querySelector('header');
window.onscroll = () => {
  let posY = window.pageYOffset || document.documentElement.scrollTop;
  let height__intro = intro.offsetHeight; // высота intro
  if (posY + 1 >= height__intro) { // если posY+1 > высоты intro, то появится header
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
}
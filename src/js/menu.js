let button = document.querySelector('.read-more');
// let slidesMD = document.querySelectorAll('.swiper-slide-md');
// let slidesLG = document.querySelectorAll('.swiper-slide-lg');
// // let icon = document.querySelector('.button_icon');
let nav = document.querySelector('.content__logo')

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  button.classList.toggle('header_hide');
  nav.classList.toggle('header_hide');
  // icon.classList.toggle('button_icon_hide');
  // icon.classList.toggle('button_icon')
  // for(let i = 0; i < slidesMD.length; i++) {
  //   let slideMD = slidesMD[i];
  //   slideMD.classList.toggle('swiper-slide-md')
  // }
  // for(let i = 0; i < slidesLG.length; i++) {
  //   let slideLG = slidesLG[i];
  //   slideLG.classList.toggle('swiper-slide-lg')
  // }
});

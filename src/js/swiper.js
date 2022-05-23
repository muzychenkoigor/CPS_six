import Swiper, {Pagination} from 'swiper';
Swiper.use ([Pagination]);

let swipers = document.querySelectorAll('.swiper')

for (let i of swipers) {
  let mySwiper;
function enableSwiper () {
  if (window.innerWidth <= 767 && !i.classList.contains('swiper-initialized')) {
    return mySwiper = new Swiper(i, {
      loop: false,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 16,
    });
  }
  if (window.innerWidth > 767 && i.classList.contains('swiper-initialized')) mySwiper.destroy();
}
  enableSwiper();
  window.addEventListener('resize', () => {
    enableSwiper()
  });
}

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu-burger')
let closer = document.querySelector('.menu-burger__closer')
let search = document.querySelector('.header__search')
let footer = document.querySelector('.footer')
let overlay = document.querySelector('.shadow');
let more = document.querySelector('.read-more');
let context = document.querySelector('.content__text_hidden');

burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('hide-burger');
  closer.classList.remove('hide');
  burger.classList.add('hide');
  search.classList.remove('hide');
  footer.classList.remove('hide');
  overlay.classList.add('overlay');
});

const close = (evt) => {
  evt.preventDefault();
  menu.classList.add('hide-burger');
  closer.classList.add('hide');
  burger.classList.remove('hide')
  // search.classList.add('hide');
  // footer.classList.add('hide');
  overlay.classList.remove('overlay');
  modalCall.classList.add('hide');
  modalFeedback.classList.add('hide')
}

closer.addEventListener('click', close)
overlay.addEventListener('click', close)

more.addEventListener('click', function (evt) {
  evt.preventDefault();
  context.classList.toggle('hide')
})

let button = document.querySelector('.button_show');
let show = document.querySelector('.button_show-type');
let slidesMD = document.querySelectorAll('.swiper-slide-md');
let slidesLG = document.querySelectorAll('.swiper-slide-lg');
let slidesMDtype = document.querySelectorAll('.swiper-slide-type-md');
let slidesLGtype = document.querySelectorAll('.swiper-slide-type-lg');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  button.classList.toggle('button_hide');
  button.classList.toggle('button_show');
  for(let i = 0; i < slidesMD.length; i++) {
    let slideMD = slidesMD[i];
    slideMD.classList.toggle('swiper-slide-md')
  }
  for(let i = 0; i < slidesLG.length; i++) {
    let slideLG = slidesLG[i];
    slideLG.classList.toggle('swiper-slide-lg')
  }
});

show.addEventListener('click', function (evt) {
  evt.preventDefault();
  show.classList.toggle('button_hide');
  show.classList.toggle('button_show');
  for(let i = 0; i < slidesMDtype.length; i++) {
    let slideMD = slidesMDtype[i];
    slideMD.classList.toggle('swiper-slide-type-md')
  }
  for(let i = 0; i < slidesLGtype.length; i++) {
    let slideLG = slidesLGtype[i];
    slideLG.classList.toggle('swiper-slide-type-lg')
  }
})

let call = document.querySelector('.call__button');
let feedback = document.querySelector('.feedback__button');
let headerCall = document.querySelector('.header__call');
let headerChat = document.querySelector('.header__chat');
let modalCall = document.querySelector('.modal-call');
let modalFeedback = document.querySelector('.modal-feedback');
let closeCall = document.querySelector('.modal-call__closer');
let closeFeedback = document.querySelector('.modal-feedback__closer');
let header = document.querySelector('.header');

if(innerWidth >= 1440) {
  header.classList.add('hide');
}

const openCall = (evt) => {
  evt.preventDefault();
  modalCall.classList.toggle('hide');
  overlay.classList.add('overlay')
}

const openFeedback = (evt) => {
  evt.preventDefault();
  modalFeedback.classList.toggle('hide');
  overlay.classList.add('overlay')
}

call.addEventListener('click', openCall );
headerCall.addEventListener('click', openCall);


feedback.addEventListener('click', openFeedback);
headerChat.addEventListener('click', openFeedback);

closeCall.addEventListener('click', close);
closeFeedback.addEventListener('click', close);

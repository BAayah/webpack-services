
let burger = document.querySelector('.header__button');
let overlay = document.querySelector('.overlay');
let aside = document.querySelector('.aside');
let burgerClose = document.querySelector('.burger-close');
let callBtn = document.querySelector('.modal-call');
let messageBtn = document.querySelector('.modal-message');

burger.addEventListener('click', function() {
    aside.classList.add('show-aside');
    overlay.classList.add('open');
});
     
burgerClose.addEventListener('click', function() {
   aside.classList.remove('show-aside');
   if (!callBtn.classList.contains('show-modal-call') && !messageBtn.classList.contains('show-modal-message')) {
     overlay.classList.remove('open');
   }
});

// overlay-blurring-closed
overlay.addEventListener('click', function() {
    aside.classList.remove('show-aside');
    overlay.classList.remove('open');
});


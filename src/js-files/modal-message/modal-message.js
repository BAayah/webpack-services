
let message = document.querySelectorAll('.message');
let modalMessage = document.querySelector('.modal-message');
let modalMessageCloseBtn = document.querySelector('.modal-message__button');
let overlay = document.querySelector('.overlay');
let asideWindow2 = document.querySelector('.aside');
let modalCall1 = document.querySelector('.modal-call');

message.forEach((btn)=> {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    modalMessage.classList.add('show-modal-message');
    overlay.classList.add('open');
    modalCall1.classList.remove('show-modal-call');
});
modalMessageCloseBtn.addEventListener('click', function() {
  modalMessage.classList.remove('show-modal-message');
  if (!asideWindow2.classList.contains('show-aside')) {
    overlay.classList.remove('open');
  }
});
});

//  closing on overlay


overlay.addEventListener('click', function() {
  modalMessage.classList.remove('show-modal-message')
});

// overlay-blurring-closed
overlay.addEventListener('click', function() {
  modalMessage.classList.remove('show-modal-message');
  overlay.classList.remove('open');
})
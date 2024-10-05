
let call = document.querySelectorAll('.call');
let modalCall = document.querySelector('.modal-call');
let overlay = document.querySelector('.overlay');
let modalCallCloseBtn = document.querySelector('.modal-call__button');
let asideWindow = document.querySelector('.aside');

let modalMessage = document.querySelector('.modal-message');

call.forEach((btn)=> {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();    
    modalCall.classList.add('show-modal-call');
    overlay.classList.add('open');
    modalMessage.classList.remove('show-modal-message');
  });
});
modalCallCloseBtn.addEventListener('click', function() {
  modalCall.classList.remove('show-modal-call');
  if (!asideWindow.classList.contains('show-aside')) {
    overlay.classList.remove('open');
  } 
});

// closing on overlay

modalCallCloseBtn.addEventListener('click', function() {
  modalCall.classList.remove('show-modal-call');
});

// overlay-blurring-closed 
overlay.addEventListener('click', function() {
  modalCall.classList.remove('show-modal-call');
  overlay.classList.remove('open')
})

  document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.querySelector('.block-show__button');
    const blockSwiper = document.querySelector('.swiper-wrapper');
    const fullHeight = 400;
    const hiddenHeight = 176;


    toggleButton.addEventListener('click', function() {
      if (blockSwiper.style.maxHeight === `${hiddenHeight}px`|| blockSwiper.style.maxHeight === '') {
        blockSwiper.style.maxHeight = `${fullHeight}px`;
        toggleButton.textContent = 'Скрыть';
      } else {
        blockSwiper.style.maxHeight = `${hiddenHeight}px`;
        toggleButton.textContent = 'Показать все';
      }
      toggleButton.classList.toggle('active');
    });
  });

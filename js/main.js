const menuButton = document.querySelector('.menu-button'),
   menu = document.querySelector('.menu'),
   bonusText = document.querySelector('.bonus-text'),
   bonusImg = document.querySelector('.bonus-img');
   
menuButton.addEventListener('click', function () {
   menu.classList.toggle('menu-active');
   menuButton.classList.toggle('menu-button-active')
});

$(document).ready(function () {
   $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      const id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500)
   })
});

const mySwiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   loop: !0,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

function showBonus() {
   bonusText.classList.add('bonus-show');
}
bonusImg.addEventListener('click', showBonus);

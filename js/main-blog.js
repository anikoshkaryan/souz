$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
  });


  
})
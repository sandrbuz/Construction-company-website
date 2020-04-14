// модальное окно на чистом JS

// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// button.addEventListener('click',function(){
//    modal.classList.add('modal_active');
// });

// close.addEventListener('click',function(){
//    modal.classList.remove('modal_active');
// });

// слайдер на чистом JS

$(".sl").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".arrow-left"),
  nextArrow: $(".arrow-right"),
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// Библиотека wow.js (for animation)
new WOW().init();

// Валидация форм

$(document).ready(function () {
  // Валидация формы brif

  $("#brif-form").validate({
    rules: {
      phone: {
        required: true,
      },
      username: {
        required: true,
        minlength: 2,
        maxlenght: 15,
      },
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      phone: {
        required: "Укажите телефон",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
      },
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
      },
      email: "Нам нужен ваш email",
      phone: "Укажите телефон",
    },
  });

  //  Маска для телефона brif
  $(".brif_phone").mask("8 (999) 999-99-99");

  // Валидация формы offer

  $("#offer-form").validate({
    rules: {
      ofname: {
        required: true,
        minlength: 2,
      },

      ofphone: {
        required: true,
      },
    },
    messages: {
      ofname: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
      },
      ofphone: {
        required: "Укажите телефон",
      },
    },
  });
  // Маска для телефона offer
  $(".offer-call").mask("8 (999) 999-99-99");
});

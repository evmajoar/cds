/*
  EVMAJOAR JS
  Version: 1.0.0
  Year: 2019
*/
$(function () {

  // PRELOADER
  setTimeout(function () {
    $('body').removeClass('hidden').find('.preloader').addClass('preloader--hide');
  }, 2000);


  // MENU
  $('.burger-button').click(function () {
    $('.menu').addClass('menu--opened').find('.menu__content').addClass('menu__content--slide');
  });

  $('.main-header__menu-close').click(function () {
    $('.menu').removeClass('menu--opened').find('.menu__content').removeClass('menu__content--slide');;
  });


  // попап окна
  $('.js-popup').click(function (event) {
    var $that = $(this),
      $thatDataId = $that.data('id'),
      $modalBox = $('#' + $thatDataId),
      $modalBoxAttr = $modalBox.attr('id'),
      inpName = $that.parent().find('input[type=text]'),
      inpEmail = $that.parent().find('input[type=email]'),
      inpPass = $that.parent().find('input[type=password]'),
      inpNameVal = inpName.val(),
      inpEmailVal = inpEmail.val(),
      inpPassVal = inpPass.val();
    var addClasses = function () {
      $('body').addClass('hidden');
      $modalBox.addClass('show');
    };
    var validationInputs = function () {
      if (inpNameVal === '') {
        inpName.addClass('has-error');
      } else {
        inpName.removeClass('has-error');
      }
      if (inpEmailVal === '') {
        inpEmail.addClass('has-error');
      } else {
        inpEmail.removeClass('has-error');
      }
      if (inpPassVal === '') {
        inpPass.addClass('has-error');
      } else {
        inpPass.removeClass('has-error');
      }
    };
    if ($thatDataId === $modalBoxAttr) {
      if ($that.is('button[type=submit]')) {
        event.preventDefault();
        validationInputs();
        if (inpNameVal !== '' && inpEmailVal !== '' && inpPassVal) {
          addClasses();
        }
      } else {
        addClasses();
      }
    }
  });

  $('.modal__close').click(function () {
    $('body').removeClass('hidden');
    $(this).closest('.modal').removeClass('show');
  });

  var $layuotsCarousel = $( '.layouts__carousel-list' );
      $layoutsButtons = $('.layouts__buttons'),
      $layoutsButtons2 = $('.layouts__buttons2'),

  $layuotsCarousel.on('init afterChange', function(event, slick){
    $menuCounterThis.text(slick.currentSlide + 1);
    $menuCounterTotal.text(slick.slideCount);
  }).slick({
    dots: false,
    arrows: false
    // appendArrows: $('.layouts__buttons2'),
    // prevArrow: ' <button type="button" class="btn-prev layouts__carousel-prev"><span class="visually-hidden">Листать назад</span></button>',
    // nextArrow: '<button type="button" class="btn-next layouts__carousel-next"><span class="visually-hidden">Листать вперед</span></button>'
    // responsive: [{
    //   breakpoint: 768,
    //   settings: {
    //     dots: false,
    //     appendArrows: $('.layouts__buttons'),
    //     prevArrow: ' <button type="button" class="btn-prev carousel-switch__prev"><span class="visually-hidden">Листать назад</span></button>',
    //     nextArrow: '<button type="button" class="btn-next carousel-switch__next"><span class="visually-hidden">Листать вперед</span></button>'
    //   }
    // }]
  });


  // $(".layouts__carousel-list").on('afterChange', function (event, slick, currentSlide) {
  //   $("#number-slide").text(currentSlide + 1);
  // });
  // $(".layouts__carousel-list").on('afterChange', function (event, slick, currentSlide) {
  //   $("#number-slide2").text(currentSlide + 1);
  // });

  $('.about-us__carousel-list').slick({
    dots: false,
    arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true
  });

});
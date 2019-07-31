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
    $('.overlay').addClass('overlay--open');
  });

  $('.main-header__menu-close').click(function () {
    $('.menu').removeClass('menu--opened').find('.menu__content').removeClass('menu__content--slide');
    $('.overlay').removeClass('overlay--open');
  });

  $('.overlay--open').click(function () {
    $('.menu').removeClass('menu--opened').find('.menu__content').removeClass('menu__content--slide');
  });


  // попап окна
  $('.js-popup').click(function (event) {
    event.preventDefault();
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
      $modalBox.addClass('modals--opened');
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
  // // попап окна
  // $('.js-popup').click(function (event) {
  //   var $that = $(this),
  //     $thatDataId = $that.data('id'),
  //     $modalBox = $('#' + $thatDataId),
  //     $modalBoxAttr = $modalBox.attr('id'),
  //     inpName = $that.parent().find('input[type=text]'),
  //     inpEmail = $that.parent().find('input[type=email]'),
  //     inpPass = $that.parent().find('input[type=password]'),
  //     inpNameVal = inpName.val(),
  //     inpEmailVal = inpEmail.val(),
  //     inpPassVal = inpPass.val();
  //   var addClasses = function () {
  //     $('body').addClass('hidden');
  //     $modalBox.addClass('show');
  //   };
  //   var validationInputs = function () {
  //     if (inpNameVal === '') {
  //       inpName.addClass('has-error');
  //     } else {
  //       inpName.removeClass('has-error');
  //     }
  //     if (inpEmailVal === '') {
  //       inpEmail.addClass('has-error');
  //     } else {
  //       inpEmail.removeClass('has-error');
  //     }
  //     if (inpPassVal === '') {
  //       inpPass.addClass('has-error');
  //     } else {
  //       inpPass.removeClass('has-error');
  //     }
  //   };
  //   if ($thatDataId === $modalBoxAttr) {
  //     if ($that.is('button[type=submit]')) {
  //       event.preventDefault();
  //       validationInputs();
  //       if (inpNameVal !== '' && inpEmailVal !== '' && inpPassVal) {
  //         addClasses();
  //       }
  //     } else {
  //       addClasses();
  //     }
  //   }
  // });

  $('.modal__close').click(function () {
    $('body').removeClass('hidden');
    $(this).closest('.modals').removeClass('modals--opened');
  });

  /* 
    LAYOUTS
  */
  var $layuotsCarousel = $( '.layouts__carousel-list' );
      $layuotsPrev = $( '.layouts__carousel-prev' ),
      $layuotsNext = $( '.layouts__carousel-next' ),
      $layuotsPrevT = $( '.carousel-switch__prev' ),
      $layuotsNextT = $( '.carousel-switch__next' ),
      $layuotsActive = $( '.carousel-switch__number-slide-item:first-of-type' ),
      $layuotsTotal = $( '.carousel-switch__number-slide-item:last-of-type' );

  $layuotsCarousel.on('init afterChange', function(event, slick){
    $layuotsActive.text(slick.currentSlide + 1);
    $layuotsTotal.text(slick.slideCount);
  }).slick({
    dots: false,
    prevArrow: $layuotsPrev,
    nextArrow: $layuotsNext,
    responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: $layuotsPrevT,
        nextArrow: $layuotsNextT
      }
    }]
  });


  $('.about-us__carousel-list').slick({
    dots: false,
    arrows: false,
    variableWidth: true
  });

  $('.discounts__carousel-list--carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 2000,
      //   settings: "unslick"
      // },
      // {
      //   breakpoint: 1080,
      //   settings: "slick"
      // },
      {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });


  $('.main-header__advertising-close').click(function () {
    $('.main-header__advertising-banner').addClass('main-header__advertising-banner--close');
  });


});
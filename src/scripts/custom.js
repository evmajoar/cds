/*
  EVMAJOAR JS
  Version: 1.0.0
  Year: 2019
*/
$(function () {

    // PRELOADER
    setTimeout(function() {
      $( 'body' ).removeClass( 'hidden' ).find( '.preloader' ).addClass( 'preloader--hide' );
    }, 2000);

    // MENU
    $( '.burger-button' ).click(function() {
      $( '.menu' ).addClass( 'menu--opened' ).find( '.menu__content' ).addClass( 'menu__content--slide' );
    });

    $( '.main-header__menu-close' ).click(function() {
      $( '.menu' ).removeClass( 'menu--opened' ).find( '.menu__content' ).removeClass( 'menu__content--slide' );;
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

});
/*
  JS
  Version: 1.0.0
  Year: 2019
*/
$(function () {

  // VARS
  var $body = $('body'),
      $preloader = $('.preloader'),

      $modals = $('.modals'),
      $callModal = $('.js-modal'),
      $modalsOverlay = $('.modals__overlay'),
      $modalCallback = $('.modals__callback'),
      $modalsClose = $('.modals__close'),

      $adverBanner = $('.main-header__advertising-banner'),
      $adverText = $('.main-header__advertising-text'),
      $adverClose = $('.main-header__advertising-close'),

      $menu = $( '.menu' ),
      $menuBtn = $( '.burger-button' ),
      $menuClose = $('.main-header__menu-close');


  // FUNCTIONS
  var toggleBodyClassHidden = function(toggle) {
    if (toggle === 'remove') {
      $body.removeClass('hidden');
    } else {
      $body.addClass('hidden');
    }
  };

  var closePopup = function() {
    var str = 'popup--opened';
    toggleBodyClassHidden('remove');
    $modals.removeClass( 'modals--opened' )
      .find('.' + str)
      .removeClass(str);
  };

  var openPopup = function(elem) {
    var str = 'popup--opened';
    toggleBodyClassHidden();
    $modals.addClass( 'modals--opened' )
      .find('.' + elem)
      .addClass(str)
      .find('input:first')
      .focus();
  };


  // PRELOADER
  setTimeout(function (a) {
    toggleBodyClassHidden('remove');
    $preloader.addClass('preloader--hide');
  }, 1500);


  // MENU
  $menuBtn.click(function () {
    toggleBodyClassHidden();
    $menu.addClass('menu--opened');
  });

  $menuClose.click(function () {
    toggleBodyClassHidden('remove');
    $menu.removeClass('menu--opened');
  });


  // BANNER
  $adverBanner.click(function (event) {
    var $targetTagName = event.target.tagName.toLowerCase();

    if ( $targetTagName === 'button' ) {
      $adverBanner.removeClass('main-header__advertising-banner--opened');
    } else {
      toggleBodyClassHidden();
      $modals.addClass('modals--opened')
        .find('.modals__callback')
        .addClass('popup--opened')
        .find('input:first')
        .focus();
    }
  });

  $callModal.click(function () {
    var $that = $(this),
        jModal = 'js-modal--',
        wModal = 'modals__';

    if ( $that.hasClass(jModal + 'callback') ) {
      openPopup(wModal + 'callback');
    } else if ( $that.hasClass(jModal + 'callback') ) {

    }
  });

  $modalsClose.click(function () {
    closePopup();
  });

  $modalsOverlay.click( function() {
    closePopup();
  } );

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closePopup();
    }
  });

});
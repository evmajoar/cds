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
      $modalsClose = $('.modals__close');

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

  // PRELOADER
  setTimeout(function (a) {
    toggleBodyClassHidden('remove');
    $preloader.addClass('preloader--hide');
  }, 1500);

  //
  // var openPopup = function() {
  //
  //   toggleBodyClassHidden();
  //
  //   $modals.addClass( 'modals--opened' );
  //
  //   if ( $modalCallback.hasClass( 'popup-request--opened' ) ) {
  //     $popupRequest.removeClass( 'popup-request--opened' );
  //   }
  //
  // };


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
      $modals.addClass('modals--opened')
        .find('.modals__callback')
        .addClass('popup--opened')
        .find('input:first')
        .focus();
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


  //
  //
  // // MODALS
  // $callModal.click(function (event) {
  //
  //   var $that = $(this);
  //
  //   if ( $that.is('a') ) {
  //     event.preventDefault();
  //   }
  //
  //   $modals.addClass('modals--opened');
  //
  //   if ( $that.hasClass('button-callback') ) {
  //     $('.modals__callback').addClass('modals__callback--opened');
  //   }
  //
  // });
  //

});
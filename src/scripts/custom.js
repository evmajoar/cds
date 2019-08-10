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
    toggleBodyClassHidden();
    $modals.addClass( 'modals--opened' )
      .find('.' + elem)
      .addClass('popup--opened')
      .find('input:first')
      .focus();
  };


  // PRELOADER
  setTimeout(function (a) {
    toggleBodyClassHidden('remove');
    $preloader.addClass('preloader--hide');
  }, 3000);


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


  // MODAL
  $callModal.click(function () {
    var $that = $(this),
        jModal = 'js-modal--',
        wModal = 'modals__';

    if ( $that.hasClass(jModal + 'callback') ) {
      openPopup(wModal + 'callback');
    } else if ( $that.hasClass(jModal + 'showroom') ) {
      openPopup(wModal + 'showroom');
    } else if ( $that.hasClass(jModal + 'premium') ) {
      openPopup(wModal + 'premium-finish');
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


  //TABS
  var $tabsSwitch = $('.tabs-switch'),
      $tabsSwitchItemClass = 'tabs-switch__item',
      $tabsContent = $('.tabs-content'),
      $tabsContentItemClass = 'tabs-content__item';

  // $('.tabs-content').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.tabs-switch',
  //   infinite: false
  // });
  //
  // $('.tabs-switch').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.tabs-content',
  //   dots: true,
  //   arrows: false,
  //   focusOnSelect: true
  // });

  $tabsContent.each(function () {
    $(this).children().each(function (index) {

      $(this).addClass($tabsContentItemClass)
        .attr('id', 'tab-index-' + (index + 1));

      if (index === 0) {
        $(this).addClass($tabsContentItemClass + '--current')
      }

    });
  });

  $tabsSwitch.each(function () {
    $(this).children().each(function (index) {

      $(this).addClass()
        .attr('data-index', 'tab-index-' + (index + 1));

      if (index === 0) {
        $(this).addClass($tabsSwitchItemClass + '--active')
      }

    });
  }).children().click(function () {

    var $that = $(this),
        $thatId = $that.data('index');

    $that.addClass($tabsSwitchItemClass + '--active')
      .siblings()
      .removeClass($tabsSwitchItemClass + '--active')
      .closest($tabsSwitch)
      .siblings($tabsContent)
      .children('#' + $thatId)
      .addClass($tabsContentItemClass + '--current')
      .siblings()
      .removeClass($tabsContentItemClass + '--current');
  });

});
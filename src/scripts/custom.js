/*
  JS
  Version: 1.0.0
  Year: 2019
*/
$(function () {

  /*
     SLICK SETTINGS
  */
  var $layuotsCarousel = $( '.layouts__carousel-list' ),
          $discountsCarousel = $( '.discounts__carousel-list' ),
          $discountsPrev = $( '.discounts__carousel-prev' ),
          $discountsNext = $( '.discounts__carousel-next' );

  $layuotsCarousel.each(function() {
    $(this).on('init afterChange', function(event, slick){
      var $thatParent = $(this).parent();
      $thatParent.find('.carousel-switch__number-slide-item:first-of-type').text(slick.currentSlide + 1);
      $thatParent.find('.carousel-switch__number-slide-item:last-of-type').text(slick.slideCount);
    }).slick({
      dots: false,
      arrows: true,
      draggable: false,
      prevArrow: $(this).siblings('.layouts__carousel-row-button').find('.layouts__carousel-prev'),
      nextArrow: $(this).siblings('.layouts__carousel-row-button').find('.layouts__carousel-next'),
      infinite: true,
      responsive: [{
        breakpoint: 768,
        settings: {
        }
      }]
    });
  });

  $discountsCarousel.each(function () {
    $(this).slick({
      dots: false,
      slidesToShow: 3,
      variableWidth: true,
      draggable: false,
      infinite: true,
      prevArrow: $(this).siblings().find('.discounts__carousel-prev'),
      nextArrow: $(this).siblings().find('.discounts__carousel-next'),
      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }]
    });
  });

  $('.about-us__carousel-list').slick({
    dots: false,
    arrows: false,
    variableWidth: true
  });


  // VARS
  var $body = $('body'),
          $preloader = $('.preloader'),

          $modals = $('.modals'),
          $callModal = $('.js-modal'),
          $modalsOverlay = $('.modals__overlay'),
          $modalsClose = $('.modals__close'),

          $adverClose = $('.main-header__advertising-close'),

          $menu = $( '.menu' ),
          $menuBtn = $( '.burger-button' ),
          $menuClose = $('.main-header__menu-close'),
          $phones = $( 'input[type="tel"]' );


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

  var filter = function (inpRoom, inpTurn) {
    $filterRow.each(function () {
      var $that = $(this),
              $dataRoom = $that.data('room').toString(),
              $dataTurn = $that.data('turn').toString();

      if ((inpRoom === $dataRoom || inpTurn === $dataTurn) && (inpRoom === $dataRoom && inpTurn === $dataTurn)) {
        $(this).css('display', 'table-row');
        $('.filter-result__conclusion-count').text($(this).css('display', 'table-row').length);
      } else {
        $(this).css('display', 'none');
      }
    });
  };


  /*
    MASK
   */
  if ( $phones.length ) {
    $phones.mask("+7 (999) 999-99-99");
  }


  /*
    ANCHOR
   */
  var $anchor = $('.js-anchor');

  if ( $anchor.length ) {
    $anchor.on('click', function(event) {

      event.preventDefault();
      var $that = $( this ), hb = $( 'body, html' );

      if ( $that.is( 'button' ) ) {

        hb.stop().animate({
          scrollTop: $( '.' + $that.data( 'id' ) ).offset().top
        }, 1000, 'swing');

      } else if ( $that.is( 'a' ) ) {

        hb.stop().animate({
          scrollTop: $( '.' + $that.attr( 'href' ).replace('#', '') ).offset().top
        }, 1000, 'swing');

      }

    });
  }


  /*
    PRELOADER
   */
  setTimeout(function (a) {

    toggleBodyClassHidden('remove');

    $preloader
            .addClass('preloader--hide');

  }, 3000);


  /*
    MENU
   */
  $menuBtn.click(function () {

    toggleBodyClassHidden();

    $menu
            .addClass('menu--opened');

  });

  $menuClose.click(function () {

    toggleBodyClassHidden('remove');

    $menu
            .removeClass('menu--opened');

  });


  /*
    BANNER
   */
  $adverClose.click(function (event) {
    $('.main-header__advertising-banner')
            .removeClass('main-header__advertising-banner--opened');
  });


  /*
    MODALS
   */
  $callModal.click(function () {

    var thatData = $(this)
            .data('id')
            .toString();

    toggleBodyClassHidden();

    openPopup('modals__' + thatData);

  });

  $modalsClose.click(closePopup);

  $modalsOverlay.click(closePopup);

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closePopup();
    }
  });


  /*
    TABS
  */
  var $tabsSwitch = $('.tabs-switch'),
          $tabsSwitchItemClass = 'tabs-switch__item',
          $tabsContent = $('.tabs-content'),
          $tabsContentItemClass = 'tabs-content__item';

  $tabsContent.each(function () {
    $(this).children().each(function (index) {

      $(this)
              .wrap('<div class="' + $tabsContentItemClass + '"></div>')
              .parent()
              .attr('id', 'tab-index-' + (index + 1));

      if (index === 0) {
        $(this)
                .parent()
                .addClass($tabsContentItemClass + '--current');
      }

    });
  });

  $tabsSwitch.each(function () {
    $(this).children().each(function (index) {

      $(this)
              .addClass()
              .attr('data-index', 'tab-index-' + (index + 1));

      if (index === 0) {
        $(this)
                .addClass($tabsSwitchItemClass + '--active')
      }

    });
  }).children().on('click', function () {

    var $that = $(this),
            $thatId = $that.data('index');

    $that
            .addClass($tabsSwitchItemClass + '--active')
            .siblings()
            .removeClass($tabsSwitchItemClass + '--active')
            .closest('section')
            .find($tabsContent)
            .children('#' + $thatId)
            .addClass($tabsContentItemClass + '--current')
            .siblings()
            .removeClass($tabsContentItemClass + '--current');
  });


  /*
    FILTER
   */
  var $filterForm = $('.selection-premises__form'),
          $filterRow = $('.filter-result__row'),
          $filterCheckedRoomVal = $filterForm.find('input[name="room"]:checked').val(),
          $filterCheckedTurnVal = $filterForm.find('input[name="square"]:checked').val(),
          $buttonFilterM = $filterForm.find('.selection-premises__form-button');


  $filterForm.on('change', function () {

    var $that = $(this),
            $inpRoomChecked = $that
                    .find('input[name="room"]:checked')
                    .val(),
            $inpTurnChecked = $that
                    .find('input[name="square"]:checked')
                    .val();

    filter($inpRoomChecked, $inpTurnChecked);

  });

  $buttonFilterM.on('click', closePopup);

});
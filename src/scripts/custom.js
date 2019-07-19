/*
  EVMAJOAR JS
  Version: 1.0.0
  Year: 2019
*/
$(function () {
    // PRELOADER
    setTimeout(function() {
      $( '.preloader' ).addClass( 'preloader--hide' );
    }, 2000);

    $('.burger-button').on('click', function (e) {
        e.preventDefault();
        // $(this).addClass("menu--open");
        $('.menu').addClass("menu--open");
    });

    $('.main-header__menu-close').on('click', function (e) {
        $('.menu').removeClass("menu--open");
    });

});
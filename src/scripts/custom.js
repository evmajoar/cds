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

});
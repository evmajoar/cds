/* ==================================================
  * SLICK SETTINGS
  */
var $layuotsCarousel = $( '.layouts__carousel-list' ),
    $layuotsPrev = $( '.layouts__carousel-prev' ),
    $layuotsNext = $( '.layouts__carousel-next' ),
    $layuotsPrevT = $( '.carousel-switch__prev' ),
    $layuotsNextT = $( '.carousel-switch__next' ),
    $layuotsActive = $( '.carousel-switch__number-slide-item:first-of-type' ),
    $layuotsTotal = $( '.carousel-switch__number-slide-item:last-of-type' );

$layuotsCarousel.each(function() {
   $(this).on('init afterChange', function(event, slick){
       $(this).find($layuotsActive).text(slick.currentSlide + 1);
       $(this).find($layuotsTotal).text(slick.slideCount);
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
});

$('.about-us__carousel-list').slick({
    dots: false,
    arrows: false,
    variableWidth: true
});

var $discountsCarousel = $( '.discounts__carousel-list' ),
    $discountsPrev = $( '.discounts__carousel-prev' ),
    $discountsNext = $( '.discounts__carousel-next' );

$discountsPrev.click(function () {
    console.log("Есть");
});

$discountsCarousel.slick({
    dots: false,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: $discountsPrev,
    nextArrow: $discountsNext,
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
$(function () {
  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-arrow slick-prev"></span>',
    nextArrow: '<span class="slick-arrow slick-next"></span>',
    fade: true,
    asNavFor: ".slider__nav",
  });
  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
  });

  $(".header__nav-btn").on("click", function () {
    $(".menu").slideToggle();
  });
});

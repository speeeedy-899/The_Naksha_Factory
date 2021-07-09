$('.carousel').on('init', function () {
  $('.carousel').css({visibility: 'visible'});
});


$('.carousel').slick({
  adaptiveHeight: true,
  arrows: true,
  autoplay: true,
  centerMode: true,
  centerPadding: "70px",
  dots: true,
  initialSlide: 0,
  lazyLoad: "ondemand",
  nextArrow: "<img class='slick-next' src='../right.svg'>",
  prevArrow: "<img class='slick-prev' src='../left.svg'>",
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  variableWidth: true,
  speed: 700,
});

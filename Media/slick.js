$('.carousel').on('init', function () {
  $('.carousel').css({visibility: 'visible'});
});


$('.carousel').slick({
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3300,
  centerMode: true,
  centerPadding: "0",
  cssEase: "cubic-bezier(.87,0,.13,1)",
  initialSlide: 0,
  // lazyLoad: "ondemand",
  pauseOnFocus: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  // variableWidth: true,
  speed: 700,
});

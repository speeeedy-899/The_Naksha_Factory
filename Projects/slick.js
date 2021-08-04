$('.carousel').on('init', function () {
  $('.carousel').css({visibility: 'visible'});
});

const width = $(window).width();
if(width>768){
  $('.carousel').slick({
  adaptiveHeight: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3300,
  centerMode: true,
  centerPadding: "0",
  cssEase: "cubic-bezier(.87,0,.13,1)",
  // dots: true,
  initialSlide: 0,
  // lazyLoad: "ondemand",
  nextArrow: "<img class='slick-next' src='../right.svg'>",
  prevArrow: "<img class='slick-prev' src='../left.svg'>",
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  // variableWidth: true,
  speed: 700,
});
  $('.carousel-desktop').css("display", "block");
  $('.carousel-mobile').css("display", "none");
}
else if (width<=768) {
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
  pauseOnHover: false,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  // variableWidth: true,
  speed: 700,
});
$('.carousel-desktop').css("display", "none");
$('.carousel-mobile').css("display", "block");
}

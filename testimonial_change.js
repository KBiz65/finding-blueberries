$(".slick_slider").slick({
  autoplay: true,
  autoplaySpeed: 8000,
  centerMode: true,
  centerPadding: "25%",
  slidesToShow: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0%",
        slidesToShow: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0%",
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
});

let activateSlide = function (currentSlide) {
  $(".quote_inner_container")
    .removeClass("active_slide")
    .addClass("inactive_slide");
  $("#slide_" + currentSlide)
    .removeClass("inactive_slide")
    .addClass("active_slide");
};

// On swipe event
$(".slick_slider").on("afterChange", function (event, slick, currentSlide) {
  console.log(currentSlide);
  activateSlide(currentSlide);
});

$(document).ready(function () {
  activateSlide(0);
});

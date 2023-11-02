setTimeout(function () {
  once: true, $(".preloader_bg").fadeToggle();
}, 1700);
$('.slider-1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.75,
        dots: true,
        speed: 500,
        infinite: true,
        slidesToScroll: 2

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.75,
        slidesToScroll: 1
      }
    }
  ]
});

$(".slider-2").slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "400px",
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".customer-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  centerPadding: "200px",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.5,
      settings: {
        centerPadding: "100px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767.5,
      settings: {
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575.5,
      settings: {
        centerPadding: "10px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

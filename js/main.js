$(function () {

  $('.cp_sl06').css({
    'font-weight': 'bold',
    'font-family': 'sans-serif'
  });

  $('.option-color').css({
    'color': 'black',
    'font-weight': 'bold',
    'font-size': '19px'
  });

  $('.form-check-label').css({
    'font-size': '13px',
    'position': 'relative',
    'bottom': '18px'
  });

  $('.slider_1').slick({
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    arrows: false,
    infinite: true,
  });

  $('.slider_2').slick({
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });

  $('.slider_3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1186,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

});
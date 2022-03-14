$(document).ready(function() {
    'use strict';
    $(window).load(function() {
      $("#loading").delay(2000).fadeOut(700);
      
      $("#loading").fadeOut(700);
      
  })



    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('#testimonial .testimonial-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 2,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:false,
                }
              },
        ],
    });

    new VenoBox({
        selector: '.abt-popup',
    });
    new VenoBox({
        selector: '.gallery-popup',
        spinner: 'pulse'
    });


    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });



    $('.brand-slider').slick({
        slidesToShow: 5,
        centerMode: true,
        autoplay: true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true,
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true,
                }
              },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:false,
                }
              },

        ],

    });


    var colorSheets = [
      {
          color: "#ff8400",
          title: "Switch to Default",
          href: "./css/style.css"
      },
      {
          color: "orange",
          title: "Switch to orange",
          href: "./css/orange.css"
      },
      {
          color: "brown",
          title: "Switch to brown",
          href: "./css/brown.css"
      }
  
  ];
  
  ColorSwitcher.init(colorSheets);

  new WOW().init();


  var btn = $('#back-to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  

  
});

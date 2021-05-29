$(function () {
    $(document).on('click', function (e) {
        var burger = $("header");
        var width = $(window).width();
        if (e.target != burger && burger.has(e.target).length === 0 && width < 768) {
            $(".header-burger,.nav-header").removeClass("active-burger");
        }
    });
    $(".header-burger").click(function (event) {
        $(".header-burger,.nav-header").toggleClass("active-burger");
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 975) {
          $('.slider-inspiration:not(.slick-initialized)').slick({
            dots: true,
            infinite:true,
            arrows: false,
            slidesToShow: 1,
          });
        } else {
          $(".slider-inspiration.slick-initialized").slick("unslick");
        }
      });

    $(window).on('load resize', function() {
        if ($(window).width() < 975) {
          $('.slider-places:not(.slick-initialized)').slick({
            dots: true,
            infinite:true,
            arrows: false,
            slidesToShow: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 767,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ]  
          });
        } else {
          $(".slider-places.slick-initialized").slick("unslick");
        }
      });
});

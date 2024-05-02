/* Header Scroll */
(function ($) {
    "use strict";
    // Fixed Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $(".header-navigation").addClass("fixed-nav");
        } else {
            $(".header-navigation").removeClass("fixed-nav");
        }
    });
})(jQuery);


(function ($) {
    var defaults = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: 'lg'
    };
    $.fn.bootnavbar = function () {

        var screen_width = $(document).width();

        if (screen_width >= defaults.lg) {
            $(this).find('.dropdown').hover(function () {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                    $(this).removeClass('animated fadeIn');
                });
            }, function () {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            });
        }

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });
    };
})(jQuery);


/*   Feature Product items carousel. /plugins/owl carousel */
$(document).ready(function () {
    if ($('.owl-init').length > 0) { // check if element exists
        $(".owl-init").each(function () {
            var myOwl = $(this);
            var data_items = myOwl.data('items');
            var data_nav = myOwl.data('nav');
            var data_dots = myOwl.data('dots');
            var data_margin = myOwl.data('margin');
            var data_custom_nav = myOwl.data('custom-nav');
            var id_owl = myOwl.attr('id');

            myOwl.owlCarousel({
                loop: true,
                margin: data_margin,
                nav: eval(data_nav),
                dots: eval(data_dots),
                autoplay: false,
                items: data_items,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                //items: 4,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: data_items
                    },
                    1000: {
                        items: data_items
                    }
                }
            });

            // for custom navigation. See example page: example-sliders.html
            $('.' + data_custom_nav + '.owl-custom-next').click(function () {
                $('#' + id_owl).trigger('next.owl.carousel');
            });

            $('.' + data_custom_nav + '.owl-custom-prev').click(function () {
                $('#' + id_owl).trigger('prev.owl.carousel');
            });

        }); // each end.//
    }
    // end if
});

/*  End  Feature Product items carousel. /plugins/owl carousel */


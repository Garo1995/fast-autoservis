$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            $('.menu-cnt').css({width: '300px', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
})


$('.sidenav ul li a').click(function(){
    $('.sidenav ul li a').removeClass("sidenav_active");
    $(this).addClass("sidenav_active");
});


// $('.for-reviews__slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 5,
//     arrows: true,
//     responsive: [
//         {
//             breakpoint: 991.98,
//             settings: {
//                 slidesToShow: 3,

//             }
//         },
//         {
//             breakpoint: 767.98,
//             settings: {
//                 slidesToShow: 2,

//             }
//         },{
//             breakpoint: 575.98,
//             settings: {
//                 slidesToShow: 1,
//                 centerPadding: false,
//             }
//         },
//     ]
// });

 $('.for-reviews__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    arrows: true,
    asNavFor: '.for-reviews__sliders'
});
$('.for-reviews__sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.for-reviews__slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
   responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,

            }
        },{
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                centerPadding: false,
            }
        },
    ]
});


$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
})




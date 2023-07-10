$(function () {


    // $('.mopen').on('click', function () {
    //     $(this).toggleClass('on');
    //     $('.gnb').toggleClass('on');
    // });

    // $('.gnb').on('wheel touchmove', function (e) {
    //     e.preventDefault();
    // });


    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollTop();
    //     if (sct > 0) {
    //         $('.header').addClass('on');
    //     } else {
    //         $('.header').removeClass('on');
    //     }
    // });


    $('.main_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,

    });


    $('.slide_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.slide_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });



    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    })
})
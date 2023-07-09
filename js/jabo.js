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





})
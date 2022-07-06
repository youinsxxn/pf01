$(function () {
    $('.visual_slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        pauseOnHover: true,
    })

    $('.main .visual_control i:nth-child(1)').on('click', function () {
        $('.visual_slider').slick('slickPrev')
    });
    $('.main .visual_control i:nth-child(2)').on('click', function () {
        $('.visual_slider').slick('slickNext')
    });

    $('.coupon_slider').slick({
        dots: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
    })

    $('.coupon .coupon_control i:nth-child(1)').on('click', function () {
        $('.coupon_slider').slick('slickPrev')
    });
    $('.coupon .coupon_control i:nth-child(2)').on('click', function () {
        $('.coupon_slider').slick('slickNext')
    });
})
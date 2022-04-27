/* OwlCarousel */
$(document).ready(function(){
    $(".slider_area").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
    });
})
/* Slicknave */
$(document).ready(function(){
    $(".my_site__navbar").slicknav({
        "prependTo": '.my_site__navbar',
        "closeOnClick": '.my_site__navbar',
    });
})
// /* SmoothScroll */
// $(document).ready(function(){
//     $('html').smoothScroll(2000);
// });
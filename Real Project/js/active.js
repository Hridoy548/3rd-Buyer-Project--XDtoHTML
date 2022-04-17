/* OwlCarousel */
$(document).ready(function(){
    $(".real_slider").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        loop: true,
    });
})
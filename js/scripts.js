$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,

        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});



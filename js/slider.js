// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var swiper1 = new Swiper('.swiper1', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
    });

    var swiper2 = new Swiper('.swiper2', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

    var swiper3 = new Swiper('.swiper3', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
    });
});

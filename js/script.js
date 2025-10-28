const swiper = new Swiper('.swiper',
    {
        loop: true,
        // autoplay: {
        //     delay: 1000, // 1000ミリ秒
        // },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination' // ページネーションを有効化
        },
        navigation: {
            // 次へ前へボタン
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {

        }
    }
);
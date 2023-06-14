var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    rewind: true,
    pagination:false,
    breakpoints: {
        640: {
            perPage: 1,
            gap: '.7rem',
            height: '12rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '12rem',
        },
    },
});
splide.mount();
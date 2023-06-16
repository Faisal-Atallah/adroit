var splide = new Splide(".about-us-splide", {
  perPage: 6,
  rewind: true,
  pagination: false,
  arrows: false,
  breakpoints: {
    1024:{
        perPage: 4,
        gap: '0.5rem',
    },
    900:{
        perPage: 3,
    },
    700: {
        perPage: 3,
        gap: '.7rem',
        height: '12rem',
    },
    640: {
        perPage: 3,
        gap: '.7rem',
        height: '12rem',
    },
    480: {
        perPage: 3,
        gap: '1.7rem',
        height: '10rem',
    }}
});

splide.mount();

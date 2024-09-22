const previousArrow = document.querySelector('.previous-arrow');
const nextArrow = document.querySelector('.next-arrow');
const teamWrapper = document.querySelector('.team-wrapper');

// Scroll width to adjust for each card
const scrollAmount = teamWrapper.scrollWidth / teamWrapper.childElementCount;

previousArrow.addEventListener('click', () => {
    teamWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

nextArrow.addEventListener('click', () => {
    teamWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

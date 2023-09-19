const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.transform = 'translateX(0)';
            card.style.opacity = '1';
        } else {
            card.style.transform = 'translateX(100%)';
            card.style.opacity = '0';
        }
    });
}

// Add an event listener to the third image for redirection
const thirdImage = cards[2].querySelector('img'); // Assuming the third image is in the third card
thirdImage.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

// Initial setup
showCard(currentIndex);

const activities = [
    'Take a dance break! 💃',
    'Watch a funny cat video! 🐱',
    'Do 10 jumping jacks! 🤸‍♂️',
    'Draw a doodle! 🎨',
    'Sing your favorite song! 🎤',
    'Take a quick walk! 🚶',
    'Try some yoga! 🧘',
    'Have a mini dance party! 🕺',
    'Watch a funny dog video! 🐶',
    'Take a short nap! 💤'
];

let currentIndex = 0;

function showRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    document.getElementById('activity').innerText = activities[randomIndex];
    document.getElementById('activity').style.display = 'block';
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('activity').style.display = 'none';
    showSlide(currentIndex);
});

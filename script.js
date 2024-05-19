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

function showRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    document.getElementById('activity').innerText = activities[randomIndex];
    document.getElementById('activity').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('activity').style.display = 'none';
});

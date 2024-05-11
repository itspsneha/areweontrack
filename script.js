const activities = [
    'Take a dance break! 💃',
    'Watch a funny cat video! 🐱',
    'Do 10 jumping jacks! 🤸‍♂️',
    'Draw a doodle! 🎨',
    'Sing your favorite song! 🎤',
];

function showRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    document.getElementById('activity').innerText = activities[randomIndex];
}

function submitStatus() {
    const status = document.getElementById('status').value;
    document.getElementById('submitted-status').innerText = `Your status: ${status}`;
}

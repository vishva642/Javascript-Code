const quotes = [
    "Believe in yourself!",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "The best way to predict the future is to create it.",
    "Stay positive, work hard, make it happen."
];

function startCountdown() {
    let seconds = document.getElementById('timerInput').value;
    if (!seconds || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    let countdownDisplay = document.getElementById('countdown');
    let quoteDisplay = document.getElementById('quote');
    quoteDisplay.innerText = ""; // Clear previous quote
    countdownDisplay.innerText = seconds;

    let interval = setInterval(() => {
        seconds--;
        countdownDisplay.innerText = seconds;
        
        if (seconds <= 0) {
            clearInterval(interval);
            countdownDisplay.innerText = "Time's up!";
            quoteDisplay.innerText = quotes[Math.floor(Math.random() * quotes.length)];
        }
    }, 1000);
}
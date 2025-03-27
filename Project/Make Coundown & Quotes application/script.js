const quotes = [
    "The best way to predict the future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you."
];

let countdown;
let timeLeft = 10;

const countdownDisplay = document.getElementById('countdown');
const quoteDisplay = document.getElementById('quote');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    timeLeft = 10; // Reset countdown
    countdownDisplay.textContent = timeLeft;
    quoteDisplay.textContent = "Counting down...";
    
    clearInterval(countdown); // Clear any existing countdown
    countdown = setInterval(() => {
        timeLeft--;
        countdownDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            displayRandomQuote();
        }
    }, 1000);
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}
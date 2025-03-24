// Countdown Timer Setup
let countdownTime = 10; // Countdown starts from 10 seconds
const countdownElement = document.getElementById("countdown");

// Function to update the countdown timer
function updateCountdown() {
    countdownElement.innerText = countdownTime;

    if (countdownTime === 0) {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
        alert("Countdown finished!");
        countdownTime = 10; // Reset countdown time to 10 seconds
        startCountdown(); // Restart countdown
    } else {
        countdownTime--;
    }
}

// Function to start the countdown
function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

// Start the countdown when the page loads
startCountdown();

// Quotes setup
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display a random quote when the page loads
const quoteElement = document.getElementById("quote");
quoteElement.innerText = getRandomQuote();
 
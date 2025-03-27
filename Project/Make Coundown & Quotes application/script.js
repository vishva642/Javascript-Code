// Countdown Timer Logic
const countdownDate = new Date("March 31, 2025 00:00:00").getTime(); // Set your target date here

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();


// Quotes Logic
const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, don't waste it living someone else's life.",
    "In the middle of every difficulty lies opportunity.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The way to get started is to quit talking and begin doing.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Act as if what you do makes a difference. It does.",
    "Everything you can imagine is real."
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Initial call to show a random quote
showRandomQuote();

// Event listener for the 'Get New Quote' button
document.getElementById("new-quote").addEventListener("click", showRandomQuote);

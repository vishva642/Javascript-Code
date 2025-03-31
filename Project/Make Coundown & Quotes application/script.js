function updateCountdown() {
    const eventDate = new Date("December 31, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "Countdown expired!";
    }
}
setInterval(updateCountdown, 1000);

const quotes = [
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Keep your face always toward the sunshine—and shadows will fall behind you."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
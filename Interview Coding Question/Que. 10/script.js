// WAP to check given number is magic number or not? 

function isMagicNumber(num) {
    let sum = num;
    while (sum >= 10) {
        sum = sumDigits(sum);
    }
    return sum === 1;
}
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add last digit
        num = Math.floor(num / 10); // Remove last digit
    }
    return sum;
}
let num = 28; // Example number
if (isMagicNumber(num)) {
    console.log(num + " is a magic number.");
} else {
    console.log(num + " is not a magic number.");
}
num = 123; // Another example number
if (isMagicNumber(num)) {
    console.log(num + " is a magic number.");
} else {
    console.log(num + " is not a magic number.");
}
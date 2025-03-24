// WAP to check given number is Armstrong number or not? 

function order(num) {
    return String(num).length; // Efficient way to get the number of digits
}
function isArmstrong(num) {
    const len = order(num);
    let sum = 0;
    let temp = num; // Initialize temp with the original number
    while (temp > 0) {
      const digit = temp % 10;
      sum += Math.pow(digit, len);
      temp = Math.floor(temp / 10); // Use Math.floor for integer division
    }  
    return num === sum;
}  
let num = 153; // Example number
if (isArmstrong(num)) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}
num = 123; // Example number
if (isArmstrong(num)) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}
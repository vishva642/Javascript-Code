// WAP to print reverse number of given number? 

let num = 253;
let originalNum = num; // Store the original number
let rev = 0;
while (num > 0) {
    let digit = num % 10; // Get the last digit
    rev = rev * 10 + digit;
    num = Math.floor(num / 10); // Remove the last digit
}
console.log("Reversed number:", rev); //Added to show reversed number
console.log("Original number:", originalNum);
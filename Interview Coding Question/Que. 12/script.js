// WAP to find a factorial of given number. 

function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
let num = 5; // Example number
console.log("Factorial of " + num + " is " + factorial(num));
num = 7; // Another example
console.log("Factorial of " + num + " is " + factorial(num));
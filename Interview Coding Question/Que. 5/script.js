// WAP to Print sum of first and last digit of given number? 
// Input: 
//           768 
// Output: 
//           15 
// Input :   
//           8983 
// Output: 
//           11

function sumOfFirstAndLastDigit(number) {
    let numStr = number.toString();
    let firstDigit = parseInt(numStr[0]);
    let lastDigit = parseInt(numStr[numStr.length - 1]);
    return firstDigit + lastDigit;
}
let input1 = 768;
console.log(`Input: ${input1}\nOutput: ${sumOfFirstAndLastDigit(input1)}`);
let input2 = 8983;
console.log(`Input: ${input2}\nOutput: ${sumOfFirstAndLastDigit(input2)}`);
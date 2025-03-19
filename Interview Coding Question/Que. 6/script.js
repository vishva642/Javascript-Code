// WAP to print sum of middle of digits of given number? 
// Input: 
//           768 
// Output: 
//           6 
// Input :   
//           8983 
// Output: 
//           17 

function sumOfMiddleDigits(number) {
    let numStr = number.toString();
    if (numStr.length <= 2) {
        console.log("The number doesn't have middle digits.");
        return 0;
    }
    let sum = 0;
    for (let i = 1; i < numStr.length - 1; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}
let input1 = 768;
console.log(`Input: ${input1}\nOutput: ${sumOfMiddleDigits(input1)}`);
let input2 = 8983;
console.log(`Input: ${input2}\nOutput: ${sumOfMiddleDigits(input2)}`);
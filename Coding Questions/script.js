// 1. Positive or Negative number:

// let num=-20;
// if (num>0) {
//     console.log("Positive Number");
// }
// else if (num<0){
//     console.log("Negative Number");
// }
// else{
//     console.log("The number is zero");
// }

// 2. Even or Odd number

// let num=43;
// if(num%2==0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

// 3. Sum of First N Natural numbers

// let sum=0;
// let n=20;
// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log(`Sum : ${sum} `);

// 4. Sum of N natural numbers

// let sum=0;
// let s=10;
// let n=20;
// for(let i=s; i<=n; i++){
//     sum+=i;
// }
// console.log(`Sum : ${sum} `);

// 5. Sum of numbers in a given range

// let sum=0;
// let s=20;
// let e=40;
// for(let i=s; i<=e; i++){
//     sum+=i;
// }
// console.log(`Sum : ${sum} `);

// 6. Greatest of two numbers

// let a=30;
// let b=3;
// if(a>b){
//     console.log("Greater A");
// }
// else if(a<b){
//     console.log("Greater B");
// }
// else{
//     console.log("Both Are Equal");
// }

// 7. Greatest of the Three numbers

// let a=50;
// let b=40;
// let c=55;
// if((a>b)&&(a>c)){
//     console.log("Greatest A");
// }
// else if((b>a)&&(b>c)){
//     console.log("Greatest B");
// }
// else{
//     console.log("Greatest C");
// }

// 8. Leap year or not

// let year=1996;
// if(year%4==0){
//     console.log("Leap Year!");
// }
// else{
//     console.log("Not Leap Year!")
// }

// 9. Prime number

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// let num=50;
// if(isPrime(num)){
//     console.log("Prime Number!");
// }
// else{
//     console.log("Not Prime Number");
// }

// 10. Prime number within a given range

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// let s=1;
// let n=20;
// for(let i=s; i<=n; i++){
//     if(isPrime(i)){
//         console.log(i);
//     }
// }

// 11. Sum of digits of a number

// let num=5682;
// let sum=0;
// while (num!=0) {
//     sum+=num%10;
//     num=Math.floor(num/10);
// }
// console.log(`Sum : ${sum}`);

// 12. Reverse of a number

// let num = 12345;
// reverse = 0;
// while (num > 0) {
//     rem = num % 10;
//     reverse = reverse * 10 + rem;
//     num=Math.floor(num / 10);
// };
// console.log(`Reverse: ${reverse}`);

// 13. Palindrome number

// 14. Armstrong number

// let num = 567;
// len = order(num);
// while (x != 0) {
//     len++;
//     x = x / 10;
//     while (temp != 0) {
//         digit = temp % 10;
//         sum = sum + Math.pow(digit, len);
//         temp /= 10;
//     }
//     return len, num == sum;
// }

// function order(num) {
//     return String(num).length; // Efficient way to get the number of digits
// } 
// function isArmstrong(num) {
//     const len = order(num);
//     let sum = 0;
//     let temp = num; // Initialize temp with the original number
//     while (temp > 0) {
//       const digit = temp % 10;
//       sum += Math.pow(digit, len);
//       temp = Math.floor(temp / 10); // Use Math.floor for integer division
//     }  
//     return num === sum;
// }  
// let num = 153; // Example number
// if (isArmstrong(num)) {
//     console.log(num + " is an Armstrong number.");
// } else {
//     console.log(num + " is not an Armstrong number.");
// }
// num = 123; // Example number
// if (isArmstrong(num)) {
//     console.log(num + " is an Armstrong number.");
// } else {
//     console.log(num + " is not an Armstrong number.");
// }

// 15. Factorial of a number

// let num=4;
// let factorial=1;
// for(let i=num; i>=1; i--){
//     factorial*=i;
// }
// console.log(factorial);

// 16. Factor of a number

// let num=20;
// let factor=0;
// for(let i=num; i>=1; i--){
//     if (num%i==0) {
//         console.log(i);
//     }
// }

// 17. Prime Factors of a number

// function primeFactors(n) {
//     const factors = [];
//     // Divide n by 2 until it is odd
//     while (n % 2 === 0) {
//         factors.push(2);
//         n = n / 2;
//     }
//     // n must be odd at this point so we can skip even numbers
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         // While i divides n, add i and divide n
//         while (n % i === 0) {
//             factors.push(i);
//             n = n / i;
//         }
//     }   
//     // This condition is to handle the case when n is a prime number
//     // greater than 2
//     if (n > 2) {
//         factors.push(n);
//     }
//     return factors;
// }
// const num = 60;
// console.log(`Prime factors of ${num}: ${primeFactors(num).join(', ')}`);

// 18. Power of a number

// Method-1

// let num = 5;
// let n = 2;
// let answer = Math.pow(5,2);
// console.log(answer);

// Method-2

// function power(num){
//     let result=1;
//     for(let i=1; i<=exp; i++){
//         result *=num;
//     }
//     return  result;
// }
// let num=5;
// let exp=3;
// let ans=power(num,exp);
// console.log(ans);

// 19. Reverse Number

// let num = 253;
// let rev = 0;
// while (num > 0) {
//     let digit = num / 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num);
// }
// console.log(num);

// 20. Palindrome Number

// let num = 252;
// let originalNum = num; // Store the original number
// let rev = 0;
// while (num > 0) {
//     let digit = num % 10; // Get the last digit
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10); // Remove the last digit
// }
// console.log("Reversed number:", rev); //Added to show reversed number
// console.log("Original number:", originalNum); //Added to show original number
// if (originalNum == rev) { // Correct comparison
//     console.log("Palindrome Number");
// } else {
//     console.log("Not Palindrome Number");
// }

// 21. Fibonacci Series up to Nth Term

// let num = 10;
// let a = 0, b = 1;
// let nextTerm;
// console.log (a);
// console.log (b);
// for (let i = 2; i < num; i++) {
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//     console.log(nextTerm);
// }

// 22. Strong Number

// let num = 145;
// let originalNum = num; // Store original for comparison
// let sumOfFactorials = 0;
// while (num > 0) {
//     let digit = num % 10;
//     let factorial = 1;
//     for (let i = digit; i >= 1; i--) {
//         factorial *= i;
//     }
//     sumOfFactorials += factorial; // Add factorial of digit to sum
//     num = Math.floor(num / 10); // Remove the last digit
// }
// console.log("Sum of factorials:", sumOfFactorials);
// if (originalNum === sumOfFactorials) { // Correct comparison
//     console.log("Strong Number");
// } else {
//     console.log("Not Strong Number");
// }

// 23. Perfect Number

// let n = 48;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i == 0)
//         sum = sum + i;
// }
// if (sum == n) {
//     console.log(n + " Is a perfect number");
// }
// else {
//     console.log(n + " Is not a perfect number");
// }

// 24. Harshad Number

// let n = 48;
// let originalN = n; // Store the original value of n
// let result = 0;
// while (n > 0) { // Changed condition to n > 0 for accuracy
//     let pick_last = n % 10;
//     result = result + pick_last;
//     n = Math.floor(n / 10); // Use Math.floor for integer division
// }
// if (originalN % result === 0) { // Use originalN and === for comparison
//     console.log("Harshad Number");
// } else {
//     console.log("Not a Harshad Number");
// }

// 25. Abudunt Number

// let n=30;
// let sum=0;
// for (let i = 1; i < n; i++) { 
// if (n % i == 0) 
// sum = sum + i;
//  } 
// if (sum > n)
//     {
//       console.log(n + " is an Abundant Number");
//       console.log("The Abundance is: " + (sum - n));
//     }
//   else
//     console.log(n + " is not an Abundant Number");

// 26. Armstrong Number

// let num=1634;
// let temp=num;
// let numstr=num.toString().length;
// let sum=0;
// while(num>0){
//     let digit=num%10;
//     sum+=Math.pow(digit,numstr);
//     num=Math.floor(num/10);
// }
// if(temp==sum)
//     console.log("Armstrong Number");
// else
//     console.log("Not Armstrong Number");

// 27. Friendly Pair

// 28. 
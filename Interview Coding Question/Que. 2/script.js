// WAP to Swap of two variables using without third variable.

let a=10;
let b=20;
console.log(`Before Swapping A : ${a}`)
console.log(`Before Swapping B : ${b}`)
// [b,a]=[a,b]
a=a+b;
b=a-b;
a=a-b;
console.log(`Before Swapping A : ${a}`)
console.log(`Before Swapping B : ${b}`)
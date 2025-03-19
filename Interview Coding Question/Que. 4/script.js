// WAP to print sum of Digit of given number ?
//     Input :
//     768
// Output:
// 21 

let num=768;
let sum=0;
while(num!=0){
    sum+=num%10;
    num=Math.floor(num/10);
}
console.log(`Sum :  ${sum}`);
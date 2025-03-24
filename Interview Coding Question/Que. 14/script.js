//  Make table of given number: 
// No: 5 
// 5*1=5    5*2=10  5*3=15  5*4=20  

function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + (number * i));
    }
}
let num = 5; // Given number
printTable(num);

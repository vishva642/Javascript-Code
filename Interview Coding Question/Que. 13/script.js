// WAP to print below series Fibonacci series 
// 0, 1, 1, 2, 3, 5, 8, 13, 21  

function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) {
        console.log(b);
    }
    for (let i = 2; i < n; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
let n = 10; // Number of terms you want to print
fibonacci(n);
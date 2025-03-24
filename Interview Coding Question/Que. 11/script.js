// WAP to check given number is prime number or not? 

function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
let num=5;
if(isPrime(num)){
    console.log("Prime Number!");
}
else{
    console.log("Not Prime Number");
}
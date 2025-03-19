// WAP to find Rupees and Paisa from taking input from user

let money=12.50;
let rupees=Math.floor(money);
let paisa=Math.round((money-rupees)*100);
console.log(`${rupees} Rupees`);
console.log(`${paisa} Paisa`);
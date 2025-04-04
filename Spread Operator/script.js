// Array (Array ko copy kiya)

// let arr = [10, 20, 30, 40, 50];
// let newArray = [...arr];
// console.log(newArray);

// Adding New Element At The End

// let arr = [10, 20, 30, 40, 50];
// let newArray = [...arr, "Vishva"];
// console.log(newArray);

// // Or

// let arr = [10, 20, 30, 40, 50];
// arr = [...arr, "Vishva"];
// console.log(arr);

// Adding New Element At The Start

// let arr = [10, 20, 30, 40, 50];
// let newArray = [true,...arr, "Vishva"];
// console.log(newArray);

// Object (Object ko copy kiya)

// const obj = {
//     id:8872,
//     name:"Vishva",
// };
// const object = {...obj};
// console.log(object);

// Merge Of 2 Objects

// const obj1 = {
//     name:"Vishva",
//     salary:500000,
// };
// const obj2 = {
//     name:"Nency",
//     id:2,
// };
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Update data in object

// let obj1 = {
//     name:"Vishva",
//     salary:500000,
// };
// obj1 = {...obj1, salary:800000};
// console.log(obj1);

// Adding New Properties in Oject

// let obj1 = {
//     name:"Vishva",
//     salary:500000,
// };
// obj1 = {id:1,...obj1, salary:800000,State:"Gujarat"};
// console.log(obj1);
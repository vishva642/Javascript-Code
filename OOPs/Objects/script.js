// 1. Object Creation and Key-Value Pairs

// const person = {
//     name : "Vishva",
//     id : 8872,
//     age : 18
// }
// console.log(person)

// 2. Object Methods

// const person = {
//     name : "Vishva",
//     id : 8872,
//     age : 18,
//     details : function(){
//         console.log(`My name is ${this.name}, My age is ${this.age} and My ID is ${this.id}`);
//         console.log(this)
//     },
// };
// console.log(person);
// person.details();

// 3. Returning values of object methods

// const person = {
//     name : "Vishva",
//     id : 8872,
//     age : 18,
//     details : function(){
//         return `My name is ${this.name}, My age is ${this.age} and My ID is ${this.id}`;
//     },
// };
// console.log(person);
// console.log(person.details());

// 4. Modifying and Deleting object properties

// const person = {
//     name : "Vishva",
//     id : 8872,
//     age : 18,
//     details : function(){
//         return `My name is ${this.name}, My age is ${this.age} and My ID is ${this.id}`;
//     },
// };
// person.salary = 1000000; // Add
// console.log(person);
// person.id = 8875; // Modify
// console.log(person);
// delete person.age; // Delete
// console.log(person);

// 5. Constructor Function (Creating Template Objects)

// function Student(name, id, age){
//     this.name=name;
//     this.id=id;
//     this.age=age;
//     this.details=function(){
//         return `Name : ${this.name}, ID : ${this.id}, Age : ${this.age}`
//     };
// }
// const person1=new Student("Vishva", 8872, 18);
// const person2=new Student("Rimi", 8892, 18);
// console.log(person1.details());
// console.log(person2.details());
// console.log(person1.constructor);
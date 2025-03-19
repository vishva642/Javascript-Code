// let name="Vishva";
// let age=18;
// let rollno=24;
// console.log(name);
// console.log(age);
// console.log(rollno);
// const person = {
//     name : "Vishva",
//     age : 18,
//     rollno : 24
// }
// console.log(person)
// console.log(person.name);
// console.log(person.age);
// console.log(person.rollno);
// console.log(person["name"]);
// console.log(person["age"]);

// const personWithFunction = {
//     name : "Vishva",
//     age : 18,
//     rollno : 24,
//     teaching: function (){
//         console.log("JavaScript teaching");
//     },
// };
// personWithFunction.teaching();

// const personWithThis = {
//     name : "Vishva",
//     age : 18,
//     rollno : 24,
//     teaching: function (){
//         console.log(this);
//         console.log(
//             `I am ${this.name} and my age is ${this.age} and my rollno is ${this.rollno}`
//         );
//     },
// };
// personWithThis.teaching();

// personWithThis.name = "Radha";
// personWithThis.salary = 999;
// console.log(personWithThis);
// delete personWithThis.salary;
// console.log(personWithThis);

// let student = {
//   name: "Dhruv", // Student's name
//   subject: ["OS", "CPP", "DSA", "Networking", "Web Development"], // List of subjects
// };
// console.log(student);
// console.log(student.subject[2]); // Logs: DSA (the third subject in the array)
// delete student.subject[2];
// console.log(student);
// student.subject[2] = "Kya haal hai"; // Replaces the deleted element with a new value
// student.subject[5] = "Fine";
// console.log(student);

// let student = [
//   { name: "vishva", salary:0 },
//   { name: "vatsal" },
//   { name: "poojan",salary:1 },
//   { name: "jaimin",salary:10000 },
//   { name: "mastur",salary:-17 }
// ]
// student.forEach((item)=>console.log(item));
// console.log(student[3].salary)

// let student = [
//   { name: "vishva", salary:0 },
//   { name: "vatsal" },
//   { name: "poojan",salary:1 },
//   { name: "jaimin",salary:10000 },
//   { name: "mastur",salary:-17 }
// ]
// for (let item of student) {
//   console.log(item)
// }
// for (let index in student) {
//   console.log(student[index])
// }
// const names = student.map((s) => s.salary)
// console.log(names)
// console.log(student.keys())

// const person = {
//   name: "Pawan", // Property: name
//   age: 24, // Property: age
//   id: 11, // Property: id
// };
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// console.log(Object.create(person))
// let arr = Object.create(person);
// arr.name = "Pawan";
// arr.sn = 123
// console.log(person)
// console.log(arr)
// let attrib = Object.fromEntries(person);
// console.log(attrib)
// const students = [
//   { name: "Amit", age: 20 },
//      { name: "unal", age: 22 },
//     { name: "Sara", age: 22 },
//     { name: "unal", age: 21 }
// ];
// console.log(students[1].name); // Output: Sara
// let value = students.find((s) => s.name == "Kunal")
// console.log(value)
// let values = students.filter((s) => s.name == "unal")
// console.log(values)

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
//   ["id",123]
// ];
// const myObj = Object.fromEntries(fruits);
// console.log(myObj)
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// const person2 = {firstName: "Anne",lastName: "Smith"};
// Object.assign(person1, person2);
// console.log(person1)
// console.log(person2)

// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }
// const result = Object.groupBy(fruits, myCallback);
// let text = "These fruits are Ok: <br>";
// for (let [x, y] of result.ok.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }
// console.log(text);
// text += "<br>These fruits are low: <br>";
// for (let [x, y] of result.low.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }
// console.log(text);
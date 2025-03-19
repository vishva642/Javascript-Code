// Public Data Members

// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }
// class Sejal extends Student{
//     constructor(name, age, id){
//         super(name, age);
//         this.id=id;
//     }
//     details(){
//         console.log(`I am ${this.name} and my age is ${this.age} and my ID is ${this.id}`)
//     }
// }
// const se=new Sejal("Vishva",18,8872);
// se.details();

// Private Data Members

// class Student{
//     #name;
//     #age;
//     constructor(name,age){
//         this.#name=name;
//         this.#age=age;
//     }
//     get name(){
//         return this.#name;
//     }
//     get age(){
//         return this.#age;
//     }
//     display(){
//         console.log(`I am ${this.#name} and my age is ${this.#age}`)
//     }
// }
// class Sejal extends Student{
//     #id;
//     constructor(name, age, id){
//         super(name, age);
//         this.#id=id;
//     }
//     get id(){
//         return this.#id;
//     }
//     details(){
//         console.log(`I am ${this.name} and my age is ${this.age} and my ID is ${this.id}`)
//     }
// }
// const se=new Sejal("Vishva",18,8872);
// se.details();
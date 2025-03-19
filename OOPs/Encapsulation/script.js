// class Student{
//     constructor(name, id){
//         this.name=name;
//         this.id=id;
//     }
//     display(){
//         console.log(`Name : ${this.name} And ID : ${this.id}`)
//     }
// }
// const st=new Student("Vishva",8872)
// st.display();

// class Student{
//     #name;
//     #id;
//     constructor(name, id){
//         this.#name=name;
//         this.#id=id;
//     }
//     get name(){
//         return this.#name;
//     }
//     get id(){
//         return this.#id;
//     }
// }
// const st=new Student("Vishva",8872)
// console.log(st.name);
// console.log(st.id);

// class Student{
//     #name;
//     #id;
//     constructor(name, id){
//         this.#name=name;
//         this.#id=id;
//     }
//     get name(){
//         return this.#name;
//     }
//     get id(){
//         return this.#id;
//     }
//     set name(value){
//         if(value.length<2){
//             console.log("Name must be atleast 2 characters")
//         }
//         else{
//             this.#name=value;
//         }
//     }
// }
// const st=new Student("Vishva",8872)
// st.name="V";
// console.log(st.name);
// console.log(st.id);
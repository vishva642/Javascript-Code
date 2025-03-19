// function Student(name){
//     this.name=name;
//     this.display = function(){
//         console.log(`Name : ${this.name}`)
//     }
// }
// const st=new Student("Vishva")
// st.display()

// function Student(name){
//     this.name=name;
// }
// const st=new Student("Vishva")
// console.log(st.name);

// function Student(name){
//     this._name=name;
//     Object.defineProperty(this, "name", {
//         get : function(){
//             return this._name;
//         },
//         set : function(value){
//             return this._name=value;
//         }
//     }) 
// }
// const st=new Student("Vishva")
// console.log(st.name)
// console.log(st._name)

// function Student(name){
//     let _name=name;
//     Object.defineProperty(this, "name", {
//         get : function(){
//             return _name;
//         },
//         set : function(value){
//             this._name=value;
//         }
//     }) 
// }
// const st=new Student("Vishva")
// console.log(st.name)
// console.log(st._name)
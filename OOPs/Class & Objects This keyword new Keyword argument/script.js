class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
        console.log("Constructor called...");
    }
    display(){
        console.log(`My Name Is ${this.name} And My ID Is ${this.id}`);
    }
}
const obj =new Student("Vishva", 8872);
obj.display();
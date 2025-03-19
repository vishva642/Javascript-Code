const students = [
  { name: "Amit", age: 20 },
     { name: "unal", age: 22 },
    { name: "Sara", age: 22 },
    { name: "unal", age: 21 }
];
console.log(students[1].name); // Output: Sara

let value = students.find((s) => s.name == "Kunal")

console.log(value)

let values = students.filter((s) => s.name == "unal")

console.log(values)

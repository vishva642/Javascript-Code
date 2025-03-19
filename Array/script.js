// // Methods of Array In JavaScript

// // 1. Creating An Array

// let arr = [];
// console.log(arr);

// // 2. push()-> add elements in array

// arr.push(10);
// console.log(arr);

// arr.push(20, 30, 40);
// console.log(arr);

// // 3. pop()-> remove the last element from array

// console.log(`Removed element from Array: ${arr.pop()}`);
// console.log(arr);

// // 4. shift()-> remove the first element from array

// console.log(`Removed element from Array: ${arr.shift()}`);
// console.log(arr);

// // 5. unshift()-> add the element from first in array

// arr.unshift(100, 200, 300, 400);
// console.log(arr);

// // 6. splice(start, deleteItems, insertItems)
// // -> Modifies an array by removing, replacing, or adding elements

// arr.splice(2, 2, 11, 22, 33, 44, 55, 66, 77, 88, 99);
// console.log(arr);

// // 7. slice(start, end)
// // -> Returns a shallow copy of a portion of an array without modifying the original

// console.log(arr.slice(1, 5));

// // 8. at(index)-> Returns the element at the specified index

// console.log(arr.at(5));

// // 9. indexOf(element)-> Returns the first index of the specified element, -1 if not found

// console.log(arr.indexOf(55));

// // 10. length-> Returns the total number of elements in the array

// console.log(arr.length);

// // 11. includes(element) -> Checks if an element exists in the array (returns true/false)

// console.log(arr.includes(44));

// // 12. filter(callback)-> Returns a new array with elements that satisfy the condition

// let evenNumbers = arr.filter((item) => item % 2 == 0);
// console.log("Even Numbers: ", evenNumbers);

// // 13. forEach(callback) -> Iterates over an array and executes a function for each element

// arr.forEach((items) => console.log(items));

// // 14. map(callback) -> Creates a new array by applying a function to each element

// let squaredNumbers = arr.map((item) => item * item);
// console.log("Squared Numbers: ", squaredNumbers);

// // 15. reduce(callback, initialValue) 
// // -> Reduces the array to a single value (e.g., sum of all elements)

// let sum = arr.reduce((sum, item) => sum + item, 0);
// console.log(sum);

// let arr1 = [10,20,30,40,50,60]
// let add = arr1.reduce((result,element) => result+element,0)
// console.log(add);
//  Pattern  

// 1 
// 1 2 
// 1  2  3 
// 1  2  3  4 
// 1  2  3  4  5 

let num = 1; // Start with 1 for the first number
for (let i = 1; i <= 5; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}

// 1 
// 2  1 
// 3  2  1 
// 4  3  2  1 
// 5  4  3  2  1 

for (let i = 1; i <= 5; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    for (let j = i; j >= 1; j--) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}

// 5 
// 5  4 
// 5  4  3 
// 5  4  3  2   
// 5  4  3  2  1

let num2 = 5; // Start with 5 for the first number
for (let i = 1; i <= 5; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    for (let j = 5; j >= 6-i; j--) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}

// 5 
// 4  5 
// 3  4  5 
// 2  3  4  5 
// 1  2  3  4  5 

for (let i = 5; i >= 1; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    for (let j = i; j <= 5; j--) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 1112131415

let currentNum = 1;  // Start with 1 for the first number

for (let i = 1; i <= 5; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    
    for (let j = 1; j <= i; j++) {  // Inner loop to print numbers in each row
        row += currentNum + ' ';  // Append the current number to the row
        currentNum++;  // Increment the number for the next iteration
    }
    
    console.log(row.trim());  
}

// 1 
// 2 3 
// 4     6 
// 7         10 
// 11 12 13 14 15

let currentNum1 = 1;  // Start with 1 for the first number
for (let i = 1; i <= 5; i++) {  
    let row = '';  // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {  // Inner loop to print numbers in each row
        if (i >= 3 && j !== 1 && j !== i) {  
            row += '    ';  // Add 4 spaces between numbers
        } else {
            row += currentNum1 + ' ';  // Append the current number to the row
        }
        currentNum1++;  // Increment the number for the next iteration
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}

// 5  4  3  2  1  
// 5  4  3  2 
// 5  4  3 
// 5  4     
// 5 

let num1 = 5; // Start with 1 for the first number
for (let i = 1; i <= 5; i++) {  // Outer loop for rows
    let row = '';  // Initialize an empty string for each row
    for (let j = 5; j >= i; j--) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}
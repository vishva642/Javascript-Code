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
    for (let j = i; j >= 1; j++) {  // Inner loop to print numbers in each row
        row += j + ' ';  // Append each number to the row
    }
    console.log(row.trim());  // Print the row (remove trailing space)
}
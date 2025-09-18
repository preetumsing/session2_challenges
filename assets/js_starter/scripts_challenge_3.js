// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
let checkNumber5 = numbers.includes(5); //true

// If true, filter out numbers less than 5
if(checkNumber5) {
    let resultArray = numbers.filter((x) => x >= 5);
    console.log(resultArray); // 5,6
}

// Then square each number in the resulting array

// Output the final array

// Output a message if the number 5 is not in the array
// console.log("The number 5 is not in the array.");

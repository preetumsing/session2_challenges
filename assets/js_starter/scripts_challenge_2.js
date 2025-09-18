// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let array3 = [...array1, ...array2];

// Use the Set object to remove duplicates
let removeDuplicates = [...new Set(array3)];

// Use array destructuring to assign the first three elements to variables
let [firstNum, secondNum, thirdNum] = removeDuplicates;

// Set the value of the output filed to be the second element of the unique array
document.getElementById('OutputField').innerHTML = secondNum;
// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let resultIndex = numbers.findIndex((x) => x === 5);
// console.log(resultIndex); // 4

// If the number 5 is found in the array
if(resultIndex !== -1) {
  // Console log each number in the array up to and including 5
  numbers.forEach((x,y) => {
    if(y <= resultIndex) {
      console.log(x);
    }
  });
} else {
    // Output a message if the number 5 is not in the array
    console.log("Number not in array")
}
// math.js

// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
  return !isEven(number);
}

// Exporting utility functions
module.exports = {
  getRandomInt,
  isEven,
  isOdd,
};

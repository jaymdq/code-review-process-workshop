// math.js

// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
  const transformedMin = Math.ceil(min);
  const transformedMax = Math.floor(max);
  return Math.floor(Math.random() * (transformedMax - transformedMin + 1)) + transformedMin;
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

// math.js

/**
 * Function to generate a random integer within a specified range
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 */
function getRandomInt(min, max) {
  const transformedMin = Math.ceil(min);
  const transformedMax = Math.floor(max);
  return Math.floor(Math.random() * (transformedMax - transformedMin + 1)) + transformedMin;
}

/**
 * Function to check if a number is even
 * @param {number} number - The number to be checked.
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * Function to check if a number is odd
 * @param {number} number - The number to be checked.
 */
function isOdd(number) {
  return !isEven(number);
}

// Exporting utility functions
module.exports = {
  getRandomInt,
  isEven,
  isOdd,
};

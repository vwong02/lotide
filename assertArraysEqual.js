/* Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison. */

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);

  if (isEqual) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
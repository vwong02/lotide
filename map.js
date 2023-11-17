/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);

  if (isEqual) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["chicken nuggets", "tater tots", "croissants", "eggs"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["c", "t", "c", "e"]);

const nums = ["123", "456", "789"];
const results2 = map(nums, nums => nums[0]);
assertArraysEqual(results2, ["1", "4", "7"]);


const boolean = [true, true, false];
const results3 = map(boolean, boolean => boolean[0]);
assertArraysEqual(results3, [, , ,]); //needs to have comman in between to separate the commas from the results
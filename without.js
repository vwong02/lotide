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

// Create a without function that should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function (source, itemsToRemove){
  let updatedArray = [];

  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break; // add break to break out of loop once a match is found ==> AI Feedback
      }
    }

    if (shouldRemove === false) {
      updatedArray.push(source[i]);
    }
  }
  return updatedArray;
};


assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    
   let char = sentence[i]

    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
}
  return results;
};

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

const positionResults = letterPositions("hello")

assertArraysEqual(positionResults['h'], [0]);
assertArraysEqual(positionResults['e'], [1]);
assertArraysEqual(positionResults['l'], [2, 3]);
assertArraysEqual(positionResults['o'], [4]);
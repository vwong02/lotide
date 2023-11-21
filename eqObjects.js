const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false
      }
    } 
    return true
  };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// eqObjects function is to compare if the keys and values or object1 is the same as object2
const eqObjects = function(object1, object2) {
//They have the same number of keys
const object1Keys = Object.keys(object1);
const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false
  }
//The value for each key in one object is the same as the value for that same key in the other object
  for (const key of object1Keys) {
    if (Array.isArray(object1Keys[key]) === Array.isArray(object2Keys[key])) {
      return true
    }
    return false
  }

};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

module.exports = eqObjects;
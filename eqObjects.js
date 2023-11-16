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

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!


// // identical keys and identical values (in any order) => true
// // otherwise => false

// // const eqObjects = function(object1, object2) {
// //   // const object1Entries = Object.entries(object1)
// //   for (const key in object2) {
    
// //     if (object2[key] === object1[key]) {
// //      return true
// //     } else {
// //       return false
// //     }
// //   }
// // };

// const eqObjects = function(object1, object2) {
// //  Turn object1 and object 2 into keys
// const object1Keys = Object.keys(object1)
// const object2Keys = Object.keys(object2)
// const object1Values = Object.values(object1)
// const object2Values = Object.values(object2)

// console.log(object1Keys)

// const shirtObject = { color: "red", size: "medium" };
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// // console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

// // if (object1 === object2Entries) {
// //   console.log(true)
// // } else {
// //   console.log(false)
// // }

// //   for (const key in object2) {
// //     console.log(object1[key])
// //   }
// // }

// // const shirtObject = { color: "red", size: "medium" };
// // const anotherShirtObject= { size: "medium", color: "red" };
// // eqObjects(shirtObject , anotherShirtObject); // => true
// // console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

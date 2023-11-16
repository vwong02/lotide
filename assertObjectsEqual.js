const eqObjects = function(object1, object2){
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for(let key of object1Keys){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if (!eqArrays(object1[key],object2[key])){
             return false;       
            }
        }
        
    }
    return true;
}
return false;    
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' })


  // const eqArrays = function(x, y) {
  //   if (x.length !== y.length) {
  //     return false;
  //   }
  //   for (let i = 0; i < x.length; i++) {
  //     if (x[i] !== y[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  
  // const assertArraysEqual = function(actual, expected) {
  //   const isEqual = eqArrays(actual, expected);
  
  //   if (isEqual) {
  //     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  //   } else {
  //     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  //   }
  // };
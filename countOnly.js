const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.


const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1; 
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
}

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);



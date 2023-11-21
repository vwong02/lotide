const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {

  const obj = {};   //Create an empty object to store the counts of each letter
  for(const char of sentence){ // Iterate through each character in the sentence
    if (char !== ' ')// Check if the character is not a space
      if(obj[char]){ // Check if the character is already a property in the object
        obj[char] += 1;  // If yes, increment its count
      } else { 
        obj[char] = 1; // If no, create a new property with count 1
      }
  } 
  return obj; // Return the object containing the counts for each letter
}

const result = countLetters('hello, my name is Victoria');
console.log(result['h']);
console.log(result['e']);
// assertEqual(result['h'], 1);
// assertEqual(result['e'], 2);

module.exports = countLetters;
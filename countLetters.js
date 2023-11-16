const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const obj = {};
  for(const char of sentence){
    if (char !== ' ')
      if(obj[char]){
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
  } 
  return obj;
}

const result = countLetters('hello, my name is Victoria');
assertEqual(result['h'], 1);
assertEqual(result['e'], 2);

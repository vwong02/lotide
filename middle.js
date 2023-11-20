const middle = function(array) {
  // Arrays with 0-2 elements, return []
  if (array.length <= 2) {
    return [];
    // Even Numbers return two elements int he middle
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    // Odd Numbers return single middle element
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;
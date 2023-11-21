# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vwong02/lotide`

**Require it:**

`const _ = require('@vwong02/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual,expected)`: Takes in two arrays and asserts if they are equal or not
* `assertEqual(actual, expected)`: Takes in two values and asserts if they are equal 
* `eqArray(x, y)`: Takes in two arrays and compares them
* `assertObjectEqual(actual, expected)`: Takes in two objects and asserts if they are equal
* `countLetters(sentence)`: Takes in an array of strings and returns an object with the letter count for each letter
* `countOnly(allItems,ItemsToCount)`: Takes in an array of strings and returns an object with the appropriate counts.
* `eqObjects(Object1, Object2)`: Takes in two objects compares them 
* `findKey(obj, callback)`: Takes in an object and a callback. It will traverse the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `findKeyByValue(obj, value)`: Takes in an object and a value. Scan an object and return the first key which returns the given value
* `head(array)`: Returns the first element of an array
* `letterPositions(sentence)`: Returns all the indicies in the string where each character is found.
* `map(array, callback)`: Takes in an array and a callback and returns a new array after using the callback function on each element of the array
* `middle(array)`: Takes in an array and returns the middle index. If there is two numbers, returns the middle two indexes.
* `tail(array)`: Retrieves all elements of an array except the first one. 
* `takeUntil(array,callback)`: Takes in an array and returns a slice of the array taken from the beginning 
* `without(source, itemsToRemove)`: Takes in an array and itemsToRemove returning a new array with the items removed


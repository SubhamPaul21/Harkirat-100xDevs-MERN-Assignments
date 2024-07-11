/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase();
  let vowelSet = new Set(['e', 'a', 'i', 'o', 'u']);
  let vowelCount = 0;

  for (let char of str) {
    if (vowelSet.has(char)) {
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
}

// console.log(countVowels("AoPle"));

module.exports = countVowels;
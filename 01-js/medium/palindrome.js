/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(" ", "");
  str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
  let midIndex = str.length / 2;

  for (let i = 0; i < midIndex; i++) {
    if (str[i] != str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("race car"));

module.exports = isPalindrome;

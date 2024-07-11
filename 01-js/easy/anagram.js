/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1_Map = covertStrToMap(str1);
  let str2_Map = covertStrToMap(str2);

  if (str1_Map.size != str2_Map.size) {
    return false;
  }

  for (let key of str1_Map.keys()) {
    if (str2_Map.has(key)) {
      if (str2_Map.get(key) != str1_Map.get(key)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function covertStrToMap(str) {
  let str_Map = new Map();
  for (let char of str) {
    char = char.toLowerCase();
    if (str_Map.has(char)) {
      str_Map.set(char, str_Map.get(char) + 1);
    } else {
      str_Map.set(char, 1);
    }
  }
  return str_Map;
}

// console.log(isAnagram("hello", "hello!"));

module.exports = isAnagram;

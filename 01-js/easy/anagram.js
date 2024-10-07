/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase();
  let new1 = string1.split("").sort().join("");
  let string2 = str2.toLowerCase();
  let new2 = string2.split("").sort().join("");
  if( new1 == new2){
    return true;
  }
  else{
    return false;
  }

}

module.exports = isAnagram;
/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let list = ['a', 'e', 'i', 'o', 'u']
  let str2 = str.toLowerCase();
  console.log(str2);
  let count = 0;
  for(c of str2){
    if( list.includes(c)){
      count = count + 1;
    }

  }
  return count;
    // Your code here
}
console.log(countVowels('OpenAI'));

module.exports = countVowels;
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  punclist = ['/', '?', '.', ';', ':', ',', '!'];
  for(let c of str){
    if(punclist.includes(c)){
      str = str.replace(c, " ");
    }
  }
  let lowstr = str.toLowerCase();
  let finalstr = lowstr.replace(/\s/g, "");
  console.log(finalstr);
  let compstr = finalstr.split("").reverse().join("");
  console.log(compstr);

  for(i=0;i<finalstr.length;i++){
    if(finalstr[i] != compstr[i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
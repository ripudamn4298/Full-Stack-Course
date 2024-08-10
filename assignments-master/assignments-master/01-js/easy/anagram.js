/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  for(let i=0;i<str1.length;i++){
    let x = str1[i];
    if(str2.indexOf(x) == -1) return false;
  }
  return true;
}

console.log(isAnagram("","gh*"));

module.exports = isAnagram;

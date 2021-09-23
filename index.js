function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (reverseWord === word){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  take word and SPLIT it into array
  take array, REVERSE it, and JOIN together
  check IF new word EQUALS!!! start word the return true
  ELSE return false
*/

/*
  Add written explanation of your solution here
  So the function takes in a word provided as a string
  and splits in into an array. Then the array is reversed
  completely and joined back together. Then the function checks
  if the new word is spelled as same as the old word and, if so, 
  returns the value as "true". If not the return value is "false".
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  let word = "racecar"
  let revWord = word.split('').reverse().join('')
  console.log(revWord)

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

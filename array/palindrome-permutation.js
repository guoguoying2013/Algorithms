/*
check if a str is a permutation of a palindrome
ignore casing and non-letter characters
input: str
output: boolean
*/

function isPermutationOfPalindrome(str) {
  let counter = {};
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (counter[char] === undefined) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }
  }
  delete counter[' '];
  let oddCount = 0;
  for (key in counter) {
    if (counter[key] % 2 === 1) {
      oddCount ++;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log('Tact Coa', isPermutationOfPalindrome('Tact Coa'));

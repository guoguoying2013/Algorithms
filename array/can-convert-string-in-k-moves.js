/*
Given two strings s and t, your goal is to convert s into t in k moves or less.

During the ith (1 <= i <= k) move you can:

Choose any index j (1-indexed) from s, such that 1 <= j <= s.length and j has not been chosen in any previous move, 
nd shift the character at that index i times. Do nothing.
Shifting a character means replacing it by the next letter in the alphabet (wrapping around so that 'z' becomes 'a').
Shifting a character by i means applying the shift operations i times.

Remember that any index j can be picked at most once.

Return true if it's possible to convert s into t in no more than k moves, otherwise return false.
*/

const canConvertString = function(s, t, k) {
  if (s.length !== t.length) {
    return false;
  };
  if (s === t) {
    return true;
  };
  const shitsNum = [];
  const alphabet =
    [
      'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y',
      'z'
    ] ;
  for (let i = 0; i < s.length; i++) {
    shitsNum.push(Math.abs(alphabet.indexOf(s[i]) - alphabet.indexOf(t[i]))); 
  };
  console.log(shitsNum);
  const counter = {};
  for (let l = 0; l < shitsNum.length; l++) {
    if (l > k) {
      return false;
    }
    if (counter[shitsNum[l]] === undefined) {
      counter[shitsNum[l]] = 1;
    } else {
      counter[shitsNum[l]]++;
    }
  }
  const allowableOverlap = Math.floor(k/26);
  let overlap = 0;
  for (key in counter) {
    if (counter[key] > 1 && key > 0) {
     overlap ++;
    }
  }
  if(overlap > allowableOverlap) {
    return false;
  }
  return true;
};

// test 1
// const s = "input";
// const t = "ouput";
// const k = 9;

// test 2
// const s = "atmtxzjkz";
// const t = "tvbtjhvjd";
// k = 35;

// console.log(canConvertString(s, t, k));

// let canConvertString = (s, t, K, need = {}, needs = 0) => {
//     if (s.length != t.length)
//         return false;
//     for (let i = 0; i < s.length; ++i) {
//         let diff = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26;
//         if (diff)
//             need[diff] = need[diff] ? 1 + need[diff] : 1, ++needs;
//     }
//     for (let i = 1; i <= K && needs; ++i) {
//         let diff = i % 26;
//         if (need[diff])
//             --need[diff], --needs;
//     }
//     return !needs;
// };
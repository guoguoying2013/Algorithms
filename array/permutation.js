/*
Given two strings, write a method to decide if one is a permutation of the other.
Questions:
1. is it case sensitive?
2. is white space significant?
*/

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  };

  const sortStr = (str) => {
    charArry = str.split('');
    return charArry.sort().join('');
  };
  
  return sortStr(str1) === sortStr(str2);
}

console.log(checkPermutation('god  ', 'dog'));
console.log(checkPermutation('God', 'dog'));
console.log(checkPermutation('god', 'dog'));

const checkPermutation2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  };

  const counter = {};
  for (let i = 0; i < str1.length; i++) {
    if(counter[i] === undefined) {
      counter[str1[i]] = 1;
    } else {
      counter[str1[i]] ++;
    };
  };

  for (let j = 0; j < str2.length; j++) {
    if(counter[str2[j]] === undefined) {
      return false;
    } else {
      counter[str2[j]] --;
      if (counter[str2[j]] < 0) {
        return false;
      }
    }
  }

  return true;
}

console.log(checkPermutation2('god  ', 'dog'));
console.log(checkPermutation2('God', 'dog'));
console.log(checkPermutation2('god', 'dog'));
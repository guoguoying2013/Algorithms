/*
determine if all characters in a string are unique
*/
const isUnique = (str) => {
  if (str.length > 128) {
    return false;
  }
  const counter = {};
  for (let i = 0; i < str.length; i++) {
    if (counter[str[i]]) {
      return false;
    }
    counter[str[i]] = true;
  }
  return true;
}

// time complextiy is O(1)/O(n)
// space complexity is O(1)

console.log('aabbcd', isUnique('aabbcd'));
console.log('abcd', isUnique('abcd'));
/*

A message is a string of uppercase letters, and it is encoded first using this scheme.
For example, 'AZB' -> '1262'
Given a string of digits S from 0-9 representing an encoded message, 
return the number of ways to decode it.

Constraints:
[time limit] 5000ms
[input] string S
1 ≤ S.length ≤ 12
[output] integer

*/

// edge case: '1270' => no way to decode

function decodeVariations(str) {
  const n = str.length;
  const dp = new Array(n);
  dp[n] = 1;
  for (let i = n-1; i >= 0; i--) {
    if (str[i] == 0) {
      dp[i] = 0;
    } else if (str[i] == 1 && i + 2 < n) {
      dp[i] = dp[i + 1] + dp[i + 2];
    } else if (str[i] == 2) {
      dp[i] = dp[i + 1];
      if (i + 1 < n && str[i + 1] <= 6) {
        dp[i] += dp[i + 2];
      }
    } else {
      dp[i] = dp[i + 1];
    }
  }
  return dp[0];
}

console.log(decodeVariations('1262'));
console.log(decodeVariations('1270'));
console.log(decodeVariations('321121311231'));
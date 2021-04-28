function isSubsequence(string1, string2) {
  // Get two strings from input
  // 1 st string should match the the second string in same order
  if(string1 === string2) return true
  let left = 0;
  let next = 0;
  while (next < string2.length && left < string1.length) {
      if(string1[left] === string2[next]) {
          left++;
          next++;
          if(left === string1.length) {
              return true;
          }
      } else if (string1[left] !== string2[next]) {
          next++;
      }
  }
  return false;
}
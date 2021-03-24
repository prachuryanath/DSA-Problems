// Approach
// 1.First find the shortest string in the array; the length of this string is the maximum length of our prefix
//   1.1. this is because a prefix can't be longer than the word it inhabits
// 2.Next we iterate from index 0 to maxPrefixLength - 1
// 3.We use this index to check the corresponding character of each string together and compare them
// 4.This is easily done using Array.every
// 5.If all characters at index i match, then we add it to our prefix result string
// 6.As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
// 7.return prefix at the end, which may be empty

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
};
  

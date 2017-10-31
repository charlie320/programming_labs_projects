function is_palindrome(stringArg) {
  lastChar = stringArg.length - 1;
  stringHalf = Math.floor(stringArg.length/2); // division of integers does not result in truncation of result so Math.floor required
  console.log(stringHalf);
  isPalindrome = true;

  for (let i = 0; i < stringHalf; i++) {
    if ( stringArg[i] != stringArg[lastChar - i] ) {
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
}


console.log(is_palindrome("dad")); // true
console.log(is_palindrome("racecar")); // true
console.log(is_palindrome("daddy")); // false
console.log(is_palindrome("abba")); // true
console.log(is_palindrome("Abba")); // false
console.log(is_palindrome("")); // true
console.log(is_palindrome(" ")); // true

function is_alphabetical(stringArg) {
  stringArg = stringArg.toLowerCase();
  var strLength = stringArg.length;

  if (!stringArg || strLength <= 1) {
    return true;
  }

  if (stringArg[0].match(/[^a-z]/)) {
    return "Invalid input";
  }

  for (var i = 0; i < strLength - 1; i++) {
    if (stringArg[i+1].match(/[^a-z]/)) {
      return "Invalid input";
    }
    if (stringArg[i] > stringArg[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(is_alphabetical("")); // true
console.log(is_alphabetical(" ")); // true
console.log(is_alphabetical("a")); // true
console.log(is_alphabetical("ab")); // true
console.log(is_alphabetical("AbC")); // true
console.log(is_alphabetical("abc")); // true
console.log(is_alphabetical("aaabbbc")); // true
console.log(is_alphabetical("abcedfg")); // false
console.log(is_alphabetical("facetiously")); // false
console.log(is_alphabetical("adept")); // true
console.log(is_alphabetical("about")); // false
console.log(is_alphabetical("abcde!")); // invalid input

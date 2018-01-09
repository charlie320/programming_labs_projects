function r_str_subsets(str, newStr = "") {
  var strArray = [];
  var stringHead = "";

  console.log(str);
  if (newStr.length == 1) {
    return newStr;
  }
  else if (newStr.length == 2) {
    return newStr;
  }
  else {
    newStr = str;
    stringHead = newStr[0];
    newStr = newStr.substr(1,newStr.length-1);
    console.log(newStr);
    console.log(stringHead);
    // strArray.push(stringHead + r_str_subsets(newStr));
  }

  return strArray;
}

var myStr = "abcde";

console.log(r_str_subsets(myStr));

// length == 5
// clusters of length - 1 (4) resulting in (length-1) - 1 sets
// 0 to length - 2; // abcd
// 0 plus 2 to length - 1 // acde
// 1 plus 2 to length // bcde
// clusters of length - 2
// 0 plus 1 and 2 // abc
// 0 plus 2 and 3 // acd
// 0 plus 3 and 4 // ade
// clusters of length - 3
// 0 plus 1 // ab
// 0 plus 2 // ac
// 0 plus 3 // ad
// 0 plus 4 // ae
// cluster of 1
// 0

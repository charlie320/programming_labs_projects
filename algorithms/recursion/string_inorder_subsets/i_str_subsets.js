function i_str_subsets(str) {
  var tempArr = [];
  var tempStr = str;
  var strLen = str.length - 1;

  tempArr.push(str);

  for (let i = 0; i < str.length; i++) {
    tempStr = str.slice(i);
    for (let j = 0; j < )
  }

  return tempArr;
}

// var myStr2 = "ab";
// var myStr = "abc";
var myStr4 = "abcd";
// var myStr5 = "abcde";
// var myStrX = "abcdefghi";


console.log(i_str_subsets(myStr4));

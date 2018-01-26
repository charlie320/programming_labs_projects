function i_str_subsets(str) {
  var tempArr = [];
  var singlesArr = [];
  var tempStr = str;
  var strLen = str.length - 1;

  tempArr.push(str);

  for (let i = 0; i < str.length; i++) {
    tempArr.push(str[i]);
    singlesArr.push(str[i]);
  }


  return tempArr;
}

// var myStr2 = "ab";
// var myStr = "abc";
// var myStr4 = "abcd";
var myStr5 = "abcde";
// var myStrX = "abcdefghi";


console.log(i_str_subsets(myStr5));

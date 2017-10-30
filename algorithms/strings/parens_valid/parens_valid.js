function parens_valid(paren_string) {
  var valid_parens = true;
  var open_parens = 0;
  var l = paren_string.length;

  for (var i = 0; i < l; i++) {
    if (paren_string[i] == "("){
      open_parens++;
    }
    if (paren_string[i] == ")"){
      if (open_parens > 0) {
        open_parens--;
      } else {
        valid_parens = false;
        return valid_parens;
      }
    }
  }

  if (open_parens == 0) {
    valid_parens = true;
  } else {
    valid_parens = false;
  }
  return valid_parens;
}


var paren_string1 = "N(O(p)3";  //  return false
var paren_string2 = "N(O(p)3)";  //  return true
var paren_string3 = "N(O(p)3xyz(a))";  // return true
var paren_string4 = "N(O(p)3xyz(a)(132)";  //  return false
var paren_string5 = "N)O)p)3xyz(a((132";  //  return false
var paren_string6 = "(N)Op)3xyz(a((132"; //  return false
var paren_string7 = "NOp3xyza132"; //  return true

console.log(parens_valid(paren_string7));

function get_digits(myString) {
  var len = myString.length;
  var newString = "";
  var newInteger;
  for (let i = 0; i < len; i++) {
    if (myString[i].match(/\d/)) {
      newString += myString[i];
    }
  }
  newInteger = parseInt(newString);
  return newInteger;
}

var myString = "0s1a3y5w7h9a2t4?6!8?0"

console.log(get_digits(myString));

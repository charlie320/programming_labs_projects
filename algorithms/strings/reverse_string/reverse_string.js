function reverse_string(arg_string) {

  var strLength = arg_string.length;
  var newString = arg_string[strLength-1];

  for (let i = strLength-2; i >= 0; i--) {
    newString += arg_string[i];
  }
  return newString;
}


var arg_string = "Hello World";

console.log(reverse_string(arg_string));

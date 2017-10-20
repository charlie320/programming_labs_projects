function remove_blanks(myString) {
  var len = myString.length;
  var newString = "";

  for (let i = 0; i < len; i++) {
    if (myString[i] != " ") {
      newString += myString[i];
    }
  }
  return newString;
}

myString = " Pl   ayTha tF u nkyM usi c  ";

console.log(remove_blanks(myString));

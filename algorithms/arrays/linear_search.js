function linear_search(key, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return arr[i];
    }
  }
  return false;
}


var myArr = [1,2,5,6,9];
var key = 4;
console.log(linear_search(key, myArr));

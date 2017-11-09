function zip_to_map(arr1, arr2) {
  var l1 = arr1.length;
  var l2 = arr2.length;
  var i = 0;
  var asso_arr = {};

  if (l1 == 0) {
    return arr2;
  }
  if (l2 == 0) {
    return arr1;
  }

  while (arr1[i] && arr2[i]) {
    asso_arr[arr1[i]] = arr2[i];
    i++;
  }
  return asso_arr;
}

var arr1 = ["abc",3,"yo"];
// var arr1 = [];
var arr2 = [42,"wassup", true];
// var arr2 = [];

console.log(zip_to_map(arr1,arr2));

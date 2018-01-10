function r_binary_search(arr, num) {
  var arrLen = arr.length;
  var midPt = 0;

  if (arrLen == 0){
    console.log("There are no items in the array");
    return false;
  }
  if (arrLen == 1) {
    if (arr[0] == num) {
      return true;
    } else {
      return false;
    }
  }
  if (num < arr[0] || num > arr[arrLen-1]) {
    return false;
  }
  midPt = Math.trunc(arrLen/2);
  if (arr[midPt] == num) {
    return true;
  }
  if (num < arr[midPt]) {
    arr = arr.slice(0,midPt,);
    console.log(arr);
    return r_binary_search(arr, num);
  } else {
    arr = arr.slice(midPt);
    console.log(arr);
    return r_binary_search(arr, num);
  }
}

var myArr = [1,3,5,7,8,10,12,22,30,36,37,41,43,46,47,50,51,52,59,60,61,67,73,77,80];
// var myArr = [5,6];
console.log(r_binary_search(myArr,30));

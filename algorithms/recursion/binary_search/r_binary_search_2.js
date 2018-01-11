function r_binary_search_2(key, arr, min=0, max=arr.length-1) {
  var midPt = 0;
  var arrLen = arr.length;

  if (arrLen == 0) {
    console.log("There are no items in the array");
    return false;
  }
  if (max < min) {
    return -1;
  } else {
    midPt = Math.floor((max-min)/2);
  }

  if (arr[midPt] < key) {
    r_binary_search_2(key, arr, midPt + 1, max);
  } else if (arr[midPt] > key) {
    r_binary_search_2(key, arr, min, midPt - 1);
  } else {
    return midPt;
  }

}

var myArr = [1,3,5,7,8,10,12,22,30,36,37,41,43,46,47,50,51,52,59,60,61,67,73,77,80];
// var myArr = [5,6];
console.log(r_binary_search_2(myArr,30));

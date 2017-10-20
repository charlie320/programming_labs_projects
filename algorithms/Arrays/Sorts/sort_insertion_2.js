function insertion_sort_2(arr) {
  var l = arr.length;
  var temp;
  var idx;
  var k;
  var keepgoing;

  for(i = 1; i < l; i++) {
    temp = arr[i];
    k = i;
    while(k > 0 && arr[k-1] > temp) {
      arr[k] = arr[k-1];
      k = k-1;
    }
    arr[k] = temp;
  }
  return arr;
}

// var arr = [23,42,4,16,8,15];
var arr = [6,3,5,4,8,2,9,1,14,23,12,17];
// var arr = [23,17,14,12,9,8,6,5,4,3,2,1];
// var arr = [3,2,1];
// var arr = [1,2,3];
// var arr = [5];
// var arr = [];

console.log(insertion_sort_2(arr));

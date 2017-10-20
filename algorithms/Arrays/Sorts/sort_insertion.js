function insertion_sort(arr) {
var l = arr.length;
var temp;

  for(i = 0; i < l; i++) {
    for(k = 0; k < i; k++) {
      if(arr[i] < arr[k]) {
        temp = arr[i];
        for(x = i; x > k; x--) {
          arr[x] = arr[x-1];
        }
        arr[k] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}

var arr = [23,42,4,16,8,15];
// var arr = [6,3,5,4,8,2,9,1,14,23,12,17];
// var arr = [23,17,14,12,9,8,6,5,4,3,2,1];
// var arr = [3,2,1];
// var arr = [1,2,3];
// var arr = [5];
// var arr = [];

console.log(insertion_sort(arr));

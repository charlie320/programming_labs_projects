//though was insertion sort
function unknown_sort(arr) {
var l = arr.length;
var min;
var temp;
var idx;
var change;
  for(i = 0; i < l; i++){
    min = arr[i];
    change = false;
    console.log(arr);
    for(k = i+1; k < l; k++) {
        if(arr[k] < min){
          min = arr[k];
          idx = k;
          change = true;
        }
    }
    if(change){
      temp = arr[i];
      arr[idx] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}


// var arr = [6,3,5,4,8,2,9,1,14,23,12,17];
var arr = [23,17,14,12,9,8,6,5,4,3,2,1];
// var arr = [3,2,1];
// var arr = [1,2,3];
// var arr = [5];
// var arr = [];

console.log(unknown_sort(arr));

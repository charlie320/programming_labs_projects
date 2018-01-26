function bubbleSort(arr) {
  var l = arr.length;
  var swap;
  var temp;
  for (i = 0; i < l; i++ ){
    swap = false;
    console.log(arr);
    for (k = 0; k < l-i; k++ ){
      if(arr[k+1]){
        if(arr[k] > arr[k+1]){
          temp = arr[k];
          arr[k] = arr[k+1];
          arr[k+1] = temp;
          swap = true;
        }
      }
    }
    if(!swap){
      return arr;
    }
  }
  return arr;
}

var arr = [6,3,5,4,8,2,9,1,14,23,12,17];
// var arr = [23,17,14,12,9,8,6,5,4,3,2,1];
// var arr = [3,2,1];
// var arr = [1,2,3];
// var arr = [5];
// var arr = [];

console.log(bubbleSort(arr));

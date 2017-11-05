function selection_sort(arr){
  var l = arr.length;
  var min;
  var temp;
  var idx;
  var swap;
  
  for (i=0; i < l; i++){
    swap = false;
    min = arr[i];
    for(k=i+1; k < l; k++){
      if(arr[k] < min){
        idx = k;
        min = arr[idx];
        swap = true;
      }
    }
    if(swap){
      temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
      console.log(arr);
    }
  }
  return arr;
}


var arr = [3,4,9,11,6,-6,5,2,8,-50,7,23,1];
// var arr = [];
// var arr = [5];

console.log(selection_sort(arr));

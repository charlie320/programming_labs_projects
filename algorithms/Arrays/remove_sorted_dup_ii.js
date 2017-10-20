function removeSortDup(arr){
var len = arr.length;
var count = 0;
  for (var i = 0; i < len; i++){
    if(arr[i] == arr[i+1]){
      count++
    }else{
      for(var k = i-count; k < len; k++){
        arr[k] = arr[k+count];
      }
      len -= count;
      arr.length = len;
      i -= count;
      count=0;
    }
  }
  return arr;
}

var x = [1,2,2,2,3,4,4,7,8,8,8,8,8,8,8,8,9];
var y = [5];
var z = [];
console.log(removeSortDup(x));
console.log(removeSortDup(y));
console.log(removeSortDup(z));

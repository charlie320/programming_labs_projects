function removeAt(arr, num){
  var len = arr.length;
  for(var i = num; i < len; i++){
    if(arr[i+1]){
      arr[i] = arr[i+1];
    }
  }
  // arr.length -= 1;
  arr.pop();
  return arr;
}

function removeSortedDup(arr){
  var len = arr.length;
  for(var i = 0; i < len; i++){
      if(arr[i] == arr[i+1]){
        num = i+1;
        removeAt(arr,num);
        i--;
        len--;
      }
  }
  return arr;
}

var x = [1,1,1,2,2,2,3,4,4,4,5,6,6,6,6,7,7,7,8];
var y = [5];
var z = [];
console.log(removeSortedDup(x));
console.log(removeSortedDup(y));
console.log(removeSortedDup(z));

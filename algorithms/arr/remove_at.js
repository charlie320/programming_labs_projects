function removeAt(arr, num){
  var len = arr.length;
  for(var i = num; i < len; i++){
    if(arr[i+1]){
      arr[i] = arr[i+1];
    }
  }
  arr.length -= 1;
  return arr;
}

var x = [1,3,1,2,4,6,4,4,1,1,1,2,8];
removeAt(x, 12);

console.log(x);

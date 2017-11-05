function shiftRight(arr, num){
  var len = arr.length;
  var tempArr = [];
  var temp = 0;
  if(num > len){
    console.log("Shift number cannot exceed array length")
    return arr;
  }
  for(var i = len-num; i < len; i++){
    tempArr.push(arr[i]);
  }
  for(var i = len-1; i >= num; i--){
    arr[i] = arr[i-num];
  }
  for(var i = 0; i < tempArr.length; i++){
    arr[i] = tempArr[i];
  }
  return arr;
}

x = [1,2,3,4,5,6,7,8];
y = [5];
z = [];
console.log(shiftRight(x,4));
console.log(shiftRight(y,1));
console.log(shiftRight(z,0));

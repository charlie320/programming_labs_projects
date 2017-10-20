function shiftRightLeft(arr, num){
  var len = arr.length;
  var tempArr = [];
  var absNum = Math.abs(num);
    if(num >= 0){
      for(var i = len-num; i < len; i++){
        tempArr.push(arr[i]);
      }
      for(var i = len-1; i >= num; i--){
        arr[i] = arr[i-num];
      }
      for(var i = 0; i < tempArr.length; i++){
        arr[i] = tempArr[i];
      }
    }
    else{
      for(var i = 0; i < absNum; i++){
        tempArr.push(arr[i]);
      }
      for(var i = 0; i < len-absNum; i++){
        arr[i] = arr[i+absNum];
      }
      for(var i = 0; i < tempArr.length; i++){
        arr[(len-absNum)+i] = tempArr[i];
      }
    }
    return arr;
  }

x = [1,2,3,4,5,6,7,8];
xx = [1,2,3,4,5,6,7,8];
y = [5];
yy = [5]
z = [];
console.log(shiftRightLeft(x,5));
console.log(shiftRightLeft(xx,-5));
console.log(shiftRightLeft(y,1));
console.log(shiftRightLeft(yy,-1));
console.log(shiftRightLeft(z,0));

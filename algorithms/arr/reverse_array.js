function reverseArray(arr){
  var len = arr.length;
  var temp = 0;
  var half = Math.trunc(len/2);
  for (var i = 0; i < half; i++){
    temp = arr[len-(i+1)];
    arr[len-(i+1)] = arr[i];
    arr[i] = temp;
  }
  return arr;
}


x = [1,2,3,4,5,6,7,8];
y = [5];
z = [];
console.log(reverseArray(x));
console.log(reverseArray(y));
console.log(reverseArray(z));

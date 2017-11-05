function swapPairs(arr){
  var len = arr.length;
  var temp;
  for (var i = 0; i < len; i += 2){
    if(arr[i+1]){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
}

x = [1,4,6,4,9,2,9,1,4,5,100]
swapPairs(x);
console.log(x);

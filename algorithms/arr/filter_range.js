function filterRange(arr, min, max){
  var len = arr.length;
  var count = 0;
  for(var i = 0; i < len; i++){
    console.log(len);
    if(arr[i] > max || arr[i] < min){
      count++
      // console.log(count);
    }
    else{
      for(var k = i-count; k < len; k++){
        arr[k] = arr[k+count];
      }
      len -= count;
      arr.length = len;
      i -= count;
      count = 0;
    }
  }
  arr.length -= count;
  return arr;
}

x = [1,2,5,9,8,3,4,6,8,7];

console.log(filterRange(x,3,6));

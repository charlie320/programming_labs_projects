function insertAt(arr,idx,val){
  var len = arr.length;
  for (var i = len; i > idx; i--){
    arr[i] = arr[i-1];
  }
  arr[idx] = val;
  return arr;
}

var myArray = ["Jenn",1,4,"Joan",3,-7,"Dave",-4,6,true, "John"];
console.log(myArray);
console.log(insertAt(myArray,3,"Bo"));
console.log(myArray);

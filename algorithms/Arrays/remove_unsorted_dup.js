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

function removeDuplicates(arr){
  var len = arr.length;
  var dict = {};
  for(var i = 0; i < len; i++){
    if(arr[i] in dict){
      dict[arr[i]] += 1;
      removeAt(arr, i);
      len--;
      i--;
    }
    else{
      dict[arr[i]] = 1;
    }
  }
  return arr;
}

var x = [1,3,1,2,4,6,4,4,1,1,1,2,8];
var y = [5];
var z = [];
console.log(removeDuplicates(x));
console.log(removeDuplicates(y));
console.log(removeDuplicates(z));

function merge_sort(arr) {
  console.log(arr);
  if (arr.length < 2){
    return arr;
  }
  var middle = parseInt(arr.length/2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}


// var arr = [34,203,3,746,200,984,198,764,9];
// var arr = [4,15,16,50,8,23,42,108];
// var arr = [23,42,4,16,8,15];
var arr = [6,3,5,4,8,2,9,1,14,23,12,17];
// var arr = [23,17,14,12,9,8,6,5,4,3,2,1];
// var arr = [3,2,1];
// var arr = [1,2,3];
// var arr = [5];
// var arr = [];
console.log(merge_sort(arr));

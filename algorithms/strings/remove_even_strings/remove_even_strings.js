function remove_even_strings(arr) {
  var l = arr.length-1;

  for(var i = l; i >= 0; i--){
    if(arr[i].length % 2 === 0) {
      arr.splice(i,1);
    }
    console.log(arr);
  }
  return arr;
}

var arr = ["John","Jane","James","Jan","Jesse","Jane","Joe","Mary","Joanie"];
console.log(remove_even_strings(arr));

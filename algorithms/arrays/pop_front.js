function popFront(arr){
    // var len = arr.length;
    var temp = arr[0];
    // for (var i = 0; i < len-1; i++){
    //   arr[i-1] = arr[i];
    // }
    var i = 0;
    while(arr[i] != undefined){
      arr[i] = arr[i+1];
      i++;
    }
    arr.length -= 1;
    return temp;
}


var myArray = ["Jenn",1,4,"Joan",3,-7,"Dave",-4,6,true, "John"];
console.log(myArray);
console.log(popFront(myArray));
console.log(myArray);

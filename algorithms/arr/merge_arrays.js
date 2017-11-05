function mergeArr(arr1, arr2){
    var newArr = [];

    if(arr1.length > arr2.length){
        for(var i = 0; i < arr2.length; i++){
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
        }
        console.log(i);
        for(var k = i; k < arr1.length; k++){
        newArr.push(arr1[k]);
        }
    }
    else{
        for (var i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
        }
        for (var k = i; k < arr2.length; k++) {
            newArr.push(arr2[k]);
        }
        console.log(i);
    }
    return newArr;
}


array1 = [1,3,5];
array2 = [5,3,7,6,5];
console.log(mergeArr(array1, array2));

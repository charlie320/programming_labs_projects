function i_fibonacci(num) {
  var fibArr = [0,1];
  //
  // if (num == 0) {
  //   return num;
  // }
  // if (num == 1) {
  //   return num;
  // }
  // if (num > 1) {
  //   for (i = 2; i <= num; i++) {
  //     fibArr.push(fibArr[i-1] + fibArr[i-2]);
  //   }
  // }

  for (i = 0; i < num; i++) {
    fibArr.push(fibArr[0] + fibArr[1]);
    fibArr.shift();
    console.log(fibArr);
  }

  return fibArr[0];
}

console.log(i_fibonacci(5));

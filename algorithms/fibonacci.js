function fibonacci(num){
  var fib = 0;
  var fib1 = 0;
  var fib2 = 1;

  if(num == 0){
    return 0;
  }
  if(num == 1){
    return 1;
  }

  for (var i = 2; i <= num; i++){
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }

  return fib;
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

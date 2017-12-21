function fibonacci(num) {
  if(num == 0) {
    return 0;
  }
  if(num == 1) {
    return 1;
  }

  return fibonacci(num-2) + fibonacci(num-1);
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));

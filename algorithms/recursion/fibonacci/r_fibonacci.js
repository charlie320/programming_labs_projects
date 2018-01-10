function r_fibonacci(num) {
  if(num == 0) {
    return 0;
  }
  if(num == 1) {
    return 1;
  }

  return r_fibonacci(num-2) + r_fibonacci(num-1);
}
console.log(r_fibonacci(1));
console.log(r_fibonacci(2));
console.log(r_fibonacci(3));
console.log(r_fibonacci(4));
console.log(r_fibonacci(5));
console.log(r_fibonacci(6));
console.log(r_fibonacci(7));
console.log(r_fibonacci(8));
console.log(r_fibonacci(9));
console.log(r_fibonacci(10));

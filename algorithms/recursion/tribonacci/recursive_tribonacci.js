function r_tribonacci(num) {
  if(num == 0) {
    return 0;
  }
  if(num == 1) {
    return 0;
  }
  if(num == 2) {
    return 1;
  }

  return r_tribonacci(num-3) + r_tribonacci(num-2) + r_tribonacci(num-1);
}
console.log(r_tribonacci(1));
console.log(r_tribonacci(2));
console.log(r_tribonacci(3));
console.log(r_tribonacci(4));
console.log(r_tribonacci(5));
console.log(r_tribonacci(6));
console.log(r_tribonacci(7));
console.log(r_tribonacci(8));
console.log(r_tribonacci(9));
console.log(r_tribonacci(10));

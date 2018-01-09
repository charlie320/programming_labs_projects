function r_factorial (num) {
  if (num <= 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  return num * r_factorial(num-1);
}

console.log(r_factorial(3));
console.log(r_factorial(1));
console.log(r_factorial(0));
console.log(r_factorial(2));
console.log(r_factorial(5));

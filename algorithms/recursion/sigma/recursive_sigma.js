function r_sigma(num) {
  if (num <= 0) {
    return "Invalid number";
  }
  if (num == 1) {
    return 1;
  }
  return num + r_sigma(num-1);
}

console.log(r_sigma(5));
console.log(r_sigma(1));
console.log(r_sigma(0));
console.log(r_sigma(2));
console.log(r_sigma(10));

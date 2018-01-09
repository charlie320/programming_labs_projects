function i_factorial(num) {
  var multiplier = 1;

  for (let i = 1; i <= num; i++) {
    multiplier *= i;
  }
  return multiplier;
}

console.log(i_factorial(5));

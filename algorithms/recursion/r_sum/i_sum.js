function i_sum(num) {
  var sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(i_sum(5));

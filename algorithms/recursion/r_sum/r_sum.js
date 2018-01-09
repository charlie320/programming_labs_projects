function r_sum(num) {
  if (num == 1) {
    return 1;
  }

  return num + r_sum(num - 1);
}

console.log(r_sum(5));

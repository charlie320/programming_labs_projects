function r_gcf(a,b) {
  console.log(a + " " + b);
  if (a == b) {
    return a;
  }
  if (a > b) {
    return r_gcf(a-b,b);
  }
  if (a < b) {
    return r_gcf(a,b-a);
  }
}

console.log(r_gcf(12363,98760));

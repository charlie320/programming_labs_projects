function r_gcd(a,b) {
  console.log(a + " " + b);
  if (a % b == 0) {
    return b;
  } else {
    return r_gcd(b, a % b);
  }
}

console.log(r_gcd(123456,987654));
console.log(r_gcd(81,9));
console.log(r_gcd(125,30));

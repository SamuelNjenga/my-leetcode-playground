let myPow = function (x, n) {
  let num = 1;
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }
  for (let i = 0; i < Math.floor(n / 2); i++) {
    num = num * x;
  }
  return n % 2 == 0 ? num * num : num * num * x;
};

console.log(myPow(2, 10));
console.log(myPow(2, -2));

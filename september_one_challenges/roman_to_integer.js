var romanToInt = function (s) {
  let sum = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "M":
        arr.push(1000);
        break;
      case "D":
        arr.push(500);
        break;
      case "C":
        arr.push(100);
        break;
      case "L":
        arr.push(50);
        break;
      case "X":
        arr.push(10);
        break;
      case "V":
        arr.push(5);
        break;
      case "I":
        arr.push(1);
        break;
    }
    if (i && arr[i] > arr[i - 1]) {
      sum += arr[i] - arr[i - 1] * 2;
    } else sum += arr[i];
  }
  return sum;
};

console.log(romanToInt("XI"));
console.log(romanToInt("IX"));

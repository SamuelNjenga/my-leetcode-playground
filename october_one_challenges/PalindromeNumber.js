let isPalindrome = function (x) {
  // first if number is negative we return false, meaning it's not palindrome;
  if (x < 0) return false;
  // our variables
  let num = x;
  let reverse = 0;

  // we use a while . we keep going untill we get x = 0
  while (x > 0) {
    // multiply reverse by 10 and add the reminder
    reverse = reverse * 10 + (x % 10);

    // devide x by 10 and remove decimal point. if x === 0 then it exists the loop
    x = Math.floor(x / 10);
  }

  // now we are out of the while loop and we have the reverse number
  // lastly we compare the original number with the reverse. we use return and compare these two numbers
  // this will return True ( if they are equal ) or false( if they are not )
  return reverse === num;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

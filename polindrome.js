// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  var half = Math.floor(x / 2);
  var makeStr = String(x);
  var successChecker = 0;
  for (let i = 0; i < half; i++) {
    if (makeStr[i] === makeStr[makeStr.length - 1 - i]) successChecker++;
  }
  if (successChecker == half) {
    return true;
  } else {
    return false;
  }
};


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
  let temp = 0;
  let sum = 0;
  var makeStr = String(s);
  for (let i = 0; i < makeStr.length; i++) {
    switch (makeStr[i]) {
      case "I":
        if (temp >= 1 || temp == 0) {
          sum += 1;
        }
        temp = 1;
        break;
      case "V":
        if (temp >= 5 || temp == 0) {
          sum += 5;
        } else {
          sum += 5 - 2 * temp;
        }
        temp = 5;
        break;
      case "X":
        if (temp >= 10 || temp == 0) {
          sum += 10;
        } else {
          sum += 10 - 2 * temp;
        }
        temp = 10;
        break;
      case "L":
        if (temp >= 50 || temp == 0) {
          sum += 50;
        } else {
          sum += 50 - 2 * temp;
        }
        temp = 50;
        break;
      case "C":
        if (temp >= 100 || temp == 0) {
          sum += 100;
        } else {
          sum += 100 - 2 * temp;
        }
        temp = 100;
        break;
      case "D":
        if (temp >= 500 || temp == 0) {
          sum += 500;
        } else {
          sum += 500 - 2 * temp;
        }
        temp = 500;
        break;
      case "M":
        if (temp >= 1000 || temp == 0) {
          sum += 1000;
        } else {
          sum += 1000 - 2 * temp;
        }
        temp = 1000;
    }
  }
  return sum;
};

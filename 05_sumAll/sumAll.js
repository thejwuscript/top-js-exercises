const sumAll = function(min, max) {

  let result = 0
  let a
  let b

  if (min < 0 || max < 0) return "ERROR";
  if ( !Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

  if (min > max) {
    a = max;
    b = min;
  } else if (min < max) {
    a = min;
    b = max;
  }


  for (i = 0; ((a+i) <= b); i++) {
    result += (a+i);
  }
  return result;

}

// Do not edit below this line
module.exports = sumAll;

// Declare a variable "result" having initial value of 0.
// the iteration will be (min + i), i = 0, until (min + i) is equal to max.
// Iterator is i++
// Add the sum of (min +i) and "result" and store them in "result". Repeat this process.
// Return the variable at the end.

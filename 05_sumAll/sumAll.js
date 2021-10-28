let finalsum
const sumAll = function(a,b) {
  if (!(a > 0) || !(b > 0)) {
    return "ERROR";
  } else if (typeof b !== typeof 9) return "ERROR";
  else if ((a+b)%2 == 1) {
   finalsum = (a+b)* Math.round((Math.abs(b-a)/2));
   return finalsum;
  } else if ((a+b)%2 == 0) {
    finalsum = (a+b) * (Math.abs(b-a)/2) + ((b+a)/2);
    return finalsum;
  }
};

// Do not edit below this line
module.exports = sumAll;

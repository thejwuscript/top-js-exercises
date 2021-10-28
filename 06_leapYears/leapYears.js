const leapYears = function(Year) {
  if (Year%100 == 0 && Year%400 == 0) {
    return true;
  } else if (Year%100 == 0) {
    return false;
  } else if (Year%4 == 0) {
    return true;
  } else return false;
  
};

// Do not edit below this line
module.exports = leapYears;

//Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 
//are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 
//2000, which were in fact leap years).

// "divisible by four" means x%4 is == 0.
// "divisible by 100" means x%100 == 0.
// "divisible by 400" mean x%400 == 0.

// if (x%100 == 0 AND x%400 == 0) --> it's a leap year
// else if (x%100 == 0) --> not leap year
// else if (x%4 == 0) --> leap year
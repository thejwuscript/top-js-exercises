const reverseString = function(str) {
  let result = "";
  for (i = 1; i <= str.length; i++) {
    let char = str.substr(-i, 1);
    result += char;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

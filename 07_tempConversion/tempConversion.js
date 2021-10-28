const ftoc = function(tempinF) {

 let convertedtoC = (tempinF - 32) * 5/9;
 return Math.round(convertedtoC * 10) / 10;
 
};

const ctof = function(tempinC) {

  let convertedtoF = (tempinC * 9/5) + 32;
  return Math.round(convertedtoF*10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// round to one decimal place using Math.round(total * 10) / 10
// [°F] = [°C] × 9⁄5 + 32
// [°C] = ([°F] − 32) × 5⁄9
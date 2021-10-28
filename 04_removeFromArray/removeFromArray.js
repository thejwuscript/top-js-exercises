// Make the arguments into one big array.
let bigarray
let smallarray
const removeFromArray = function() {
  bigarray = Array.from(arguments);
  smallarray = arguments[0];

  for (i = 1; i < bigarray.length; i++) {
    for (j = 0; j < smallarray.length; j++) {
      if (smallarray[j] === bigarray[i]) {
        smallarray.splice(j,1);
        j--;
      } else continue;
    }
  }
return smallarray;
}


// removeFromArray([1,2,3,4],3);

// #1. Extract out the first argument which is the real array.


//Use splice() to remove elements from an array without leaving holes.
//For example, splice(0,1). "0th" position will be removed.

// Do not edit below this line
module.exports = removeFromArray;

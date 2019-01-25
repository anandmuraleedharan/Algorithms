//Algorithm: Binary Search [Assumption: Passed Array is sorted]
//Recursion + Call Stack
//Time Complexity: O(log N)
//Factorial using Recursion

function factorial(num){
  if(num === 1) {
    return num;
  } else {
    return num = num * factorial(num-1);
  }
}

function binarySearch(numArray,key) {
  var middleIndex = Math.floor(numArray.length/2);
  var middleElem = numArray[middleIndex];
  if(middleElem = key) {
    return true;
  } else if (middleElem < key && numArray.length > 1) {
     return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(numArray[0], middleIndex), key);
  } else {
    return false;
  }
}
 
 //Testing
factorial(5);
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

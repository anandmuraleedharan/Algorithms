//Algorithm: Reverse Array in place
//Do not use another array
//Do not use array reverse

function reverseArrayInPlace(arr) {
  for(var i=0; i<arr.length/2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = tempVar;
  }
  return arr;
}

//Testing
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);

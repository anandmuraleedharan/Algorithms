//Algorithm: Mean Median Mode
//Functional Programming - Splitting methods based on functionality
//Building Hashtables - Mode method

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode:getMode(arr)
  };
}

function getMean(arr){
  var sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  var mean = sum/arr.length;
  return mean;
}

function getMedian(arr){
  arr.sort(function(a,b) { return a - b;});
  var median;
  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length/2)];
  } else {
    var mid1 = arr[(arr.length/2)-1];
    var mid2 = arr[(arr.length/2)];
    median = (mid1 + mid2) / 2;
  }
  return median;
}

function getMode(arr){
   var modeObj = {};
  
  // create modeObj
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
 
 //Testing
meanMedianMode([9,10,23,10,23,9]);

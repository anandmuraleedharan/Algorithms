//Algorithm: Two Sum
//Hashtable
//Time Complexity: O(N)

function twoSum(numArr,sum) {
  var pairs = [];
  var hashtable = [];
  for(var i = 0; i < numArr.length; i++){
    var currElem = numArr[i];
    var counterpart = sum - currElem;
    if(hashtable.indexOf(counterpart) !== -1){
      pairs.push([currElem,counterpart]);
    }
    hashtable.push(currElem);
  }
  return pairs;
}
 
 //Testing
twoSum([1,8,6,3,4,5], 9);

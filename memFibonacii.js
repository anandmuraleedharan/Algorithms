//Algorithm: Memorized Fibonacii
//Concept of Cache or Memorization
//Time Complexity: O(n)

function fibMemo(idx, cache) {
  cache = cache || [];
  if (cache[idx]) {
    return cache[idx];
  } else {
    if(idx < 3) {
      return 1;
    } else {
      cache[idx] = fibMemo(idx - 1, cache) + fibMemo(idx - 2, cache);
    }
  }
  return cache[idx];
}

//Testing
fibMemo(1000); 

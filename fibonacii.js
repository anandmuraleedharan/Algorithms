//Algorithm: Fibinacii

function fibonacii(position){
  if(position < 3) {
    return 1;
  } else {
    return fibonacii(position - 1) + fibonacii(position - 2);
  }
}
 
 //Testing
fibonacii(6); 
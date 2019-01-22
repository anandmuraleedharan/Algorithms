//Algorithm: Caesar Cipher

function caesarCipher(str, num){
 var lowerCaseStr = str.toLowerCase();
 var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
 var newString = ""; 
 num = num % 26;

  for(var i=0; i < lowerCaseStr.length; i++) {
    var currLetter = lowerCaseStr[i];
    if(currLetter === " "){
      newString += currLetter;
      continue;
    }
    var currentIndex = alphabets.indexOf(currLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = 26 + newIndex;
    if(str[i] === str[i].toUpperCase()){
      newString += alphabets[newIndex].toUpperCase();
    }
    else newString += alphabets[newIndex];
  }

  return newString;
}

//Testing
caesarCipher('Zoo Keeper', 2);

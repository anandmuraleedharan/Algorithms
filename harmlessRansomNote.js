//Algorithm: Harmless Ransom Note

//Big O Notation - Time Complexity
//Constant: O(1)
//Logarithmic: O(log n)
//Linear: O(n)
//Exponential: O(n square)

function harmlessRansomNote (noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  
  //Hashed Table + Arrow function
  var magazineObj = {};
  magazineArr.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  })

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(!magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word]<0) noteIsPossible = false;
    } 
    else noteIsPossible = false;
  })

  return noteIsPossible;
}

//Testing
harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

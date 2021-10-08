const reverseOnlyLetters = (word) => {
  const array = word.split('');
  let i = 0;
  let j = array.length - 1;
  let rightLetter = null;
  let leftLetter = null;

  while(i < j) {
    if(!leftLetter && isLetter(array[i])){
      leftLetter = array[i];
    }


    if(!rightLetter && isLetter(array[j])){
      console.log('right Letter', array[j], j);
      rightLetter = array[j];
    }

    if(leftLetter && rightLetter) {
      const oldValue = array[i];
      array[i] = array[j];
      array[j] = oldValue;
      leftLetter = null;
      rightLetter = null;
      console.log('exchanged', i , j)
    }

    if(!leftLetter) i += 1;
    if(!rightLetter) j -= 1;
  }
  return array.join('');
}

const isLetter = (character) => {
  console.log('character', character);
  const charCode = character.charCodeAt(0);
  const lowerCaseLetter = charCode >= 65 && charCode <= 90;
  const upperCaseLetter = charCode >= 97 && charCode <= 122;

  return lowerCaseLetter || upperCaseLetter;
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

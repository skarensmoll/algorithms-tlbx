function alternatingChars(s) {
  let currentChar = s[0];
  let currentCharCount = 1;
  let charactersToDelete = 0;

  for(let i = 1; i < s.length; i++) {
    if(s[i] !== currentChar) {
      const diff = currentCharCount - 1;
      if (diff > 0) {
        charactersToDelete +=diff;
      }
      currentCharCount = 1;
      currentChar = s[i];
    }else {
      currentCharCount +=1;
    }
  }

  if(currentCharCount > 1) {
    charactersToDelete += currentCharCount - 1;
  }
  return charactersToDelete;
}


console.log(alternatingChars('AAAA')) //3
console.log(alternatingChars('BBBBB')) //4
console.log(alternatingChars('ABABABAB')) //0
console.log(alternatingChars('ABABABABB')) //1
console.log(alternatingChars('AAABBB')) //4
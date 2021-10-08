/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
  var counter = 0;

  this.findSubString = function(word, charIndex, target, numCharacters) {
    for(let i = 0; i < word.length; i++) {
      const targetChar = target[charIndex];
      if(word[i] === targetChar) {
        const newWord = word.substring((i + 1), word.length);
        const newNumCharacters = numCharacters + 1;
        console.log('character', word[i], 'newWord', newWord, 'numCharacters', newNumCharacters);
        this.findSubString(newWord, charIndex + 1 , target, newNumCharacters);

        if(targetChar === target[target.length - 1] && newNumCharacters === target.length) {
          counter += 1;
          return;
        }
      }
    }
  }

  this.findSubString(s, 0, t, 0);
  return counter;
};


console.log(numDistinct('babgbag', 'bag'));

console.log(numDistinct('rabbbit', 'rabbit'));

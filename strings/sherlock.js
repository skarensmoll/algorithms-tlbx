let keys = {};

function hashMap(s) {
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    keys[char] = keys[char] === undefined ? 1 : keys[char] + 1;
  }
}


function countCharsCheck() {
  let isValid = true;
  const objKeys =  Object.keys(keys);
  let extraLetterIndex = null;
  let numTimes = -1;

  for(let i = 0; i < objKeys.length - 1; i++) {
    const diff = keys[objKeys[i]] - keys[objKeys[i+1]];
    const absDiff = Math.abs(diff);
    console.log(keys[objKeys[i]] - keys[objKeys[i+1]] );

    if(absDiff === 0) {
      if (numTimes !== -1 && numTimes !== objKeys[i]){
        isValid =false;
        continue;
      }
      numTimes = objKeys[i];
      continue;
    }

    if(absDiff > 1) {
      isValid = false;
      break;
    }

    if(absDiff ===  1 && extraLetterIndex === null) {
      extraLetterIndex = i + 1;
      continue;
    }

    if(absDiff ===  1 && extraLetterIndex !== i) {
      isValid = false;
      break;
    }
  }

  return isValid ? 'YES' : 'NO';
}


hashMap('abcdefghhgfedecba');
console.log(keys);
console.log(countCharsCheck()) //NO
function checkBalancedParenthesis(parenthesis) {
  const stackTags = [];
  const brackets = {
    '{' : '}',
    '(': ')',
    '[': ']'
  }

  let isValid = true;

  for(let i = 0; i < parenthesis.length; i++) {
    const character = parenthesis[i];

    if (brackets[character] !== undefined) {
      stackTags.push(character);
    } else {
      const latestOpeningTag = stackTags.pop();
      const closingTag = brackets[latestOpeningTag];
      if(closingTag !== character) {
        isValid = false;
        break;
      }
    }
  }

  isValid = stackTags.length > 1 ? false: isValid;

  return isValid;
}


console.log(checkBalancedParenthesis('{{[[(())]]}}')); // false
console.log(checkBalancedParenthesis('{[(])}')); //true
console.log(checkBalancedParenthesis('{[()]} ')); //true



function isPalindromPermutation(str) {
    let odds = 0;
    let characters = new Array(128);

    for(let i = 0; i < str.length; i++) {
        if(str[i] == ' ') { continue; } 
        let index = str.charCodeAt(i);

        characters[index] = !characters[index] ? 1 : characters[index] + 1;

        if(characters[index] % 2  === 0 && odds > 0) odds -= 1;
        else odds += 1;
    }

    return (odds == 1 || odds === 0)
}

console.log( isPalindromPermutation('code') ); //false
console.log( isPalindromPermutation('aab') ); //true
console.log( isPalindromPermutation('carerac') ); //true

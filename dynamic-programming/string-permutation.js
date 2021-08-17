function permutation(string) {
    if(string.length === 1) return string;

    let chain = [];
    
    for(let i = 0; i < string.length; i++) {
        const char =  string[i];
        const newString = string.slice(0, i) + string.slice(i + 1);
        const result = permutation(newString);
	      chain[i] = !chain[i] ? [] : chain[i];
        
        if (result.length === 1) {
        	chain[i].push(char + result);
        } else {
	        result.forEach(item => {
          	chain[i].push( char + item );
          })        
        }
    }
		return chain;
}

console.log(permutation('abc')); // ab ba

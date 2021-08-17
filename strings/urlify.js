// The O(n) approach
function URLify(str) {
        let pivot = 0;
        let words = [];

        for(let i = 0; i < str.length; i++) {
                if(str[i] === ' ' && pivot == i) {
                        pivot += 1;
                        continue;
                }
                if(str[i] === ' '){
                        words.push(str.slice(pivot, i))
                        pivot = i + 1
                }
        }
        return  words.join('%20');
}

console.log(URLify('Mr John Smith   '));

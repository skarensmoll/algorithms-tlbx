/// Counting sort 

function CheckPermutation(str1, str2) {
    const maxStr = str1.length > str2.length ? str1 : str2;
    const minStr = str1.length < str2.length ? str1 : str2;
    const counter = new Array(128);

    for(let i = 0; i < maxStr.length; i++) {
        const index =  maxStr.charCodeAt(i)
        counter[index] = !counter[index] ? 1 : counter[index] + 1;
    }

    for(let i = 0; i < minStr.length; i++) {
        const index = minStr.charCodeAt(i);

        if(!counter[index]) return false;
        if(counter[index] === 0) return false;
        
        counter[index] -= 1;
    }
    return true;
}

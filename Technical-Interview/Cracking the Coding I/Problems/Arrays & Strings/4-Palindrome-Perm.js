/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­
drome. A palindrome is a word or  phrase that is the same forwards and backwards. A permutation 
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

EXAMPLE 
Input:  Tact  Coa 
Output:  True  (permutations:  "taco  cat",  "atco  cta",  etc.) 
*/


function palPerm(str) {
    str = str.toLowerCase().replaceAll(' ', '');

    let cache = new Array(128).fill(0);

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        cache[code] = cache[code] === 1 ? 0 : 1;
    }


    let seen = false;

    for (let elem of cache) {
        if (elem === 1) {
            if (seen)return false;
            else {
                seen = true;
            }
        }
    }
    return true;
}


console.log(palPerm("taco cat"))
/*

Check Permutation: Given two strings, write a method to decide if one is a permutation of the 
other.

tips:
    - always ask for character set i.e. ASCII (128 chars) vs. Unicode (143,859)
    - character codes are very useful

*/




function checkPermutation1(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    str1 = str1.split('');
    str2 = str2.split('');

    str1.sort((a,b) => a.localeCompare(b));
    str2.sort((a,b) => a.localeCompare(b));

    for (let i = 0; i < str1.length; ++i) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
}


function checkPermutation2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let cache = new Array(128).fill(0);
    for (let i = 0; i < str1.length; i++) {
        let code = str1.charCodeAt(i);
        cache[code]++;
    }
    for (let i = 0; i < str1.length; i++) {
        let code = str2.charCodeAt(i);
        cache[code]--;
    }
    for (let i = 0; i < cache.length; i++) {
        if (cache[i] < 0) {
            return false;
        }
    }

    return true;

    
}

console.dir(checkPermutation2('hel', 'hel'));
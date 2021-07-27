/*

1) Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you 
 cannot use additional data structures?


*/


function isUnique1(str) {
    let map = new Object(null);

    for (let char of str) {
        if (map[char]) {
            return false;
        } else {
            map[char] = true;
        }
    }
    return true;
}


function isUnique2(str) {
    str = str.split('');
    str.sort((a,b)=>a.localeCompare(b));
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isUnique1('helo'));
console.log(isUnique1('hlelo'));
console.log(isUnique2('helo'));
console.log(isUnique2('helol'));



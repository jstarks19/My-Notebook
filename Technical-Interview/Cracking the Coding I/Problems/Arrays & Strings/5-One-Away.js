/*
One Away: There  are  three  types  of  edits  that  can be  performed  on  strings:  insert  a  character, 
remove a character, or  replace a character. Given  two strings, write a  function to check if they are 
one edit (or zero edits) away. 
*/



/// what does it mean to be one away
    // one replace away = same strings, difference of a single character
    // one insertion/deletion away = same strings, difference 

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    } else if (str1.length === str2.length) {
        return checkForReplace(str1, str2);
    } else if (str1.length + 1 === str2.length) {
        return checkForInsertDelete(str1, str2);
    } else {
        return checkForInsertDelete(str2, str1);
    }
}


function checkForReplace(str1, str2) {
    let count = 0;
    for(let i = 0; i < str1.length; ++i) {
        if (str1[i] !== str2[i]) {
            if (count > 0) return false;
            else {
                count++;
            }
        }
    }
    return true;
}

// first argument is the longer of the two 
function checkForInsertDelete(str1, str2) {
    let idx1 = 0;
    let idx2 = 0;
    let count = 0;

    while(idx2 < str2.length && idx1 < str1.length) {
        if (str1[idx1] !== str2[idx2]) {
            if (count > 0) {
                return false;
            } else {
                count++;
                idx2++;
            }
        } else {
            idx1++;
            idx2++;
        }
    }   

    return true;

}


console.log(oneAway("hello", "hdelo"));
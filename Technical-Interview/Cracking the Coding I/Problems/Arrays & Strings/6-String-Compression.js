/*

String Compression: Implement a method to perform basic string compression using the counts 
of  repeated  characters.  For  example,  the  string aabcccccaaa  would become  a2blc5a3.  If the 
"compressed" string would not become smaller than the original string, your method should return 
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

*/


function stringCompression(str) {
    let currChar = null;
    let count = 0;
    let currLength = str.length;
    let compressedTotal = 0;
    let stringBuild = [];

    for (let char of str) {
        if (currChar === null) {
            currChar = char;
            count++;
        } else if (currChar === char) {
            count++;
        } else {
            stringBuild.push(`${currChar}${count}`);  
            currChar = char;
            count = 1;
        }
    }
    if (count > 0) {
        stringBuild.push(`${currChar}${count}`);
    }
    let newStr = stringBuild.join('');

    if (newStr.length < currLength) {
        return newStr;
    } else {
        return str;
    }

}


console.log(stringCompression(process.argv[2]));
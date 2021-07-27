/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string 
has sufficient space at the end to hold the additional characters, and that you are given the "true" 
length of the string. (Note:  If implementing in Java, please use a character array so that you can 
perform this operation in place.) 
EXAMPLE 
Input:  "Mr  John  Smith  ",  13 
Output:  "Mr%20John%20Smith"
*/



function URLify(str, length) {

    let spaces = 0;
    for (let i = 0; i < length; i++) {
        if (str[i] === ' ') {
            spaces++;
        }
    }

    let index = ((length + spaces * 2) - 1) // indexing from the back of the total string

    for (let i = length; i >= 0; i--) {
        if (str[i] === ' ') {
            str[index] = "0";
            str[index - 1] = "2";
            str[index - 2] = "%";
            index = index - 3;

        } else {
            str[index] = str[i];
            index--;
        }

    }

}
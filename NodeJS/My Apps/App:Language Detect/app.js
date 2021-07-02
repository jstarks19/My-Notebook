// Application for a language guesser

const figlet = require('figlet');
const colors = require('colors');
const franc = require('franc');
const langs = require('langs');


// Grab user input from CMD line
let inputText = process.argv.splice(2);

// Convert the array into a single string
let fullString = inputText.reduce((acc, head) =>  {
   return acc + ` ${head}`;
},
"");

// Convert the string into it's lang code
    // Convert the lang code into it's language object
        // Pull the name of the language out from the language object
let code = franc(fullString);
let langName = langs.where('3', code);
let res = langName ? langName.name : 'Unknown';


// Use figlet 
figlet(res, (err, result) => {

    if (err) {
        console.log('error srry');
        return;
    } else {
        console.log(result.brightCyan.bold);
    }
});





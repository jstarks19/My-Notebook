

/*
    The --noEmitOnError flag used in compiling a typescript file will emit no output js file when an error occurs
        - This is useful when converting some JS code over to TS. If the JS code works, why recompile and reemit when you know the TS code is not working for right now

*/



// Basic Explicit Typing
let myName : string = "Jason";

function multiTypeFunction(name: string, age: number, interests: string[]) {
    console.log(`My name is ${name} and my age is ${age}`);
}

// TypeScript also infers types
let myNewName = "Jason";
    // inferred to be of type string 

    // generally it is best practice to avoid using explicit types if the type can be easily inferred (as above)



// Erased Types
    /*
        When outputting the compiled JS, the TypeScript code erases the specific types
    */

// Downleveling
    /*
        One other nicety of TS is it can 'downlevel' a piece of code
        - this means it can convert an ES6, ES5, etc. down to a lower level ES4, ES3, etc.
        - by default TS targets ES3 
            - this is done for compatibilty reasons
        - however, you are able to target your specific es version using the --target flag
            - '--target es2015'
    */

// Strictness

    /*
        TypeScript offers the ability to 'dial in' on the strictness of your application 
    */
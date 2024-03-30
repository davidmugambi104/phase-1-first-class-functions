// index.js

// Function that returns a named function
function returnsANamedFunction() {
    return David; // Return the named function
}

// Named function
function David() {
    
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
    };
}
function receivesAFunction(callback) {
    callback();}

// There are three methods for updating files, then being:
var fs = require('fs');

// Appends the specified text at the end of the 
// specified file
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err) {
    if (err) throw err;
    console.log('Updated!');
});

// Replaces the specified File and Content
fs.appendFile('mynewfile3.txt', 'This is my text', function(err) {
    if (err) throw err;
    console.log('Replaced!');
});
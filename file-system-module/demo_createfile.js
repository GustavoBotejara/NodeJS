// There are three methods that can be used to create new files, being:
var fs = require('fs');

// Appends specified content to a file. If the file doesn't exist 
// the file will be created 
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved');
});

// Takes a flag as the second argument if the flag is "w" for writing
// the specified file is opened for writing. If the file doesn't exist 
// an empty file will be created 
fs.open('mynewfile2.txt', 'w', function(err) { 
    if (err) throw err;
    console.log('Saved');
});

// Replaces the specified file and content if it exists.
// If the file doesn't exist the file will be created containing the 
// specified content
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
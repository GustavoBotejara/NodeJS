var fs = require('fs');

// The method for deleting a file is the following:
fs.unlink('mynewfile2.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});
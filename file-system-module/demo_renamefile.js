var fs = require('fs');

// The following method is used for renaming a file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File renamed');
});
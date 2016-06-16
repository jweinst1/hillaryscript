#!/usr/bin/env node

var fs = require('fs');
var userArgs = process.argv.slice(2);

//reads string from file
fs.readFile(userArgs[0], 'utf-8', function (err, data) {
    if (err) throw err;
    data = data.split("\n");
    readstring = data[0]
    fs.writeFile(userArgs[1], readstring, function (err) {
        if (err) throw err;
        console.log('Your file has been transcompiled to Javascript');
    });
});

//file for transcompiling hillaryscript to javascript

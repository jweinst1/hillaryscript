#!/usr/bin/env node

var fs = require('fs');
var userArgs = process.argv.slice(2);
var trsf = require("./transfuncs.js");
var crpt = require("./corrupter.js");

//gets out list of functions to apply
var funcs = trsf.transCompileFunctions;

//reads string from file
fs.readFile(userArgs[0], 'utf-8', function (err, data) {
    if (err) throw err;
    for(var key in funcs) {
    	data = funcs[key](data);
    }
    compiledcode = crpt.corruptor(data);

    fs.writeFile(userArgs[1], compiledcode[0], function (err) {
        if (err) throw err;
        if (compiledcode[1]) {
        	console.log('Your file has been corrupted by Trump')
        }
        else {
        	console.log('Your file has been transcompiled to Javascript');
        }
    });
});

//file for transcompiling hillaryscript to javascript
//file for the browser mainfunction for transcompiling

var trsf = require("./transfuncs.js");
var crpt = require("./corrupter.js");

var Transcompile = function(code){
	for(var key in funcs) {
    	data = funcs[key](data);
    }
    compiledcode = crpt.corruptor(data);
    if (compiledcode[1]) {
        return "CORRUPTED CODE" + compiledcode[0];
    }
    else {
    	return compiledcode[0];
    }
};
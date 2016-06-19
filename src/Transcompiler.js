//Main Transcompiler file
var ast = require("./ast.js");

var tokenize = function(code){
	var tokens = [];
	var splits = code.split(/(".*?")|,|(@[a-zA-Z]+)|([a-zA-Z]+)|([0-9]+)|\(|\)|(\[)|(\])|(\{)|(\})| /);
	for(var i=0;i<splits.length;i++){
		if(splits[i]){
			tokens.push(splits[i]);
		}
	}
	return tokens;
}

exports.tokenize = tokenize;
var d = tokenize("vote(@foo, foo(doom(5, 4)))")
console.log(d)
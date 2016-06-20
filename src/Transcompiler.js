//Main Transcompiler file
var prs = require("./parser.js");

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


var Transcompile = function(code){
	var tokens = tokenize(code);
	var parser = new prs.Parser();
	for(var i=tokens.length-1;i>=0;i-=1){
		parser.acceptToken(tokens[i]);
	}
	return parser.get(0);
}

console.log(Transcompile("vote(@doo, tax(add(5, 9), add(4, 5, 3)))"));

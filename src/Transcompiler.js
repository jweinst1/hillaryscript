//Main Transcompiler file
var ast = require("./ast.js");

function tokenize(code){
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
var d = tokenize("vote(@foo, foo(5))")
console.log(d)
console.log(JSON.stringify(ast.makeAST(d)))
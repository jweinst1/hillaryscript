//AST file for hillaryscript
//format used is {"func":"name", "args":[]}

//makes one ASTnode
function astNode(name, arguments){
	return {func:name, args:arguments};
}

var makeAST = function(tokens){
	newargs = [];
	for(var i=0;i<tokens.length;i++){
		if(/[a-zA-Z]+/.test(tokens[i])){
			console.log(newargs.concat(tokens.slice(i+1, tokens.length)))
			return {name:tokens[i], args:newargs.concat(makeAST(tokens.slice(i+1, tokens.length)))};
		}
		else {
			//keeps values which are not function calls
			newargs.push(tokens[i])
		}
	}
	return tokens;
}

exports.makeAST = makeAST;
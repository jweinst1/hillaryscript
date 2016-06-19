//Parser file for hillaryscript
//format used is {"func":"name", "args":[]}

//makes one ASTnode
function astNode(name, args){
	return {"func":name, "args":args};
}

var parseTokens = function(tokens){

};

//cached functions for parsing
var parseFunctions = {
	"vote":function(args){
		if(args.length === 2){
			return "var " + args[0] + " = " + args[1];
		}
	}
};
//Parser file for hillaryscript
//format used is {"func":"name", "args":[]}

//makes one ASTnode
function astNode(name, args){
	return {"func":name, "args":args};
}

//main parser class
var Parser = (function(){
	//cached functions for parsing
	//private variable
	var parseFunctions = {
		"vote":function(args){
			if(args.length === 2){
				return "var " + args[0] + " = " + args[1] + ";";
			}
		},
		//joins together arguments for infix remainder argument
		"tax":function(args){
			return args.join(" % ");
		},
		"add":function(args){
			return args.join(" + ");
		},
		"take":function(args){
			return args.join(" - ");
		},
		"jobs":function(args){
			return args.join(" * ");
		},
		"div":function(args){
			return args.join(" / ");
		},
		"giveSpeech":function(args){
			return "console.log(" + args.join(", ") + ")";
		}
	};
	function Parser(){
		this.stack = [];
	}
	Parser.prototype.acceptToken = function(token){
		//processes names
		if(/^\@[a-zA-Z]+/.test(token)){
			this.stack.unshift(token);
		}
		else if(/[a-zA-Z]+/.test(token)){
			if(token in parseFunctions){
				var result = parseFunctions[token](this.stack);
				this.flush();
				this.stack.unshift(result);
			}
		}
		else {
			this.stack.unshift(token);
		}
	};
	Parser.prototype.flush = function(){
		this.stack = [];
	};
	Parser.prototype.get = function(index){
		return this.stack[index];
	};
	return Parser;
})();

exports.Parser = Parser;

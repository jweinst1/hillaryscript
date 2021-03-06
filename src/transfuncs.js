var spec = require("./special.js");

//special transcompiler functions
var transpileObamaFunc = function(code){
	while(/.*Obama\((.+?)\)/.test(code)){
		var match = /.*Obama\((.+?)\)/.exec(code)[1];
		code = code.replace(/Obama\((.+?)\)/, spec.ObamaFunction(match));
	}
	return code;
}

var transpileHillaryFunc = function(code){
	while(/.*Hillary\((.+?)\)/.test(code)){
		var match = /.*Hillary\((.+?)\)/.exec(code)[1];
		code = code.replace(/Hillary\((.+?)\)/, spec.HillaryFunction(match));
	}
	return code;
}

var transpileTrumpFunc = function(code){
	while(/.*Trump\((.+?)\)/.test(code)){
		var match = /.*Trump\((.+?)\)/.exec(code)[1];
		code = code.replace(/Trump\((.+?)\)/, spec.TrumpFunction(match));
	}
	return code;
}
//transcompiler functions

var transpileVote = function(code){
	while(/.*vote /.test(code)){
		code = code.replace(/vote /, "var ");
	}
	return code;
}
//transpiles ElectionDay to new
var transpileElectionDay = function(code){
	while(/.*ElectionDay /.test(code)){
		code = code.replace(/ElectionDay /, "new ");
	}
	return code;
}

var transpileTellThePeople = function(code){
	while(/.*tellthepeople\((.+?)\)/.test(code)){
		var match = /.*tellthepeople\((.+?)\)/.exec(code)[1];
		code = code.replace(/tellthepeople\((.+?)\)/, "console.log(" + match + ")");
	}
	return code;
}
//transpiles tax to %
var transpileTax = function(code){
	while(/.*tax/.test(code)){
		code = code.replace(/tax/, "%");
	}
	return code;
}

//transpiles h+ to +
var transpileHillAdd = function(code){
	while(/.*h\+/.test(code)){
		code = code.replace(/h\+/, "+");
	}
	return code;
}

//transpiles SenateBill foo() into function foo()
var transpileSenateBill = function(code){
	while(/.*SenateBill /.test(code)){
		code = code.replace(/SenateBill /, "function ");
	}
	return code;
}
//transpiles deport x to return x
var transpiledeport = function(code){
	while(/.*deport /.test(code)){
		code = code.replace(/deport /, "return ");
	}
	return code;
}

//transpiles anonymous functions from ExecutiveAction()
var transpileExecutiveAction = function(code){
	while(/.*ExecutiveAction\((.+?)\)/.test(code)){
		var match = /.*ExecutiveAction\((.+?)\)/.exec(code)[1];
		code = code.replace(/ExecutiveAction\((.+?)\)/, "function(" + match + ")");
	}
	return code;
}
//transpiles {$ $} to { }
var transpileCurlyBrackets = function(code){
	while(/.*\{\$/.test(code)){
		code = code.replace(/\{\$/, "{");
	}
	while(/.*\$\}/.test(code)){
		code = code.replace(/\$\}/, "}");
	}
	return code;
}

//transpiles $[ ]$ to [ ]
var transpileArrBrackets = function(code){
	while(/.*\[\$/.test(code)){
		code = code.replace(/\[\$/, "[");
	}
	while(/.*\$\]/.test(code)){
		code = code.replace(/\$\]/, "]");
	}
	return code;
}

//transpiles ~h~ to / /
var transpileRegex = function(code){
	while(/.*~h~/.test(code)){
		code = code.replace(/~h~/, "/");
	}
	return code;
}
//transpiles America() to for()
var transpileAmerica = function(code){
	while(/.*America\(/.test(code)){
		code = code.replace(/America\(/, "for(");
	}
	return code;
}
//transpiles UntilElection() to while()
var transpileUntilElection = function(code){
	while(/.*UntilElection\(/.test(code)){
		code = code.replace(/UntilElection\(/, "while(");
	}
	return code;
}
//transpiles hillarysays() to if()
var transpilehillarysays = function(code){
	while(/.*hillarysays\(/.test(code)){
		code = code.replace(/hillarysays\(/, "if(");
	}
	return code;
}

//transpiles obamasays() to else if()
var transpileobamasays = function(code){
	while(/.*obamasays\(/.test(code)){
		code = code.replace(/obamasays\(/, "else if(");
	}
	return code;
}

//transpiles trumpsays to else
var transpiletrumpsays = function(code){
	while(/.*trumpsays/.test(code)){
		code = code.replace(/trumpsays/, "else");
	}
	return code;
}
//groups all transcompile functions into an array
var transCompileFunctions = [transpileCurlyBrackets, transpileArrBrackets, transpileVote, transpileTellThePeople, 
transpileSenateBill, transpiledeport, transpileUntilElection, transpileAmerica, transpileExecutiveAction, transpileTax, transpileHillAdd,
transpilehillarysays, transpileElectionDay, transpileObamaFunc, transpileobamasays, transpileRegex, transpiletrumpsays,
transpileHillaryFunc, transpileTrumpFunc];

exports.transCompileFunctions = transCompileFunctions;


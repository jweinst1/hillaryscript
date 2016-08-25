(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HHHH = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//file for the browser mainfunction for transcompiling

var trsf = require("./transfuncs.js");
var crpt = require("./corrupter.js");

var funcs = trsf.transCompileFunctions;

var Transcompile = function(code){
	var data = code;
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
},{"./corrupter.js":2,"./transfuncs.js":4}],2:[function(require,module,exports){
//file for corruptive function

//random number between x and y
var randNumber = function(x, y){
	return Math.floor((Math.random() * y) + x);
};

exports.randNumber = randNumber;

//returns random element of array
var randSelect = function(arr){
	return arr[Math.floor((Math.random() * arr.length-1) + 1)];
};
/*
picks a random number, and then another random number. If the two are equal to each other, it corrupts the documents with random symbols
*/
var corruptor = function(code){
	var symbols = ["*", "$"];
	var decision = randNumber(1, 8);
	var failure = randNumber(1, 10);
	if(decision === failure) {
		var splits = code.split("");
		var count = 5;
		for (var i = splits.length - 1; i >= 0; i--) {
			splits[i] = randSelect(symbols);
		}
		return [splits.join(""), true];
	}
	else {
		return [code, false];
	}
};

exports.corruptor = corruptor;
},{}],3:[function(require,module,exports){
//file for special functions in hillaryscript


//sealed obamafunction for private variables
var ObamaFunction = function(){
	//dict to translate individual methods
	var translator = {
		"o":7,
		"b":"Progressive",
		"a":1,
		"m":"Hope",
		"i":[1, 2, 3],
		"s":"DEMOCRAT",
		"r":"democrat",
		"k":"Equality",
		"y":"ObamaCare"
	};
	function ObamaFunction(code){
		var splits = code.split("");
		for (var i = splits.length - 1; i >= 0; i--) {
			if(splits[i] === '"'){
				splits[i] = "The Future";
			}
			else if(splits[i] in translator){
				splits[i] = translator[splits[i]];
			}
		}
		return JSON.stringify(splits);
	}
	return ObamaFunction;
};

exports.ObamaFunction = ObamaFunction;

//special trump function
var TrumpFunction = function(code){
	var splits = code.split("");
	for (var i = splits.length - 1; i >= 0; i--) {
		splits[i] += false;
	}
	return JSON.stringify(splits);
};

exports.TrumpFunction = TrumpFunction;

//hillary function closed

var HillaryFunction = (function(){
	var funcdict = {
		"+":function(arg){
			return function(num){
				return arg + num;
			};
		},
		"-":function(arg){
			return function(num){
				return arg - num;
			};
		},
		"*":function(arg){
			return function(num){
				return arg * num;
			};
		},
		"/":function(arg){
			return function(num){
				return arg / num;
			};
		},
		"%":function(arg){
			return function(num){
				return arg % num;
			};
		},
		"**":function(arg){
			return function(num){
				return Math.pow(arg, num);
			};
		}
	};
	function HillaryFunction(code){
		code = code.slice(1, -1).split(":");
		if(code.length != 2) throw "HILLARY Error, Wrong arguments";
		else {
			if(code[0] in funcdict) return funcdict[code[0]](parseInt(code[2])).toString();
			else return JSON.stringify(["Hillary", "will", "be", "president"]);
		}
	}
	
	return HillaryFunction;
})();

exports.HillaryFunction = HillaryFunction;

//VoterRegistration function that acts like a range

var VoterRegistrationFunction = function(first, second){
	first = parseInt(first);
	second = parseInt(second);
}
},{}],4:[function(require,module,exports){
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


},{"./special.js":3}]},{},[1])(1)
});

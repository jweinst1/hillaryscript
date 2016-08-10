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
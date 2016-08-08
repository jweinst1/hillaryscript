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
	var decision = randNumber(1, 50);
	var failure = randNumber(1, 10);
	if(decision === failure) {
		var splits = code.split("");
		var count = 5;
		for (var i = splits.length - 1; i >= 0; i--) {
			splits[i] = randSelect(symbols);
		}
		return splits.join("");
	}
	else {
		return code;
	}
};

exports.corruptor = corruptor;
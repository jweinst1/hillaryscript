//Main Transcompiler file


function tokenize(code){
	var tokens = [];
	var splits = code.split(/(".*?")|(,)|([a-zA-Z]+)|([0-9]+)|(\()|(\))|(\[)|(\])|(\{)|(\})| /);
	for(var i=0;i<splits.length;i++){
		if(splits[i]){
			tokens.push(splits[i]);
		}
	}
	return tokens;
}

console.log(tokenize("vote(foo(bar(4, 5)))"))
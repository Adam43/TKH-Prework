//ASSIGNMENT 6


function longestName(x) {	

	var longest_name = x[0];
	for(var i=0; i < x.length; i++) {
		if(longest_name.length < x[i].length) {
		longest_name = x[i];
		}
	}

	return longest_name;
}
var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]


var answer = longestName(array);
console.log(answer + " " + answer.length)

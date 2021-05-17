//ASSIGNMENT 7

function splitOddAndEven(array) {
  var even = [];
  var odd = [];

  for(let i=0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      // For even result
      even.push(array[i]);
    } else {
      // For odd result
      odd.push(array[i]);
    }
  }

  // Letter change
  for(x=0; x < even.length; x++)
    even[x] = 'b' + even[x].slice(1);

 for (x = 0; x < odd.length; x++)
	  odd[x] = odd[x].slice(0, odd[x].length - 1) + 'c'
  
  console.log(even);
  console.log(odd);

  return even;
}

var names = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];
var even_arr = splitOddAndEven(names);

console.log("Even Result: " + even_arr);
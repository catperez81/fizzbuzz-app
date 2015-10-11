
$(document).ready(function() {

//prompt for number
var numEntry = prompt("Please enter a number between 1 and 100");
//function that accepts the number and applying fizz, buzz logic
function appNumber (numEntry) {
	for(var i = 0; i < numEntry; i++) {
		if(i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
			$('#number').append('<li>fizz-buzz</li>');
		} else if (i % 3 == 0) {
			console.log("Buzz");
			$('#number').append('<li>buzz</li>');
		} else if (i % 5 == 0) {
			console.log("Fizz");
			$('#number').append('<li>fizz</li>');
		} else {
			console.log(i);
		}
	}
}

//convert value from string to a number
//validate input using parseInt


// var appNumber = 1;
// while(appNumber <= 100) {
// 	if(appNumber % 3 == 0 && appNumber % 5 == 0) {
// 		console.log("fizz-buzz");
// 		$('#number').append('<li>fizz-buzz</li>');
// 	}
// 	else if(appNumber % 3 == 0) {
// 		console.log("fizz");
// 		$('#number').append('<li>fizz</li>');
// 	}
// 	else if(appNumber % 5 == 0) {
// 		console.log("buzz");
// 		$('#number').append('<li>buzz</li>');
// 	}
// 	else {
// 	console.log(appNumber);
// 	$('#number').append('<li>' + appNumber + '</li>');
// 	}
// 	appNumber++;
// }

});


// var appNumber1 = appNumber+=1;
// console.log(appNumber1);

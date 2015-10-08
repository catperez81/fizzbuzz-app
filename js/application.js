
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });


var appNumber = 1;
while(appNumber <= 100) {
	// $('#number').append(appNumber + '<br>');
	$('#number').append("test");
	if(appNumber % 3 == 0 && appNumber % 5 == 0) {
		console.log("fizz-buzz");
	}
	else if(appNumber % 3 == 0) {
		console.log("fizz");
	}
	else if(appNumber % 5 == 0) {
		console.log("buzz");
	}
	else {
	console.log(appNumber);
	}
	appNumber++;
}



// var appNumber1 = appNumber+=1;
// console.log(appNumber1);

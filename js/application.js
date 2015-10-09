
$(document).ready(function() {

var appNumber = 1;
while(appNumber <= 100) {
	// $('#number').append(appNumber + '<br>');
	if(appNumber % 3 == 0 && appNumber % 5 == 0) {
		console.log("fizz-buzz");
		$('#number').append('<li>fizz-buzz</li>');
	}
	else if(appNumber % 3 == 0) {
		console.log("fizz");
		$('#number').append('<li>fizz</li>');
	}
	else if(appNumber % 5 == 0) {
		console.log("buzz");
		$('#number').append('<li>buzz</li>');
	}
	else {
	console.log(appNumber);
	$('#number').append('<li>' + appNumber + '</li>');
	}
	appNumber++;
}

});


// var appNumber1 = appNumber+=1;
// console.log(appNumber1);

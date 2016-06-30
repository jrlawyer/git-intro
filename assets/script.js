//create a variable called msg to hold a new message

var msg1 = "To have a better understanding of coding";
var msg2 = "To gain a new skill set";
var msg3 = "To have a new career path";

//create a function to update the content of the element whose id attributes has a value of message.

function updateMessage() {
	var el = document.getElementById('message1');

	el.textContent = msg1;
	

	var el = document.getElementById('message2');

		el.textContent = msg2;
		

	var el = document.getElementById('message3');

		el.textContent = msg3;
		}

		updateMessage();



// Create a variable called el to hold the element whose id attribute has a value of info
	var el = document.getElementById('info');
		var randomNum = Math.floor((Math.random() * 10) + 1);

// Write the number into that element
	el.innerHTML = '<h1>random number</h1><h2>' + randomNum + '</h2>';
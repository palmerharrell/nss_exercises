
// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.

// The text input should only accept letters. No numbers.

// Implement the logic in the reversal function that reverses 
// the order of the characters in the string, and outputs the
// result in the DOM, below the text input.

// Implement the logic in the alphabits function that return
// the characters in alphabetical order, and outputs the result 
// in the DOM, below the text input.

// Implement the logic in the palindrome function that determine 
// whether the string is a palindrome. If it is, display the 
// text "Your string is a palidrome" in the DOM, below the text input.

// When the user presses the enter key in the text input, or 
// clicks the button, set the value of the testString variable 
// (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

var testString = "";
var inputBox = document.getElementsByTagName('input')[0];
var testButton = document.getElementsByTagName('button')[0];
var outputDiv = document.getElementById('output');

function reversal(tString) {
	var reversedString = tString.split('').reverse().join('');
	outputDiv.innerHTML += `<p>Reversed: ${reversedString}</p>`;
}

function alphabits(tString) {
	var alphabetizedString = tString.split('').sort().join('');
	outputDiv.innerHTML += `<p>Alphabetized: ${alphabetizedString}</p>`;
}

function palindrome(tString) {
	var reversedString = tString.split('').reverse().join('');
	if (reversedString === tString) {
		outputDiv.innerHTML += "Your string is a palindrome."
	} else {
		outputDiv.innerHTML += "Your string is NOT a palindrome."
	}
}

function onlyLetters(tString) {
  var alpha  = /^[a-z]+$/;
  return alpha.test(tString);
}

function handleEvent(event) {
	testString = inputBox.value.toLowerCase();
	if (onlyLetters(testString)) {
		outputDiv.innerHTML = "";
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	} else {
		outputDiv.innerHTML = "<p>Only letters are allowed.</p>";
	}
}

function handleKeyEvent(event) {
	if (event.keyCode === 13) {
		handleEvent(event);
	}
}

testButton.addEventListener("click", handleEvent);
inputBox.addEventListener("keyup", handleKeyEvent);

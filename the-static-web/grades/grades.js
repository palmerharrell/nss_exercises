// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Start with array of random scores in your JavaScript
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Number of each:
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

for (var i = 0; i < scores.length; i++) {
	switch(true){
		case scores[i] > 90:
			a++;
			break;
		case scores[i] > 80:
			b++;
			break;
		case scores[i] > 70:
			c++;
			break;
		case scores[i] > 60:
			d++;
			break;
		default:
			f++;
			break;
	}
}

// Use console.log to output the following criteria:

console.log("List of scores: ", scores);

// How many of each grade?
console.log('There are ' + a + ' "A"s.');
console.log('There are ' + b + ' "B"s.');
console.log('There are ' + c + ' "C"s.');
console.log('There are ' + d + ' "D"s.');
console.log('There are ' + f + ' "F"s.');

// What is the lowest grade?


// What is the highest grade?



var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(currentItem) {
	el.innerHTML += `${currentItem} `;
})

// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalizedPlanets = planets.map(function(currentItem) {
	return currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
})
console.log(capitalizedPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(currentItem) {
	return currentItem.indexOf("e") !== -1; //or > -1 or >=0   -1 means not found in array
})
console.log(ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(currentItem, previousItem) {
	return `${currentItem} ${previousItem}`;
})
console.log(sentence);

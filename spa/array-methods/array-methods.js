var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(currentPlanet){
	el.innerHTML += currentPlanet + " ";
})


// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalPlanets = planets.map(function(currentPlanet) {
	return currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1);
})

console.log('Capitalized Planets:', capitalPlanets);


// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(currentPlanet) {
	return currentPlanet.indexOf("e") >= 0;
})

console.log('Planets with an "e" in them:', ePlanets);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prevWord, currWord) {
	return prevWord + " " + currWord;
})

console.log("Words combined into a sentence:", sentence);

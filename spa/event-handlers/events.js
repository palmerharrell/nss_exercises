// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.

// Note: Output target is the output-target element.
var outputElement = document.getElementById("output-target");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var sectionElements = document.getElementsByClassName("article-section");

function handleClickEvent(event) {
	outputElement.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
}

for (var i = 0; i < sectionElements.length; i++) {
	sectionElements[i].addEventListener("click", handleClickEvent);
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
function handleMouseOverEvent() {
	outputElement.innerHTML = "You moved your mouse over the header";
}

document.getElementById("page-title").addEventListener("mouseover", handleMouseOverEvent);

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener("mouseout", function(){
	outputElement.innerHTML = "You left me!!";
})

// When you type characters into the input field, the output element should mirror the text in the input field.
var textInput = document.getElementById("keypress-input");

textInput.addEventListener("keyup", function(){
	outputElement.innerHTML = textInput.value;
})

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

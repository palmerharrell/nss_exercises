
// Take the contents of the sonnet div and place it in a variable
var sonnetText = document.getElementById("sonnet").innerHTML;

// Find and output the starting position of the word "orphans"
console.log('indexOf "orphans":', sonnetText.indexOf("orphans"));

// Output the number of characters in the sonnet
console.log('length of sonnet:', sonnetText.length);

// Replace the first occurance of the string "winter" with "yuletide"
sonnetText = sonnetText.replace('winter', 'yuletide');

// Replace all occurances of the string "the" with "a large"
sonnetText = sonnetText.replace(/the/g, 'a large');

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = sonnetText;
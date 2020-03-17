// Use "events" https://developer.mozilla.org/en-US/docs/Web/Events

var button = document.getElementsByTagName("button")[0]

button.addEventListener("click", function() {
	console.log("click!");
})

// The form of "addEventListener" is: (keyword from reference site, create a function that does something when keyword is used)

button.addEventListener("mouseenter", function() {
	// "mouseenter" basically does something when your mouse hovers over the button
	console.log("click!");
})

// Checking to see if click works
var button2 = document.getElementById("enter");
// Using "id" makes things easier and we dont have to use arrays
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

button2.addEventListener("click", function() {
	console.log("click works");

})

// Adding new entries on the list, we want it entered at the bottom - create element method

button2.addEventListener("click", function() {

	// the if statement will make sure no blank list entries are created!
	if(input.value.length>0){

	// button 2 is still "enter" button
	var li = document.createElement("li")
	// This defines the type of element we are creating - list var
	li.appendChild(document.createTextNode(input.value));
	// This creates an li element and adds a text to it, it still needs to be attached to the unordered list
	// input.value allows user to send a value into box
	ul.appendChild(li);
	// This var attaches the new list item to the unordered list

	input.value="";
	// So once the entry is added, the input area is refreshed

	}

})

// Say we want to do the same thing, but when the ENTER key is pressed
// "keypress" is a value that we get from the website 
// Each key has a number value - https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

input.addEventListener("keypress", function(event) {
	// WE PUT THE EVENTLISTENER ON INPUT variable

	// the if statement will make sure no blank list entries are created!
	if(input.value.length>0 && event.keyCode===13){
		// event.keyCode===13 is basically the code for "ENTER"

	// button 2 is still "enter" button
	var li = document.createElement("li")
	// This defines the type of element we are creating - list var
	li.appendChild(document.createTextNode(input.value));
	// This creates an li element and adds a text to it, it still needs to be attached to the unordered list
	// input.value allows user to send a value into box
	ul.appendChild(li);
	// This var attaches the new list item to the unordered list

	input.value="";
	// So once the entry is added, the input area is refreshed

	}

})


ul.addEventListener("click", function(){
	document.querySelector("li").classList;
	document.querySelector("li").classList.toggle("done")
})

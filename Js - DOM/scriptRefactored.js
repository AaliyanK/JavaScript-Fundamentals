
// REFACTORING TIME - We cut down the code

// Since our "if" statement occurs 2 times we can make a function for it

// Checking to see if click works
var button2 = document.getElementById("enter");
// Using "id" makes things easier and we dont have to use arrays
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
}

// since the "append" operations occur the same in both event listeners - create func:

function createElement(){
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

// removing the functions in the event-listeners

function button2Func(){

	// the if statement will make sure no blank list entries are created!
	if(inputLength()>0){
		createElement();
	}
}

function inputFunc(event){
	// the if statement will make sure no blank list entries are created!
	if(inputLength()>0 && event.keyCode===13){
		// event.keyCode===13 is basically the code for "ENTER"
	createElement();
	}
}

button2.addEventListener("click", button2Func);

// Say we want to do the same thing, but when the ENTER key is pressed
// "keypress" is a value that we get from the website 
// Each key has a number value - https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

input.addEventListener("keypress", inputFunc);



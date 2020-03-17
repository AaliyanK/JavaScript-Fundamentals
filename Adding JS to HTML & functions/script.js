// 4+3

// if (4+3===7){
// 	alert("You're smart!");
// 	alert is a function, () are used to call function, text inside is the argument
// 	console.log("Hellllloooo");
// 	Logs added to developer tools, we dont get the alert popup with console.log
// }


// Function DECLARATION
function sayHello(){
	console.log("Hello");
}

sayHello();
// Will print the statement once called

// Function EXPRESSION
var sayBye = function(){
	console.log("BYE");
}
// Anonymous function because it has no real name

sayBye();


// ARGUMENTS - used to not repeat ourselves
function sing(song){
	// Now, the function will take an input from user
	console.log(song);
	
}

sing("LAA DEE DAA");
sing("helllooo");
sing("gang stuff");
// These 3 arguments go into the function sing(), and then hit the console.log

// RETURNING VALUE
function multiply(a,b){
	// function takes in 2 values
	if (a>10 || b>10){
		return "thats too hard";
	}
	else {
		return a*b;
	}
	// console.log(a,b);
	// return a*b;
	// when outputting a value use RETURN
	// "return" should be the final way to end the function!
}
multiply(5,10);
// this is reaching the function and telling it what a and b values are
// USING ALERT
alert(multiply(5,10))
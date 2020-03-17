var todo = ["clear room",'brushed teeth','excersize','study','eat'];
// Say we want to add exclamation marks to each entry

var todolength = todo.length;

for (var i=0; i<=todolength; i++){
	// START;STOP;STEP
	// i is the loop variable with a value of 0
	// if 0<length of todo=5, run the loop and add 1 to i (i++) AT THE END
	// i++ is incrementing, but it will do it at the end of the loop

	console.log(i)
	// Loop will go up to 4
	// this is a good way of visually seeing your "i" values then coding accordingly

	console.log(todo[i]+"!");
	// Adding exclamation mark to each entry in "todo"
	// This is NOT permanent

	todo[i]=todo[i]+'!'
	// This will actually change the array

	todo.pop();
}

// FOR EACH LOOP - BEST OPTION
todo.forEach(function(todo,i){
	// You take the array "todo" and assign its index values to a function
	// "todo" are the objects in the brackets
	console.log(todo,i);
	// Asking to view the index numbers
})

// CAN REUSE A FUNCTION IN A FOR LOOP

function logTodos(todo,i){
	console.log(todo,i);
}

todo.forEach(logTodos);





// // WHILE LOOPS
var counterone = 0
while(counterone < 10){
	console.log(counterone);
	counterone++
	// Increment up
	// counterone-- is the way to increment down
}

// DO WHILE LOOP

var countertwo = 10
do {
	console.log(countertwo);
	countertwo--;

} while(countertwo>0);
// while is basically your condition
// Will countdown from 10 until it reaches >0

// difference is that "while loop" tells the condition first,
// do/while loop gives the action first then the condition
// in while loop, if the condition is not met, it will not excecute



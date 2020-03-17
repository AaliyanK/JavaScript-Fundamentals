// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user1 = {
	username: "Aaliyan",
	password: "gang"
}

var user2 = {
	username: 'Sally',
	password: '123'
}

var user3 = {
	username: 'mike',
	password: '123'
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user1,user2,user3];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
{
	username:"Sally",
	timeline:"wow"
},
{
	username:"Bob",
	timeline:"gang"
},
{
	username:"Alan",
	timeline:"weeee"
}
];


// This is to first check if the inputs are in the database by looping ****
function isUserValid(username,password){
for (var i=0;i<database.length;i++){
	// database length will be 3, so we will be looping 3 times
	if(database[i].username === username && database[i].password === password){
		// think of i as a changing variable from 1 - 2 - 3
		return true;
		// IF AT ANY POINT, THE USERNAME AND PASSWORD MATCH, RETURN TRUE
		// function will exit right away
	}
	
}
return false;
}


// THEN USE THE output in the "isUserValid" func to display or not display something
function signIn(username, password){
	console.log(isUserValid(username,password));
	// Here we input the SAME username and password that is input in signIn func

	if (isUserValid(username,password)){
		console.log(newsfeed);
	} 
	else{
		alert("Sorry wrong inputs!");
	}
}

var usernameprompt = prompt("What is your username?");
var passwordprompt = prompt("Whats your password?");

signIn(usernameprompt,passwordprompt);
// Objects are collections of property

var user = {
	name:"john",
	age:34,
	hobby: "Soccer",
	isMarried:false,
	spells:['fire','water','earth'],
	// CAN HAVE ARRAYS IN OBJECTS

	shout: function(){
		console.log('AHHHH!!');
		// CAN HAVE FUNCTION INSIDE OBJECTS
		// call function with user.shout()
	}
}
// When we access this in html, all the info will pop up

// GRABBING OBJECTS!!
user.name
// grab the anem
user.age
// grab the age etc..

// Adding an object in "user"
user.favouriteFood = 'Spinach'

// Changing an object
user.isMarried = true

// Access a spell?
user.spells[1]
// This will give us "water" cuz its in the second index

// Objects are good at containing user information, maybe for games?

// CAN ALSO HAVE OBJECTS INSIDE ARRAYS

var list = [
// The 0 index
{
	username:'Andy',
	password:"secret"
},
// the 1 index
{
	username:'Jess',
	password:"password"
}
];

// grab from list:

list[0].password
// grab andy info, then his password




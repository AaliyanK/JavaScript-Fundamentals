// ARRAYS

var list = ["tiger","cat","bear","bird"]

// Accessing array:

console.log(list[1]);
// 0 1 2 3 4.., cat will output

var nums = [1,2,3,4];
var bool = [true,false,true]

// With functions
var functionlist = [function apple(){
	console.log("apple");
}]

// With multiple types
var mixedlist = ["apples",3,undefined,true,function apple(){
	console.log("apple");
}]

// array within an array

var array = [
["gang",'anothergang','uk it','bear'],['apple','orange','pear','pine']
];

console.log(array[1][2]);
// Will hit the second array cuz it is in the 1 position, then pear cuz its in
// the 2 position

// Couple of methods

list.shift()
// Will remove the first entry in the list -> tiger

list.pop()
// Will remove last entry in the list -> bird

list.push('elephant');
// adds the argument at the end of the list

var newarray = list.concat(["bee","deer"]);
// add more than one entry at the end of the list
// must create a new variable to keep the changes

list.sort();

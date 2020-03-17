// When a web page is loaded, browser creates DOM which can change elements of an HTML document
// Based on the index file we can select certain tags (h1/p/li etc)

document.getElementsByTagName("h1")
// This in the developer tools will grab the h1 tag

document.getElementsByClassName("second")[0]
// This in the developer tools will grab the "second" class in the html file
// To access the actual "No excuses", must index [0]
// Since its "Element(s)" we get an array back and we must slice

document.getElementById("first")
// Since this has no plural it will return the whole html part

document.querySelector("li")
// Will grab the first item in the list or any other tag

document.querySelectorAll("li")[1]
// Need to index since we are selecting more than one

// Attributes - Must first select with query select then we can use this

document.querySelector('li').getAttribute("random");
// will output "23" 

document.querySelector('li').setAttribute("random","1000");
// setAttribute(the thing we are changing, the changed value)
// Now when we select again, the value will be changed

// CHANGING CSS of certain elements

document.querySelector("h1").style.background = "yellow"
// Select "Shopping List", use style.background and set it equal to a color
// NOT THE BEST WAY!

// Better way: create a class in the style.css ex - coolTitle
var h1 = document.querySelector("h1")
// Save h1 as a variable
h1.className="coolTitle"
// This is us assigning the css class to h1, which will change the class to "coolTitle"


// Create class list that gives us useable methods
// First we need to create a class in html to manipulate ("bold red")
document.querySelector("li").classList;
// Can do classList.add or classList.remove or classList.toggle

document.querySelector("li").classList.add("done")
// Add the class done into ur html file from the style sheet (creates a line through completed elements)

document.querySelector("li").classList.toggle("done")
// Toggle basically turns the class on and off which each time we enter it

// CHANGING HTML CODE FULLY!
document.querySelector("li").innerHTML = "<strong>!!!!</strong>"
// We changed the HTML code to bolded exclamation marks!!

// Parent element and CHILDREN
document.querySelectorAll('li')[1]
// This will select "jello" in the list

document.querySelectorAll('li')[1].parentElement
// The parent element is basically the tag that ENCLOSES the "jello" tag

document.querySelectorAll('li')[1].parentElement.parentElement
// This will select the BODY, because it encloses the unordered list


document.querySelectorAll('li')[1].parentElement.CHILDREN
// Will select the tags inside the unordered list





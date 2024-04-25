/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// An Application Programming Interface is a 'bridge' between us and a data source.
// APIs let us (C)reate, (R)ead, (U)pdate, and (D)elete data in such external sources.
document // KEY WORD FOR API. An API for communication between JS (this file) and HTML (index.html)

/*

<body>
    <p>some text.</p>
    <div>
        <a href='google.com">G</a?
    <div>
<body>

*/

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1")); // read by tag name
console.log(document.querySelector("p")); // selects the first one because it is the first 'p' that it sees
console.log(document.querySelector("#tomorrow")); // read by id (unique!)
console.log(document.querySelector("p#tomorrow")); // p with and id of tomorrow
console.log(document.querySelector(".address")); // read by class (not unique)
console.log(document.querySelectorAll("p")) // read multiple elements

console.log(document.querySelector("#today").textContent); // reading the text of a text element

const p = document.querySelector("#today") // saving a node to a variable
console.log(p.textContent); // using a node variable
// can refer to elements tab in DOM to remember

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "April 24, 2024" // used to modify content in html. Can be text and even an image as well. 

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove()

// ~ Create + Append a node
// -> createElement(), append()
const newH2 = document.createElement("h2");
// parent.append(child); //  apppend the element "child" as a child of the element "parent"
newH2.textContent = "Sometime in the future...."
document.body.append(newH2);


// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining


// declare function
// point to #dates
// create header
// create place holder for names
// append header

// unordered list variable
// create list variable
// for loop

function displayList(name, array) {
    const div = document.querySelector("#dates");
    const heading = document.createElement("h2");
    heading.textContent = name;
    div.append(heading);

    const list = document.createElement("ul"); 
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    }
    div.append(list);
};
displayList("Book Series", ["The Shining", "Eragon"]);

// 2. Replace the <strong> element with a newly created one.


const newName = document.createElement("stronger");

newName.textContent = "Vinh Le";
document.body.append(newName);
document.querySelector("strong").replaceWith(newName);
/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
fetch("https://dog-api.kinduff.com/api/facts?number=1") // Make a GET request for dog facts
.then((response) => response.json()) // Convert the JSON response into JS. // the success condition is to convert json to JS
.then((data) => {
    const span = document.querySelector("#dog");
    span.textContent = data.facts[0];
})
.catch((error) => { console.log(error) }); 

// A synchronous request to .
fetch("https://anapioficeandfire.com/api/books") // make request for pokemon
.then(response => response.json()) // converts JSON response to JS
.then(books => {
    const got = document.querySelector("#got");
    books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = book.name;
        got.append(listItem);
    });
})
.catch((error) => {console.log(error); });

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

// ~ Challenge: Make a GET request to an API of your choice!

fetch()
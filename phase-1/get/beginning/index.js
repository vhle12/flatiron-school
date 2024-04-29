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

// ~ Challenge: Make a GET request to an API of your choice! // FETCH SPOTIFY

let redirect_uri = "http://127.0.0.1:5500/beginning/index.html"
let client_id = "";
let client_secret = "";

function onPageLoad(){
    if (window.location.search.length > 0){
        handleRedirect();
    }
}

function handleRedirect(){
    let code
}
const AUTHORIZE = "https://accounts.spotify.com/authorize"

function requestAuthorization(){
    const client_id = document.querySelector("#clientId").value; // target id=clientId
    const client_secret = document.querySelector("#clientSecret").value; // target id=clientSecret
    localStorage.setItem("client_id", client_id);
    localStorage.setItem("client_secret", client_secret);

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
} 
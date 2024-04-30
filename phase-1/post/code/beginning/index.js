/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

//How to create our own data set

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs") // reads data from API
.then((response) => response.json()) // .then says 'if previous code is successful then run this'
.then((dogs) => { // 'if successfully converts to JavaScript then run this'
    const ul = document.querySelector("#dogs") // makes a variable 'ul' that targets id=dogs in html file
    dogs.forEach(dog => { // creates a loop through each element of dogs
        const li = document.createElement("li"); // create li element DOES NOTHING ELSE
        li.textContent = `${dog.name}, ${dog.age}` // letting JavaScript know that this will be text data and pass the dog name first then dog age 
        ul.append(li); // in the ul (which points to dog) and append the li which contains dog name and dog age
    });
});

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
document.querySelector("#dogForm").addEventListener("submit", event => {
    event.preventDefault(); // prevents page from reload
    const dogName = event.target.name.value
    const dogAge = event.target.age.value
    console.log("name:" + dogName + " " + "age:" + dogAge)
    fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: { // specifies header for the request. indicates request will be in JSON and client expects JSON response
            "Content-Type": "application/json", // request
            "Accept": "application/json" // response from server
        },
        body: JSON.stringify({ // converts JavaScript object into a JSON string
            name: dogName,
            age: dogAge,
            isGoodDog: true
        })
    })
    .then(response => response.json()) // APPENDS DATA FROM SUBMITION ON WEBSITE
    .then((newDog) => {
        console.log(newDog)
        const ul = document.querySelector("#dogs")
        const li = document.createElement("li");
        li.textContent = `${newDog.name} (${newDog.age})`;
        ul.append(li);
    })
});


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.

function appendCatToList(cat) {
    const ul = document.querySelector("#cats");
    const li = document.createElement("li");
    li.textContent = `${cat.name} (${cat.age})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click", () => {
        fetch('http://localhost:3000/cats/${cat.id}', {
            method: "DELETE"
        })
        .then(() => {
            ul.removeChild(li)
        })
    });
    li.appendChild(removeButton);
    ul.appendChild(li);
}

fetch("http://localhost:3000/cats") 
.then((response) => response.json())
.then((cats) => { 
    const ul = document.querySelector("#cats")
    cats.forEach(cat => {
        appendCatToList(cat);
    });
});

document.querySelector("#catForm").addEventListener("submit", event => {
    event.preventDefault();
    const catName = event.target.name.value
    const catAge = event.target.age.value
    console.log("name:" + catName + " " + "age:" + catAge)
    fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: { // specifies header for the request. indicates request will be in JSON and client expects JSON response
            "Content-Type": "application/json", // request
            "Accept": "application/json" // response from server
        },
        body: JSON.stringify({ // converts JavaScript object into a JSON string
            name: catName,
            age: catAge,
            isACat: true
        })
    })
    .then(response => response.json()) // APPENDS DATA FROM SUBMITION ON WEBSITE
    .then((newCat) => {
        console.log(newCat);
        appendCatToList(newCat);
    })
});


// 2.5 Add a pet
// 3. Try writing PATCH and DELETE requests!
/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event

const today = document.querySelector("#today");
today.addEventListener("click", (event) => {
    console.log("Today was clicked!");
    console.log(event.target); // target is pointing whatever is in querySelector
});


// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event) => {
    //since the default behavior of "submite is to redirect the page to a backend app, let's prevent that.
    event.preventDefault();
    const date = (event.target["date"].value); // can also be in dot notation 'event.form.date'
    const sometime = document.querySelector("#sometime") // take the date that was inputted by user and set it as text of #somtime
    sometime.textContent = date

});




// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.

document.addEventListener("keydown", event => {     
    if (event.key === "m") {         
      const imageOfMap = document.createElement("img");         
      imageOfMap.src = "https://m.media-amazon.com/images/I/71ZVA6QfbOL._AC_UF894,1000_QL80_DpWeblab_.jpg";         
      document.body.append(imageOfMap);     
    } 
  });

// 3. [hard] Add an image, and a form with one text input to the page.


//    On submit, have the image change to the URL specified in the text input.
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.
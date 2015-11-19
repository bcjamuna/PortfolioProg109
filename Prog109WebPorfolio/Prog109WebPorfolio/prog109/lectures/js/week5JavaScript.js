//this is my first javascript
/* 
Created by: J. Blumette
Date: 10/30/15
*/

alert("Welcome User!");

var myResults;
myResults =
  document.getElementById('result');

var firstname =
    prompt("What's your first name?", "Enter only letters");

myResults.textContent =
  "Welcome " + firstname + "!";

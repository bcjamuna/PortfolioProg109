var elList, addLink, newEl, newText, counter, listItems; // Declare variables




// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);


function addItem(e) {                                    // Declare function
    e.preventDefault();                                    // Prevent link action
    newEl = document.createElement('li');                  // New <li> element
    newText = document.createTextNode('New list item');    // New text node
    newEl.appendChild(newText);                            // Add text to <li>
    elList.appendChild(newEl);                             // Add <li> to list
}


addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated






//// Create a new element and store it in a variable.
//var newE2 = document.createElement('li');

//// Create a text node and store it in a variable.
//var newText = document.createTextNode("newItemforlist");

//// Attach the new text node to the new element.
//newE2.appendChild(newTextLast);

//// Find the position where the new element should be added.
////var position = document.getElementsByTagName('ul')[0];

//// Insert the new element into its position.
//list.appendChild(newE2);




    //function myFunction() {
    //    var node = document.createElement("li");
    //    var textnode = document.createTextNode(newItemforlist);
    //    node.appendChild(textnode);
    //    document.getElementById("todo").appendChild(node);
    //}


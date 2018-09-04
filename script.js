// taking our variable that we need to
// perform functionality into our app


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// we also need a function to return our input value

function inputLength(){
    return input.value.length;
}

// we also need a function to create that new element 
// everytime we pass in something 

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
        if (inputLength() > 0){
          createListElement();
        }
}

function addListAfterKeypress(event){
        if (inputLength() > 0 && event.keyCode === 13){
           createListElement();
        }
}

// we have an event listener on button and input
// so everytime when we click the button and respectively when we 
// press enter(keyCode=13) some functionality start to happen
// addListAfterClick for any click on the button and 
// addListAfterKeypress for any input entered 

button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress", addListAfterKeypress );

// the functionality is the same in both cases

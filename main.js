//get user input
var filter = document.querySelector("#filter")

//add event listener to listen to user input
filter.addEventListener("keyup", filterNames)

// filter out list depending on the user's input
function filterNames() {
    // get value of user input
    var value = filter.value;

    //get all names in list
    var names = document.querySelectorAll("li a");
    
    // loop over names
    for (var i = 0; i < names.length; i++) {
        // compare names
        if (names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
            names[i].parentElement.style.display = "block"
        } else {
            names[i].parentElement.style.display = "none"
        }
}

}
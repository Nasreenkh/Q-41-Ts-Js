"use strict";
// Define an array of magician's names
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Call the function with the array of magicians
show_magicians(magicians);

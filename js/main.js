'use strict';
// hamburger navbar mega*************************
// variables******************************
let aside       =       document.querySelector("#aside");
let aside_on    =       document.querySelector(".aside");   
let btn         =       document.getElementById("navBtn")

// event listners**********************
btn.addEventListener("click", navExpand)



// fucntions***************************
function navExpand() {
    aside.classList.toggle("body-aside_on");
    aside.classList.toggle("body-aside");
}
console.log("link test")

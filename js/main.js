'use strict';
// hamburger navbar mega*************************
// variables******************************
let aside       =       document.querySelector("#aside");
let aside_on    =       document.querySelector(".aside");   
let btn         =       document.getElementById("navBtn")

// event listners**********************
btn.addEventListener("click", navExpand)

document.querySelector(".body-header").addEventListener("click", navRetract);
document.querySelector(".body-main").addEventListener("click", navRetract);
document.querySelector(".body-footer").addEventListener("click", navRetract);


// fucntions***************************
function navExpand() {
    aside.classList.toggle("body-aside_on");
    aside.classList.toggle("body-aside");
}
function navRetract() {
    aside.classList.replace("body-aside_on", "body-aside");
}

'use strict';
// let x = window.pageYOffset
// EXTREMELY IMPORTANT!! DO NOT LET THE ABOVE OCCUR.

let x = document.querySelector(".top-nav").offsetHeight;
let y = document.querySelector(".header").offsetHeight;
let z = document.querySelector("#side-nav");


window.addEventListener("scroll", function navExtend() {
    if (window.pageYOffset >= y + x ) {
        z.classList.replace("side-nav", "side-nav-on");
    } else {
        z.classList.replace("side-nav-on", "side-nav");
    }
})


console.log(window.pageYOffset);
console.log(y);

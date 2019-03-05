'use strict';
// let x = window.pageYOffset
// EXTREMELY IMPORTANT!! DO NOT LET THE ABOVE OCCUR.

// let x = document.querySelector(".top-nav").offsetHeight;
// let y = document.querySelector(".header").offsetHeight;
// let z = document.querySelector("#side-nav");


// window.addEventListener("scroll", function navExtend() {
//     if (window.pageYOffset >= y + x ) {
//         z.classList.replace("side-nav", "side-nav-on");
//     } else {
//         z.classList.replace("side-nav-on", "side-nav");
//     }
// })


// console.log(window.pageYOffset);
// console.log(y);

// let html_image      =       document.getElementById("")

document.querySelector(".htmlogo-container").addEventListener("mouseenter", function extend_html_image() {
    document.querySelector("#box").classList.replace("retract-box", "extend-box");
    document.querySelector("#skill-header").setAttribute("style", "color:white; ");
    document.querySelector("#skills").setAttribute("style", "border-radius: 0vmax 0vmax 0vmax 0vmax;");
})

document.querySelector(".htmlogo-container").addEventListener("mouseleave", function retract_html_image() {
    document.querySelector("#box").classList.replace("extend-box", "retract-box");
    document.querySelector("#skill-header").setAttribute("style", "color:black; ")
})
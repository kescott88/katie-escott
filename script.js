let project1 = document.getElementById("nate1");
let word1 = document.getElementById("title1");
let project2 = document.getElementById("nate2");
let word2 = document.getElementById("title2");
let project3 = document.getElementById("nate3");
let word3 = document.getElementById("title3");
let project4 = document.getElementById("nate4");
let word4 = document.getElementById("title4");

function reveal() {
    project1.style.border = 'black 2px solid';
}

function reset() {
    project1.style.border = 'none';
}

function reveal2() {
    project2.style.border = 'red 2px solid';
}

function reset2() {
    project2.style.border = 'none';
}

function reveal3() {
    project3.style.border = 'green 2px solid';
}

function reset3() {
    project3.style.border = 'none';
}

function reveal4() {
    project4.style.border = 'blue 2px solid';
}

function reset4() {
    project4.style.border = 'none';
}

project1.addEventListener('mouseover', reveal);
project1.addEventListener('mouseleave', reset);

project2.addEventListener('mouseover', reveal2);
project2.addEventListener('mouseleave', reset2);

project3.addEventListener('mouseover', reveal3);
project3.addEventListener('mouseleave', reset3);

project4.addEventListener('mouseover', reveal4);
project4.addEventListener('mouseleave', reset4);

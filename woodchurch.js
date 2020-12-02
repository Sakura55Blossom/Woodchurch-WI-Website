var introOne = document.getElementById("introOne");
var introTwo = document.getElementById("introTwo");
var introThree = document.getElementById("introThree");
var introFour = document.getElementById("introFour");
var introFive = document.getElementById("introFive");

/* Line One*/

function changeTextOne() {
    introOne.style.fontSize = "2em";
};

function changeTextBackOne() {
    introOne.style.fontSize = "1.5em";   
};

introOne.addEventListener("mouseover", changeTextOne);
introOne.addEventListener("mouseout", changeTextBackOne);

/*Line Two*/

function changeTextTwo() {
    introTwo.style.fontSize = "2em";  
};

function changeTextBackTwo() {
    introTwo.style.fontSize = "1.5em";  
};

introTwo.addEventListener("mouseover", changeTextTwo);
introTwo.addEventListener("mouseout", changeTextBackTwo);

/*Line Three*/

function changeTextThree() {
    introThree.style.fontSize = "2em";  
};

function changeTextBackThree() {
    introThree.style.fontSize = "1.5em";
};

introThree.addEventListener("mouseover", changeTextThree);
introThree.addEventListener("mouseout", changeTextBackThree);

/*Line Four*/

function changeTextFour() {
    introFour.style.fontSize = "2em"; 
};

function changeTextBackFour() {
    introFour.style.fontSize = "1.5em";  
};

introFour.addEventListener("mouseover", changeTextFour);
introFour.addEventListener("mouseout", changeTextBackFour);

/*Line Five*/

function changeTextFive() {
    introFive.style.fontSize = "2em";  
};

function changeTextBackFive() {
    introFive.style.fontSize = "1.5em";  
};

introFive.addEventListener("mouseover", changeTextFive);
introFive.addEventListener("mouseout", changeTextBackFive);

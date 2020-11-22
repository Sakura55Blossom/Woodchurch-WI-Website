var introOne = document.getElementById("introOne");
var introTwo = document.getElementById("introTwo");
var introThree = document.getElementById("introThree");
var introFour = document.getElementById("introFour");
var introFive = document.getElementById("introFive");

/* Line One*/

function changeTextOne() {
    introOne.style.color = "gold";   
};

function changeTextBackOne() {
    introOne.style.color = "white";   
};

introOne.addEventListener("mouseover", changeTextOne);
introOne.addEventListener("mouseout", changeTextBackOne);

/*Line Two*/

function changeTextTwo() {
    introTwo.style.color = "gold";   
};

function changeTextBackTwo() {
    introTwo.style.color = "white";   
};

introTwo.addEventListener("mouseover", changeTextTwo);
introTwo.addEventListener("mouseout", changeTextBackTwo);

/*Line Three*/

function changeTextThree() {
    introThree.style.color = "gold";   
};

function changeTextBackThree() {
    introThree.style.color = "white";   
};

introThree.addEventListener("mouseover", changeTextThree);
introThree.addEventListener("mouseout", changeTextBackThree);

/*Line Four*/

function changeTextFour() {
    introFour.style.color = "gold";   
};

function changeTextBackFour() {
    introFour.style.color = "white";   
};

introFour.addEventListener("mouseover", changeTextFour);
introFour.addEventListener("mouseout", changeTextBackFour);

/*Line Five*/

function changeTextFive() {
    introFive.style.color = "gold";   
};

function changeTextBackFive() {
    introFive.style.color = "white";   
};

introFive.addEventListener("mouseover", changeTextFive);
introFive.addEventListener("mouseout", changeTextBackFive);

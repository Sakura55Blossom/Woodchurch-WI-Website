var introOne = document.getElementById("introOne");
var introTwo = document.getElementById("introTwo");
var introThree = document.getElementById("introThree");
var introFour = document.getElementById("introFour");
var introFive = document.getElementById("introFive");
var introButton = document.getElementById("findOutMore")

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

/*Button*/

function bigButton() {
    introButton.style.color = "gold";
    introButton.style.fontSize = "200%";
    introButton.style.padding = "40px";
};

function smallButton() {
    introButton.style.color = "white";
    introButton.style.fontSize = "150%";
    introButton.style.padding = "20px";
};

introButton.addEventListener("mouseover", bigButton);
introButton.addEventListener("mouseout", smallButton);
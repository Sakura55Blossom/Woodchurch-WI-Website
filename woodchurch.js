var introOne = document.getElementById("introOne");
var introTwo = document.getElementById("introTwo");
var introThree = document.getElementById("introThree");
var introFour = document.getElementById("introFour");
var introFive = document.getElementById("introFive");

/* Line One*/

function changeTextOne() {
    introOne.style.fontSize = "150%";
};

function changeTextBackOne() {
    introOne.style.fontSize = "100%";   
};

introOne.addEventListener("mouseover", changeTextOne);
introOne.addEventListener("mouseout", changeTextBackOne);

/*Line Two*/

function changeTextTwo() {
    introTwo.style.fontSize = "150%";  
};

function changeTextBackTwo() {
    introTwo.style.fontSize = "100%";  
};

introTwo.addEventListener("mouseover", changeTextTwo);
introTwo.addEventListener("mouseout", changeTextBackTwo);

/*Line Three*/

function changeTextThree() {
    introThree.style.fontSize = "150%";  
};

function changeTextBackThree() {
    introThree.style.fontSize = "100%";
};

introThree.addEventListener("mouseover", changeTextThree);
introThree.addEventListener("mouseout", changeTextBackThree);

/*Line Four*/

function changeTextFour() {
    introFour.style.fontSize = "150%"; 
};

function changeTextBackFour() {
    introFour.style.fontSize = "100%";  
};

introFour.addEventListener("mouseover", changeTextFour);
introFour.addEventListener("mouseout", changeTextBackFour);

/*Line Five*/

function changeTextFive() {
    introFive.style.fontSize = "150%";  
};

function changeTextBackFive() {
    introFive.style.fontSize = "100%";  
};

introFive.addEventListener("mouseover", changeTextFive);
introFive.addEventListener("mouseout", changeTextBackFive);

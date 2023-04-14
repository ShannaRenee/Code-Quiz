//Setting variables
var timeEl = document.querySelector(".timer");
var start = document.querySelector(".startBtn");
var h1 = document.getElementById("mainHeading");
var p = document.getElementById("intro");
var div = document.querySelector(".hide");
var buttons = document.getElementsByName("choice");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");

//Buttons
var opt1 = document.getElementById("opt-1");
var opt2 = document.getElementById("opt-2");
var opt3 = document.getElementById("opt-3");
var opt4 = document.getElementById("opt-4");

var scoreBoard = [];

start.addEventListener("click", startGame);

const quiz = {
    question1: "Question 1: HTML stands for:",
    question2: "Question 2: What git command do you use to create a file in your directory?",
    question3: "Question 3: What does the * selector in CSS do?",
    question4: "Question 4: Which one of these is an example of a browser API?",
    question5: "Question 5: Where do you link your jQuery library in your HTML file?"
}

//runs when wrong button is clicked
function wrong() {
    this.setAttribute("class", "red");
    if (secondsLeft >= 15){
        secondsLeft = secondsLeft - 15;
    } else {
        secondsLeft = 0;
        clearInterval(timeInterval);
    }
    
}

//runs at the beginning of each question to reset
function reset() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("class", "reveal");
    }
    secondsLeft = secondsLeft + 15;
}

var secondsLeft = 100;

function startGame() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;
    
        if(secondsLeft <= 0) {
            clearInterval(timeInterval);
            div.setAttribute("class", "hide");
            h1.textContent = "Oof.. your score is " + secondsLeft
        }
        }, 1000);


    p.remove();
    start.remove();
    div.setAttribute("class", "show");
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("class", "reveal");
   
    }
    
    h1.textContent = quiz.question1;
    opt1.textContent = "A. Hypertext Machine Learning"
    opt2.textContent = "B. Hypertext Markup Language"
    opt3.textContent = "C. Hard To Master Language"
    opt4.textContent = "D. Hypotext Margin Lucidness"
    opt2.addEventListener("click", Q2, {once: true});
    opt1.addEventListener("click", wrong);
    opt3.addEventListener("click", wrong);
    opt4.addEventListener("click", wrong);


function Q2() {
    reset();
    h1.textContent = quiz.question2;
    opt1.textContent = "A. git add ."
    opt2.textContent = "B. git create"
    opt3.textContent = "C. touch"
    opt4.textContent = "D. new file"
    opt3.addEventListener("click", Q3, {once: true});
    opt1.addEventListener("click", wrong);
    opt2.addEventListener("click", wrong);
    opt4.addEventListener("click", wrong);
}

function Q3() {
    reset();
    h1.textContent = quiz.question3;
    opt1.textContent = "A. nothing"
    opt2.textContent = "B. targets one element"
    opt3.textContent = "C. makes it look pretty"
    opt4.textContent = "D. targets every element"
    opt4.addEventListener("click", Q4, {once: true});
    opt1.addEventListener("click", wrong);
    opt3.addEventListener("click", wrong);
    opt2.addEventListener("click", wrong);
}

function Q4() {
    reset();
    h1.textContent = quiz.question4;
    opt1.textContent = "A. GoogleFonts"
    opt2.textContent = "B. JSON"
    opt3.textContent = "C. jQuery"
    opt4.textContent = "D. Bootstrap"
    opt2.addEventListener("click", Q5, {once: true});
    opt1.addEventListener("click", wrong);
    opt3.addEventListener("click", wrong);
    opt4.addEventListener("click", wrong);
}

function Q5() {
    reset();
    h1.textContent = quiz.question5;
    opt1.textContent = "A. In the head of the HTML"
    opt2.textContent = "B. At the top of the body"
    opt3.textContent = "C. At the bottom of the body above the JavaScript link"
    opt4.textContent = "D. At the bottom of the body below the JavaScript Link"
    opt1.addEventListener("click", wrong);
    opt2.addEventListener("click", wrong);
    opt4.addEventListener("click", wrong);
    opt3.addEventListener("click", function() {
        h1.textContent = "Great Job! Your score is " + secondsLeft;
        clearInterval(timeInterval);
        timeEl.textContent = "";
        div.setAttribute("class", "hide");
        document.querySelector("input").setAttribute("class", "form");
        document.querySelector(".enter").setAttribute("class", "form");
        submit.addEventListener("click", recordScore);
    })
}}

function recordScore() {
    h1.textContent = "Score Board:"
    submit.remove();
    initials.remove();
    var score = initials.value;
    scoreBoard.push(score);
    var h3 = document.createElement("h3");
    h3.textContent = scoreBoard + " " + secondsLeft;
    h1.append(h3);
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    console.log(localStorage);
}
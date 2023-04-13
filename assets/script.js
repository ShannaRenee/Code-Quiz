var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".startBtn");
var p = document.getElementById("intro");
var h1 = document.getElementById("mainHeading");

var buttons = document.createElement("div");
var incor = document.createElement("h2");


incor.classList.add("hidden");
incor.textContent = "Try again!";

startEl.addEventListener("click", startGame);

var secondsLeft = 100;

function startGame () {
startTimer();
Q1();
}



function Q1() { 
   p.remove();
   startEl.remove();
   h1.textContent = "Question 1: HTML stands for:";

  
buttons.insertAdjacentHTML("beforeend", `
    <button>Hypertext Machine Learning</button>
    <button>Hypertext Markup Language</button>
    <button>Hard To Master Language</button>
    <button>Hypotext Margin Lucidness</button>
`);
h1.append(buttons);
buttons.classList.add("buttonContainer");
buttons.childNodes[3].addEventListener("click", Q2, {once: true});

}


function Q2() {
    h1.textContent = "Question 2: What git command do you use to create a file in your directory?"
    h1.append(buttons);
    buttons.children[0].textContent = "A. git add .";
    buttons.children[1].textContent = "B. git create";
    buttons.children[2].textContent = "C. touch";
    buttons.children[3].textContent = "D. new file";
    buttons.childNodes[5].addEventListener("click", Q3, {once: true});

}

function Q3() {
    h1.textContent = "Question 3: What does the * selector in CSS do?"
    h1.append(buttons);
    buttons.children[0].textContent = "A. nothing";
    buttons.children[1].textContent = "B. target one element";
    buttons.children[2].textContent = "C. make it look pretty";
    buttons.children[3].textContent = "D. targets every element";
    buttons.childNodes[7].addEventListener("click", Q4, {once: true});
}

function Q4() {
    h1.textContent = "Question 4: Which one of these is an example of a browser API?"
    h1.append(buttons);
    buttons.children[0].textContent = "A. GoogleFonts";
    buttons.children[1].textContent = "B. JSON";
    buttons.children[2].textContent = "C. jQuery";
    buttons.children[3].textContent = "D. Bootstrap";
    buttons.childNodes[3].addEventListener("click", Q5, {once: true});
}

function Q5() {
    h1.textContent = "Question 5: Where do you link your jQuery library in your HTML file?"
    h1.append(buttons);
    buttons.children[0].textContent = "A. in the head";
    buttons.children[1].textContent = "B. at the top of the body";
    buttons.children[2].textContent = "C. at the bottom of the body above the JavaScript link";
    buttons.children[3].textContent = "D. at the bottom of the body below the JavaScript link";
    buttons.childNodes[5].addEventListener("click", console.log("You won!"));
}












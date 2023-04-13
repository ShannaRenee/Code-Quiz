var timeEl = document.querySelector(".timer");
var start = document.querySelector(".startBtn");
var h1 = document.getElementById("mainHeading");
var p = document.getElementById("intro");

var buttonContainer = document.createElement("div");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

buttonContainer.append(btn1);
buttonContainer.append(btn2);
buttonContainer.append(btn3);
buttonContainer.append(btn4);

buttonContainer.classList.add("buttonContainer");
btn1.classList.add("red");
btn2.classList.add("red");
btn3.classList.add("red");
btn4.classList.add("red");

start.addEventListener("click", startGame);


const quiz = {
    question1: "Question 1: HTML stands for:",
    question2: "Question 2: What git command do you use to create a file in your directory?",
    question3: "Question 3: What does the * selector in CSS do?",
    question4: "Question 4: Which one of these is an example of a browser API?",
    question5: "Question 5: Where do you link your jQuery library in your HTML file?"
}

var buttons = [btn1, btn2, btn3, btn4];

for (button of buttons) {
    button.addEventListener("click", function() {

        if (!this.dataset.clicked){
            this.setAttribute("data-clicked", "true");
            this.style.backgroundColor = "red";
            
        }
    });
}


var secondsLeft = 100;
function startTimer() {
    var timeInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
    }, 1000);
}




function startGame() {
    startTimer();
    p.remove();
    start.remove();
    h1.textContent = quiz.question1;
    h1.append(buttonContainer);
    btn1.textContent = "Hypertext Machine Learning";
    btn2.textContent = "Hypertext Markup Language";
    btn3.textContent = "Hard To Master Language";
    btn4.textContent = "Hypotext Margin Lucidness";

    btn2.addEventListener("click", function() {
        console.log("Success");
        Q2();
    }
    )}

    

    function Q2() {
    h1.textContent = quiz.question2;
    h1.append(buttonContainer);
    btn1.textContent = "git add .";
    btn2.textContent = "git create";
    btn3.textContent = "touch";
    btn4.textContent = "new file";
    }

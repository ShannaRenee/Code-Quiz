var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".startBtn");

startEl.addEventListener("click", startGame);

var secondsLeft = 100;

function startGame () {
startTimer();
questions();

function startTimer() {
    var timeInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
    }, 1000);
}

function questions() {
    

}


}
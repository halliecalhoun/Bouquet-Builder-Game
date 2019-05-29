// pseudo coding:
    // user is shown random number at start of game (between 19 - 120)
    // when user clicks on button:
        // add that buttons specific amount of points to the user's total score
        // each button has a random hidden value between 1 - 12
        // when button is clicked, update the score counter
        // add score click counter with a limit so that user cannot spam 1 to acheive winning num
    // if user score = winning score (randumly generated num), then
        // wins ++
        // restart game
    // if user score > winning score (randomly generated num), then
        // losses ++
        // restart game


// declare the global variables
var wins = 0;
var losses = 0;
var userScore = 0;
var winScore = 0;
var flowersUsed = 0;

// function for starting new game
function resetGame() {
    userScore = 0;
    flowersUsed = 0;
    winScore = Math.floor(Math.random() * 21) + 30;
    var btnVals = Math.floor(Math.random() * 9) + 2;
    $("#lightPinkBtn").attr("value", btnVals.toString());
    btnVals = Math.floor(Math.random() * 9) + 2;
    $("#pinkBtn").attr("value", btnVals.toString());
    btnVals = Math.floor(Math.random() * 9) + 2;
    $("#purpleBtn").attr("value", btnVals.toString());
}

// function for updating elements in HTML to display
function updateDisplay() {
    $("#userScore").text(userScore);
    $("#winScore").text(winScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#flowersUsed").text(flowersUsed);
}

// function for checking if they win or lose
function userWinOrLose(){
    if(userScore === winScore){
        wins++;
        resetGame();
        updateDisplay();
    } else if(userScore > winScore || flowersUsed > 12){
        losses++;
        resetGame();
        updateDisplay();
    }
}

// start the game on refresh/restart and make sure it updates the display
resetGame();
updateDisplay();

// function for making sure document is ready
$(document).ready(function(){
    // add the event click listener
    $(".vectorBtn").on("click", function(){
        flowersUsed++;
        userScore += parseInt(this.value);
        updateDisplay();
        userWinOrLose();
    });
})

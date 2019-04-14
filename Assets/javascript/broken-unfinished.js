///////////////////////
///////VARIABLES///////
///////////////////////
var numCorrect = 0;
var numIncorrect = 0;
var buttonClicked = false;
var clickedValue = 0;

var questions = [
    ["Prompt", "Correct", "Incorrect", "Incorrect", "Incorrect", 1],
    ["Prompt", "Incorrect", "Incorrect", "Correct", "Incorrect", 3],
    ["Prompt", "Correct", "Incorrect", "Incorrect", "Incorrect", 2],
    ["Prompt", "Correct", "Incorrect", "Incorrect", "Incorrect", 1],
    ["Prompt", "Incorrect", "Incorrect", "Incorrect", "Correct", 4],
    ["Prompt", "Correct", "Incorrect", "Incorrect", "Incorrect", 2],
    ["Prompt", "Incorrect", "Incorrect", "Correct", "Incorrect", 3],
    ["Prompt", "Incorrect", "Incorrect", "Incorrect", "Correct", 4],
    ["Prompt", "Incorrect", "Incorrect", "Incorrect", "Correct", 4],
    ["Prompt", "Incorrect", "Correct", "Incorrect", "Incorrect", 2],
]

//timer variables
var timeLeft = 30;
var timerDone=false;
var intervalId;


///////////////////////
///////BASE CODE///////
///////////////////////
buildPage();


for (var i = 0; i < questions.length; i++) {
    startRound(i);
    debugger;
    startTimer();
    // //waitForTimer();
    // console.log(timerDone);
    checkAnswer(i);
    // console.log(numCorrect);
    // console.log(numIncorrect);
    
    resetRound();




    //correct or incorrect page
    // if clickedValue = questions[i][5] =====> correct

    // add way to loop again, resetting
}

///////////////////////
///////FUNCTIONS///////
///////////////////////
function buildPage() {
    $("<h1>").text("TRIVIA GAME!!!").appendTo('#game');
    $('<div>', { id: 'time-remaining' }).appendTo('#game');
    $('<div>', { id: 'prompt' }).appendTo('#game');
    $('<div>', { id: 'buttons' }).appendTo('#game');
    $('<button>', { class: 'choice', id: 'button-1', value: 1 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-2', value: 2 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-3', value: 3 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-4', value: 4 }).appendTo('#buttons');
}
function clearPage() {
    $('game').empty();
}
function startRound(position) {
    $('#prompt').text(questions[position][0]);
    $('#button-1').text(questions[position][1]);
    $('#button-2').text(questions[position][2]);
    $('#button-3').text(questions[position][3]);
    $('#button-4').text(questions[position][4]);
    
}
function resetRound() {
    timeLeft = 30;
    buttonClicked = false;
    clickedValue = 0;
    $('prompt').empty();
}
function checkAnswer(position) {
    if (clickedValue === questions[position][5]) {
        numCorrect++;
    } else { numIncorrect++; }
}

////TIMER FUNCTIONS////////
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timeLeft--;
    $('#time-remaining').empty();
    $('#time-remaining').text('Time Remaining: ' + timeLeft + ' Seconds');

    $(document).on("click", ".choice", getButtonValue);
    function getButtonValue() {
        clickedValue = $(this).attr("value");
        buttonClicked = true;
    }

    if (timeLeft === 0) {
        stopTimer();
        timerDone = true;
        return;
        //out of time conditions
    }
    if (buttonClicked) {
        stopTimer();
        timerDone = true;
        return;
    }
}
function stopTimer() {
    clearInterval(intervalId);
}
//recursive function to hold for loop until button is clicked or timer is finished
// has to be a cleaner way to achieve this
// function waitForTimer(){
//     if (!timerDone){
//         waitForTimer()
//     }
// }




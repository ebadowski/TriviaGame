///////////////////////
///////VARIABLES///////
///////////////////////
var numCorrect = 0;
var numIncorrect = 0;
var buttonClicked = false;
var clickedValue = 0;
var currentAnswer = false;
var i = 0;
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
var keyPageTime = 3;
var timerDone = false;
var intervalId;


//TO DO
// Correct/Incorrect page
// end the game when i == questions.length

///////////////////////
///////BASE CODE///////
///////////////////////
buildPage();
startRound();
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
function decrement() {
    timeLeft--;
    $('#time-remaining').empty();
    $('#time-remaining').text('Time Remaining: ' + timeLeft + ' Seconds');

    $(document).on("click", ".choice", getButtonValue);
    function getButtonValue() {
        clickedValue = $(this).attr("value");
        buttonClicked = true;
    }

    if (timeLeft === 0 && !buttonClicked) {
        i++;
        stopTimer();
        timerDone = true;
        //other stuff
        //out of time conditions
        keyPage();
        if (i < questions.length) {
            buildPage();
            resetRound();
        }
    }
    if (buttonClicked) {
        i++;
        stopTimer();
        timerDone = true;
        if (checkAnswer()) {
            currentAnswer = true;
        }
            //     clearInterval(intervalId);
            // intervalId = setInterval(countDown, 1000);
            // function countDown() {
            //     keyPageTime--;
            //     if (keyPageTime===0){stopTimer;}
            //     keyPage();}
        //other stuff
    
        if (i < questions.length) {
            buildPage();
            resetRound();
        }
    }
}

gameOver();






///////////////////////
///////FUNCTIONS///////
///////////////////////
function buildPage() {
    $('#game').empty();
    $("<h1>").text("TRIVIA GAME!!!").appendTo('#game');
    $('<div>', { id: 'time-remaining' }).appendTo('#game');
    $('<div>', { id: 'prompt' }).appendTo('#game');
    $('<div>', { id: 'buttons' }).appendTo('#game');
    $('<button>', { class: 'choice', id: 'button-1', value: 1 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-2', value: 2 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-3', value: 3 }).appendTo('#buttons');
    $('<button>', { class: 'choice', id: 'button-4', value: 4 }).appendTo('#buttons');
}
function keyPage() {
    $('#game').empty();
    
        $('<div>', { id: 'result' }).appendTo('#game');
        if(currentAnswer){
            $('#result').text("CORRECT!");
        }
        else{
            $('#result').text("INCORRECT!");
        }

        $('<div>', { id: 'image-container' }).appendTo('#game');
    


}
function startRound() {
    $('#prompt').text(questions[i][0]);
    $('#button-1').text(questions[i][1]);
    $('#button-2').text(questions[i][2]);
    $('#button-3').text(questions[i][3]);
    $('#button-4').text(questions[i][4]);

}
function resetRound() {
    timeLeft = 30;
    buttonClicked = false;
    clickedValue = 0;
    $('prompt').empty();
    startRound();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function checkAnswer() {
    var isCorrect = false
    if (clickedValue === questions[i][5]) {
        numCorrect++;
        isCorrect = true;
    } else { numIncorrect++; }
    return isCorrect;
}
function gameOver() {



}
function newGame() {
    numCorrect = 0;
    numIncorrect = 0;
    i = 0;
    resetRound();
}


////TIMER FUNCTIONS////////


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




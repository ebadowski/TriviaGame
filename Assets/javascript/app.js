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
    ["Prompt", "Correct", "Incorrect", "Incorrect", "Incorrect", 1],
]

//timer variables
var timeLeft = 30;
var intervalId;


///////////////////////
///////BASE CODE///////
///////////////////////
buildPage();


for(var i = 0; i<questions.length; i++){
    //while loop for question and timer
    while (timeLeft > 0 && !buttonClicked){
        startTimer();
        updatePage(i);
    }
    //correct or incorrect page
    // if clickedValue = questions[i][5] =====> correct
}

///////////////////////
///////FUNCTIONS///////
///////////////////////
function buildPage(){
    $("<h1>").text("TRIVIA GAME!!!").appendTo('#game');
    $('<div>', {id: 'time-remaining'}).appendTo('#game');
    $('<div>', {id: 'prompt'}).appendTo('#game');
    $('<div>', {id: 'buttons'}).appendTo('#game');
    $('<button>', {id: 'button-1', value: 1}).appendTo('#buttons');
    $('<button>', {id: 'button-2', value: 2}).appendTo('#buttons');
    $('<button>', {id: 'button-3', value: 3}).appendTo('#buttons');
    $('<button>', {id: 'button-4', value: 4}).appendTo('#buttons');
}
function updatePage(position){
    $('#prompt').text(questions[position][0]);
        $('#button-1').text(questions[position][1]);
        $('#button-2').text(questions[position][2]);
        $('#button-3').text(questions[position][3]);
        $('#button-4').text(questions[position][4]);
}
function clearPage(){

}
function resetRound(){
    timeLeft = 30;
    buttonClicked = false;
    $('prompt').empty();
}
function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    timeLeft--;
    $('#time-remaining').empty();
    $('#time-remaining').text('Time Remaining: ' + timeLeft + 'Seconds');
    if (timeLeft === 0){
        clearInterval(intervalId);
        //out of time conditions
    }
}
//on clicks, update clickedValue with $(this). whatever getting value is
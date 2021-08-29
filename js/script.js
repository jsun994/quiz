//initalize questions
var questions = [

    new Question("Commonly used data types DO NOT include:",
    ["strings", "booleans", "alerts", "numbers"],
    "alerts"),

    new Question("The condition in an if/else statement is encloded with ______.",
    ["quotes", "curly brackets", "parenthesis", "square brackets"],
    "curly brackets"),

    new Question("Arrays in JavaScript can be used to store ______.",
    ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "all of the above"),

    new Question("String values must be enclosed within ______ when being assigned to variables.",
    ["commas", "curly brackets", "quotes", "parenthesis"],
    "quotes"),

    new Question("A very useful tool used during development and debugging for printing content to the debugger is:",
    ["JavaScript", "terminal/bash", "for loops", "console log"],
    "console log")
    
];

//display questions
function displayQuestion() {
    if ((quiz.ended()) === true) {
        showScores();
    }
    else {
        //display question
        var questionEle = document.getElementById("question");
        questionEle.innerHTML = quiz.getQueIndex().qText;
        
        //display choices
        var choices = quiz.getQueIndex().choices;

        //loop thru choices
        for (var i = 0; i < choices.length; i++) {
            var choiceEle = document.getElementById("choice" + i);
            choiceEle.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
}

//guess function for the button click
function guess(buttonId, choice) {
    var button = document.getElementById(buttonId);
    button.onclick = function() {
        quiz.guess(choice);
        if (time > 0) {
        displayQuestion();
        }
    }
}

//show scores
function showScores() {
    document.getElementById("info").style.display = "none";
    document.getElementById("qBox").style.display = "none";
    document.getElementById("done").style.display = "";
    var yourScore = document.getElementById("final");
    yourScore.innerHTML = quiz.score;
    finalScore = quiz.score;
    document.getElementById("tText").style.display = "none";
    document.getElementById("countdown").style.display = "none";
}

//initalize
var quiz = new Quiz(questions);

//start quiz
var start = document.getElementById("start-quiz");
start.onclick = function() {
    startCountdown();
    document.getElementById("info").style.display = "none";
    document.getElementById("qBox").style.display = "";
    displayQuestion();
}

//countdown
var time = 90;

var counting = document.getElementById("countdown");

//start timer
function startCountdown() {
    var quizTimer = setInterval(
        function() {

            if (time <= 0) {

                clearInterval(quizTimer);
                showScores();
                
            } else {

                var seconds = time;
                time--;
                counting.innerHTML = seconds;
            }
        }
    , 1000);
}

//store inital and score
var user = document.getElementById("initial");
var store = document.getElementById("submit");
store.disabled = true;

//display purpose
user.onmouseover = function() { 
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
}

//check for input
user.addEventListener("keyup", function() {
    var check = user.value;
    if (!check.match(/^[A-Za-z]+$/)) {
        store.disabled = true;
    } else {
        store.disabled = false;
    }
});

//store highscores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

store.onclick = function() {
    //to string quiz score
    var string = quiz.score.toString();

    var score = {
        score: string,
        name: user.value
    };
    //local storage
    highScores.push(score);
    //sort
    highScores.sort(function(a,b) {
        return b.score - a.score;
        });
    //save to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
}
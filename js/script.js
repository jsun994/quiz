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
        displayQuestion();
    }
}

function showScores() {
    window.alert("ended");
    document.getElementById("qBox").style.display = "none";
}

var quiz = new Quiz(questions);

var start = document.getElementById("start-quiz");
start.onclick = function() {
    document.getElementById("info").style.display = "none";
    document.getElementById("qBox").style.display = "";
    displayQuestion();
}
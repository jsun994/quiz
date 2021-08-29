//create quiz class
class Quiz {

    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.qIndex = 0;
    }

    getQueIndex() {
        return this.questions[this.qIndex];
    }

    guess(answer) {

        if ((this.getQueIndex().isCorrectAnswer(answer)) === true) {
            //add score
            this.score+=10;
            //display correct
            document.getElementById("correct").style.display = "";
            document.getElementById("incorrect").style.display = "none";

        } else {
            //penalize time
            time-=10;
            //sub score
            if (this.score > 0) {
            this.score-=10;
            }
            //display incorrect
            document.getElementById("correct").style.display = "none";
            document.getElementById("incorrect").style.display = "";
        }
        this.qIndex++;
    }

    ended() {
        //if finished
        if (this.qIndex === this.questions.length) {
            return true;
        } else {
            return false;
        }
    }
}

//create question class
class Question {

    constructor(qText, choices, answer) {
        this.qText = qText;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        //check choice
        if (this.answer === choice) {
            return true;
        } else {
            return false;
        }
    }
}
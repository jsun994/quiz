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
            this.score++;
            console.log(this.score);
        }
        this.qIndex++;
    }
    ended() {
        if (this.qIndex === this.questions.length) {
            return true;
        } else {
            return false;
        }
    }
}

class Question {

    constructor(qText, choices, answer) {
        this.qText = qText;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {

        if (this.answer === choice) {
            return true;
        } else {
            return false;
        }
    }
}
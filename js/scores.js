var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var clearScores = document.getElementById("clear");

console.log(highScores);
highScoresList.innerHTML = highScores
    .map(function(score) {
        return `<li class="hs">${score.name} - ${score.score}</li>`;
    }).join("");

clearScores.onclick = function() {
    localStorage.clear();
    location.reload();
}
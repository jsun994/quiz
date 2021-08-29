var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var clearScores = document.getElementById("clear");

console.log(highScores);

//map to highscore
var hs = highScores.map(function(score) {
    return `<li class="hs">${score.name} - ${score.score}</li>`;
});

//append to ul
highScoresList.innerHTML += hs.join("");

//clear click
clearScores.onclick = function() {
    localStorage.clear();
    location.reload();
}
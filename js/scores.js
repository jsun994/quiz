var highScoresList = document.getElementById("highScoresList");
var clearScores = document.getElementById("clear");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

//creat high scores list items
var createScore = function(hs) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "hs";
    listItemEl.innerHTML = (i + 1)
    + ". "
    + highScores[i].name
    + " - "
    + highScores[i].score;
    
    highScoresList.appendChild(listItemEl);
}

//loop thru local storage
for (var i = 0; i < highScores.length; i++) {
    createScore(highScores[i]);
}

//clear click
clearScores.onclick = function() {
    localStorage.clear();
    location.reload();
}
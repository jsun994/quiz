var start = document.getElementById("start-quiz");

start.onclick = function() {
    document.getElementById("info").style.display = "none";
    document.getElementById("one").style.display = "";
}

var next = document.getElementById("button");

next.onclick = function() {
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "";
}
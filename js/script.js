var start = document.getElementById("start-quiz");

start.onclick = function() {
    document.getElementById("info").style.display = "none";
    document.getElementById("one").style.display = "";
}

var next = document.getElementById("button-one");

next.onclick = function() {
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "";
}

var correct = document.getElementById("correct");

correct.onclick = function() {
    var qTwo = document.getElementById("two");
    var elem = document.createElement("span");
    elem.innerHTML = "Correct!";
    elem.style.borderTop = "1px solid";
    qTwo.appendChild(elem);
}

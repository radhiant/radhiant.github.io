var title = document.getElementById("exampleModalLabel");
var content = document.getElementById("contentMore");


function loadSMRreport(x) {
    title.innerHTML = x;
    $("#contentMore").load("projek/summaryreport.html");
}

function closeContent() {
    content.innerHTML = "";
}

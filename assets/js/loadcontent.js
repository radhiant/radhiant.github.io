var title = document.getElementById("exampleModalLabel");
var content = document.getElementById("contentMore");


function loadSMRreport(x) {
    title.innerHTML = x;
    $("#contentMore").load("projek/summaryreport.html");
}

function loadArsipDok(x) {
    title.innerHTML = x;
    $("#contentMore").load("projek/arsipdok.html");
}

function loadAsetBarang(x) {
    title.innerHTML = x;
    $("#contentMore").load("projek/asetbrg.html");
}

function closeContent() {
    content.innerHTML = "";
}

var title = document.getElementById("exampleModalLabel");
title.innerHTML = "Summary Report";

function loadSMRreport() {
    $("#contentMore").load("projek/summaryreport.html");
}

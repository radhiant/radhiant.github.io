var elem = document.documentElement;

var btnOpenF = document.getElementById('btnofull');
var btnCloseF = document.getElementById('btncfull');

btnCloseF.style.display = "none";

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        btnCloseF.style.display = "block";
        btnOpenF.style.display = "none";
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
        btnCloseF.style.display = "block";
        btnOpenF.style.display = "none";
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
        btnCloseF.style.display = "block";
        btnOpenF.style.display = "none";
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        btnCloseF.style.display = "none";
        btnOpenF.style.display = "block";
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
        btnCloseF.style.display = "none";
        btnOpenF.style.display = "block";
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
        btnCloseF.style.display = "none";
        btnOpenF.style.display = "block";
    }
}
var btnAll = document.getElementById("btnAll");
var btnFE = document.getElementById("btnFE");
var btnBE = document.getElementById("btnBE");

var cardFE = document.getElementsByClassName("cardFE");
var cardBE = document.getElementsByClassName("cardBE");

var cardFE = $(".cardFE");
var cardBE = $(".cardBE");

btnAll.onclick = function () {
    setAll();
    setCardAll();
};

btnFE.onclick = function () {
    setFE();
    setCardFE();
};

btnBE.onclick = function () {
    setBE();
    setCardBE();
};

function setAll() {
    btnAll.className = 'btn btn-light';
    btnFE.className = 'btn btn-outline-light';
    btnBE.className = 'btn btn-outline-light';
}

function setFE() {
    btnAll.className = 'btn btn-outline-light';
    btnFE.className = 'btn btn-light';
    btnBE.className = 'btn btn-outline-light';
}

function setBE() {
    btnAll.className = 'btn btn-outline-light';
    btnFE.className = 'btn btn-outline-light';
    btnBE.className = 'btn btn-light';
}

function setCardAll() {
    cardFE.fadeIn();
    cardBE.fadeIn();
}

function setCardFE() {
    cardFE.fadeIn();
    cardBE.fadeOut();
}

function setCardBE() {
    cardFE.fadeOut();
    cardBE.fadeIn();
}
const navBox = document.querySelector('.navbar-box');
const navButton = document.querySelector('.navbar-toggle');

const menuHome = document.getElementById("menuHome");
const menuAbout = document.getElementById("menuAbout");
const menuSkill = document.getElementById("menuSkill");
const menuProjek = document.getElementById("menuProjek");
const menuContact = document.getElementById("menuContact");

focusHome();

navButton.addEventListener('click', function () {
    this.classList.toggle('active');
    navBox.classList.toggle('active');
});

function navHide(menuActive) {
    navBox.classList.toggle('active');
    navButton.classList.toggle('active');

    if (menuActive == 'home') {
        focusHome();
    } else if (menuActive == 'about') {
        focusAbout();
    } else if (menuActive == 'skill') {
        focusSkill();
    } else if (menuActive == 'projek') {
        focusProjek();
    } else if (menuActive == 'contact') {
        focusContact();
    } else {
        activeNull();
    }
}

function focusHome() {
    menuHome.classList.add("active");
    menuAbout.classList.remove("active");
    menuSkill.classList.remove("active");
    menuProjek.classList.remove("active");
    menuContact.classList.remove("active");
}

function focusAbout() {
    menuHome.classList.remove("active");
    menuAbout.classList.add("active");
    menuSkill.classList.remove("active");
    menuProjek.classList.remove("active");
    menuContact.classList.remove("active");
}

function focusSkill() {
    menuHome.classList.remove("active");
    menuAbout.classList.remove("active");
    menuSkill.classList.add("active");
    menuProjek.classList.remove("active");
    menuContact.classList.remove("active");
}

function focusProjek() {
    menuHome.classList.remove("active");
    menuAbout.classList.remove("active");
    menuSkill.classList.remove("active");
    menuProjek.classList.add("active");
    menuContact.classList.remove("active");
}

function focusContact() {
    menuHome.classList.remove("active");
    menuAbout.classList.remove("active");
    menuSkill.classList.remove("active");
    menuProjek.classList.remove("active");
    menuContact.classList.add("active");
}

function activeNull() {
    menuHome.classList.remove("active");
    menuAbout.classList.remove("active");
    menuSkill.classList.remove("active");
    menuProjek.classList.remove("active");
    menuContact.classList.remove("active");
}
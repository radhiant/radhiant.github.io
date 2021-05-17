// button leanguage
var btnEng = document.getElementById('btnEng');
var btnId = document.getElementById('btnId');
var imgLng = document.getElementById('imgLng');

// menu Navbar
var homeMenuText = document.getElementById("homeMenuText");
var aboutMenuText = document.getElementById("aboutMenuText");
var skillMenuText = document.getElementById("skillMenuText");
var projectMenuText = document.getElementById("projectMenuText");
var contactMenuText = document.getElementById("contactMenuText");

// About
var headingAbout = document.getElementById("headingAbout");
var about1 = document.getElementById("about1");
var about2 = document.getElementById("about2");

// Skill 
var headingSkill = document.getElementById("headingSkill");

// Project
var headingProject = document.getElementById("headingProject");
var btnTextAll = document.getElementById("btnAll");
var viewSite = document.querySelectorAll('.viewSite');
var viewGithub = document.querySelectorAll(".viewGithub");
var viewYt = document.querySelectorAll(".viewYt");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");

// Contact
var headingContact = document.getElementById("headingContact");
var formName = document.getElementById("formName");
var formEmail = document.getElementById("formEmail");
var formMessage = document.getElementById("formMessage");
var btnSubmit = document.getElementById("btnSubmit");
var btnLoding = document.getElementById("btnLoding");
var succesMessage = document.getElementById("succesMessage");
var failMessage = document.getElementById("failMessage");

//footer
var footerText = document.getElementById("footerText");

window.onload = function () {
    engLeanguage();
}

btnEng.onclick = function () {
    engLeanguage();
};

btnId.onclick = function () {
    idLeanguage();
};

function engLeanguage() {
    imgLng.src = "assets/image/eng.png";
    homeMenuText.innerHTML = '<i class="bi bi-house"></i> Home';
    aboutMenuText.innerHTML = '<i class="bi bi-person"></i> About';
    skillMenuText.innerHTML = '<i class="bi bi-clipboard-data"></i> Skill';
    projectMenuText.innerHTML = '<i class="bi bi-diagram-2-fill"></i> Project';
    contactMenuText.innerHTML = '<i class="bi bi-telephone"></i> Contact';

    headingAbout.innerHTML = "About Me";
    about1.innerHTML = "My name is Radhian Sobarna, I live in Indonesia, I started to dive into the world of programming since high school";
    about2.innerHTML = "Now I have 3+ years of experience making several web-based information systems for companies and non-companies";

    headingSkill.innerHTML = "My Skills";

    headingProject.innerHTML = "My Projects";
    btnTextAll.innerHTML = "All";
    viewSite.forEach(element => {
        element.innerHTML = '<i class="bi bi-globe"></i> View Site';
    });
    viewYt.forEach(element => {
        element.innerHTML = '<i class="bi bi-youtube" ></i> Demo on YouTube';
    });
    viewGithub.forEach(element => {
        element.innerHTML = '<i class="bi bi-github"></i> Detail in Github';
    });
    card1.innerHTML = "Convert design XD to Website using React JS";
    card2.innerHTML = "Web-based <strong>Inventory</strong> Information System";
    card3.innerHTML = "Web-based <strong>Book</strong> Library Information System";
    card4.innerHTML = "Web-based <strong>Lodging</strong> Information System <br /> &nbsp;";
    card5.innerHTML = "<strong>Report</strong> information system web-based <i>PT Bintang Komunikasi Utama</i> office project";
    card6.innerHTML = "<strong>Archiving</strong> information system web-based <i>PT Bintang Komunikasi Utama</i> office project";
    card7.innerHTML = "<strong>Property Asset</strong> information system web - based <i> PT Bintang Komunikasi Utama</i> office project";

    headingContact.innerHTML = "Contact Me";
    formName.innerHTML = "Full Name";
    formEmail.innerHTML = "Email";
    formMessage.innerHTML = "Message";
    btnSubmit.innerHTML = 'Submit <i class="bi bi-cursor-fill"></i>';
    btnLoding.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
    succesMessage.innerHTML = '<strong>Thank you!</strong> We have received your message. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';
    failMessage.innerHTML = '<strong>Ups!</strong> We cannot accept your message. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';

    footerText.innerHTML = '<p>Created with <i class="bi bi-heart-fill text-danger"></i> by <a href="https://github.com/radhiant" class="text-white fw-bold" target="_blank" rel="noopener noreferrer"> Radhian Sobarna</a></p>';

}

function idLeanguage() {
    imgLng.src = "assets/image/indonesia.png";
    homeMenuText.innerHTML = '<i class="bi bi-house"></i> Utama';
    aboutMenuText.innerHTML = '<i class="bi bi-person"></i> Tentang';
    skillMenuText.innerHTML = '<i class="bi bi-clipboard-data"></i> Kemampuan';
    projectMenuText.innerHTML = '<i class="bi bi-diagram-2-fill"></i> Proyek';
    contactMenuText.innerHTML = '<i class="bi bi-telephone"></i> Kontak';

    headingAbout.innerHTML = "Tentang Saya";
    about1.innerHTML = "Nama saya Radhian Sobarna, saya tinggal di Indonesia, saya mulai terjun ke dunia pemrograman sejak SMK";
    about2.innerHTML = "Sekarang saya memiliki pengalaman 3+ tahun membuat beberapa sistem informasi berbasis web untuk perusahaan dan non-perusahaan";

    headingSkill.innerHTML = "Kemampuan Saya";

    headingProject.innerHTML = "Proyek Saya";
    btnTextAll.innerHTML = "Semua";
    viewSite.forEach(element => {
        element.innerHTML = '<i class="bi bi-globe"></i> Lihat Situs';
    });
    viewYt.forEach(element => {
        element.innerHTML = '<i class="bi bi-youtube" ></i> Lihat demo di YouTube';
    });
    viewGithub.forEach(element => {
        element.innerHTML = '<i class="bi bi-github"></i> Selengkapnya di Github';
    });
    card1.innerHTML = "Mengubah desain XD ke Situs web menggunakan React JS";
    card2.innerHTML = "Sistem Informasi <strong>Inventaris</strong> berbasis web";
    card3.innerHTML = "Sistem Informasi <strong>Perpustakaan Buku</strong> Berbasis Web";
    card4.innerHTML = "Sistem Informasi <strong>Penginapan</strong> Berbasis Web <br /> &nbsp;";
    card5.innerHTML = "Sistem informasi <strong>Laporan</strong> proyek kantor <i>PT Bintang Komunikasi Utama</i> berbasis web";
    card6.innerHTML = "Sistem informasi <strong>Pengarsipan</strong> proyek kantor <i>PT Bintang Komunikasi Utama</i> berbasis web";
    card7.innerHTML = "Sistem informasi <strong>Aset Properti</strong> proyek kantor <i>PT Bintang Komunikasi Utama</i> berbasis web";

    headingContact.innerHTML = "Kontak Saya";
    formName.innerHTML = "Nama Lengkap";
    formEmail.innerHTML = "Surel";
    formMessage.innerHTML = "Pesan";
    btnSubmit.innerHTML = 'Kirim <i class="bi bi-cursor-fill"></i>';
    btnLoding.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Memuat...';
    succesMessage.innerHTML = '<strong>Terimakasih!</strong> Kami telah menerima pesan Anda. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';
    failMessage.innerHTML = '<strong>Ups!</strong> Kami tidak dapat menerima pesan Anda. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';

    footerText.innerHTML = '<p>Dibuat <i class="bi bi-heart-fill text-danger"></i> oleh <a href="https://github.com/radhiant" class="text-white fw-bold" target="_blank" rel="noopener noreferrer"> Radhian Sobarna</a></p>';
}
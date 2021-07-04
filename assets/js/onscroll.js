$(document).ready(function () {
  $("#btnup").fadeOut();
});
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var btnup = $("#btnup");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("shadow-sm");
    btnup.fadeIn("slow", "linear");
  } else {
    navbar.classList.remove("shadow-sm");
    btnup.fadeOut("slow", "linear");
  }
}

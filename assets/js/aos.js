gsap.registerPlugin(TextPlugin);

gsap.from('.jumbotron img', { duration: 0.8, opacity: 0 });
gsap.from('.jumbotron h1', { duration: 0.8, delay: 1, opacity: 0 });
gsap.to('.lead', { duration: 0.6, delay: 1.6, text: 'Web Programmer' });

$("html, body").animate({ scrollTop: 0 }, 0);
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


AOS.init();

function onTop() {
    $("html, body").animate({ scrollTop: 0 }, 0);
}


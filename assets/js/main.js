/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
    interval: 200
});

document.querySelector(".fa-toggle-off").addEventListener("click", function() {

    if (this.classList.contains("fa-toggle-off")) {

        document.querySelector("body").style.backgroundColor = "#212121";
        document.querySelector(".l-header").style.backgroundColor = "#212121";
        document.querySelector("body").style.color = "#ffffff";
        document.querySelector("#logo").style.color = "#ffffff";
        document.querySelector("#list-1").style.color = "#ffffff";
        document.querySelector("#list-2").style.color = "#ffffff";
        document.querySelector("#list-3").style.color = "#ffffff";
        document.querySelector("#list-4").style.color = "#ffffff";
        document.querySelector("#list-5").style.color = "#ffffff";
        document.querySelector(".bx-menu").style.color = "#ffffff";

        this.classList.add("fa-toggle-on");
        this.classList.remove("fa-toggle-off");
    } else {
        this.classList.add("fa-toggle-off");
        this.classList.remove("fa-toggle-on");
        document.querySelector("body").style.backgroundColor = "#ffffff";
        document.querySelector(".l-header").style.backgroundColor = "#ffffff";
        document.querySelector("body").style.color = "#212121";
        document.querySelector("#logo").style.color = "#212121";
        document.querySelector("#list-1").style.color = "#212121";
        document.querySelector("#list-2").style.color = "#212121";
        document.querySelector("#list-3").style.color = "#212121";
        document.querySelector("#list-4").style.color = "#212121";
        document.querySelector("#list-5").style.color = "#212121";
        document.querySelector(".bx-menu").style.color = "#212121";
    }

});
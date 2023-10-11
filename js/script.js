let menuicon= document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active')
};

ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Skills-container , .project-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Edit Photos', 'Play chess' , 'Love to watch Anime'],
    typeSpeed :100,
    backSpeed :100,
    backDelay :1000,
    loop : true
});
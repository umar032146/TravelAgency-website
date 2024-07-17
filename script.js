document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').style.display = 'flex';
    document.getElementById('nav-menu').classList.add("fade-in");
    document.getElementById('nav-menu').classList.remove("fade-out");
});


document.getElementById('menu-close').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.add("fade-out");
    document.getElementById('nav-menu').classList.remove("fade-in");
    document.getElementById('nav-menu').style.display = 'none';
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('data-index'));
        showSlide(index);
    });
});

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

showSlide(currentIndex);


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing after the animation
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-view').forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-right');
                observer.unobserve(entry.target); // Stop observing after the animation
            }
        });
    }, {
        threshold: 0.1
    });
    document.querySelectorAll('.animate-on-right').forEach((element) => {
        observer.observe(element);
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    if (menu.classList.contains('open')) {
        menu.classList.add('fade-out');
        menu.classList.remove('fade-in');
        menu.classList.remove('open');
    } else {
     
        menu.classList.add('open');
    }
});


/* <i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i> */
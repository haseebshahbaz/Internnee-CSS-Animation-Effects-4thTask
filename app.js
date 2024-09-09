window.addEventListener('scroll', function() {
    const fadeInElement = document.querySelector('.fade-in-section');
    const position = fadeInElement.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        fadeInElement.classList.add('visible');
    }
});

AOS.init();
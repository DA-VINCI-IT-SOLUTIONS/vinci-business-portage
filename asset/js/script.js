<<<<<<< HEAD
=======

>>>>>>> c2482d907301314ea441b49641d784011e6225b2
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
})
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
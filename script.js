// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== Smooth Scroll (fallback for older browsers) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Contact Form Handler =====
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const successMsg = document.getElementById('form-success');

    // Here you would normally send the form data to a backend or service
    // For now, we show a success message and reset the form
    successMsg.classList.add('show');
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);

    return false;
}
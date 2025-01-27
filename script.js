// Add interactivity and debug logs to the website

document.addEventListener('DOMContentLoaded', () => {
    // Log when the DOM content is fully loaded
    console.log('DOM fully loaded and parsed');

    // Track button clicks in the hero section
    const donateButton = document.querySelector('.hero .btn[href="#donate"]');
    const getHelpButton = document.querySelector('.hero .btn[href="#services"]');

    if (donateButton) {
        donateButton.addEventListener('click', () => {
            console.log('Donate Now button clicked');
        });
    }

    if (getHelpButton) {
        getHelpButton.addEventListener('click', () => {
            console.log('Get Help button clicked');
        });
    }

    // Donation form submission
    const donationForm = document.querySelector('.donate form');
    if (donationForm) {
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            console.log(`Donation form submitted with amount: ${amount}`);
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log(`Contact form submitted with name: ${name}, email: ${email}, message: ${message}`);
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header .nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                console.log(`Navigated to section: ${targetId}`);
            }
        });
    });
});
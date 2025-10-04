// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Contact form validation and submission handling
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            feedback.textContent = '';
            feedback.classList.remove('success', 'error');

            // Validate name
            const name = document.getElementById('name');
            if (name.value.trim().length < 2) {
                document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate subject
            const subject = document.getElementById('subject');
            if (subject.value.trim().length < 5) {
                document.getElementById('subject-error').textContent = 'Subject must be at least 5 characters.';
                isValid = false;
            }

            // Validate message
            const message = document.getElementById('message');
            if (message.value.trim().length < 10) {
                document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
                isValid = false;
            }

            if (isValid) {
                // Submit the form via Formspree (or fallback to alert if not set up)
                form.submit(); // This will send to Formspree
                feedback.textContent = 'Message sent successfully!';
                feedback.classList.add('success');
                form.reset();
            } else {
                feedback.textContent = 'Please fix the errors above.';
                feedback.classList.add('error');
            }
        });
    }
});
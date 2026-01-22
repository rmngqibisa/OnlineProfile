document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton ? toggleButton.querySelector('i') : null;
    const body = document.body;

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        if (icon) icon.className = 'fas fa-sun';
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !savedTheme) {
             body.setAttribute('data-theme', 'dark');
             if (icon) icon.className = 'fas fa-sun';
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme'); // Switch to light
                if (icon) icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark'); // Switch to dark
                if (icon) icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 2. Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Simple Form Interaction
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Sending...';

            // Simulate network request
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.backgroundColor = '#10b981'; // Green
                contactForm.reset();

                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }
});

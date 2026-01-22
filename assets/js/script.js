document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Logic
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton ? toggleButton.querySelector('i') : null;
    const body = document.body;

    // Set Default Theme (Dark)
    // If no preference is saved, default to dark.
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        body.setAttribute('data-theme', 'dark');
        if (icon) icon.className = 'fas fa-sun'; // Show sun to toggle to light
    } else {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            if (icon) icon.className = 'fas fa-sun';
        } else {
            body.removeAttribute('data-theme');
            if (icon) icon.className = 'fas fa-moon';
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (icon) icon.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) icon.className = 'fas fa-sun';
            }
        });
    }

    // 2. 3D Tilt Effect
    const cards = document.querySelectorAll('.skill-card');
    const heroImage = document.querySelector('.profile-image-container');

    const handleTilt = (e, element, strength = 20) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse x within element
        const y = e.clientY - rect.top;  // Mouse y within element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -strength; // Invert axis
        const rotateY = ((x - centerX) / centerX) * strength;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const resetTilt = (element) => {
        element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    // Apply to cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => handleTilt(e, card, 10));
        card.addEventListener('mouseleave', () => resetTilt(card));
    });

    // Apply to Hero Image (stronger effect)
    if (heroImage) {
        heroImage.addEventListener('mousemove', (e) => handleTilt(e, heroImage, 25));
        heroImage.addEventListener('mouseleave', () => resetTilt(heroImage));
    }

    // 3. Parallax Background (Mouse Move)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Move background slightly
        body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });

    // 4. Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 5. Form Interaction
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Transmitting...';

            setTimeout(() => {
                btn.textContent = 'Message Received!';
                btn.style.background = '#10b981'; // Success Green
                contactForm.reset();
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.background = ''; // Reset gradient
                }, 3000);
            }, 1500);
        });
    }
});

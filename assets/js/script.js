
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode'); // Default seems to be dark in CSS variables

            // Update button text
            if (document.body.classList.contains('light-mode')) {
                toggleButton.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light');
            } else {
                toggleButton.textContent = 'Light Mode';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Load preference
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            toggleButton.textContent = 'Dark Mode';
        } else {
             toggleButton.textContent = 'Light Mode';
        }
    }

    // Contact Form Handling (Generic)
    const contact_forms = document.getElementsByClassName('contact-form');
    for ( const form of contact_forms ) {
        form.onsubmit = function() {
            const buttons = form.getElementsByTagName('button');
            for( const button of buttons ) {
                button.setAttribute('disabled', true);
            }
        }
    }
});

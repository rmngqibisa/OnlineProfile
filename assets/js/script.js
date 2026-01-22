document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Configuration
    if (typeof PORTFOLIO_CONFIG !== 'undefined') {
        renderPortfolio();
    } else {
        console.error("PORTFOLIO_CONFIG not found. Please check config.js.");
    }

    // 2. Render Functions
    function renderPortfolio() {
        const c = PORTFOLIO_CONFIG;

        // --- Hero Section ---
        const heroContainer = document.getElementById('hero-section');
        if (heroContainer) {
            heroContainer.innerHTML = `
                <div class="profile-image-container">
                    <div class="profile-image">
                        <img src="${c.profile.avatar}" alt="${c.profile.name}">
                    </div>
                </div>
                <div class="profile-info">
                    <h1>Hi, I'm <span class="highlight">${c.profile.name}</span>.</h1>
                    <h2><span id="typing-text"></span><span class="typing-cursor">&nbsp;</span></h2>
                    <p class="bio">${c.profile.bio}</p>
                    <div class="social-links">
                        ${c.profile.social.map(s => `<a href="${s.link}" target="_blank" aria-label="${s.label}"><i class="${s.icon}"></i></a>`).join('')}
                    </div>
                    <div style="margin-top: 2rem;">
                        <a href="${c.profile.resumeLink}" class="btn-primary" style="display:inline-block; width:auto; padding: 0.8rem 2rem;">Download Resume <i class="fas fa-download"></i></a>
                    </div>
                </div>
            `;
            initTypingEffect(c.profile.roles);
        }

        // --- About Section ---
        renderSection('about', `
            <h3 class="section-title">${c.about.title}</h3>
            <div class="about-content">
                <div class="about-text">
                    <p>${c.about.description}</p>
                </div>
                <div class="about-stats">
                    ${c.about.stats.map(s => `
                        <div class="stat-item">
                            <span class="stat-value">${s.value}</span>
                            <span class="stat-label">${s.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `);

        // --- Skills Section ---
        renderSection('skills', `
            <h3 class="section-title">${c.skills.title}</h3>
            <div class="skills-grid">
                ${c.skills.items.map(s => `
                    <div class="skill-card">
                        <i class="${s.icon}"></i>
                        <h4>${s.title}</h4>
                        <p>${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        `);

        // --- Services Section ---
        renderSection('services', `
            <h3 class="section-title">${c.services.title}</h3>
            <div class="services-grid">
                ${c.services.items.map(s => `
                    <div class="service-card">
                        <div class="service-icon"><i class="${s.icon}"></i></div>
                        <h4>${s.title}</h4>
                        <p>${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        `);

        // --- Experience Section ---
        renderSection('experience', `
            <h3 class="section-title">${c.experience.title}</h3>
            <div class="timeline">
                ${c.experience.items.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-year">${item.year}</span>
                            <h4>${item.role}</h4>
                            <h5 style="color: var(--primary-color); margin-bottom: 0.5rem;">${item.company}</h5>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);

        // --- Awards Section ---
        renderSection('awards', `
            <h3 class="section-title">${c.awards.title}</h3>
            <ul class="awards-list">
                ${c.awards.items.map(item => `
                    <li>
                        <span class="award-icon"><i class="${item.icon}"></i></span>
                        <div class="award-details">
                            <strong>${item.title}</strong>
                            <span class="award-year">${item.year}</span>
                            <p>${item.desc}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `);

        // --- Cool Facts ---
        renderSection('cool-facts', `
            <h3 class="section-title">${c.coolFacts.title}</h3>
            <div class="facts-grid">
                ${c.coolFacts.items.map(f => `
                    <div class="fact-card">
                        <i class="fact-icon ${f.icon}"></i>
                        <p class="fact-text">${f.text}</p>
                    </div>
                `).join('')}
            </div>
        `);

        // --- FAQ ---
        renderSection('faq', `
            <h3 class="section-title">${c.faq.title}</h3>
            <div class="accordion">
                ${c.faq.items.map((item, index) => `
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleAccordion(${index})">
                            ${item.question}
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="accordion-body" id="faq-${index}">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `);

        // --- Footer Data ---
        document.getElementById('footer-name').textContent = c.profile.name;
        document.getElementById('year').textContent = new Date().getFullYear();

        // Re-initialize Interactions
        init3DTilt();
    }

    function renderSection(id, html) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    // 3. Typing Effect
    function initTypingEffect(roles) {
        const element = document.getElementById('typing-text');
        if (!element || !roles || roles.length === 0) return;

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                element.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                element.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // 4. Accordion Logic (Global wrapper)
    window.toggleAccordion = function(index) {
        const body = document.getElementById(`faq-${index}`);
        const header = body.previousElementSibling;

        body.classList.toggle('open');
        header.classList.toggle('active');

        if (body.classList.contains('open')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = null;
        }
    };

    // 5. 3D Tilt Logic
    function init3DTilt() {
        const cards = document.querySelectorAll('.skill-card, .service-card, .timeline-content, .award-details');
        const heroImage = document.querySelector('.profile-image-container');

        const handleTilt = (e, element, strength = 20) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -strength;
            const rotateY = ((x - centerX) / centerX) * strength;
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        };

        const resetTilt = (element) => {
            element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => handleTilt(e, card, 10));
            card.addEventListener('mouseleave', () => resetTilt(card));
        });

        if (heroImage) {
            heroImage.addEventListener('mousemove', (e) => handleTilt(e, heroImage, 25));
            heroImage.addEventListener('mouseleave', () => resetTilt(heroImage));
        }
    }

    // 6. Theme Toggle (Preserved)
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton ? toggleButton.querySelector('i') : null;
    const body = document.body;

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        body.setAttribute('data-theme', 'dark');
        if (icon) icon.className = 'fas fa-sun';
    } else {
        if (localStorage.getItem('theme') === 'dark') {
            body.setAttribute('data-theme', 'dark');
            if (icon) icon.className = 'fas fa-sun';
        } else {
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

    // 7. Parallax Background
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
});

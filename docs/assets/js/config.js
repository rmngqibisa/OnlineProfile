const PORTFOLIO_CONFIG = {
    // PERSONAL INFORMATION
    profile: {
        name: "Your Name",
        tagline: "Visionary Developer & Creative Problem Solver",
        bio: "I craft immersive digital experiences with code and creativity. I specialize in building scalable, high-performance web solutions that leave a lasting impact. Whether it's a complex backend system or a pixel-perfect frontend, I bring passion and precision to every project.",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Professional",
        roles: ["Full Stack Developer", "UI/UX Designer", "Open Source Enthusiast", "Tech Speaker"],
        social: [
            { icon: "fab fa-linkedin", link: "#", label: "LinkedIn" },
            { icon: "fab fa-github", link: "#", label: "GitHub" },
            { icon: "fab fa-twitter", link: "#", label: "Twitter" },
            { icon: "fas fa-envelope", link: "mailto:email@example.com", label: "Email" }
        ],
        resumeLink: "#"
    },

    // ABOUT SECTION
    about: {
        title: "About Me",
        description: "With over 5 years of experience in the tech industry, I have honed my skills in various domains. I believe in the power of technology to transform lives and businesses. My journey began with a curiosity for how things work, leading me to master the art of software engineering.",
        stats: [
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" }
        ]
    },

    // SKILLS SECTION
    skills: {
        title: "Core Competencies",
        items: [
            { icon: "fas fa-code", title: "Frontend Magic", desc: "HTML5, CSS3, React, Vue, Tailwind" },
            { icon: "fas fa-server", title: "Backend Systems", desc: "Node.js, Python, PostgreSQL, Redis" },
            { icon: "fas fa-cloud", title: "Cloud Architecture", desc: "AWS, Docker, Kubernetes, CI/CD" },
            { icon: "fas fa-mobile-alt", title: "Mobile Dev", desc: "React Native, Flutter, PWA" }
        ]
    },

    // SERVICES SECTION
    services: {
        title: "What I Offer",
        items: [
            { icon: "fas fa-laptop-code", title: "Web Development", desc: "Custom websites built from scratch to fit your specific needs." },
            { icon: "fas fa-paint-brush", title: "UI/UX Design", desc: "Intuitive and beautiful designs that enhance user engagement." },
            { icon: "fas fa-search-dollar", title: "SEO Optimization", desc: "Ranking your site higher to drive organic traffic." },
            { icon: "fas fa-chalkboard-teacher", title: "Mentorship", desc: "Guiding the next generation of developers." }
        ]
    },

    // EXPERIENCE SECTION
    experience: {
        title: "Professional Journey",
        items: [
            {
                year: "2023 - Present",
                role: "Senior Developer",
                company: "Tech Solutions Inc.",
                desc: "Leading a team of 10 developers to build enterprise-scale applications."
            },
            {
                year: "2021 - 2023",
                role: "Full Stack Engineer",
                company: "Creative Agency",
                desc: "Developed award-winning websites for international clients."
            },
            {
                year: "2019 - 2021",
                role: "Junior Developer",
                company: "StartUp Hub",
                desc: "Collaborated on rapid prototyping and MVP development."
            }
        ]
    },

    // AWARDS SECTION
    awards: {
        title: "Awards & Honors",
        items: [
            { icon: "fas fa-trophy", title: "Best Innovation Award", year: "2023", desc: "Recognized for creating a groundbreaking AI tool for accessibility." },
            { icon: "fas fa-medal", title: "Hackathon Winner", year: "2022", desc: "First place in the Global Tech Hackathon out of 500+ teams." },
            { icon: "fas fa-certificate", title: "Certified Cloud Architect", year: "2021", desc: "Achieved professional certification in AWS Solutions Architecture." }
        ]
    },

    // COOL FACTS / UNIQUE
    coolFacts: {
        title: "Why Work With Me?",
        items: [
            { icon: "fas fa-rocket", text: "I deliver 99% of projects ahead of schedule." },
            { icon: "fas fa-bug", text: "I treat bugs as personal challenges." },
            { icon: "fas fa-coffee", text: "Powered by high-quality coffee and code." }
        ]
    },

    // FAQ SECTION
    faq: {
        title: "Frequently Asked Questions",
        items: [
            { question: "Are you available for freelance work?", answer: "Yes, I am currently accepting new projects. Please reach out via the contact form." },
            { question: "What is your hourly rate?", answer: "My rates are competitive and project-based. Contact me for a quote." },
            { question: "Do you work with startups?", answer: "Absolutely! I love the energy and innovation of startups." }
        ]
    }
};

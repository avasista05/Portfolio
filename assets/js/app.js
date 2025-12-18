// ===================================
// Dynamic Content Loader
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    loadPersonalInfo();
    loadAboutSection();
    loadEducation();
    loadExperience();
    loadProjects();
    loadContact();
    loadSocialLinks();
    loadFooter();
});

// ===================================
// Personal Information
// ===================================
function loadPersonalInfo() {
    const navLogo = document.getElementById('navLogo');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const profileImage = document.getElementById('profileImage');

    if (navLogo) navLogo.textContent = portfolioData.personal.logo;
    if (heroTitle) heroTitle.innerHTML = portfolioData.personal.tagline.replace(/\. /g, '.<br>');
    if (heroSubtitle) heroSubtitle.textContent = portfolioData.personal.subtitle;
    if (profileImage) profileImage.src = portfolioData.personal.profileImage;
}

// ===================================
// About Section
// ===================================
function loadAboutSection() {
    const aboutStory = document.getElementById('aboutStory');
    const skillsGrid = document.getElementById('skillsGrid');

    if (aboutStory) {
        aboutStory.textContent = portfolioData.about.story;
    }

    if (skillsGrid) {
        skillsGrid.innerHTML = portfolioData.about.skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon">${skill.icon}</div>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('');
    }
}

// ===================================
// Education Section
// ===================================
function loadEducation() {
    const educationTimeline = document.getElementById('educationTimeline');

    if (educationTimeline) {
        educationTimeline.innerHTML = portfolioData.education.map(edu => `
            <div class="education-item">
                <div class="education-year">${edu.year}</div>
                <div class="education-content">
                    <h3>${edu.institution}</h3>
                    <h4>${edu.degree}</h4>
                    <p>${edu.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ===================================
// Experience Section
// ===================================
function loadExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');

    if (experienceTimeline) {
        experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="tagline">${exp.tagline}</p>
                    <p>${exp.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ===================================
// Projects Section
// ===================================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (projectsGrid) {
        projectsGrid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card">
                <div class="project-number">${project.number}</div>
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-date">${project.date}</p>
                    <p class="project-description">${project.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ===================================
// Contact Section
// ===================================
function loadContact() {
    const contactTitle = document.getElementById('contactTitle');
    const contactSubtitle = document.getElementById('contactSubtitle');

    if (contactTitle) contactTitle.textContent = portfolioData.contact.title;
    if (contactSubtitle) contactSubtitle.textContent = portfolioData.contact.subtitle;
}

// ===================================
// Social Links
// ===================================
function loadSocialLinks() {
    const socialLinks = document.getElementById('socialLinks');

    if (socialLinks) {
        const socialIcons = {
            linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>`,
            instagram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>`,
            youtube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>`,
            twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>`
        };

        const socialHTML = Object.keys(portfolioData.social).map(platform => {
            const url = portfolioData.social[platform];
            const icon = socialIcons[platform] || '';
            return `
                <a href="${url}" class="social-icon" aria-label="${platform.charAt(0).toUpperCase() + platform.slice(1)}" target="_blank" rel="noopener noreferrer">
                    ${icon}
                </a>
            `;
        }).join('');

        socialLinks.innerHTML = socialHTML;
    }
}

// ===================================
// Footer
// ===================================
function loadFooter() {
    const footerText = document.getElementById('footerText');
    const currentYear = new Date().getFullYear();

    if (footerText) {
        footerText.textContent = `© ${currentYear} ${portfolioData.footer.copyrightText}`;
    }
}

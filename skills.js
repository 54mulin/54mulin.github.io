// Skills data
const skillsData = [
    {
        id: 'frontend',
        title: 'Frontend',
        skills: [
            { name: 'React', url: 'https://react.dev/' },
            { name: 'Vue.js', url: 'https://vuejs.org/' },
            { name: 'Next.js', url: 'https://nextjs.org/' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
            { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        skills: [
            { name: 'Node.js', url: 'https://nodejs.org/' },
            { name: 'Python', url: 'https://www.python.org/' },
            { name: 'Express', url: 'https://expressjs.com/' },
            { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { name: 'MongoDB', url: 'https://www.mongodb.com/' },
            { name: 'Redis', url: 'https://redis.io/' }
        ]
    },
    {
        id: 'tools-cloud',
        title: 'Tools & Cloud',
        skills: [
            { name: 'AWS', url: 'https://aws.amazon.com/' },
            { name: 'Docker', url: 'https://www.docker.com/' },
            { name: 'Git', url: 'https://git-scm.com/' },
            { name: 'Figma', url: 'https://www.figma.com/' },
            { name: 'Vercel', url: 'https://vercel.com/' },
            { name: 'Firebase', url: 'https://firebase.google.com/' }
        ]
    }
];

// Function to create skill category HTML
function createSkillCategory(category) {
    const skillLinks = category.skills.map(skill =>
        `<a href="${skill.url}" target="_blank" rel="noopener noreferrer" class="skill-link">${skill.name}</a>`
    ).join('');

    return `
        <div class="skill-category">
            <h3 class="skill-category-title">${category.title}</h3>
            <div class="skill-links">
                ${skillLinks}
            </div>
        </div>
    `;
}

// Function to render skills
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(createSkillCategory).join('');
    }
}

// Initialize skills when DOM is loaded
document.addEventListener('DOMContentLoaded', renderSkills);

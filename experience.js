// Experience data
const experienceData = [
    {
        title: "Software Developer",
        company: "Yang Ming Marine Transport Corporation",
        period: "Aug.2025 - Present",
        description:
            "Work on system analysis, development, and maintenance. Focused on building reliable internal applications that support global logistics operations.",
        skills: [],
        icon: "./public/YM.png"
    },
    {
        title: "Software Engineer",
        company: "National Taiwan Normal University, G. I. of Edu Policy & Admin",
        period: "Mar.2024 - Jul.2025",
        description:
            "To enhance the efficiency of the education platform, streamlining processes such as questionnaire management and statistical analysis. Additionally, we provided features for foreign teachers and teacher training personnel, enabling schools to effectively manage and match foreign teachers and teacher training staff.",
        skills: ["Vue.js", "JavaScript", "PHP", "Laravel", "MySQL"],
        icon: "./public/NTNU.png",
    },
    {
        title: "IT Support (Internship)",
        company: "Academia Sinica, Institute of Mathematics",
        period: "Jan. 2022 - Jan. 2024",
        description:
            "Enhanced system security via government cybersecurity setups and ISMS, achieving 95% compliance. Automated tasks with Google Apps Script, boosting productivity by 30%.",
        skills: ["GoogleAppsScript", "JavaScript", "Java", "SpingBoot", "Python"],
        icon: "./public/AS.png",
    },
];

// Function to create experience item HTML
function createExperienceItem(experience) {
    const skillTags = experience.skills.map(skill =>
        `<span class="skill-tag">${skill}</span>`
    ).join('');

    return `
        <div class="experience-item">
            <div class="experience-icon">
                <img src="${experience.icon}" width="24" height="24">
            </div>
            <div class="experience-content">
                <h3 class="experience-title">${experience.title}</h3>
                <p class="experience-company">${experience.company} • ${experience.period}</p>
                <p class="experience-description">
                    ${experience.description}
                </p>
                <div class="skill-tags">
                    ${skillTags}
                </div>
            </div>
        </div>
    `;
}

// Function to render experience
function renderExperience() {
    const experienceList = document.querySelector('.experience-list');
    if (experienceList) {
        experienceList.innerHTML = experienceData.map(createExperienceItem).join('');
    }
}

// Initialize experience when DOM is loaded
document.addEventListener('DOMContentLoaded', renderExperience);

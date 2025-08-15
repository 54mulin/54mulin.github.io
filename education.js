// Education data
const educationData = [
    {
        title: "Master of Computer Science and Engineering",
        school: "National Taiwan Ocean University, Keelung",
        period: "Aug. 2024 - Present",
        description: "Part-Time student, expected to graduate in July 2026.",
        subjects: ["Multi-Modal", "Machine Learning", "LLM", "Graph Data"],
        icon: "./public/NTOU.png",
    },
    {
        title: "Bachelor of Computer Science & Information Management",
        school: "Soochow University, Taipei",
        period: "Sep. 2021 - Jan. 2024",
        description: "Capstone project: Based Model Training and Analysis GUI Implementation - Using Food Spectra as an Example.",
        subjects: ["Data Analysis", "Python", "Data Visualization"],
        icon: "./public/SCU.png",
    },
];

// Function to create education item HTML
function createEducationItem(education) {
    const subjectTags = education.subjects.map(subject =>
        `<span class="skill-tag">${subject}</span>`
    ).join('');

    return `
        <div class="education-item">
            <div class="education-icon">
                <img src="${education.icon}" width="24" height="24">
            </div>
            <div class="education-content">
                <h3 class="education-title">${education.title}</h3>
                <p class="education-school">${education.school} • ${education.period}</p>
                <p class="education-description">
                    ${education.description}
                </p>
                <div class="skill-tags">
                    ${subjectTags}
                </div>
            </div>
        </div>
    `;
}

// Function to render education
function renderEducation() {
    const educationList = document.querySelector('.education-list');
    if (educationList) {
        educationList.innerHTML = educationData.map(createEducationItem).join('');
    }
}

// Initialize education when DOM is loaded
document.addEventListener('DOMContentLoaded', renderEducation);

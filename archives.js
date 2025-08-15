// Archives data
const archivesData = [
    {
        title: "Web仔從數學角度學習 AI/ ML & Data @ 2024 iThome 鐵人賽",
        description:
            "A 30-day series guiding web developers through the math behind AI/ML—covering linear algebra, calculus, statistics, and neural networks—in a fun, beginner-friendly way. The goal: make math less scary, and AI/ML more approachable for web developers.",
        year: "2024",
        icon: {
            viewBox: '0 0 24 24',
            paths: [
                'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
                'M14,2 L14,8 L20,8',
                'M16 13L8 13',
                'M16 17L8 17',
                'M10,9 L9,9 L8,9'
            ]
        },
        links: [
            { name: "iThome", url: "https://ithelp.ithome.com.tw/users/20168898/ironman/7493" }
        ],
    },
    {
        title: "Based Model Training and Analysis GUI Implementation - Using Food Spectra as an Example",
        description:
            "A Python GUI tool using Tkinter, pandas, and scikit-learn for data loading, model tuning, and result visualization—simple, efficient, and intuitive.",
        year: "2023",
        icon: {
            viewBox: '0 0 24 24',
            paths: [
                'M16 18L22 12L16 6',
                'M8 6L2 12L8 18'
            ]
        }
    },
    {
        title: "twlink.app 台灣加密型實聯制(close permanently)",
        description:
            "A privacy-focused contact tracing system built during the COVID-19 outbreak in Taiwan. It uses RSA encryption to protect personal data, which is automatically deleted after 28 days.",
        year: "2021",
        icon: {
            viewBox: '0 0 24 24',
            paths: [
                'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
                'M14,2 L14,8 L20,8',
                'M16 13L8 13',
                'M16 17L8 17',
                'M10,9 L9,9 L8,9'
            ]
        },
        links: [
            { name: "Medium", url: "https://54mulin.medium.com/台灣加密性實聯制-twlink-app-d7516f6e7234" },
            { name: "Fronten-Github", url: "https://github.com/funtuan/reallink-frontend" },
            { name: "Backend-Github", url: "https://github.com/funtuan/reallink-backend" }
        ],
    },
    {
        title: "口罩哪裡買?附近剩餘數量查詢 - LINE bot (close permanently)",
        description:
            "2020年2月6日 口罩販售實名上路，政府提供查詢的方式有衛福部健保署網站或特約藥局excel，則我們寫了一個LINE bot方便查詢自己附近的藥局，可個別詳細查看各藥局當前數量，如果還沒有口罩，希望能幫到你!",
        year: "2020",
        icon: {
            viewBox: '0 0 24 24',
            paths: [
                'M16 18L22 12L16 6',
                'M8 6L2 12L8 18'
            ]
        },
        links: [
            { name: "新聞媒體連結-電腦王阿達", url: "https://www.kocpc.com.tw/archives/305363" }
        ],
    },
    {
        title: "想丟垃圾?去追圾垃車吧! - LINE bot",
        description:
            "準時鏟屎丟垃圾車是他的使命，選擇了一條與眾不同的路，他就是「垃圾車王」。在貓奴的驅使下，誕生「想丟垃圾?去追圾垃車吧!」",
        year: "2019",
        icon: {
            viewBox: '0 0 24 24',
            paths: [
                'M16 18L22 12L16 6',
                'M8 6L2 12L8 18'
            ]
        }
    }
];

// Function to create archive item HTML
function createArchiveItem(archive) {
    const iconPaths = archive.icon.paths.map(path => {
        if (path.includes(',')) {
            return `<polyline points="${path}"/>`;
        } else if (path.includes(' L')) {
            return `<polyline points="${path}"/>`;
        } else {
            return `<path d="${path}"/>`;
        }
    }).join('');

    // Create links if they exist
    const linksHtml = archive.links && archive.links.length > 0
        ? archive.links.map(link =>
            `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="skill-link">${link.name}</a>`
        ).join('')
        : '';

    return `
        <div class="archive-item">
            <div class="archive-icon">
                <svg width="24" height="24" viewBox="${archive.icon.viewBox}" fill="none" stroke="currentColor" stroke-width="2">
                    ${iconPaths}
                </svg>
            </div>
            <div class="archive-content">
                <h3 class="archive-title">${archive.title}</h3>
                <p class="archive-description">
                    ${archive.description}
                </p>
                <div class="archive-meta">
                    <div class="archive-year">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${archive.year}</span>
                    </div>
                    ${linksHtml ? `<div class="archive-links">${linksHtml}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to render archives
function renderArchives() {
    const archivesList = document.querySelector('.archives-list');
    if (archivesList) {
        archivesList.innerHTML = archivesData.map(createArchiveItem).join('');
    }
}

// Initialize archives when DOM is loaded
document.addEventListener('DOMContentLoaded', renderArchives);

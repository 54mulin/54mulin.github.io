// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }
}

// Typewriter Effect
class TypewriterEffect {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = options.typingSpeed || 150;
        this.pauseDuration = options.pauseDuration || 2000;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isTyping = true;
        this.init();
    }

    init() {
        this.cursor = document.createElement('span');
        this.cursor.className = 'cursor';
        //this.cursor.textContent = '|';
        
        this.element.parentNode.appendChild(this.cursor);
        
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];

        if (this.isTyping) {
            if (this.currentCharIndex < currentText.length) {
                this.element.textContent = currentText.slice(0, this.currentCharIndex + 1);
                this.currentCharIndex++;
                setTimeout(() => this.type(), this.typingSpeed);
            } else {
                // Finished typing, pause before erasing
                setTimeout(() => {
                    this.isTyping = false;
                    this.type();
                }, this.pauseDuration);
            }
        } else {
            if (this.currentCharIndex > 0) {
                this.element.textContent = currentText.slice(0, this.currentCharIndex - 1);
                this.currentCharIndex--;
                setTimeout(() => this.type(), this.typingSpeed / 2);
            } else {
                // Finished erasing, move to next text
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                this.isTyping = true;
                setTimeout(() => this.type(), 500);
            }
        }
    }
}

// Scroll Animation Manager
class ScrollAnimationManager {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.rightPanel = document.getElementById('rightPanel');
        this.leftPanel = document.getElementById('leftPanel');
        this.profileContent = document.getElementById('profileContent');
        this.scrollToTopBtn = document.getElementById('scrollToTop');
        this.isDesktop = window.innerWidth >= 768;
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkSections();
        this.updateScrollToTopButton();
        this.handleResize();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.checkSections();
            this.handleScroll();
            this.updateScrollToTopButton();
        });

        window.addEventListener('resize', () => {
            this.handleResize();
        });

        this.scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    handleResize() {
        this.isDesktop = window.innerWidth >= 768;
        this.handleScroll(); // Re-check scroll state on resize
    }

    checkSections() {
        this.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    }

    handleScroll() {
        if (!this.isDesktop) return;

        const scrollY = window.scrollY;
        const isScrolled = scrollY > 100;

        // Toggle scrolled class on panels
        if (isScrolled) {
            this.rightPanel.classList.add('scrolled');
            this.leftPanel.classList.add('scrolled');
            this.profileContent.classList.add('scrolled');
        } else {
            this.rightPanel.classList.remove('scrolled');
            this.leftPanel.classList.remove('scrolled');
            this.profileContent.classList.remove('scrolled');
        }
    }

    updateScrollToTopButton() {
        const scrollY = window.scrollY;
        const isVisible = scrollY > 300;

        if (isVisible) {
            this.scrollToTopBtn.classList.add('visible');
        } else {
            this.scrollToTopBtn.classList.remove('visible');
        }
    }
}

// Intersection Observer for better performance
class IntersectionObserverManager {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '-100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Smooth scroll for anchor links
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize managers
    new ThemeManager();
    
    // Initialize typewriter effect
    const typewriterElement = document.getElementById('typewriterText');
    new TypewriterEffect(typewriterElement, ['Maureen Lin', 'an Engineer', 'a Student'], {
        typingSpeed: 150,
        pauseDuration: 2000
    });

    // Initialize scroll animations
    new ScrollAnimationManager();
    new IntersectionObserverManager();
    new SmoothScrollManager();

    // Add initial animation to about section
    setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.classList.add('visible');
        }
    }, 100);
});

// Handle page visibility change for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});
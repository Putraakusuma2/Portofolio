// Script untuk Mobile Menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Script untuk menutup mobile menu ketika link di klik
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Script untuk tahun sekarang di footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Script untuk Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const darkModeLabel = document.getElementById('darkModeLabel');
const htmlElement = document.documentElement;
const moonIcon = '<i class="fas fa-moon"></i>';
const sunIcon = '<i class="fas fa-sun"></i>';

function setDarkModeUI(isDark) {
    if (isDark) {
        darkModeIcon.innerHTML = sunIcon;
        darkModeLabel.textContent = 'Light';
    } else {
        darkModeIcon.innerHTML = moonIcon;
        darkModeLabel.textContent = 'Dark';
    }
}

// Cek preferensi dark mode dari localStorage
if (localStorage.getItem('darkMode') === 'enabled' || 
    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    setDarkModeUI(true);
} else {
    htmlElement.classList.remove('dark');
    setDarkModeUI(false);
}

darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    setDarkModeUI(isDark);
});

// Typewriting effect for Beranda section
function typeWriter(element, texts, speed = 80, pause = 1200) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        let displayText = currentText.substring(0, charIndex);
        element.innerHTML = displayText + '<span class="type-cursor">|</span>';

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, speed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, speed / 2);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, pause);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, speed);
            }
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const typeTarget = document.getElementById('typewriter-text');
    if (typeTarget) {
        typeWriter(typeTarget, [
            'Seorang Front-end Web Developer',
            'UI/UX Designer',
            'Tech Enthusiast'
        ]);
    }
});

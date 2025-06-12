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
    // Mobile menu
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    // Footer year
    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();
    // Typewriter
    const typeTarget = document.getElementById('typewriter-text');
    if (typeTarget) {
        typeWriter(typeTarget, [
            'Seorang Front-end Web Developer',
            'UI/UX Designer',
            'Tech Enthusiast'
        ]);
    }

    // Slider otomatis untuk gambar project 3
    const project3Images = [
        'img/project/rusun.png',
        'img/project/bsps.png',
        'img/project/sdgs.png'
    ];
    let project3Index = 0;
    const project3Img = document.getElementById('project3-img');
    const prevProject3 = document.getElementById('prevProject3');
    const nextProject3 = document.getElementById('nextProject3');

    function showProject3Image(idx) {
        if (!project3Img) return;
        project3Img.style.opacity = 0;
        setTimeout(() => {
            project3Img.src = project3Images[idx];
            project3Img.style.opacity = 1;
        }, 300);
    }
    if (project3Img) {
        let autoSlideProject3 = setInterval(() => {
            project3Index = (project3Index + 1) % project3Images.length;
            showProject3Image(project3Index);
        }, 3500);
        if (prevProject3) {
            prevProject3.onclick = () => {
                project3Index = (project3Index - 1 + project3Images.length) % project3Images.length;
                showProject3Image(project3Index);
            };
        }
        if (nextProject3) {
            nextProject3.onclick = () => {
                project3Index = (project3Index + 1) % project3Images.length;
                showProject3Image(project3Index);
            };
        }
        // Pause on hover
        project3Img.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideProject3));
        project3Img.parentElement.addEventListener('mouseleave', () => {
            autoSlideProject3 = setInterval(() => {
                project3Index = (project3Index + 1) % project3Images.length;
                showProject3Image(project3Index);
            }, 3500);
        });
    }
});

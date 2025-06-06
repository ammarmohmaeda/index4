// Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeSwitcher.innerHTML = document.body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i> Light Mode' 
        : '<i class="fas fa-moon"></i> Dark Mode';
});

// Scroll Animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Click Interaction with Random Color Flash
sections.forEach(section => {
    section.addEventListener('click', () => {
        const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        section.style.boxShadow = `0 10px 25px ${randomColor}`;
        section.style.transform = 'scale(1.02)';
        setTimeout(() => {
            section.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
            section.style.transform = 'scale(1)';
        }, 300);
    });
});

// Menu Button Toggle (for mobile)
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



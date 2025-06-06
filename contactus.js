// Toggle Sidebar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuBtn.addEventListener('click', () => {
   sidebar.classList.toggle('active');
   mainContent.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
   sidebar.classList.remove('active');
   mainContent.classList.remove('active');
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
   const icon = darkModeToggle.querySelector('i');
   icon.classList.toggle('fa-moon');
   icon.classList.toggle('fa-sun');
   localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
   document.body.classList.add('dark-mode');
   darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const formData = new FormData(contactForm);
   console.log('Form Data:', Object.fromEntries(formData));
   alert('Message sent successfully!');
   contactForm.reset();
});

// Toggle Map
const mapToggle = document.getElementById('map-toggle');
const mapContainer = document.getElementById('map-container');
mapToggle.addEventListener('click', (e) => {
   e.preventDefault();
   mapContainer.classList.toggle('active');
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});
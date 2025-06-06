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
   darkModeToggle.querySelector('i').classList.toggle('fa-moon');
   darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});
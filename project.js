// Toggle Sidebar
document.getElementById('menu-btn').onclick = () => {
  document.querySelector('.side-bar').classList.toggle('active');
};

document.getElementById('close-btn').onclick = () => {
  document.querySelector('.side-bar').classList.remove('active');
};

// Toggle Profile Dropdown
document.getElementById('user-btn').onclick = () => {
  document.querySelector('.header .profile').classList.toggle('active');
};

// Toggle Dark Mode
document.getElementById('toggle-btn').onclick = () => {
  document.body.classList.toggle('dark-mode');
  document.getElementById('toggle-btn').classList.toggle('fa-moon');
  document.getElementById('toggle-btn').classList.toggle('fa-sun');
};

// Toggle Search Bar
document.getElementById('search-btn').onclick = () => {
  document.querySelector('.search-form').classList.toggle('active');
};

// Smooth Scroll to Top
const scrollToTop = () => {
  window.scrollTo({
     top: 0,
     behavior: 'smooth'
  });
};

// Show Scroll-to-Top Button
window.onscroll = () => {
  const scrollBtn = document.getElementById('scroll-to-top');
  if (window.scrollY > 300) {
     scrollBtn.style.display = 'block';
  } else {
     scrollBtn.style.display = 'none';
  }
};
  // تبديل القائمة الجانبية
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('active');
});

document.querySelector('.sidebar .close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.main-content').classList.remove('active');
});

// تبديل الوضع الليلي/النهاري
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this;
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
        document.querySelector('.main-content').classList.remove('active');
    }
});

// تبديل اللغة بين العربية والإنجليزية
document.getElementById('language-switcher').addEventListener('click', function() {
    const isEnglish = document.body.getAttribute('dir') === 'ltr';
    
    if (isEnglish) {
        // التبديل إلى العربية
        document.body.setAttribute('dir', 'rtl');
        document.body.setAttribute('lang', 'ar');
        document.querySelector('html').setAttribute('dir', 'rtl');
        document.querySelector('html').setAttribute('lang', 'ar');
        
        // إظهار النصوص العربية وإخفاء الإنجليزية
        document.querySelectorAll('.ar-text').forEach(el => el.style.display = '');
        document.querySelectorAll('.en-text').forEach(el => el.style.display = 'none');
        
        // تحديث زر تبديل اللغة
        this.querySelector('.ar-text').style.display = 'none';
        this.querySelector('.en-text').style.display = '';
        this.querySelector('.en-flag').src = 'https://flagcdn.com/w20/gb.png';
    } else {
        // التبديل إلى الإنجليزية
        document.body.setAttribute('dir', 'ltr');
        document.body.setAttribute('lang', 'en');
        document.querySelector('html').setAttribute('dir', 'ltr');
        document.querySelector('html').setAttribute('lang', 'en');
        
        // إظهار النصوص الإنجليزية وإخفاء العربية
        document.querySelectorAll('.ar-text').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.en-text').forEach(el => el.style.display = '');
        
        // تحديث زر تبديل اللغة
        this.querySelector('.ar-text').style.display = '';
        this.querySelector('.en-text').style.display = 'none';
        this.querySelector('.en-flag').src = 'https://flagcdn.com/w20/sa.png';
    }
});
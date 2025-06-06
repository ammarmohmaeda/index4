// Map Data
const mapData = [
  { 
     type: 'Land Cover', 
     title: 'Land Cover 2020', 
     desc: 'Detailed land cover analysis for 2020.', 
     img: 'https://via.placeholder.com/400x220?text=Land+Cover+2020',
     downloadLink: 'landcover-2020.jpg'
  },
  { 
     type: 'Land Cover', 
     title: 'Land Cover 2015', 
     desc: 'Historical land cover from 2015.', 
     img: 'https://via.placeholder.com/400x220?text=Land+Cover+2015',
     downloadLink: 'landcover-2015.jpg'
  },
  { 
     type: 'Water Bodies', 
     title: 'Water Bodies 2020', 
     desc: 'Water body distribution in 2020.', 
     img: 'https://via.placeholder.com/400x220?text=Water+Bodies+2020',
     downloadLink: 'water-bodies-2020.jpg'
  },
  { 
     type: 'Water Bodies', 
     title: 'Water Bodies 2010', 
     desc: 'Historical water bodies from 2010.', 
     img: 'https://via.placeholder.com/400x220?text=Water+Bodies+2010',
     downloadLink: 'water-bodies-2010.jpg'
  },
  { 
     type: 'Urban Areas', 
     title: 'Urban Areas 2020', 
     desc: 'Urban expansion in 2020.', 
     img: 'https://via.placeholder.com/400x220?text=Urban+Areas+2020',
     downloadLink: 'urban-areas-2020.jpg'
  },
  { 
     type: 'Urban Areas', 
     title: 'Urban Areas 2015', 
     desc: 'Urban areas from 2015.', 
     img: 'https://via.placeholder.com/400x220?text=Urban+Areas+2015',
     downloadLink: 'urban-areas-2015.jpg'
  }
];

// Render Maps
const mapList = document.getElementById('map-list');
function renderMaps(data) {
  mapList.innerHTML = '';
  data.forEach(item => {
     const mapItem = document.createElement('div');
     mapItem.classList.add('map-item');
     mapItem.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="info">
           <h3>${item.title}</h3>
           <p>${item.desc}</p>
        </div>
     `;
     mapItem.addEventListener('click', () => openModal(item));
     mapList.appendChild(mapItem);
  });
}

// Initial Render
renderMaps(mapData);

// Modal Functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.getElementById('close-modal');
const downloadBtn = document.getElementById('download-btn');

function openModal(item) {
  modalImage.src = item.img;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  downloadBtn.onclick = () => window.open(item.downloadLink, '_blank');
  modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
});

// Loading Bar Simulation
window.addEventListener('load', () => {
  const loadingBar = document.getElementById('loading-bar');
  let width = 0;
  const interval = setInterval(() => {
     if (width >= 100) {
        clearInterval(interval);
        loadingBar.style.width = '0';
     } else {
        width += 10;
        loadingBar.style.width = `${width}%`;
     }
  }, 100);
});

// Scroll Animation
const mapItems = document.querySelectorAll('.map-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
     if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
     }
  });
}, { threshold: 0.2 });

mapItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(50px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(item);
});
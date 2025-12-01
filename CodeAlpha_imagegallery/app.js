let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// to open the lightbox....
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryItems.length - 1;
  if (currentIndex >= galleryItems.length) currentIndex = 0;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function filterGallery(category) {
  galleryItems.forEach(img => {
    const parent = img.parentElement;
    if (category === 'all' || parent.dataset.category === category) {
      parent.style.display = 'block';
    } else {
      parent.style.display = 'none';
    }
  });
}

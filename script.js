
let currentImageIndex = 0;
let images = [];

window.onload = function () {
  images = Array.from(document.querySelectorAll('.gallery img'));
};

function openLightbox(img) {
  currentImageIndex = images.indexOf(img);
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function navigate(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  const all = document.querySelectorAll('.image');
  all.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

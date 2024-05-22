var images = [
  'imgs/IMG-20240407-WA0088.jpg',
  'imgs/IMG-20240407-WA0090.jpg',
  'imgs/IMG-20240407-WA0076.jpg',
  'imgs/hero1.jpg',
  'imgs/hnge.jpg',
  'imgs/hero2.jpg',
  'git/animal.jpg',
  'git/bird_1.jpg',
  'git/a.jpg',
  'git/team.jpg',
  'git/ost_1.jpg',
  'git/leopard.jpg_0',
];
var currentImageIndex = 0;

function changeBackgroundImage() {
  var container = document.getElementById('slideshow-container');
  container.style.opacity = 0; // Start with opacity 0
  container.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
  
  // Fade in the new image
  setTimeout(function() {
    container.style.opacity = 1;
  }, 10);
}

function slideImages() {
  var container = document.getElementById('slideshow-container');
  container.style.animation = 'slide 1s'; // Apply slide animation

  // Wait for the animation to finish
  setTimeout(function() {
    container.style.animation = '';
    changeBackgroundImage();
  }, 1000);
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  slideImages();
}

nextImage();
setInterval(nextImage, 5000);

function scrollContentLeft() {
  const container = document.querySelector('.scroll-content');
  if (container) {
    container.scrollBy({ left: -500, behavior: 'smooth' });
  }
}

function scrollContentRight() {
  const container = document.querySelector('.scroll-content');
  if (container) {
    container.scrollBy({ left: 500, behavior: 'smooth' });
  }
}


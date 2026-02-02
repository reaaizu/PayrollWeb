function showPage(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function scrollToServices() {
  document.getElementById('services')
    .scrollIntoView({ behavior: 'smooth' });
}

showPage('home');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Cambiar a modo claro';
  } else {
    themeToggle.textContent = 'Cambiar a modo oscuro';
  }
});

const darkModeCheckbox = document.querySelector('.dark-mode-checkbox');
const body = document.body;


darkModeCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');

  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (darkModeEnabled) {
  body.classList.add('dark-mode');
  darkModeCheckbox.checked = true;
}
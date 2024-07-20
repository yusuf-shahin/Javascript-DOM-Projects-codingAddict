const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // =====================
  // using ternary operator
  // =====================
  // !links.classList.contains('show-links')
  //   ? links.classList.add('show-links')
  //   : links.classList.remove('show-links');
  // =====================
  // use toggle method
  // =====================
  links.classList.toggle('show-links');
});

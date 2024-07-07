// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string

//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// console.log(linksContainer);

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');
  // ===================
  // add height dinamically in js
  // ===================

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  containerHeight === 0
    ? (linksContainer.style.height = `${linkHeight}px`)
    : (linksContainer.style.height = 0);
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset());
  const scrollHeight = window.pageYOffset;
  const nevHeight = navbar.getBoundingClientRect().height;
  console.log(nevHeight);
});

// ********** smooth scroll ************
// select links

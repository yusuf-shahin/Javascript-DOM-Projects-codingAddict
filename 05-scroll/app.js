// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string

//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// select span
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// ********** select links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// console.log(linksContainer);
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');

  // ===================
  // add height dinamically in js
  // ===================
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight);
  const linkHeight = links.getBoundingClientRect().height;
  // console.log(linkHeight);
  containerHeight === 0
    ? (linksContainer.style.height = `${linkHeight}px`)
    : (linksContainer.style.height = 0);
});

// ********** showing navbar after scrolling ************

// fixed the navbar when scrolling
// window.addEventListener('scroll', () => {
//   // console.log(window.pageYOffset());
//   const scrollHeight = window.pageYOffset;
//   console.log(scrollHeight);
//   const nevHeight = navbar.getBoundingClientRect().height;
//   console.log(nevHeight);

//   scrollHeight > nevHeight
//     ? navbar.classList.add('fixed-nav')
//     : navbar.classList.remove('fixed-nav');
// });

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();

//     // nevegate to specific spot
//     const linkId = e.currentTarget.getAttribute('href').slice(1);
//     const element = document.getElementById(linkId);
//     // console.log(linkId);
//     let position = element.offsetTop;
//     // console.log(position);

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     linksContainer.style.height = 0;
//   });
// });

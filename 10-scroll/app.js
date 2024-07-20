// slice extracts a section of a string without modifying original string

//

// ********** select links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// console.log(linksContainer);

navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links');

  // ===================
  // add height dinamically in js
  // ===================
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(linksContainerHeight);
  const linkHeight = links.getBoundingClientRect().height;
  // console.log(linkHeight);

  linksContainerHeight === 0
    ? (linksContainer.style.height = `${linkHeight}px`)
    : (linksContainer.style.height = 0);
});

// ********** Fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// fixed the navbar when scrolling
window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset);
  let scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  let navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight);

  scrollHeight > navHeight
    ? navbar.classList.add('fixed-nav')
    : navbar.classList.remove('fixed-nav');

  // setup back to top link
  scrollHeight > 500
    ? topLink.classList.add('show-link')
    : topLink.classList.remove('show-link');
});

// ********** smooth scroll ************

// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();

    // nevegate to specific spot
    const linkId = e.currentTarget.getAttribute('href').slice(1);
    // console.log(linkId);
    const element = document.getElementById(linkId);

    // calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log('navHeight is ' + navHeight);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log('containerHeight is ' + containerHeight);
    const fixedNav = navbar.classList.contains('fixed-nav');
    // console.log('fixedNav is ' + fixedNav);
    let position = element.offsetTop - navHeight;
    // console.log('position is ' + position);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});

// ********** set date ************

// select span
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

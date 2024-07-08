// ==========
// my javascript
// ==========

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contentArticles = document.querySelectorAll('.content');

// event delegation

about.addEventListener('click', (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.rd;
  if (id) {
    // remove active from other btns
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide other article

    contentArticles.forEach((article) => {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

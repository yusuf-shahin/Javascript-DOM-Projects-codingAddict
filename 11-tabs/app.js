// ==========
// my javascript
// ==========

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contentArticles = document.querySelectorAll('.content');

// event delegation

about.addEventListener('click', (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.name;
  if (id) {
    // remove active from other btns
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.currentTarget.classList.add('active');
    });
    // hide other article heading and peregraph

    contentArticles.forEach((article) => {
      article.classList.remove('active');
    });
    const elementArticle = document.getElementById(id);
    elementArticle.classList.add('active');
  }
});

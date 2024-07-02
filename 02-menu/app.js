const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', () => {
  // 'menu' basically come from 'manu.js'
  addMenu(menu);
});

const addMenu = (menuItems) => {
  let displayManu = menuItems.map((item) => {
    return ` <article class="menu-item">
          <img src=${item.img} class="photo" alt="menu-item" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // console.log(displayManu);
  // =============
  // join("") is a array method which convert a array into string
  // =============
  displayManu = displayManu.join('');
  // console.log(displayManu);
  sectionCenter.innerHTML = displayManu;
};

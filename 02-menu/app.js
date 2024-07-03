const sectionCenter = document.querySelector('.section-center');

// load items
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
  // '' === in string there is no gap between array index , for example : ['apple','banana','mango'].join('') === 'applebananamango';
  // =============
  displayManu = displayManu.join('');
  // console.log(displayManu);
  sectionCenter.innerHTML = displayManu;
};

// filter items
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItems) => {
      if (menuItems.category === category) {
        return menuItems;
      }
    });
    // console.log(menuCategory);
    if (category === 'all') {
      addMenu(menu);
    } else {
      addMenu(menuCategory);
    }
  });
});

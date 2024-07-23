const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', () => {
  // 'menu' basically come from 'manu.js'
  showMenu(menu);
  // 'categoryBtns' is come from 'menu.js'
  showFilterBtn();
  //showFilterBtn('categoryBtns')
  // categoryBtns is an array .
});

// create filter btn dynamically and show them into display...

const showFilterBtn = () => {
  // const menuItems = btns
  //   .reduce(
  //     (acc, curr) => {
  //       // curr === [ "breakfast","lunch","shakes","breakfast","lunch", "shakes","breakfast","lunch","shakes","dinner" ];
  //       if (!acc.includes(curr)) {
  //         acc.push(curr);
  //       }
  //       return acc; // [ 'all', 'breakfast,'lunch', 'shakes','dinner' ]
  //     },
  //     ['all'] // acc
  //   )
  //   .map((btn) => {
  //     return `<button class='filter-btn' type='button' data-id=${btn}>
  //     ${btn}
  //   </button>`;
  //   })
  //   .join('');

  // console.log(menuItems);

  // btnContainer.innerHTML = menuItems;

  // filter btns logic, how its basically work...

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // console.log(e.currentTarget.dataset.id);
      const targetCategory = e.currentTarget.dataset.id;
      console.log(targetCategory); // 'all' , 'breakfast', 'lunch'

      const menuCategory = menu.filter((menuItems) => {
        if (menuItems.category === targetCategory) {
          return menuItems;
        }
      });
      // console.log(menuCategory);

      targetCategory === 'all' ? showMenu(menu) : showMenu(menuCategory);
    });
  });
};

// create a function to show all item dynamicaly in display...

const showMenu = (menuItems) => {
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

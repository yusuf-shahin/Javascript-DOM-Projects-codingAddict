## In this Menu project we learn how to add every element and show them dynamically by using Javascript .

##### HTML code :-

```html
<body>
  <section class="menu">
    <!-- title -->
    <div class="title">
      <h2>our menu</h2>
      <div class="underline"></div>
    </div>
    <!-- filter -->
    <div class="btn-container">
      <!-- <button class="filter-btn" type="button" data-id="all">all</button>
        <button class="filter-btn" type="button" data-id="breakfast">
          breakfast
        </button>
        <button class="filter-btn" type="button" data-id="lunch">lunch</button>
        <button class="filter-btn" type="button" data-id="shakes">
          shakes
        </button> -->
    </div>
    <!-- menu items -->
    <div class="section-center">
      <!-- single item -->
      <!-- <article class="menu-item">
          <img src="./menu-item.jpeg" class="photo" alt="menu-item" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eveniet iste tempore officia.
            </p>
          </div>
        </article> -->
      <!-- end of single item -->
    </div>
  </section>
  <!-- javascript -->
  <script src="app.js"></script>
  <script src="menu.js"></script>
</body>
```

### In "menu.js" we create an array of object. Where store all information.

##### In app.js first we select two div , class="btn-container" and class="section-center"

```js
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
```

##### What we want to show after opening the window :-

```js
window.addEventListener('DOMContentLoaded', () => {
  // 'menu' basically come from 'manu.js'
  showMenu(menu);
  showFilterBtn();
});
```

```js
const showFilterBtn = () => {
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
      // Using this condition we render our item in window .
    });
  });
};
```

- By using showFilterBtn() function we basically control our showMenu() function.

##### showMenu() function is :-

```js
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
  console.log(displayManu);
  // displayManu is a array

  displayManu = displayManu.join('');
  // console.log(displayManu);
  sectionCenter.innerHTML = displayManu;
};
```

- join() is a array method which convert a array into a single string .
- join("") === in string there is no gap between array index , for example : ['apple','banana','mango'].join('') === 'applebananamango';

#### After window opening "showmenu(menu)" function render all item because :-

- Ater window opening "displayManu" is a 10 size array . As "menuItems" array leanth is 10 .

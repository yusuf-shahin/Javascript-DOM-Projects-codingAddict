## This is a Sidebar project , in this project we understand how we set a sidebar in our webpage and how to show or remove it by using javascript.

- In this project basically we work on three HTML element . First we select them.

```js
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
```

##### sidebar in HTML :-

```html
<aside class="sidebar">
  <div class="sidebar-header">
    <img src="logo.svg" class="logo" alt="" />
    <button class="close-btn"><i class="fas fa-times"></i></button>
  </div>
  <!-- links -->
  <ul class="links">
    <li>
      <a href="index.html">home</a>
    </li>
    <li>
      <a href="about.html">about</a>
    </li>
    <li>
      <a href="projects.html">projects</a>
    </li>
    <li>
      <a href="contact.html">contact</a>
    </li>
  </ul>
  <!-- social media -->
  <ul class="social-icons">
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-behance"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com">
        <i class="fab fa-sketch"></i>
      </a>
    </li>
  </ul>
</aside>
```

##### sidebar in CSS :-

```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-white);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(--clr-red-dark);
  transition: var(--transition);
  /* --transition : all 0.3s linear; */
  transform: translate(-100%);
}
```

- In this CSS "transform: translate(-100%)" invisibile entire "sidebar" from screen. So if we want to show the sidebar in screen we must use "transform: translate(0)" in css.
- For that we can create a CSS class :-

```css
.show-sidebar {
  transform: translate(0);
}
```

#### To show the sidebar by using javascript, we can write this :-

```js
toggleBtn.addEventListener('click', () => {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle('show-sidebar');
});
```

##### What is classList.toggle() method ?

- If the element has the className, the toggle() method removes it. If the element doesn’t have the className, the toggle() method adds the className to the classList.

#### We can hide the sidebar by clicking "close-btn" , for that can write this code :-

```js
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
```

### The entire js code of sidebar project :-

```js
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// add eventlistener in our toggleBtn
toggleBtn.addEventListener('click', () => {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle('show-sidebar');
});

// add eventListener in our closeBtn
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
```

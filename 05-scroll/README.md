# In this project, we learn how to keep our scrolling behavior smooth when we move from one page to another.

### First we must confirm that , in CSS our scroll-behavior would be smooth .

```css
html {
  scroll-behavior: smooth;
}
```

### We apply <strong>getBoundingClientRect()</strong> method to set our "links-container" div heigth dynamically.

In CSS

```css
.links-container {
  height: 0;
  overflow: hidden;
  /* for that reason link does not show */
  transition: var(--transition);
}
.show-links {
  height: 200px;
}
```

In Javascript

```js
navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links');
});
```

- If we use that code in our js, to show our "links-container" by pressing "nav-toggle" we can use this. Everything will be ok. But the problem is arise when we add extra two "li" inside our "ul" class="links". We do not see that link, because in CSS 'show-links' heigth is static .

```css
.show-links {
  height: 200px;
}
```

- If we increase that height from 200px to 300px . Then the link will show.

#### But if we set "links-container" heigth dynamically using js. THen we fix the problem. For that reason we use <strong>getBoundingClientRect()</strong> method .

### What is getBoundingClientRect() method ?

- The getBoundingClientRect() method returns the size of an HTML element in px and its position relative to the viewport.
- The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height. In that case we just use height.

##### What is viewport?

-The browser's viewport is the area of the window in which web content can be seen.It is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Using getBoundingClientRect() method we find a value

```js
console.log(linksContainer.getBoundingClientRect().height); // 0px
console.log(links.getBoundingClientRect().height); // 201.60000610351562px
```

- In js we can easily set the height of "links-container" by using this value .

```js
linksContainerHeight === 0
  ? (linksContainer.style.height = `${linkHeight}px`)
  : (linksContainer.style.height = 0);
// In this code I basically use ternary operator. You can also use if/else condition.
```

### Showing "nav" and "top-link" span after scrolling :-

- First we select nav and "top-link" span

```js
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
```

##### We use addEventListener() in our window property. The code is :-

```js
window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset); // 0

  let scrollHeight = window.pageYOffset;
  console.log(scrollHeight); // gradually increase when we scroll down
  let navHeight = navbar.getBoundingClientRect().height;
  console.log(navHeight); // 82px

  scrollHeight > navHeight
    ? navbar.classList.add('fixed-nav')
    : navbar.classList.remove('fixed-nav');

  // after scrolling a certain amount(px) we can see our "top-link" span
  scrollHeight > 500
    ? topLink.classList.add('show-link')
    : topLink.classList.remove('show-link');
});
```

- inside this code we use pageYOffset.

#### What is pageYOffset property?

- pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

##### Initially window.pageYOffset value is 0 px but after scrolling down value is increasing. Other hand, if scrolling up the value is decreasing.

In CSS

```css
nav {
  background: var(--clr-white);
  padding: 1rem 1.5rem;
}
/* fixed nav */
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
}
.fixed-nav .links a {
  color: var(--clr-grey-1);
}
.fixed-nav .links a:hover {
  color: var(--clr-secondary);
}
.fixed-nav .links-container {
  /* height: auto !important; */
}
```

- here ".fixed-nav .links-container { height: auto !important; }" this is so importent

### Smooth scroll using javascript

- First we target our all anchor tag class name "scroll-link"

```js
const scrollLinks = document.querySelectorAll('.scroll-link');
```

##### We use forEach method to catch all the node, After that , we work on that node element . The code is :-

```js
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();

    // nevegate to specific spot
    let linkId = e.currentTarget.getAttribute('href');
    console.log(linkId); // #about , #tours
    linkId = linkId.slice(1);
    console.log(linkId); // about , tours
    const element = document.getElementById(linkId);
    let position = element.offsetTop;
    console.log(position); // home = 0, about = 832, services = 1351, tours = 1951

    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight); // always 82
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight); // always 26.3999
    const fixedNav = navbar.classList.contains('fixed-nav');
    //  scrollHeight > navHeight
    // ? navbar.classList.add('fixed-nav')
    // : navbar.classList.remove('fixed-nav');
    console.log(fixedNav);
    // when scrollHeight > navHeight , fixedNav === true
    // when scrollHeight < navHeight , fixedNav === false
    position = position - navHeight;
    console.log(position); //

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
```

- We get all anchor tag by the name of "link". We use preventDefault() method, for that our anchor tag dose not work. We set the "scroll-link" value by using javascript.
- By using varible "linkId" . In every click, we can we can set our "element" dynamically. In element we offsetTop property.

##### What is offsetTop ?

- "offsetTop" property return a Number, representing the top position of the element, in pixels. It basically returns the top position (in pixels) relative to the parent.

```js
// select span
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();
```

- this js code automatic update our copyright year in HTML.

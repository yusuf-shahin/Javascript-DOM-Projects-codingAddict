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
  }
```

- If we use that code in our js, to show our "links-container" by pressing "nav-toggle" we can use this. Everything will be ok. But the problem is arise when we add extra two "<li><a href="#home" class="scroll-link">home</a></li>" inside our ul "links". We do not see that link, because in CSS 'show-links' heigth is static .

```css
.show-links {
  height: 200px;
}
```

- If we increase that height from 200px to 300px . Then the link will show.

#### But if we set "links-container" heigth dynamically using js. THen we fix the problem. For that reason we use <strong>getBoundingClientRect()</strong> method .

### What is getBoundingClientRect() method ?

- The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
- The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

Using getBoundingClientRect() method we find a value

```js
console.log(linksContainer.getBoundingClientRect().height); // 0
console.log(links.getBoundingClientRect().height); // 201.60000610351562
```

- In js we can easily set the height of "links-container" by using this value .

```js
containerHeight === 0
  ? (linksContainer.style.height = `${linkHeight}px`)
  : (linksContainer.style.height = 0);
// In this code I basically use ternary operator. You can also use if/else condition.
```

```js
// select span
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();
```

- this js code automatic update our copyright year in HTML.

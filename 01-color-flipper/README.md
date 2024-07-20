## In this project we will learn how to change background-color and show the hex code of background-color by click event .

#### HTML code :-

```html
<body>
  <nav>
    <h3>color flipper</h3>
  </nav>
  <main>
    <div class="container">
      <h2>background color : <span class="color">#f1f5f8</span></h2>
      <!-- #f1f5f9 this color is seleceted <body> in css -->
      <button class="btn btn-hero" id="btn">click me</button>
    </div>
  </main>
  <!-- javascript -->
  <script src="hex.js"></script>
</body>
```

- First create an array

```js
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
```

##### Select class="btn" and class="color" from HTML :-

```js
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
```

##### Create getRandomNumber() function which everytime give us a random number value :-

```js
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
  // hex.length === 16
}
```

- Math.floor() is a method which
- Math.random() is method which

##### after class="btn", add addEventListener() method :-

```js
btn.addEventListener('click', () => {
  let hexColor = '#';
  // this loop run 6 time and every time we get a random index from hex array.
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor); // #ac347f0

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
```

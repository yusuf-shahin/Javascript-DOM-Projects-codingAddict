## Create simple slider project by using Javascript

##### HTML cod eof this project :-

```html
<body>
  <div class="slider-container">
    <!-- start -->

    <!-- slide-1 -->
    <div class="slide">
      <h1>1</h1>
    </div>

    <!-- slide-2 -->
    <div class="slide">
      <h1>2</h1>
    </div>

    <!-- slide-3 -->
    <div class="slide">
      <h1>3</h1>
    </div>

    <!-- slide-4 -->
    <div class="slide">
      <div>
        <img src="./person-1.jpeg" alt="" class="person-img" />
        <h4>susan doe</h4>
        <h1>4</h1>
      </div>
    </div>

    <!-- end -->
  </div>

  <!-- btn -->

  <div class="btn-container">
    <button class="prevBtn">prev</button>
    <button class="nextBtn">next</button>
  </div>
  <!-- javascript -->
  <script src="app.js"></script>
</body>
```

##### class="slider-container" in CSS :-

```css
.slider-container {
  border: 5px solid var(--clr-primary-5);
  width: 80vw;
  margin: 0 auto;
  height: 40vh;
  max-width: 80rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 4rem;
}
```

##### class="slide" in CSS :-

```css
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--clr-primary-9);
  color: var(--clr-white);
  display: grid;
  place-items: center;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  text-align: center;
}
.slide h1 {
  font-size: 5rem;
}
.slide:nth-child(1) {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./img-1.jpeg') center/cover no-repeat;
}

.slide:nth-child(3) {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./img-2.jpeg') center/cover no-repeat;
}
```

- In that code slide-1 and slide-3 background img are set from CSS.

##### class="btn-container" , prevBtn and nextBtn in css :-

```css
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
}
.prevBtn,
.nextBtn {
  background: transparent;
  border-color: transparent;
  font-size: 1.75rem;
  cursor: pointer;
  margin: 0 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: var(--clr-grey-5);
  transition: var(--transition);
}
```

### In Javascript :-

- Select "slider", "prevBtn" , "nextBtn" class :-

```js
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
```

- addEventListener in "prevBtn" and "nextBtn" :-

```js
let countern = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});
```

##### How carousel() function is work :-

```js
function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  // // working with buttons // //
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
```

- In that code slider work smoothly.

#### The whole javascript code is :-

```js
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// slides.forEach(function (slide, index) {
//   slide.style.left = `${index * 100}%`;
// });

let counter = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});

function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
```

##### What we do? If we want "nextBtn" will disappeare when we reach in"slider-4" and "prevBtn" will disappeare when whem we reach in "slider-1" .

```js
function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  // // Add new logic // //

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = 'none';
```

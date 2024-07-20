## In this project we can understand , how we increament - decreament & reset a value by using javascript.

- First we set a initial value "count" and select our <span id="value"> and <button class="btn">

```js
let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
```

- In "btns" we get a DOM NodeList.

#### What is DOM NodeList?

- A NodeList object is a list (collection) of nodes extracted from a document.
- Most browsers return a NodeList object for the method querySelectorAll().
- If we to catch every element from NodeList , we only use forEach() array method.

```js
btns.forEach((btn) => {
  console.log(btn);
});
```

- We get our all <button class="btns">, Now can use addEventListener() method.

```js
btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.currentTarget.classList); // DOMTokenList(2) ['btn', 'reset', value: 'btn reset']
  });
});
```

- After passing "event" as parameter we get a "event" as object.
- If we click our "reset" button, in console we get this value.

### What is addEventListener() , how it work and why I pass "event" as parameter ?

- If you want to know in more details <a href="https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/">click here</a>.

```js
btn.addEventListener('click', (e) => {
  // console.log(e.currentTarget.classList);
  const element = e.currentTarget.classList;
  if (element.contains('decrease')) {
    // e.currentTarget.classList.contains('decrease')
    count--;
  } else if (element.contains('increase')) {
    // e.currentTarget.classList.contains('increase')
    count++;
  } else {
    count = 0;
  }
  value.textContent = count;
});
```

- In here classList.contains() gave us true or false.
- "value.textContent = count" by using this we can set our value by count.

##### We aslo add color when increament and decreament our value by using this code

```js
if (count > 0) {
  value.style.color = 'green';
}
if (count < 0) {
  value.style.color = 'red';
}
if (count === 0) {
  value.style.color = '#222';
}
```

### The whole code is :-

```js
// set initial value
let count = 0;

// select value and button
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget.classList);
    const element = e.currentTarget.classList;
    if (element.contains('decrease')) {
      count--;
    } else if (element.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
```

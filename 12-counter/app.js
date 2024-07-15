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

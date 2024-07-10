const loremForm = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

loremForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = parseInt(amount.value);
  // in js input value always return in string
  const random = Math.floor(Math.random() * text.length);

  // empty
  // -1
  // 9
  if (isNaN(value) || value <= 0 || value > 9) {
    result.innerHTML = `<p class="result"> ${text[random]} </p>`;
  } else {
    let tempText = text.slice(0, value);
    // console.log(tempText);

    tempText = tempText
      .map((item) => {
        return `<p class="result"> ${item} </p>`;
      })
      .join('');
    // console.log(tempText);

    result.innerHTML = tempText;
  }
});

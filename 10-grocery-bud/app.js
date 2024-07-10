// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********

form.addEventListener('click', addItem);

function addItem(e) {
  e.preventDefault();

  const inputValue = groceryInput.value;
  let id = new Date().getTime().toString();
  // console.log(id);

  if (inputValue !== '' && editFlag === false) {
    // condition shortcut === (inputValue && !editFlag)
    console.log('add item to the list');
  } else if (inputValue !== '' && editFlag === true) {
    // condition shortcut === (inputValue && editFlag)
    console.log('item is editing');
  } else {
    displayAlert('please enter the value', 'danger');
  }
}

// alert function

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

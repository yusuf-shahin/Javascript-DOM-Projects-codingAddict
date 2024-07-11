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

// submit form
form.addEventListener('click', addItem);

// clear btn
clearBtn.addEventListener('click', clearItem);

function addItem(e) {
  e.preventDefault();

  const inputValue = groceryInput.value;
  let id = new Date().getTime().toString();
  // console.log(id);

  if (inputValue !== '' && editFlag === false) {
    // condition shortcut === (inputValue && !editFlag)
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    // inner html set
    element.innerHTML = `<p class="title">${inputValue}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

    // append child
    list.appendChild(element);

    // display alert function
    displayAlert('item is added', 'success');

    // show container
    container.classList.add('show-container');

    // add to local storge
    addToLocalStorage(id, inputValue);
    // set back to default
    setBackToDefaule();
  } else if (inputValue !== '' && editFlag === true) {
    // condition shortcut === (inputValue && editFlag)
    console.log('item is editing');
  } else {
    displayAlert('please enter the item', 'danger');
  }
}

// ****** FUNCTIONS **********

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
// set back to default
function setBackToDefaule() {
  groceryInput.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'submit';
}

// clear item function
function clearItem() {
  const inputItems = document.querySelectorAll('.grocery-item');
  if (inputItems.length > 0) {
    inputItems.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty item', 'danger');

  // local storage remove list
  setBackToDefaule();
}

function addToLocalStorage(id, value) {
  console.log('add to local storage');
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

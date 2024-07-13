// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const listContainer = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option (which gonna change by pressing editBtn of list)
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener('click', addItem);

// clear btn
clearBtn.addEventListener('click', clearItem);

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();

  const inputValue = groceryInput.value;
  let id = new Date().getTime().toString();
  // console.log(id);

  if (inputValue !== '' && editFlag === false) {
    // condition shortcut === (inputValue && !editFlag)
    const element = document.createElement('article');
    element.classList.add('grocery-item');

    // add id (how can I dataset)
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
    listContainer.classList.add('show-container');

    // select edit and delet button
    const editBtn = document.querySelector('.edit-btn');
    const deleteBtn = document.querySelector('.delete-btn');
    // console.log(deleteBtn);

    deleteBtn.addEventListener('click', deletItem);
    editBtn.addEventListener('click', editItem);

    // add to local storge
    addToLocalStorage(id, inputValue);
    // set back to default
    setBackToDefaule();
  } else if (inputValue !== '' && editFlag === true) {
    // condition shortcut === (inputValue && editFlag)

    editElement.textContent = inputValue;
    displayAlert('value change', 'success');

    // edit local storage
    editLocalStorage(editId, inputValue);
    setBackToDefaule();
  } else {
    displayAlert('please enter the item', 'danger');
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
  listContainer.classList.remove('show-container');
  displayAlert('empty item', 'danger');

  // local storage remove list
  setBackToDefaule();
}

// delete function
function deletItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);

  if (list.children.length === 0) {
    listContainer.classList.remove('show-container');
  }
  displayAlert('item romove', 'danger');

  setBackToDefaule();

  // remove from local storage
  // removeFromLocalStorage(id)
}

// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  // change edit option
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // console.log(editElement);

  // set from value
  groceryInput.value = editElement.textContent;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = 'edit';
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  console.log('add to local storage');
}

function removeFromLocalStorage(id) {}

function editLocalStorage(id, value) {}
// ****** SETUP ITEMS **********

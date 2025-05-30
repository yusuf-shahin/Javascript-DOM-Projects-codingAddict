// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const groceryInput = document.querySelector("#grocery")
const submitBtn = document.querySelector(".submit-btn")
const listContainer = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

//! edit option (which gonna change by pressing editBtn of list)

let editElement
let editFlag = false
let editId = ""

// ****** EVENT LISTENERS **********

form.addEventListener("submit", addItem)

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault()
  const value = groceryInput.value

  if (value !== "" && editFlag === false) {
    const element = document.createElement("article")
    //  add class
    element.classList.add("grocery-item")

    const id = Math.random().toString()
    console.log(id)

    // const attr = document.createAttribute("data-id")
    // attr.value = id
    // element.setAttribute("data-id", id)

    //* inner html set
    // element.innerHTML = `<p class="title">${value}</p>
    //         <div class="btn-container">
    //           <button type="button" class="edit-btn">
    //             <i class="fas fa-edit"></i>
    //           </button>
    //           <button type="button" class="delete-btn">
    //             <i class="fas fa-trash"></i>
    //           </button>
    //         </div>`

    // list.appendChild(element)
    // console.log(list)

    //* new approach
    list.innerHTML = `<article data-id=${id} class="grocery-item">
    <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
    </article>`

    console.log(list)

    //* show container
    listContainer.classList.add("show-container")

    // list container
  } else if ((value !== "") & editFlag) {
  } else {
    alert.textContent = "Please add the value"
    alert.classList.add("alert-danger")
    setTimeout(() => {
      alert.textContent = ""
      alert.classList.remove("alert-danger")
    }, 2000)
  }
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

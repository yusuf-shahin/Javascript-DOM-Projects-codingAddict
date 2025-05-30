// // const items = [...document.querySelectorAll(".number")]

// // const updateCount = (el) => {
// //   const value = el.dataset.value
// //   console.log(value)
// // }

// // items.forEach((item) => {
// //   updateCount(item)
// // })

const items = document.querySelectorAll(".number")

const updateCount = (el) => {
  const value = parseInt(el.dataset.value) // 500 , 14140 , 1500
  const increment = Math.ceil(value / 500) // 1 ,

  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment

    if (initialValue > value) {
      el.textContent = `${value}+`
      clearInterval(increaseCount)
      return
    }

    //     console.log(initialValue)

    el.textContent = `${initialValue}+`
  }, 1)
  // console.log(increaseCount)
}

items.forEach((item) => {
  updateCount(item)
})

//_ New concept

// let number = 0

// const printNumber = () => {
//   number++
//   console.log(number)

//   if (number >= 8) {
//     clearInterval(stopInterval)
//   }
// }

// const stopInterval = setInterval(printNumber, 1000)

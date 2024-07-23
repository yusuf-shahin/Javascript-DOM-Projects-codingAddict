const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// console.log(items);

//=======
let y = 2024;
let m = 7;
let d = 4;
let h = 11;
let mi = 59;
let s = 0;
//=======

let futureDate = new Date(y, m, d, h, mi, s);
// (2024 , 7, 4, 23, 59, 0) === (years , month, days, hours , min , sec)
// The date is 4 th august 2024, 11.59 PM. See in console.log
console.log(futureDate);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
// month is 0 index base , for example , 0 === january, 4 === may, 11 === december
const weekday = futureDate.getDay();
// weekday start with sunday, sunday === 0;
const day = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

// console.log(weekday);

giveaway.textContent = `Giveaway Ends On ${weekdays[weekday]} ${day}, ${months[month]} ${hour}:${min}pm, ${year}`;

// future time in ms(mili second)
const futureTime = futureDate.getTime();
// console.log(futureTime);

// getRemainingTime function
const getRemainingTime = () => {
  // present time in ms
  const today = new Date().getTime();
  // console.log(today);

  // time difference between present and future time
  const remainTime = futureTime - today;
  // console.log(remainTime);

  // 1 sec == 1000 ms;
  // 1 min == 60 sec;
  // 1 hour == 60 min;
  // 1 day == 24 hours;

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculete all value

  let days = Math.floor(remainTime / oneDay);
  let hours = Math.floor((remainTime % oneDay) / oneHour);
  // as we separate our day before , so we do not need our date now, for that reason we moduler to find the hours
  let minutes = Math.floor((remainTime % oneHour) / oneMin);
  let second = Math.floor((remainTime % oneMin) / 1000);

  // set all calculate value in array. This array is creat for using format function.
  const value = [days, hours, minutes, second];

  // create a function to set )before every element
  const format = (valueItem) => {
    if (valueItem < 10) {
      return `0${valueItem}`;
    }
    return valueItem;
  };
  // this function will help us to set zero == 0 before , when value is less then 10.

  items.forEach((item, index) => {
    // items == '.deadline-format h4'
    item.textContent = format(value[index]);
    // console.log(value[index]);
  });

  if (remainTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry , this giveaway is expired </h4>`;
  }
  // console.log(countdown);
};
// countdown
let countdown = setInterval(getRemainingTime, 1000);

// getRemainingTime();

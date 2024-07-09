const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// console.log(items);

let futureDate = new Date(2024, 6, 9, 23, 59, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
// month is 0 index base , for example , 0 === january, 4 === may, 11 === december
const weekday = futureDate.getDay();
// weekday start with sunday, sunday === 0;
const day = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

// console.log(weekday);

giveaway.textContent = `Giveaway Ends On ${weekdays[weekday]} ${day}, ${months[month]} ${hour}:${min}am, ${year}`;

// future time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime);

// getRemainingTime function
const getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log(today);

  const remainTime = futureTime - today;
  // console.log(remainTime);

  // 1 sec == 1000 m sec;
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

  // set all calculate value in array

  const value = [days, hours, minutes, second];

  // create a function to set )before every element

  const format = (valueItem) => {
    if (valueItem < 10) {
      return `0${valueItem}`;
    }
    return valueItem;
  };

  // console.log(format(5));

  items.forEach((item, index) => {
    item.textContent = format(value[index]);
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

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// console.log(items);

let futureDate = new Date(2024, 6, 15, 23, 59, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
// month is 0 index base , for example , 0 === january, 4 === may, 11 === december
const weekday = futureDate.getDay();
const day = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

console.log(weekday);

giveaway.textContent = `Giveaway Ends On ${weekdays[weekday]} ${day}, ${months[month]} ${hour}:${min}am, ${year}`;

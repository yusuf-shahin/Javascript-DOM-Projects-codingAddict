// // DOM traversing

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

//  //  Using selector inside the element

const setOfQues = document.querySelectorAll('.question');

setOfQues.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function () {
    // console.log(question);

    setOfQues.forEach(function (e) {
      if (e !== question) {
        // e stand for setOfQues
        e.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

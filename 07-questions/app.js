// // DOM traversing

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
// The problem :-
// But the problem of this code, if I open one article it will not close until I close it.

// =========================
// Using selector inside the element
// =========================

const articleOfQues = document.querySelectorAll('.question');
// event deligation :-

articleOfQues.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', () => {
    // console.log(question);

    articleOfQues.forEach((e) => {
      if (e !== question) {
        // e stand for articleOfQues
        console.log(e);
        e.classList.remove('show-text');
        // console.log(e.classList.remove('show-text'));
      }
    });

    // This condition help to render question article at a single time. When one article is open at that moment other article will be close.

    question.classList.toggle('show-text');
  });
});

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// add eventlistener in our toggleBtn
toggleBtn.addEventListener('click', () => {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle('show-sidebar');
});

// add eventListener in our closeBtn
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

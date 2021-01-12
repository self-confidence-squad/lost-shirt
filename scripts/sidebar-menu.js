// функция и скобки в ней нужны для того что бы скрыть код от вызова других функций
(function() {
  const openingBtn = document.querySelector(".sidebar__hamburger");
  const closingBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  openingBtn.addEventListener("click", function() {
    sidebar.classList.add("sidebar--opened");
  });

  closingBtn.addEventListener("click", function() {
    sidebar.classList.remove("sidebar--opened");
  });
})()

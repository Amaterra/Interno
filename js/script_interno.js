const tabsMenu = document.querySelector(".header_burger");
const tabsMenuHead = document.querySelector(".header_menu");
const bodyLock = document.querySelector(".body");

tabsMenu.addEventListener("click", function () {
   tabsMenu.classList.toggle("active");
   tabsMenuHead.classList.toggle("active");
   bodyLock.classList.toggle("lock");

});

const tabBtn = document.querySelectorAll(button);
tabBtn.addEventListener("click", function () {
   console.log('click');
});
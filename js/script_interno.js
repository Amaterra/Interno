//burger menu

const tabsMenu = document.querySelector(".header_burger");
const tabsMenuHead = document.querySelector(".header_menu");
const bodyLock = document.querySelector(".body");

tabsMenu.addEventListener("click", function () {
   tabsMenu.classList.toggle("active");
   tabsMenuHead.classList.toggle("active");
   bodyLock.classList.toggle("lock");

});

// button create

const tabBtn = document.querySelector(".button_create");
tabBtn.addEventListener("click", function () {
   tabBtn.onclick = document.location.href = "/interno/content.html";
});


//button view

const tabBtnViewOne = document.querySelector(".button_view_one");
tabBtnViewOne.addEventListener("click", function () {
   tabBtnViewOne.onclick = document.location.href = "/interno/content.html";
});

const tabBtnViewTwo = document.querySelector(".button_view_two");
tabBtnViewTwo.addEventListener("click", function () {
   tabBtnViewTwo.onclick = document.location.href = "/interno/content.html";
});

const tabBtnViewThree = document.querySelector(".button_view_three");
tabBtnViewThree.addEventListener("click", function () {
   tabBtnViewThree.onclick = document.location.href = "/interno/content.html";
});



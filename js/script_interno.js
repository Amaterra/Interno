//burger menu

const tabsMenu = document.querySelector(".header_burger");
const tabsMenuHead = document.querySelector(".header_menu");
const bodyLock = document.querySelector(".body");

tabsMenu.addEventListener("click", function () {
   tabsMenu.classList.toggle("active");
   tabsMenuHead.classList.toggle("active");
   bodyLock.classList.toggle("lock");

});

// button logo

const tabBtnLogo = document.querySelector(".vector");
tabBtnLogo.addEventListener("click", function () {
   tabBtnLogo.onclick = document.location.href = "/interno/index.html";
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

//popup

const tabClosePopup = document.querySelector(".popup_close");
const tabCloseBg = document.querySelector(".popup_bg");
const tabCloseWindow = document.querySelector(".popup");

tabClosePopup.addEventListener("click", function () {

   // tabCloseBg.addEventListener("click", function () {
   tabCloseBg.classList.toggle("active");
   tabCloseWindow.classList.toggle("active");

});

const tabBtnConnect = document.querySelector(".button_sec_nine");

tabBtnConnect.addEventListener("click", function () {
   tabCloseWindow.classList.toggle("active");
   tabCloseBg.classList.toggle("active");
});

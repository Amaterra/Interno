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

   tabCloseBg.classList.toggle("active");
   tabCloseWindow.classList.toggle("active");

});

const tabBtnConnect = document.querySelector(".button_sec_nine");

tabBtnConnect.addEventListener("click", function () {
   tabCloseWindow.classList.toggle("active");
   tabCloseBg.classList.toggle("active");
});

// валидность

let form = document.querySelector('.popup_form');
let inputs = document.querySelectorAll('.input');
let inputTel = document.querySelector('.input_tel');
let inputEmail = document.querySelector('.input_email');


// проверка email 

function validateEmail(email) {
   let regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return regular.test(String(email).toLowerCase());
}

// проверка tel 

function validateTel(tel) {
   let regular = /^[0-9\s]*$/;
   return regular.test(String(tel));
}

















// проверка на пустоту

form.onsubmit = function () {

   let telVal = inputTel.value;
   let emailVal = inputEmail.value;
   let emptyInputs = Array.from(inputs).filter(input => input.value === "");

   inputs.forEach(function (input) {
      if (input.value === "") {
         input.classList.add('error');
      }
      else {
         input.classList.remove('error');
      }
   })

   if (emptyInputs.length !== 0) {
      return false;
   }

   if (!validateEmail(emailVal)) {
      inputEmail.classList.add('error');
      return false;
   } else {
      inputEmail.classList.remove('error');
   }

   if (!validateTel(telVal)) {
      inputTel.classList.add('error');
      return false;
   } else {
      inputTel.classList.remove('error');
   }





   if (validateTel(telVal) & validateEmail(emailVal)) {

      console.log('rabotaet1');

      let text = 'successfuly';
      let popupWindow = document.createElement('div');
      popupWindow.classList.add('popup-window');
      popupWindow.innerText = text;


      document.body.appendChild(popupWindow);
      tabCloseBg.classList.toggle("active");
      tabCloseWindow.classList.toggle("active");


      setTimeout(
         () => {
            popupWindow.remove();
         },
         2000
      );
      return false;
   }

   setTimeout(
      () => {
         location.reload();
      },
      2000
   );

}



//message


// window.onload = function () {

//    let telVal = inputTel.value;
//    let emailVal = inputEmail.value;

//    document.querySelector('.popup_button').onclick = () => {


//    }
// }




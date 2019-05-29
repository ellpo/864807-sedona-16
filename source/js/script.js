var pageHeader = document.querySelector(".page-header");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".page-header__toggle");
var close = document.querySelector(".main-nav__close");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  navMain.classList.add("main-nav--opened");
});

close.addEventListener("click", function() {
  navMain.classList.remove("main-nav--opened");
});

var navbarEl = document.querySelector(".navbar");
var navscrol = document.querySelector(".navbar-scrolled");
var copyBtn = document.querySelector(".btn-translat");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 56) {
    navbarEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navbarEl.classList.remove("navbar-scrolled");
  }
});

copyBtn.onclick = function () {
  alert("text copyied!");
};

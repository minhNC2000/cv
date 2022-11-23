// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

// Add your javascript here

window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.zIndex = 9999;
  } else {
    navbar.classList.remove("sticky");
  }
}

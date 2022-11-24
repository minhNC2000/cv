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
  } else {
    navbar.classList.remove("sticky");
  }
}



var navHeight = navbar.offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navHeight + 5 + "px")
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
console.log(navbar);
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
